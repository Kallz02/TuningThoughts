from flask import Flask, jsonify
from bs4 import BeautifulSoup
import requests

app = Flask(__name__)

@app.route('/youtube/<channel_id>')
def get_youtube_community_posts(channel_id):
    # send a GET request to the YouTube channel's community tab page
    url = f'https://www.youtube.com/channel/{channel_id}/community'
    response = requests.get(url)

    # create a BeautifulSoup object to parse the HTML content of the page
    soup = BeautifulSoup(response.content, 'html.parser')

    # find all of the community posts on the page
    post_elements = soup.find_all('div', class_='CtRVGd')

    # create a list of post dictionaries
    posts = []
    for post_element in post_elements:
        post_dict = {
            'id': post_element.get('data-item-id'),
            'title': post_element.find('h3', class_='pGxqz').text,
            'body': post_element.find('div', class_='CtRVGd-az-Xb').text.strip(),
            'timestamp': post_element.find('a', class_='z1asCe').text
        }
        posts.append(post_dict)

    # return the posts as JSON data
    return jsonify(posts)
if __name__ == '__main__':
    app.run(debug=True)