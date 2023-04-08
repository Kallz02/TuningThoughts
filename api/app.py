from flask import request,Flask, jsonify
import instaloader

app = Flask(__name__)
@app.route('/posts/instagram')
def get_instagram_posts():
    # Fetch the Instagram account name from the request parameters
    account = request.args.get('account')

    # Create an Instaloader instance
    L = instaloader.Instaloader()

    # Fetch the profile information for the specified account
    profile = instaloader.Profile.from_username(L.context, account)

    # Create an empty list to store the post data
    posts = []

    # Iterate through the posts and extract the relevant data
    for post in profile.get_posts():
        # Check if the post is a video
        is_video = post.is_video

        # Get the caption for the post
        caption = post.caption

        # Check if the caption is None
        if caption is not None:
            # Clean up the caption text
            caption_text = caption.strip().replace('\n', ' ')
        else:
            caption_text = None

        # Get the URL for the post's image or video
        url = post.url

        # Add the post data to the list
        posts.append({
            'is_video': is_video,
            'caption': caption_text,
            'url': url
        })

    # Return the post data as a JSON response
    return jsonify(posts)
if __name__ == '__main__':
    app.run(debug=True)
