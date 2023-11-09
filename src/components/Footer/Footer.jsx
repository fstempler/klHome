import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import { useState } from 'react'; 
import { scroller } from 'react-scroll';
import { HashLink as Link } from 'react-router-hash-link';
import { ScrollElement } from 'react-scroll';

import 'react-toastify/dist/ReactToastify.css';
import './footer.css'

const Footer = () => {

    const EmailLink = () => {
        const user = 'info';
        const site = 'krausslivic.com';
      
        return (
          <a className='footer__Item' href={`mailto:${user}@${site}`}>
            {user}@{site}
          </a>
        );
      };

    const [emailValue, setEmailValue] = useState(''); // Estado para el valor del input
  const [formSubmitted, setFormSubmitted] = useState(false); // Estado para controlar el envío del formulario

  const subscribe = (e) => {
    e.preventDefault();
    if (emailValue === '') {      
      toast.error('Please enter your email address', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      return; // Evita enviar el formulario si el campo está vacío
    }

    emailjs.sendForm('service_ql13lh4', 'template_ucdfrxq', e.target, '-_1P_YxIBq8aEtmYt');

    toast.success('Thank you for subscribing', {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });

    // Restablecer el valor del input y marcar el formulario como enviado
    setEmailValue('');
    setFormSubmitted(true);
  };

    return (
        <>
        <div className='footer__Container'>
            <div className='footer__Text-Container'>
                <div className='row footer__Title-Container'>
                    <h1 className='footer__Title'>
                        Subscribe To Our Newsletter.
                    </h1>
                </div>
                <div className='row footer__Subtitle-Container'>
                    <p className='footer__Subtitle'>
                        We'll send you occasional but very useful tips about building products and startup without a single line of code
                    </p>
                </div>
            </div>
            
            <div className='row flex-md-row flex-md-column footer__Input-Container container'>
                <form onSubmit={subscribe} className='footer__Subscribe-Form'>
                    
                      <input
                        className='footer_Input'
                        placeholder="What's is your email?"
                        name='email'
                        value={emailValue} 
                        onChange={(e) => setEmailValue(e.target.value)} 
                        />
                    
                
                
                        <button type='submit' className='footer__Btn'>Subscribe</button>
                
                
                </form>
            </div>
            <div className='row footer__Info-Container'>
                <div className='col-12 col-sm-4 footer__Address-Container'>
                    <p className='footer__Address'> 
                        <strong>Contact</strong>                        
                        <br/>
                        <span className='footer__Item rev phone'>596</span>
                        <br/>
                        {/* <a href='mailto:info@krausslivic.com'><span className='footer__Item rev email'>ssuark</span></a> */}
                        <EmailLink />
                        <br/>
                        <br/>
                        <strong>Address</strong> 
                        <br/>
                        <span className='footer__Item'>1178 Broadway</span>
                        <br/>
                        <span className='footer__Item'>New York, NY 10001</span>
                        <br/>
                        <span className='footer__Item'>United States</span>
                    </p>
                </div>               
                <div className='col-12 col-sm-4 footer__Sitemap-Container'>
                    <ul className='footer__Sitemap-List'>
                        <li className="footer__List">
                            <Link className=""  to="#ClientsReviews" smooth 
                                onClick={() => scrollToElement('ClientsReviews')}>Testimonials</Link>
                        </li>
                        <li className="footer__List">
                            <Link className=""  to="#Faq" smooth
                                onClick={() => scrollToElement('Faq')}>Faq</Link>
                        </li>
                        <li className="footer__List">
                            <Link className=""  to="#Solutions" smooth
                            onClick={() => scrollToElement('Solutions')}>Solutions</Link>
                        </li>
                        <li className="footer__List">
                            <Link className=""  to="#About" smooth
                            onClick={() => scrollToElement('About')}>About</Link>
                        </li>                            
                    </ul>
                </div>               
                <div className='col-12 col-sm-4 footer__Rrss-Container'>
                    <div className='footer__Rrss'>
                        <p className='footer__Address'><strong>Follow Us</strong></p>
                        {/* <i className="bi bi-facebook icon"></i> */}
                        <a target='blanc' href='https://ar.linkedin.com/company/krausslivic-venture-capital?trk=public_profile_topcard-current-company'>
                            <i className="bi bi-linkedin icon"></i>
                        </a>
                        {/* <i className="bi bi-instagram icon"></i> */}
                        {/* <i className="bi bi-twitter-x icon"></i> */}
                    </div>
                </div>                           
            </div>
            <div className='row footer__Copyright-Container'>
                <p className='footer__Copyright'>
                    © 2010 Krauss & Livic - All rights reserved
                </p>
            </div>
        </div>
        </>
    )
}

export default Footer