import React from 'react'
import Cards from './Cards'
import './Events.css'


function Events() {
    return (
        <div className='flex flex-col items-center justify-center'>
            <div className='prose prose-li:list-decimal max-w-[75rem] mx-[1.5rem]'>
                <h1 className="font-normal text-[2.5rem] md:text-[3.5rem] dark:text-gray-200">Events</h1>
                <p className="dark:text-gray-200 mx-[1rem]">
                    <h3 className='dark:text-gray-200 font-normal text-center'>  Direct Consultation available on our different branches all over India.
                    </h3>
                    <Cards />
                    <br />
                    <h3 className='dark:text-gray-200 font-normal text-center'>  Direct Consultation available on these locations :
                    </h3>
                    <ol className='text-[1.2rem] text-center'>
                        <li>Gudiyatham - Vellore  குடியாத்தம் - வேலூர்
                        </li>
                        <li>Chennai சென்னை
                        </li>
                        <li>Bangalore பெங்களூர்
                        </li>
                        <li>Thiruvanamalai  திருவண்ணாமலை</li>
                        <li>Coimbatore  கோயம்புத்தூர்</li>
                    </ol>
                    <br />
                    <p className='text-center'>
                        Both online and offline Consultation available for 365 days dedicated to our people.
                    </p>

                    <br />
                    
                </p>

            </div>
        </div>
    )
}

export default Events