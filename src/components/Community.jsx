import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Community.css';


const Community = (channelId ,api) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get(`https://www.googleapis.com/youtube/v3/activities?part=snippet&channelId=${channelId}&maxResults=10&key=${api}&fields=items(snippet)`)
      .then(response => {
        setPosts(response.data.items);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className="community-posts">
      <h2>Latest Community Posts</h2>
      <div className="post-list">
        {posts.map(post => (
          <div className="post" key={post.snippet.publishedAt}>
            <img src={post.snippet.thumbnails.high.url} alt={post.snippet.title} />
            <h3>{post.snippet.title}</h3>
            <p>{post.snippet.publishedAt}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Community;

