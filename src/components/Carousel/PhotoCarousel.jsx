import React, { useEffect, useState } from "react";

const PhotoCarousel = ({ folderName }) => {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        const fetchPhotos = async () => {
            try {
                const response = await fetch(`/public/${folderName}`);
                const photoList = await response.json();
                setPhotos(photoList);
            } catch (error) {
                console.error(error);
            }
        };

        fetchPhotos();
    }, [folderName]);

    const renderCarouselItem = (photo, index) => {
        return (
            <div className="carousel-item w-[320px] mx-3" key={index}>
                <div className="flex flex-col bg-white border shadow-sm rounded-lg hover:shadow-lg transition dark:bg-gray-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                    <img
                        className="w-[320px] h-auto rounded-t-lg"
                        src={`/${folderName}/${photo.filename}`}
                        alt="myPhoto"
                    />
                </div>
            </div>
        );
    };

    return (
        <>
            <div className="photo-carousel-container mt-5 flex overflow-x-auto max-w-[95rem] mx-auto">
                <div className="carousel-wrapper mt-5">
                    <div className="photo-carousel flex">
                        {photos.map((photo, index) => renderCarouselItem(photo, index))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default PhotoCarousel;



