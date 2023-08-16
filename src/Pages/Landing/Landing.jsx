import React from 'react'
import Naga from './components/Naga'
import VideoCarousel from '../../components/Carousel/VideoCarousel';
import ProductCarousel from '../../components/Carousel/ProductCarousel';


function Landing() {

    const api = "AIzaSyB_pYZDfI8BSGYAsFH-vQ3hwUhvIcFDO6A";

    const list = "PLJ6oyZmMA3ZYfYFrFTlQC-Jy17alfXBi6";
    const prep = "PLJ6oyZmMA3ZbROcZa1SpWPXfjhuCBEdfQ";
    const event = "UCU1U_hqYjzEKjG6txI3OHjQ";

    const mem = "PLJ6oyZmMA3ZZQ-kxrMT9DyvxXKtDF6BEy"
    const bach = "PLJ6oyZmMA3ZYPCEdVubx47J0ffb1dTiTx"

    return (
        <div class=" md:mt-[1.5rem] mx-auto  max-w-[95rem]  px-4 sm:px-6 lg:px-8">
            <div class="grid lg:grid-cols-7   lg:gap-x-8 xl:gap-x-12 ">
                <div class="lg:col-span-3 mt-[1rem] lg:mt-[3.5rem]">
                    <h1 class="block text-6xl mt-[1rem] font-medium text-gray-800 sm:text-[4rem] md:text-[4rem] lg:text-[6rem] dark:text-white text-left ">
                        S.S Alternative Medicines
                    </h1>
                    <p class="font-large mt-4 text-xl text-gray-800  dark:text-gray-400">
                        Treat the Patient, Not the Disease
                    </p>

                    <p class="font-medium mt-1 text-lg text-gray-800 font-thin dark:text-gray-400">
                        Edward Bach
                    </p>

                    <p class="mt-4 text-xl text-gray-800  dark:text-gray-400">
                    நோயாளிகளுக்கு சிகிச்சையளிக்கவும், நோய்களுக்கு அல்ல
                    </p>

                    <p class="mt-1 text-lg text-gray-800 font-light dark:text-gray-400">
                        எட்வர்ட் பாக்

                    </p>
                </div>

                <div class="lg:col-span-4 mt-10 lg:mt-0">
                    <img class="w-full rounded-xl border-2 border-black" src="/bach.jpg" alt="Image Description" />
                </div>
            </div>


            <h1 className="my-[4rem] text-3xl md:text-5xl dark:text-gray-100 carousel-heading">
                <center>Latest Interviews</center>
                
            </h1>
            <div class= "my-[2rem] p-[1rem] mx-auto flex flex-row flex-wrap justify-around gap-4">
                <div class="w-[34] h-[15] justify-self-center rounded-lg grow">
                    <iframe class="w-full aspect-video mx-auto rounded-lg object-none" src="https://www.youtube-nocookie.com/embed/j9UamLhNLUQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div class="w-[34] h-[15] justify-self-center rounded-lg grow">
                    <iframe class="w-full aspect-video mx-auto rounded-lg object-none" src="https://www.youtube-nocookie.com/embed/F1BRgBffybM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
                        
            <Naga />
            <ProductCarousel/>
            <VideoCarousel playlistId={prep} api={api} title1={"Preparations"} />
            <VideoCarousel playlistId={list} api={api} title1={"Testimonials"} />
        </div>
    )
}

export default Landing