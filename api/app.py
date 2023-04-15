from flask import Flask, jsonify
import instaloader

app = Flask(__name__)

@app.route('/instagram/posts/<username>')
def get_instagram_posts(username):
    try:
        L = instaloader.Instaloader()
        profile = instaloader.Profile.from_username(L.context, username)
        posts = []
        for post in profile.get_posts():
            # Get the URL for the post's preview image
            preview_image_url = post.url + 'media/?size=m'
            
            posts.append({
                'id': post.shortcode,
                'url': f'https://www.instagram.com/p/{post.shortcode}/',
                'caption': post.caption,
                'likes': post.likes,
                'comments': post.comments,
                'preview_image_url': preview_image_url
            })
        return jsonify(posts)
    except instaloader.exceptions.ProfileNotExistsException:
        return jsonify({'error': f'Profile {username} does not exist'})
    except:
        return jsonify({'error': 'An error occurred while processing the request'})

if __name__ == '__main__':
    app.run()

