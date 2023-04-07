import React, { useState, useEffect } from "react";
import axios from "axios";

const Channel = ({ channelId ,api,title1}) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/activities?part=snippet&channelId=${channelId}&maxResults=20&key=${api}`
        );
        setPosts(response.data.items);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPosts();
  }, [channelId]);

  return (
    <div className="video-carousel-container">
      <h2 className="carousel-heading">{title1}</h2>
      <div className="video-carousel">
        {posts.map((post) => (
          <div className="carousel-item" key={post.id}>
            <img
              src={post.snippet.thumbnails.high.url}
              alt={post.snippet.title}
            />
            <div className="carousel-caption">{post.snippet.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Channel;

