import { usePopupContext } from '../../state/PopupContext';
import logo from '../../assets/logo.avif';
import img_form from '../../assets/form/img_form.avif';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';
import './form.css'; 

const Form = () => {

 

  const handleChange = (e) => {
    const { name, value, type, checked } =e.target;
    setFormData((prevData) => ({
        ...prevData,[name]:type === "checkbox" ?checked :value
    }));
    };
    
    const [formData, setFormData] = useState({
        firstName: '',
        lastName:'',
        email: '',
        projectDetails: '',
        budget:'',        
      });

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormData({
            firstName: '',
            lastName:'',
            email: '',
            projectDetails: '',
            budget:'', 
        });

        emailjs.sendForm('service_pwkpnpn', 'template_v09rocg', e.target, 'kawIe2FBZ20LSsXyk')

        toast.success('Thank You! We will get in contact soon', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
        
        handleClose();
    }

    const [formValid, setFormValid] = useState(false);
    useEffect(() => {
      const isValid =
          formData.firstName !== '' &&
          formData.lastName !== '' &&
          /^\S+@\S+\.\S+$/.test(formData.email) &&
          formData.projectDetails !== '' &&
          formData.budget !== '';
  
          setFormValid(isValid);
         
  
      }, [formData]);
  

      const { popupOpen, setPopupOpen } = usePopupContext();

      const handleClose = () => {
        setPopupOpen(false); // Cierra el formulario emergente
      };
      // Renderiza el formulario solo si popupOpen está configurado como true
      if (!popupOpen) {
        return null;
      };
          


  return (
    <div className="popup form__Popup-Overlay">
      <div className='container form_Popup-Container'>
        <div className='row form__Main-Container'>
            <div className='col-12 col-sm-10 col-md-6 form__ColIzq'>
                <img src={logo} className='form__Logo'/>
                <img src={img_form} className='form__Img'/>
            </div>
            <div className='col-12 col-sm-10 col-md-6 form__ColDer'>
                <div className='form__Title-Container'>
                    <h1 className='form__Title'>
                        Let's build something great
                    </h1>
                </div>
                <div className='form__Form-Container'>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">                            
                            <input type="text"  className={`form-control ${formData.firstName === '' ? 'is-invalid' : ''}`} 
                            placeholder='First Name' id="exampleInputEmail1" aria-describedby="firstName" 
                            name='firstName' value={formData.firstName} onChange={handleChange} required/>                            
                        </div>                        

                        <div className="mb-3">
                            <input type="text" className={`form-control ${formData.lastName === '' ? 'is-invalid' : ''}`} 
                            placeholder='Last Name' id="exampleInputEmail1" aria-describedby="lastName" 
                            name='lastName' value={formData.lastName} onChange={handleChange} required/>                            
                        </div>

                        <div className="mb-3">
                            <input type="email" className={`form-control ${(formData.email === '' || !/^\S+@\S+\.\S+$/.test(formData.email)) ? 'is-invalid' : '' }`} 
                            placeholder="What's your Email" id="exampleInputEmail1" aria-describedby="emailHelp" 
                            name='email' value={formData.email} onChange={handleChange} required/>                                                    
                        </div>
                        
                        <div className="mb-3">
                            <p className='form__Form-Text'>
                            Please provide some details about your project like:
                            <br />
                            - is it a web application or a mobile app?
                            <br />
                            - describe the user flow and functionality
                            <br />
                            - do you require integration with payment providers or other external APIs
                            <br />
                            - do you know of any reference app or web-site similar to what you would like to build
                            </p>
                        </div>
                        <div className="mb-3">                            
                            <textarea type="text" className={`form-control ${formData.projectDetails === '' ? 'is-invalid' : ''}`}
                            placeholder="Write Here..." id="exampleFormControlTextarea1" rows="3"
                            name='projectDetails' value={formData.projectDetails} onChange={handleChange} required></textarea>
                        </div>
                        
                        <div className="mb-3">
                            <p className='form__Form-Text'>
                                What's your budget?
                            </p>
                        </div>
                        <div className='mb-3'>
                           <select className={`form-control ${formData.budget === '' ? 'is-invalid' : ''}`} 
                           aria-label="Default select example"
                           name='budget' value={formData.budget} onChange={handleChange} required>
                                <option value>Please select an option below</option>
                                <option value="$7K - $10K">$7K - $10K</option>
                                <option value="$10K - $15K">$10K - $15K</option>
                                <option value="$15K - $20K">$15K - $20K</option>
                                <option value="> $20K">&gt; $20K</option>
                            </select>
                        </div>
                        <div className='mb-3'>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="flexCheckDefault" name='suscribe'/>

                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Sign up to receive occasional tips about building apps without code
                            </label>
                        </div>
                        </div>
                        
                        <button type="submit" className="btn form__Form-Btn" disabled={!formValid}>Submit</button>
                    </form>
                </div>

            </div>
        </div>
      </div>
      <button onClick={handleClose} className='form__Close-Btn'><i className="bi bi-x-circle close_Btn"></i></button>
    </div>
  );
};

export default Form;
