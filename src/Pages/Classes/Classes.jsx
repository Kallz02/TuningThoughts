import React from 'react'
import Cards from '../Events/Cards'

function Classes() {
    return (
        <div>
            <div className=" prose mx-auto max-w-[75rem] flex flex-col items-center">
                <h1 className='font-normal'>Upcoming Classes</h1>
                <h3 className='dark:text-gray-200 font-normal px-5'>
                    Will be updated in our events and YouTube or ask them to WhatsApp office for
                    further details
                </h3>
                <Cards />


            </div>

        </div>
    )
}

export default Classes