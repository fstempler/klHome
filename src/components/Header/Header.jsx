import img1 from '../../assets/header_1.avif';
import { usePopupContext } from '../../state/PopupContext';
import './header.css';

const Header = () => {
    const { setPopupOpen } = usePopupContext();

    return (
        <>
            <div className=" header__Container" id='Header'>
                <div className='row flex-column-reverse flex-md-row-reverse'>
                    <div className='col-md-6 order-md-2 text__Container-Main'>
                        <div className='text__Container'>
                            <h1 className='title'>
                                Web Software & Native Apps Built
                                <br />
                                <span className='title__Color'> Without Code</span>
                            </h1>
                            <p className='subtitle'>
                                With <span className='subtitle__nbr'>250+</span> completed projects and over 30 team members, Krauss & Livic is the largest no-code agency in the world!
                            </p>
                            <div className='btn__Container'>
                                <button className='btn__Form-Primary' onClick={() => setPopupOpen(true)}>Get Started</button>
                            </div>
                            <div className='review__Container'>
                                <div className='review__Score-Container'>
                                    <p className='review__Score'>Excellent
                                    <span className='review__Score-Stars'>  
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    </span>
                                    </p>
                                </div>

                                <div className='review__Text-Container'>
                                    <p className='review__Text'>Based on 84 reviews on <span className='review__Star'><i className="bi bi-star-fill"></i></span> trustpilot</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-6 order-md-1 img__Container container-fluid'>
                        <img className='img__Header' src={img1} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
