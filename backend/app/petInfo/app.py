from flask import Flask, request, jsonify
from flask_cors import CORS
import sqlite3

app = Flask(__name__)
CORS(app)

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

# save_pet function
def save_pet(data):
    conn = sqlite3.connect('database.db')
    cursor = conn.cursor()

    # Insert the pet information into the database
    cursor.execute('INSERT INTO pets (pet_name, pet_age, pet_type, pet_breed, agreement) VALUES (?, ?, ?, ?, ?)', 
                   (data['pet_name'], data['pet_age'], data['pet_type'], data.get('pet_breed', ''), data['agreement']))
    pet_id = cursor.lastrowid

    conn.commit()
    conn.close()

    return pet_id

# Route to fetch pet information
@app.route('/getpet', methods=['GET'])
def get_pet():
    conn = sqlite3.connect('database.db')
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
