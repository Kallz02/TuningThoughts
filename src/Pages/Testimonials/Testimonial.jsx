import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

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

        console.log(
            video.snippet.thumbnails.high
                ? video.snippet.thumbnails.high.url
                : "Default URL"
        );

        return (
            video.snippet.thumbnails.high && (
                <div className="my-2 mx-3 carousel-item w-[320px]" key={index}>
                    <a
                        className="flex flex-col bg-white rounded-lg border shadow-sm transition dark:bg-gray-900 dark:border-gray-700 hover:shadow-lg dark:shadow-slate-700/[.7]"
                        href={videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            className="h-auto rounded-t-lg w-[320px]"
                            src={video.snippet.thumbnails.high.url}
                            alt={video.snippet.title}
                        />
                        <div className="p-2 md:p-4">
                            <h3 className="text-sm font-semibold text-gray-800 dark:text-white">
                                {video.snippet.title}
                            </h3>
                        </div>
                    </a>
                </div>
            )
        );
    };

    return (
        <>
            <h1 className="my-6 font-light dark:text-gray-100 carousel-heading text-[2.5rem] md:text-[4rem]">
                <center>Testimonials</center>
            </h1>
            <div className="flex flex-wrap justify-around mx-auto mt-5 video-carousel-container max-w-[90rem]">
                <div className="mt-5 carousel-wrapper">
                    <div className="flex flex-wrap justify-around video-carousel">
                        {videos.map((video, index) => renderCarouselItem(video, index))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Testimonial;
