
import Feedbackgallery from '../../components/FeedbackGallery/Feedbackgallery';

import {Helmet} from 'react-helmet';
function Feedback(){
    return (
        <>

<Helmet>
                <meta charSet="utf-8" />
                <title>Feedback | Tuning Thoughts</title>
                
                <meta name="description" content="A Flower Remedies Portal that contains all information well explained with proof and evidences. Heal Thyself - Free Thyself. Come and Join with us to Experience Miracles!!!"/>
                <meta name="keywords" content="Tuning Thoughts,Seshathiri,Malar maruthuvam,மலர் மருத்துவம்,Flower Remedies,Flower Medicines,Cancer Treatment,S.S Alternative Medicines,Edward Bach,Bach flower remedies,Nagalingam ,Indian flower remedies,இந்திய மலர் மருத்துவம்,சாந்தம் அறக்கட்டளை,Saantham Trust ,Dr.S.Seshathiri ,Health tips,Natural Remedies,Tesla,Einstein,Alternative medicines"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            
            </Helmet>
          
        <h1 className="carousel-heading text-[2.5rem] md:text-[4rem] my-6 font-light dark:text-gray-100">
                <center>Feedback</center>
        </h1>
        
        <Feedbackgallery/>
              
        </>
    );
}

export default Feedback