import Naga from './components/Naga'
import VideoCarousel from '../../components/Carousel/VideoCarousel';
import ProductCarousel from '../../components/Carousel/ProductCarousel';
import {Helmet} from 'react-helmet';

function Landing() {

    const api = "AIzaSyB_pYZDfI8BSGYAsFH-vQ3hwUhvIcFDO6A";

    const list = "PLJ6oyZmMA3ZYfYFrFTlQC-Jy17alfXBi6";
    const prep = "PLJ6oyZmMA3ZbROcZa1SpWPXfjhuCBEdfQ";
    // const event = "UCU1U_hqYjzEKjG6txI3OHjQ";

    // const mem = "PLJ6oyZmMA3ZZQ-kxrMT9DyvxXKtDF6BEy"
    // const bach = "PLJ6oyZmMA3ZYPCEdVubx47J0ffb1dTiTx"

    return (

<>
<Helmet>
                <meta charSet="utf-8" />
                <title>Tuning Thoughts</title>
                <meta name="description" content="A Flower Remedies Portal that contains all information well explained with proof and evidences. Heal Thyself - Free Thyself. Come and Join with us to Experience Miracles!!!"/>
                
                <meta name="keywords" content="Tuning Thoughts,Seshathiri,Malar maruthuvam,மலர் மருத்துவம்,Flower Remedies,Flower Medicines,Cancer Treatment,S.S Alternative Medicines,Edward Bach,Bach flower remedies,Nagalingam ,Indian flower remedies,இந்திய மலர் மருத்துவம்,சாந்தம் அறக்கட்டளை,Saantham Trust ,Dr.S.Seshathiri ,Health tips,Natural Remedies,Tesla,Einstein,Alternative medicines"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            
            </Helmet>


        <div className=" md:mt-[1.5rem] mx-auto  max-w-[95rem]  px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-7   lg:gap-x-8 xl:gap-x-12 ">
                <div className="lg:col-span-3 mt-[1rem] lg:mt-[3.5rem]">
                    <h1 className="block text-6xl mt-[1rem] font-medium text-gray-800 sm:text-[4rem] md:text-[4rem] lg:text-[6rem] dark:text-white text-left ">
                        S.S Alternative Medicines
                    </h1>
                    <p className="font-large mt-4 text-xl text-gray-800  dark:text-gray-400">
                        Treat the Patient, Not the Disease
                    </p>

                    <p className="font-medium mt-1 text-lg text-gray-800 font-thin dark:text-gray-400">
                        Edward Bach
                    </p>

                    <p className="mt-4 text-xl text-gray-800  dark:text-gray-400">
                    நோயாளிகளுக்கு சிகிச்சையளிக்கவும், நோய்களுக்கு அல்ல
                    </p>

                    <p className="mt-1 text-lg text-gray-800 font-light dark:text-gray-400">
                        எட்வர்ட் பாக்

                    </p>
                </div>

                <div className="lg:col-span-4 mt-10 lg:mt-0">
                    <img className="w-full rounded-xl border-2 border-black" src="/bach.jpg" alt="Image Description" />
                </div>
            </div>


            <h1 className="my-[4rem] text-3xl md:text-5xl dark:text-gray-100 carousel-heading">
                <center>Latest Interviews</center>
                
            </h1>
            <div className= "my-[2rem] p-[1rem] mx-auto flex flex-row flex-wrap justify-around gap-4">
                <div className="w-[34] h-[15] justify-self-center rounded-lg grow">
                    <iframe className="w-full aspect-video mx-auto rounded-lg object-none" src="https://www.youtube-nocookie.com/embed/j9UamLhNLUQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div className="w-[34] h-[15] justify-self-center rounded-lg grow">
                    <iframe className="w-full aspect-video mx-auto rounded-lg object-none" src="https://www.youtube-nocookie.com/embed/F1BRgBffybM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
                        
            <Naga />
            <ProductCarousel/>
            <VideoCarousel playlistId={prep} api={api} title1={"Preparations"} />
            <VideoCarousel playlistId={list} api={api} title1={"Testimonials"} />
        </div></>
    )
}

export default Landing