import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import { useState } from 'react'; 
import 'react-toastify/dist/ReactToastify.css';
import './footer.css'

const Footer = () => {

    // const suscribe = (e) => {
    //     e.preventDefault();
    //     emailjs.sendForm('service_ql13lh4', 'template_ucdfrxq', e.target, '-_1P_YxIBq8aEtmYt')

    //     toast.success('Thank you for subscribing', {
    //         position: "top-center",
    //         autoClose: 3000,
    //         hideProgressBar: false,
    //         closeOnClick: true,
    //         pauseOnHover: true,
    //         draggable: true,
    //         progress: undefined,
    //         theme: "light",
    //         });
        
            
        
    // };

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
            
            <div className='row footer__Input-Container container'>
                <form onSubmit={subscribe} className='footer__Subscribe-Form'>
                <input
                    className='col footer_Input'
                    placeholder="What's is your email?"
                    name='email'
                    value={emailValue} 
                    onChange={(e) => setEmailValue(e.target.value)} 
                />
                <button type='submit' className=' col footer__Btn'>Subscribe</button>
                </form>
            </div>
            <div className='row footer__Info-Container'>
                <div className='col-12 col-sm-6 footer__Address-Container'>
                    <p className='footer__Address'> 
                       Tel: +1 (917) 695-4990
                    
                        Address: 
                    
                        1178 Broadway
                    
                        New York, NY 10001
                    
                        United States
                    </p>
                </div>               
                <div className='col-12 col-sm-6 footer__Rrss-Container'>
                    <div className='footer__Rrss'>
                        <i className="bi bi-facebook icon"></i>
                        <a target='blanc' href='https://ar.linkedin.com/company/krausslivic-venture-capital?trk=public_profile_topcard-current-company'>
                            <i className="bi bi-linkedin icon"></i>
                        </a>
                        <i className="bi bi-instagram icon"></i>
                        <i className="bi bi-twitter-x icon"></i>
                    </div>
                </div>                           
            </div>
            <div className='row footer__Address-Container'>
                <p className='footer__Copyright'>
                    © 2010 Krauss & Livic - All rights reserved
                </p>
            </div>
        </div>
        </>
    )
}

export default Footer