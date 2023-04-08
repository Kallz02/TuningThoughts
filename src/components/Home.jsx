import './Home.css'
import VideoCarousel from './VideoCarousel';
import Community from './Community'
import Channel from './Channel'; 
import Header from './Header'
function Home(){

    const api='AIzaSyB_pYZDfI8BSGYAsFH-vQ3hwUhvIcFDO6A';
    const list='PLJ6oyZmMA3ZYfYFrFTlQC-Jy17alfXBi6';
    const prep='PLJ6oyZmMA3ZbROcZa1SpWPXfjhuCBEdfQ';
    const event='UCU1U_hqYjzEKjG6txI3OHjQ';
    return(
        <>
        
    <div className="container">
<Header/>
        <div className="pg1 section" id="home">
            
            <div className="txt">
            <div className="maintxt">
                S.S Alternative Medicines
               </div>
               
               
           <h4>Treat the Patient, Not the Disease</h4>
<p>-Edward Bach</p>
<h4>ந ோயோளிக்கு சிகிச்சசயளிக்கவும், ந ோய்களுக்கு அல்ல</h4>
<p>- எட்வர்ட் போச் </p>
               
               </div>
               <div className="img">
               </div>
        </div>
        
            <h1 className='head2' id='contact'> <center>Indian Flower Remedies - இந்திய மலர் மருத்துவம்</center>  </h1>
        <div className="pg2 section">
            
        </div>
        
        <div className="pg3 section">




       {/* <Community channelId={event} api={api}/> */}
       <VideoCarousel playlistId={prep} api={api} title1={'Preperations'}/>
       <VideoCarousel playlistId={list} api={api} title1={'Testimonials'}/>
        </div>
        
        </div>

        </>
    )
    
}

export default Home;