from flask import Flask, request, jsonify, session
from flask_cors import CORS
import sqlite3
import hashlib

app = Flask(__name__)
CORS(app)

# Set the secret key for sessions
app.secret_key = b'_5#y2L"F4Q8z\n\xec]/'

# Function to hash the password
def hash_password(password):
    return hashlib.sha256(password.encode()).hexdigest()

# Function to verify password
def verify_password(hashed_password, password):
    return hashed_password == hash_password(password)

# Create users table if not exists
def create_users_table():
    conn = sqlite3.connect('database.db')
    cursor = conn.cursor()
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT NOT NULL,
            email TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL,
            pet_id INTEGER DEFAULT NULL,
            FOREIGN KEY (pet_id) REFERENCES pets(id)
        )
    ''')
    conn.commit()
    conn.close()

# Initialize the users table
create_users_table()

# Function to create pets table if not exists
def create_pets_table():
    conn = sqlite3.connect('database.db')
    cursor = conn.cursor()
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS pets (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            pet_name TEXT NOT NULL,
            pet_age INTEGER NOT NULL,
            pet_type TEXT NOT NULL,
            pet_breed TEXT,
            agreement TEXT NOT NULL
        )
    ''')
    conn.commit()
    conn.close()

# Initialize the pets table
create_pets_table()

# Route to save pet information for a user
@app.route('/savepet', methods=['POST'])
def save_pet():
    if 'user_id' not in session:
        return jsonify({'error': 'Unauthorized access'}), 401
    
    data = request.json
    pet_name = data['pet_name']
    pet_age = data['pet_age']
    pet_type = data['pet_type']
    pet_breed = data.get('pet_breed', '')
    agreement = data['agreement']

    conn = sqlite3.connect('database.db')
    cursor = conn.cursor()

    cursor.execute('INSERT INTO pets (pet_name, pet_age, pet_type, pet_breed, agreement) VALUES (?, ?, ?, ?, ?)', 
                   (pet_name, pet_age, pet_type, pet_breed, agreement))
    pet_id = cursor.lastrowid

    # Update user's pet_id
    cursor.execute('UPDATE users SET pet_id=? WHERE id=?', (pet_id, session['user_id']))

    conn.commit()
    conn.close()

    return jsonify({'message': 'Pet information saved successfully', 'pet_id': pet_id}), 200

# Route to fetch pet information
@app.route('/getpet', methods=['GET'])
def get_pet():
    if 'user_id' not in session:
        return jsonify({'error': 'Unauthorized access'}), 401

    conn = sqlite3.connect('database.db')
    cursor = conn.cursor()

    cursor.execute('SELECT pet_name, pet_age, pet_type, pet_breed FROM pets WHERE id=(SELECT pet_id FROM users WHERE id=?)', (session['user_id'],))
    pet_info = cursor.fetchone()

    conn.close()

    if pet_info:
        pet_name, pet_age, pet_type, pet_breed = pet_info
        return jsonify({
            'petName': pet_name,
            'petAge': pet_age,
            'petType': pet_type,
            'petBreed': pet_breed
        })
    else:
        return jsonify({'error': 'No pet information found'}), 404

# Register
@app.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    username = data['username']
    email = data['email']
    password = data['password']

    # Hash the password before storing it
    hashed_password = hash_password(password)

    conn = sqlite3.connect('database.db')
    cursor = conn.cursor()

    # Check if the email is already registered
    cursor.execute('SELECT * FROM users WHERE email=?', (email,))
    existing_user = cursor.fetchone()

    if existing_user:
        return jsonify({'error': 'Email already exists'}), 400

    # Insert the new user into the database
    cursor.execute('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', (username, email, hashed_password))
    user_id = cursor.lastrowid

    conn.commit()
    conn.close()

    return jsonify({'message': 'Registration successful', 'user_id': user_id}), 201


# Login route
# Login route
@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data['email']
    password = data['password']

    conn = sqlite3.connect('database.db')
    cursor = conn.cursor()

    cursor.execute('SELECT * FROM users WHERE email=?', (email,))
    user = cursor.fetchone()

    if user:
        if verify_password(user[3], password):
            pet_id = user[4]
            if pet_id is not None:  # Check if pet_id is not None
                cursor.execute('SELECT pet_name, pet_age, pet_type, pet_breed FROM pets WHERE id=?', (pet_id,))
                pet_info = cursor.fetchone()
                if pet_info:
                    pet_name, pet_age, pet_type, pet_breed = pet_info
                    return jsonify({'message': 'Login successful', 'pet_info': {
                        'petName': pet_name,
                        'petAge': pet_age,
                        'petType': pet_type,
                        'petBreed': pet_breed
                    }}), 200
                else:
                    return jsonify({'error': 'Pet information not found'}), 404
            else:
                return jsonify({'message': 'Login successful', 'pet_info': None}), 200
        else:
            return jsonify({'error': 'Incorrect password'}), 401
    else:
        return jsonify({'error': 'User not found'}), 404


@app.route('/logout', methods=['POST'])
def logout():
    # Clear session data
    session.clear()
    # Optionally, perform any other necessary cleanup
    return jsonify({'message': 'Logout successful'}), 200

if __name__ == '__main__':
    app.run(debug=True, port=5000)
