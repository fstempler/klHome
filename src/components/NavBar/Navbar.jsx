import './navbar.css';
import logo  from '../../assets/logo.avif';
import { usePopupContext } from '../../state/PopupContext';
import { HashLink as Link } from 'react-router-hash-link';

const Navbar = () => {

    
    const { setPopupOpen } = usePopupContext();

    return (
        <>
        <div className='navbar__container'>
            <nav className="navbar navbar-expand-lg bg-body-transparent navbar-fixed-top">
                <div className="container-fluid">
                    <Link className="navbar-brand logoContainer" to="#Header" smooth><img className="logo" src={logo}/></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse buttons__Container" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active nav__Btn" aria-current="page" to="#ClientsReviews" smooth>Testimonials</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active nav__Btn" aria-current="page" to="#Faq" smooth>Faq</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active nav__Btn" aria-current="page" to="#Solutions" smooth>Solutions</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active nav__Btn" aria-current="page" to="#About" smooth>About</Link>
                            </li>                            
                        </ul>                        
                    </div>
                    <button className='btn__Form-Primary' onClick={() => setPopupOpen(true)}>Get Started</button>
                </div>
            </nav>
        </div>
        </>
    )
}

export default Navbar