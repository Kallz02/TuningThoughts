import React, { useState, useEffect } from "react";
import axios from "axios";
import "./VideoCarousel.css";

const VideoCarousel = ({ playlistId ,api,title1}) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${playlistId}&key=${api}`
        );

        setVideos(response.data.items);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [playlistId]);

  const renderCarouselItem = (video, index) => {
    const videoUrl = `https://www.youtube.com/watch?v=${video.snippet.resourceId.videoId}`;

    return (
      <div className="carousel-item" key={index}>
        <a href={videoUrl} target="_blank" rel="noopener noreferrer">
          <img
            src={video.snippet.thumbnails.high.url}
            alt={video.snippet.title}
          />
          <div className="carousel-caption">{video.snippet.title}</div>
        </a>
      </div>
    );
  };

  return (
    <div className="video-carousel-container">
      <h1 className="carousel-heading">{title1}</h1>
      <div className="video-carousel">
        {videos.map((video, index) => renderCarouselItem(video, index))}
      </div>
    </div>
  );
};

export default VideoCarousel;
