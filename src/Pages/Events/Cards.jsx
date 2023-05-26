import React, { useEffect, useState } from 'react';

const CardLoop = () => {
    const [data, setData] = useState([]);
    const [visibleCards, setVisibleCards] = useState(5);

    useEffect(() => {
        // Fetch the JSON data from the server
        fetch('/events/data.json') // Update the fetch URL to point to the correct location
            .then((response) => response.json())
            .then((jsonData) => {
                setData(jsonData.reverse());
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const handleLoadMore = () => {
        setVisibleCards((prevVisibleCards) => prevVisibleCards + 4);
    };

    return (
        <div className='max-w-[75rem] mx-auto'>
            <div className="flex justify-around flex-wrap text-center">
                {data.slice(0, visibleCards).map((item, index) => (
                    <div key={index} className="card w-[350px] ">
                        <img src={`/events/${item.image}`} alt={`Image ${index + 1}`} className=' w-[350px] h-auto rounded-lg ' />
                        <div className="content text-gray-800 font-normal dark:text-white">{item.content}</div>
                    </div>
                ))}
            </div>
            {visibleCards < data.length && (
                <center>
                    <button onClick={handleLoadMore} className='text-white bg-black px-4 mt-5 py-2 border-2 rounded-full'>Load More</button>
                </center>
            )}
        </div>
    );
};

export default CardLoop;
