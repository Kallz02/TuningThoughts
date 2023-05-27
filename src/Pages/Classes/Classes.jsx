import React from 'react'
import Cards from '../Events/Cards'
import VideoCarousel from '../../components/Carousel/VideoCarousel'

function Classes() {

    const api = "AIzaSyB_pYZDfI8BSGYAsFH-vQ3hwUhvIcFDO6A";

    const mem = "PLJ6oyZmMA3ZZQ-kxrMT9DyvxXKtDF6BEy"
    const bach = "PLJ6oyZmMA3ZYPCEdVubx47J0ffb1dTiTx"
    return (
        <div className='max-w-[75rem] mx-6 md:mx-auto'>
            <div className=" prose mx-auto max-w-[75rem] flex flex-col items-center">
                <h1 className='font-normal my-6 md:my-8'>Upcoming Classes</h1>
                <h3 className='dark:text-gray-200 font-normal px-5'>
                    Click On Contact For More!
                </h3>
                <Cards />


            </div>

            <VideoCarousel playlistId={mem} api={api} title1={"Recorded Classes"} />
            <VideoCarousel playlistId={bach} api={api} title1={"Previous Classes"} />
        </div>
    )
}

export default Classes