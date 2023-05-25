import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';

function Testimonial() {
    const api = "AIzaSyB_pYZDfI8BSGYAsFH-vQ3hwUhvIcFDO6A";
    const list = "PLJ6oyZmMA3ZYfYFrFTlQC-Jy17alfXBi6";
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${list}&key=${api}`
                );

                setVideos(response.data.items);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [list]);

    const renderCarouselItem = (video, index) => {
        const videoUrl = `https://www.youtube.com/watch?v=${video.snippet.resourceId.videoId}`;

        return (
            <div className="carousel-item w-[320px] mx-3 my-2" key={index}>
                <a
                    className="flex flex-col bg-white border shadow-sm rounded-lg hover:shadow-lg transition dark:bg-gray-900 dark:border-gray-700 dark:shadow-slate-700/[.7]"
                    href={videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        className="w-[320px] h-auto rounded-t-lg"
                        src={video.snippet.thumbnails.high.url}
                        alt={video.snippet.title}
                    />
                    <div className="p-2 md:p-4">
                        <h3 className="text-sm text-gray-800 font-semibold dark:text-white">
                            {video.snippet.title}
                        </h3>
                    </div>
                </a>
            </div>
        );
    };

    return (
        <>


            <h1 className="carousel-heading text-[2.5rem] md:text-[4rem] my-6 font-light dark:text-gray-100">
                <center>Testimonials</center>
            </h1>
            <div className="video-carousel-container mt-5 flex flex-wrap justify-around  max-w-[90rem] mx-auto">
                <div className="carousel-wrapper mt-5">
                    <div className="video-carousel  flex flex-wrap justify-around ">
                        {videos.map((video, index) => renderCarouselItem(video, index))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Testimonial