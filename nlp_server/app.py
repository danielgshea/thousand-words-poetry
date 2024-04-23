from flask import Flask, request, jsonify
from flask_cors import CORS
from poemTokenizer import extract_significant_words
import nltk
nltk.download('punkt')

app = Flask(__name__)
CORS(app, origins=['http://localhost:3000']) # so I can access this program from where I'm running my react app

@app.route('/analyze-poem', methods=['POST'])
def analyze_poem():
    data = request.get_json()
    poem = data.get('poem', '')
    significant_words = extract_significant_words(poem)
    return jsonify({'significant_words': significant_words})

if __name__ == '__main__':
    app.run(debug=True)
