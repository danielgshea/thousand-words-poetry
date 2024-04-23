from flask import Flask, request, jsonify
import requests
from bs4 import BeautifulSoup

app = Flask(__name__)

def get_image_links(query, num_links=10):
    image_links = []
    try:
        url = f"https://www.google.com/search?q={query}&tbm=isch"
        headers = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3"}
        response = requests.get(url, headers=headers)
        soup = BeautifulSoup(response.text, 'html.parser')
        img_tags = soup.find_all('img', class_='t0fcAb')
        for img_tag in img_tags[:num_links]:
            image_links.append(img_tag['src'])
    except Exception as e:
        print("An error occurred:", str(e))
    return image_links

@app.route('/get_image_urls', methods=['POST'])
def get_image_urls():
    data = request.get_json()
    query = data.get('query')
    num_links = data.get('num_links', 10)
    image_links = get_image_links(query, num_links)
    return jsonify({'image_urls': image_links})

if __name__ == '__main__':
    app.run(debug=True)
