
const PhotoCarousel2 = () => {

    return (
        <>
            <div className="photo-carousel-container overflow-x-auto mt-5 flex max-w-[75rem] mx-auto ">
                <div className="carousel-wrapper mt-5 ">
                    <div className="photo-carousel flex">

                        <div
                            className="carousel-item w-auto mx-3"
                            style={{ cursor: "pointer" }}
                        >
                            <div className="flex flex-col bg-white border shadow-sm rounded-lg hover:shadow-lg transition dark:bg-gray-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                                <img
                                    className="w-auto h-[224px]"
                                    src="/accreditation/1.jpg"

                                    alt="accreditation"
                                />
                            </div>
                        </div>

                        <div
                            className="carousel-item w-auto mx-3"
                            style={{ cursor: "pointer" }}
                        >
                            <div className="flex flex-col bg-white border shadow-sm rounded-lg hover:shadow-lg transition dark:bg-gray-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                                <img
                                    className="w-auto h-[224px] "
                                    src="/accreditation/2.jpg"

                                    alt="accreditation"
                                />
                            </div>
                        </div>

                        <div
                            className="carousel-item w-auto mx-3"
                            style={{ cursor: "pointer" }}
                        >
                            <div className="flex flex-col bg-white border shadow-sm rounded-lg hover:shadow-lg transition dark:bg-gray-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                                <img
                                    className="w-auto h-[224px] "
                                    src="/accreditation/3.jpg"

                                    alt="accreditation"
                                />
                            </div>
                        </div>


                        <div
                            className="carousel-item w-auto mx-3"
                            style={{ cursor: "pointer" }}
                        >
                            <div className="flex flex-col bg-white border shadow-sm rounded-lg hover:shadow-lg transition dark:bg-gray-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                                <img
                                    className="w-auto h-[224px] "
                                    src="/accreditation/4.jpg"

                                    alt="accreditation"
                                />
                            </div>
                        </div>


                        {/* <div
                            className="carousel-item w-[320px] mx-3"
                            style={{ cursor: "pointer" }}
                        >
                            <div className="flex flex-col bg-white border shadow-sm rounded-lg hover:shadow-lg transition dark:bg-gray-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                                <img
                                    className="w-[320px] h-[224px] rounded-t-lg"
                                    src="/accreditation/5.jpg"

                                    alt="accreditation"
                                />
                            </div>
                        </div> */}

                    </div>
                </div>
            </div>
        </>
    );
};

export default PhotoCarousel2;





