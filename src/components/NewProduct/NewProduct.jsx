import './newProduct.css';
import newProductImg from '../../assets/newProducts/newProductImg.avif';
import { usePopupContext } from '../../state/PopupContext';

const NewProduct = () => {

    const { setPopupOpen } = usePopupContext();

    return(
        <>
        <div className='newProduct__Container container'>
            <div className='newProduct__Title-Container'>    
                <h1 className='newProduct__Title'>
                    Let's Build Your New Product
                </h1>
            </div>
            <div className='newProduct__Info-Container container row'>
                <div className='col-12 col-sm-6'>
                    <div className='newProduct__Img-Container'>
                        <img src={newProductImg} className='newProduct__Img' alt='New Product' />
                    </div>                    
                </div>
                <div className='col-12 col-sm-6 newProduct__Info-List'>
                    <div className='newProduct__Info-Title-Container'>
                        <h5 className='newProduct__Info-Title'>
                            Agile Project
                        </h5>                        
                    </div>
                    <div className='newProduct__Info-Subtitle-Container'>
                        <p className='newProduct__Info-Subtitle'>
                            For complex projects with full customization and unique design
                        </p>
                    </div>
                    <div className='newProduct__Info-List-Container'>
                        <ul className='newProduct__Info-List-Style'>
                            <li>Flexible development process</li>
                            <li>Fixed price billing</li>
                            <li>Delivered in 3-5 weeks</li>
                            <li>Dedicated Project Manager</li>
                            <li>Pay by milestone</li>
                        </ul>
                    </div>
                    <div className='newProduct__Info-Button-Container'>
                        <button className='btn__Form-Primary newProduct__Info-Button' onClick={() => setPopupOpen(true)}>See all projects <i className="bi bi-caret-right-fill"></i></button>
                    </div>    
                </div>
            </div>
        </div>
        </>
    )
}

export default NewProduct