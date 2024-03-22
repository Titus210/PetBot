from flask import Flask, request, jsonify
from flask_cors import CORS
import sqlite3
import hashlib

app = Flask(__name__)
CORS(app)

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
            password TEXT NOT NULL
        )
    ''')
    conn.commit()
    conn.close()

# Initialize the users table
create_users_table()

# Register route
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
    conn.commit()

    return jsonify({'message': 'Registration successful'}), 201

# Login route
@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data['email']
    password = data['password']

    conn = sqlite3.connect('database.db')
    cursor = conn.cursor()

    # Check if the user exists
    cursor.execute('SELECT * FROM users WHERE email=?', (email,))
    user = cursor.fetchone()

    if user:
        # Verify the password
        if verify_password(user[3], password):
            # User authenticated successfully
            return jsonify({'message': 'Login successful'}), 200
        else:
            # Password incorrect
            return jsonify({'error': 'Incorrect password'}), 401
    else:
        # User does not exist
        return jsonify({'error': 'User not found'}), 404

if __name__ == '__main__':
    app.run(debug=True)
