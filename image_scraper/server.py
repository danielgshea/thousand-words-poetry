from flask import Flask, request, jsonify
from flask_cors import CORS
from image_scraper import get_urls
import nltk
nltk.download('punkt')

app = Flask(__name__)
CORS(app, origins=['http://localhost:3000'])

@app.route('/img_urls', methods=['POST'])
def img_urls():
    data = request.get_json()
    query = data.get('query', '')
    img_urls = get_urls(query)
    response_data = {'img_urls': img_urls}
    return jsonify(response_data)

if __name__ == '__main__':
    app.run(debug=True, host='localhost', port=5000)
