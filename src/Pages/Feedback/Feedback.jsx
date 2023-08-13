import React from 'react';
import Feedbackgallery from '../../components/FeedbackGallery/Feedbackgallery';

function Feedback(){
    return (
        <>
        <h1 className="carousel-heading text-[2.5rem] md:text-[4rem] my-6 font-light dark:text-gray-100">
                <center>Feedback</center>
        </h1>
        
        <Feedbackgallery/>
              
        </>
    );
}

export default Feedback