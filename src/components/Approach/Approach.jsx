import './aproach.css';
import approach_img from '../../assets/approach_img.avif';


const Approach = () => {
    return (
        <>
        
        <div className="approachContainer">        
            <div className='row approach__Title-Container'>
                <h1 className='approach__Title'>Our Approach</h1>
            </div>
            
            <div className='row flex-column flex-md-row rowContainer'>
                
                <div className='col-md-6 imgContainer'>
                    <img className='approach__img' src={approach_img} />
                </div>
                <div className='col-md-6 text__Container'>
                    <div className='text__Title-Container'>
                        <h5 className='text__Title'>
                            Streamlined Process
                        </h5>
                    </div>
                    <div className='text__Text-Container'>                        
                        <p className='text'>
                            Our refined processes guarantee a seamless experience 
                            from the first contact and contract signing to 
                            efficient project management and implementation. 
                            We prioritize personalized service with a dedicated 
                            point of contact for all your requests. Get a preview 
                            link to monitor real-time progress once the project starts.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Approach