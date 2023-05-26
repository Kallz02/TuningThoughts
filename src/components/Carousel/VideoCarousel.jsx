import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import "./VideoCarousel.css";

const VideoCarousel = ({ playlistId, api, title1 }) => {
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
      <div className="carousel-item w-[320px] mx-3" key={index}>
        <Link
          className="flex flex-col bg-white border shadow-sm rounded-lg hover:shadow-lg transition dark:bg-gray-900 dark:border-gray-700 dark:shadow-slate-700/[.7]"
          to={videoUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="w-[320px] h-auto rounded-t-lg"
            src={video.snippet.thumbnails.high.url}
            alt={video.snippet.title}
          />
          <div className="p-2 md:p-4">
            <h3 className="text-sm text-gray-800 font-normal dark:text-white">
              {video.snippet.title}
            </h3>
          </div>
        </Link>
      </div>
    );
  };

  return (
    <>


      <h1 className="carousel-heading text-3xl md:text-5xl my-5 dark:text-gray-100">
        <center>{title1}</center>
      </h1>
      <div className="video-carousel-container mt-5 flex  overflow-x-auto  max-w-[95rem] mx-auto">
        <div className="carousel-wrapper mt-5">
          <div className="video-carousel flex ">
            {videos.map((video, index) => renderCarouselItem(video, index))}
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoCarousel;
