from flask import Flask, request, jsonify
from flask_cors import CORS
import sqlite3

app = Flask(__name__)
CORS(app)

# Function to create pets table if not exists
def create_pets_table():
    conn = sqlite3.connect('../database/database.db')
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

# Route to save pet information
@app.route('/savepet', methods=['POST'])
def save_pet():
    data = request.get_json()
    pet_name = data['pet_name']
    pet_age = data['pet_age']
    pet_type = data['pet_type']
    pet_breed = data.get('pet_breed', '')  # Optional field, may not be present in the request
    agreement = data['agreement']

    conn = sqlite3.connect('../database/database.db')
    cursor = conn.cursor()

    # Insert the pet information into the database
    cursor.execute('INSERT INTO pets (pet_name, pet_age, pet_type, pet_breed, agreement) VALUES (?, ?, ?, ?, ?)', 
                   (pet_name, pet_age, pet_type, pet_breed, agreement))
    conn.commit()
    conn.close()

    return jsonify({'message': 'Pet information saved successfully'}), 201

# Route to fetch pet information
@app.route('/getpet', methods=['GET'])
def get_pet():
    conn = sqlite3.connect('../database/database.db')
    cursor = conn.cursor()

    cursor.execute('SELECT pet_name, pet_age, pet_type, pet_breed FROM pets ORDER BY id DESC LIMIT 1')
    pet_info = cursor.fetchone()

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

if __name__ == '__main__':
    app.run(debug=True, port=5001)
