import React from 'react'
import Cards from '../Events/Cards'
import VideoCarousel from '../../components/Carousel/VideoCarousel'
import {Helmet} from 'react-helmet';
function Classes() {

    const api = "AIzaSyB_pYZDfI8BSGYAsFH-vQ3hwUhvIcFDO6A";

    const mem = "PLJ6oyZmMA3ZZQ-kxrMT9DyvxXKtDF6BEy"
    const bach = "PLJ6oyZmMA3ZYPCEdVubx47J0ffb1dTiTx"
    return (

        <>
        
        <Helmet>
                <meta charSet="utf-8" />
                <title>Classes | Tuning Thoughts</title>
                
                <meta name="description" content="A Flower Remedies Portal that contains all information well explained with proof and evidences. Heal Thyself - Free Thyself. Come and Join with us to Experience Miracles!!!"/>
                <meta name="keywords" content="Tuning Thoughts,Seshathiri,Malar maruthuvam,மலர் மருத்துவம்,Flower Remedies,Flower Medicines,Cancer Treatment,S.S Alternative Medicines,Edward Bach,Bach flower remedies,Nagalingam ,Indian flower remedies,இந்திய மலர் மருத்துவம்,சாந்தம் அறக்கட்டளை,Saantham Trust ,Dr.S.Seshathiri ,Health tips,Natural Remedies,Tesla,Einstein,Alternative medicines"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            
            </Helmet>
       
        <div className='max-w-[75rem] mx-6 md:mx-auto'>
            <h1 className="font-normal text-[2.5rem] md:text-[3.5rem] dark:text-gray-200">Contact Office</h1>
            <br></br>
            <h3 className='dark:text-gray-200 font-normal text-center'>  GST number : 33AEYFS2858E1ZJ<br>
            </br><br>
            </br>Company name : S.S Alternative Medicines<br>
            </br><br>
            </br>Address: <br>
            </br>130/38T, polytechnic road,<br>
            </br>Gandhi Nagar,<br>
            </br>Gudiyatham,<br>
            </br>Vellore-632602<br>
            </br><br>
            </br>8838793089<br>
            </br>
            <a href="mailto:bachflowerremedies369@gmail.com?subject=Appointment%20Needed&body=Hi,%20Just%20visited%20your%20website!!%20Looking%20for%20an%20appointement">bachflowerremedies369@gmail.com</a>
            <br></br>
            <br></br>
            </h3>
            <VideoCarousel playlistId={mem} api={api} title1={"Recorded Classes"} />
            <VideoCarousel playlistId={bach} api={api} title1={"Previous Classes"} />
        </div>
        </> 
    )
}

export default Classes