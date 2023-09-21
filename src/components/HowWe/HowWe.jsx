import './howWe.css';
import howWeDoThis from '../../assets/howWe/howWeDoThis-1.avif';


const HowWe = () => {
    return (
        <>
        <div className='howWe__Main-Container'>
        <div className='row flex-column flex-md-row howWe__Title-Container'>
            <h1 className='howWe__Title'>How We Do This</h1>
            <p className='howWe__Subtitle'>
                We develop seamless software thru no-code / low-code tools to produce faster MVPs in the short term!
            </p>
        </div>
        
        <div className="howWe__Info-Container">        
            <div className='row howWe__rowContainer'>
                
                <div className='col-md-6 howWe__imgContainer'>
                    <img className='howWe__img' src={howWeDoThis} />
                </div>
                <div className='col-md-6 howWe__Text-Container'>
                    <div className='howWe__Text-Title-Container'>
                        <h5 className='howWe__Text-Title'>
                            Data
                        </h5>
                    </div>
                    <div className='howWe__Text-Container'>                        
                        <p className='howWe__Text'>
                            We create data models and manage the applications data according to customer requirements to be available, scalable, and robust enough to support your growing and changing product.
                        </p>
                    </div>
                </div>                
            </div>
        </div>
        </div>
        </>
    )
}

export default HowWe