import { useState, useEffect } from "react";
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
      video.snippet.thumbnails.high && (
        <div className="mx-3 carousel-item w-[320px]" key={index}>
          <Link
            className="flex flex-col bg-white rounded-lg border shadow-sm transition dark:bg-gray-900 dark:border-gray-700 hover:shadow-lg dark:shadow-slate-700/[.7]"
            to={videoUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="h-auto rounded-t-lg w-[320px]"
              src={video.snippet.thumbnails.high.url}
              alt={video.snippet.title}
            
                                    loading="lazy"
            />

            <div className="p-2 md:p-4">
              <h3 className="text-sm font-normal text-gray-800 dark:text-white">
                {video.snippet.title}
              </h3>
            </div>
          </Link>
        </div>
      )
    );
  };
 
  return (
    <>
      <h1 className="my-[4rem] text-3xl md:text-5xl dark:text-gray-100 carousel-heading">
        <center>{title1}</center>
        <p className="text-sm text-center">Swipe &#62;&#62;</p>
      </h1>
      <div className="flex overflow-x-auto mx-auto mt-5 video-carousel-container max-w-[95rem]">
        <div className="mt-5 carousel-wrapper">
          <div className="flex video-carousel">
            {videos.map((video, index) => renderCarouselItem(video, index))}
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoCarousel;
