
const PhotoCarousel = () => {
    return (
        <>
            <div className=" overflow-x-auto md:max-w-[75rem] mt-5 flex w-full mx-auto ">
                <div className="carousel-wrapper mt-5 ">
                    <div className="photo-carousel flex">
                    <div
                            className="carousel-item w-[320px] mx-3"
                            style={{ cursor: "pointer" }}
                        >
                            <div className="flex flex-col bg-white border shadow-sm rounded-lg hover:shadow-lg transition dark:bg-gray-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                                <img
                                    className="w-[320px] h-auto rounded-t-lg"
                                    src="/myphoto/5.jpeg"
                                    loading="lazy"
                                    alt="myPhoto"
                                />
                            </div>
                        </div>
                        <div
                            className="carousel-item w-[500px] mx-3"
                            style={{ cursor: "pointer" }}
                        >
                            <div className="flex flex-col bg-white border shadow-sm rounded-lg hover:shadow-lg transition dark:bg-gray-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                                <img
                                    className="w-[500px] object-cover "
                                    src="/myphoto/1.jpeg"

                                    loading="lazy"
                                    alt="myPhoto"
                                />
                            </div>
                        </div>

                        <div
                            className="carousel-item w-[500px] mx-3"
                            style={{ cursor: "pointer" }}
                        >
                            <div className="flex flex-col bg-white border shadow-sm rounded-lg hover:shadow-lg transition dark:bg-gray-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                                <img
                                    className="w-[500px] h-auto "
                                    src="/myphoto/2.jpeg"

                                    loading="lazy"
                                    alt="myPhoto"
                                />
                            </div>
                        </div>

                        <div
                            className="carousel-item w-[500px] mx-3"
                            style={{ cursor: "pointer" }}
                        >
                            <div className="flex flex-col bg-white border shadow-sm rounded-lg hover:shadow-lg transition dark:bg-gray-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                                <img
                                    className="w-[500px] h-auto "
                                    src="/myphoto/3.jpeg"

                                    loading="lazy"
                                    alt="myPhoto"
                                />
                            </div>
                        </div>


                        <div
                            className="carousel-item w-[500px] mx-3"
                            style={{ cursor: "pointer" }}
                        >
                            <div className="flex flex-col bg-white border shadow-sm rounded-lg hover:shadow-lg transition dark:bg-gray-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                                <img
                                    className="w-[500px] h-auto "
                                    src="/myphoto/4.jpeg"

                                    loading="lazy"
                                    alt="myPhoto"
                                />
                            </div>
                        </div>


                      

                    </div>
                </div>
            </div>
        </>
    );
};

export default PhotoCarousel;





