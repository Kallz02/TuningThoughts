import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Community= (channelId,api) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://www.googleapis.com/youtube/v3/activities', {
      params: {
        part: 'snippet,contentDetails',
        channelId: channelId,
        maxResults: 10,
        key: api,
      }
    })
    .then(response => {
      setPosts(response.data.items);
    })
    .catch(error => {
      console.log(error);
    });
  }, []);

  return (
    <div className="scrollable-container">
      {posts.map(post => (
        <div className="post" key={post.id}>
          <img src={post.snippet.thumbnails.default.url} alt={post.snippet.title} />
          <div className="title">{post.snippet.title}</div>
          <div className="description">{post.snippet.description}</div>
        </div>
      ))}
    </div>
  );
};

export default Community;
