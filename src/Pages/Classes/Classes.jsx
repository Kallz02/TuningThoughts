import React from 'react'
import Cards from '../Events/Cards'
import VideoCarousel from '../../components/Carousel/VideoCarousel'

function Classes() {

    const api = "AIzaSyB_pYZDfI8BSGYAsFH-vQ3hwUhvIcFDO6A";

    const mem = "PLJ6oyZmMA3ZZQ-kxrMT9DyvxXKtDF6BEy"
    const bach = "PLJ6oyZmMA3ZYPCEdVubx47J0ffb1dTiTx"
    return (
        <div className='max-w-[75rem] mx-6 md:mx-auto'>
            <h1 className="font-normal text-[2.5rem] md:text-[3.5rem] dark:text-gray-200">Contact Office</h1>
            <br></br>
            <h3 className='dark:text-gray-200 font-normal text-center'>  GST number : 33AEYFS2858E1ZJ<br>
            </br>IEC: AEYFS2858E<br>
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
            </br>bachflowerremedies369@gmail.com <br></br>
            {/* </br><a href="bachflowerremedies369@gmail.com">bachflowerremedies369@gmail.com</a>
            <br></br> */}
            </h3>
            <VideoCarousel playlistId={mem} api={api} title1={"Recorded Classes"} />
            <VideoCarousel playlistId={bach} api={api} title1={"Previous Classes"} />
        </div>
    )
}

export default Classes