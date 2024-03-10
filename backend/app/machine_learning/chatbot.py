from flask import Flask, render_template, request, jsonify
from flask_cors import cross_origin, CORS


import random
import json
import pickle
import numpy as np
import nltk

from nltk.stem import WordNetLemmatizer
from keras.models import load_model

app = Flask(__name__)
CORS(app)

lemmatizer = WordNetLemmatizer()
intents = json.loads(open('../db/pet_intents.json').read())

words = pickle.load(open('words.pkl', 'rb'))
classes = pickle.load(open('classes.pkl', 'rb'))
model = load_model('chatbot_model.h5')


def clean_up_sentence(sentence):
    sentence_words = nltk.word_tokenize(sentence)
    sentence_words = [lemmatizer.lemmatize(word) for word in sentence_words]
    return sentence_words


def bag_of_words(sentence):
    sentence_words = clean_up_sentence(sentence)
    bag = [0] * len(words)
    for w in sentence_words:
        for i, word in enumerate(words):
            if word == w:
                bag[i] = 1
    return np.array(bag)


def predict_class(sentence):
    bow = bag_of_words(sentence)
    res = model.predict(np.array([bow]))[0]
    ERROR_THRESHOLD = 0.25
    results = [[i, r] for i, r in enumerate(res) if r > ERROR_THRESHOLD]

    results.sort(key=lambda x: x[1], reverse=True)
    return_list = []
    for r in results:
        return_list.append({'intent': classes[r[0]], 'probability': str(r[1])})
    return return_list


def get_response(intents_list, intents_json):
    tag = intents_list[0]['intent']
    list_of_intents = intents_json['intents']
    for i in list_of_intents:
        if i['tag'] == tag:
            result = random.choice(i['responses'])
            break
    return result


# Route to serve the HTML file
"""
@app.route('/')
def index():
    return render_template('index.html')
"""

# Route to handle user's message and return response
'''
@app.route('/get_response', methods=['POST'])
def get_bot_response():
    user_message = request.json['message']
    bot_response = chat_response(user_message)
    return jsonify({'response': bot_response})
'''

# Route to handle user's message from frontend
@app.route('/get_bot_response', methods=['POST'])
def get_bot_response():
    user_message = request.json['message']
    bot_response = chat_response(user_message)
    return jsonify({'response': bot_response})


# Function to process user's message and get response from the bot
def chat_response(message):
    intents = json.loads(open('../db/pet_intents.json').read())
    ints = predict_class(message)
    res = get_response(ints, intents)
    return res


if __name__ == '__main__':
    app.run(debug=True)
