import './ourwork.css';
import metla from '../../assets/ourWork/metla.avif';
import thirdself from '../../assets/ourWork/thirdself.avif'
import goodcourse from '../../assets/ourWork/goodcourse.avif'
import scaled from '../../assets/ourWork/scaled.avif';
import neo from '../../assets/ourWork/neo.avif';
import harness from '../../assets/ourWork/harness.avif';
import budsFeed from '../../assets/ourWork/budsfeed.avif';
import intermix from '../../assets/ourWork/intermix.avif';
import pflegetiger from '../../assets/ourWork/pflegetiger.avif';
import { usePopupContext } from '../../state/PopupContext';

const OurWork = () => {
    
    const { setPopupOpen } = usePopupContext();

    return (
        <div className='ourWork__MainContainer'>
            <div className='ourWork__Text-Container row container'>
                <div className='ourWork__Title-Container'>
                    <h1 className='ourWork__Title'>
                        Our Work
                    </h1>                    
                </div>
                <div className='ourWork__Subitle-Container'>
                    <p className='ourWork__Subtitle'>
                        See out portfolio! A unique experience enriched to our customers
                    </p>
                </div>
            </div>
            <div className='ourWork__Card-Container row row-cols-1 row-cols-md-2 row-cols-lg-1'>
            <div className="card border-0" style={{width: '20rem', minWidth:'10rem',  maxWidth: '25rem'}}>
                    <img src={metla} className="card-img-top card__Img" alt="Metla" />
                    <div className="card-body">
                        <h5 className="card-title">Metla</h5>
                        <p className="card-text">An all-in-one crypto frontend for managing coins, NFTs, DeFi activity and a lot more - all in one...</p>
                        
                        <div className='button__Container'>
                            <a href="#" className="btn btn__Form-Secondary" onClick={() => setPopupOpen(true)}>Read More</a>
                            <i className="bi bi-laptop pcIcon"></i>
                        </div>
                    </div>
                </div>
                <div className="card border-0" style={{width: '20rem',  minWidth:'10rem', maxWidth: '25rem'}}>
                    <img src={thirdself} className="card-img-top card__Img" alt="Third Self" />
                    <div className="card-body">
                        <h5 className="card-title">ThirdSelf</h5>
                        <p className="card-text">thirdSelf is a personal business platform for creative directors, social producers, and...</p>
                        
                        <div className='button__Container'>
                            <a href="#" className="btn btn__Form-Secondary" onClick={() => setPopupOpen(true)}>Read More</a>
                            <i className="bi bi-laptop pcIcon"></i>
                        </div>
                    </div>
                </div>
                <div className="card border-0" style={{width: '20rem', minWidth:'10rem',  maxWidth: '25rem',}}>
                    <img src={goodcourse} className="card-img-top card__Img" alt="GoodCourse" />
                    <div className="card-body">
                        <h5 className="card-title">GoodCourse</h5>
                        <p className="card-text">GoodCourse is a platform for 2.7bn employees - over 80% of the workforce - who don't work at..</p>
                        <div className='button__Container'>
                            <a href="#" className="btn btn__Form-Secondary" onClick={() => setPopupOpen(true)}>Read More</a>
                            <i className="bi bi-laptop pcIcon"></i>
                        </div>                        
                    </div>
                </div>
            </div>

            <div className='ourWork__Card-Container row row-cols-1 row-cols-md-2 row-cols-lg-1'>
            <div className="card border-0" style={{width: '20rem',  minWidth:'10rem', maxWidth: '25rem'}}>
                    <img src={scaled} className="card-img-top card__Img" alt="Scaled" />
                    <div className="card-body">
                        <h5 className="card-title">Scaled</h5>
                        <p className="card-text">Scaled is a highly-customized recruiting product built to help high-growth tech startups in the...</p>
                        
                        <div className='button__Container'>
                            <a href="#" className="btn btn__Form-Secondary" onClick={() => setPopupOpen(true)}>Read More</a>
                            <i className="bi bi-laptop pcIcon"></i>
                        </div>
                    </div>
                </div>
                <div className="card border-0" style={{width: '20rem',  minWidth:'10rem', maxWidth: '25rem'}}>
                    <img src={neo} className="card-img-top card__Img" alt="Neo" />
                    <div className="card-body">
                        <h5 className="card-title">ThirdSelf</h5>
                        <p className="card-text">Neo is a diverse mentorship community and startup...</p>
                        
                        <div className='button__Container'>
                            <a href="#" className="btn btn__Form-Secondary" onClick={() => setPopupOpen(true)}>Read More</a>
                            <i className="bi bi-laptop pcIcon"></i>
                        </div>
                    </div>
                </div>
                <div className="card border-0" style={{width: '20rem',  minWidth:'10rem', maxWidth: '25rem'}}>
                    <img src={harness} className="card-img-top card__Img" alt="harness" />
                    <div className="card-body">
                        <h5 className="card-title">Harness</h5>
                        <p className="card-text">Harness is on a mission to create beautiful recruitment experiences for candidate, client...</p>
                        <div className='button__Container'>
                            <a href="#" className="btn btn__Form-Secondary" onClick={() => setPopupOpen(true)}>Read More</a>
                            <i className="bi bi-laptop pcIcon"></i>
                        </div>                        
                    </div>
                </div>
            </div>

            <div className='ourWork__Card-Container row row-cols-1 row-cowls-md-2 row-cols-lg-1'>
                
                
                <div className="card border-0" style={{width: '20rem',  minWidth:'10rem', maxWidth: '25rem'}}>
                    <img src={budsFeed} className="card-img-top card__Img" alt="BudsFeed" />
                    <div className="card-body">
                        <h5 className="card-title">BudsFeed</h5>
                        <p className="card-text">BudsFeed is a community platform designed for launching, reviewing and discussing new...</p>
                        
                        <div className='button__Container'>
                            <a href="#" className="btn btn__Form-Secondary" onClick={() => setPopupOpen(true)}>Read More</a>
                            <i className="bi bi-laptop pcIcon"></i>
                        </div>
                    </div>
                </div>
                <div className="card border-0" style={{width: '20rem',  minWidth:'10rem', maxWidth: '25rem'}}>
                    <img src={intermix} className="card-img-top card__Img" alt="Intermix" />
                    <div className="card-body">
                        <h5 className="card-title">Intermix</h5>
                        <p className="card-text">The demand for HR Expertise is growing globally while talent shortage has nearly doubled...</p>
                        
                        <div className='button__Container'>
                            <a href="#" className="btn btn__Form-Secondary" onClick={() => setPopupOpen(true)}>Read More</a>
                            <i className="bi bi-laptop pcIcon"></i>
                        </div>
                    </div>
                </div>
                <div className="card border-0" style={{width: '20rem', minWidth:'10rem', maxWidth: '25rem'}}>
                    <img src={pflegetiger} className="card-img-top card__Img" alt="Pflegetiger" />
                    <div className="card-body">
                        <h5 className="card-title">Pflegetiger</h5>
                        <p className="card-text">Pflegetiger is a home care provider for elderly people. Features a fully responsive design and...</p>
                        <div className='button__Container'>
                            <a href="#" className="btn btn__Form-Secondary" onClick={() => setPopupOpen(true)}>Read More</a>
                            <i className="bi bi-laptop pcIcon"></i>
                        </div>                        
                    </div>
                </div>
            </div>
            <div className='row ourWork__ProjectsBtn-Container'>    
            <a href="#" className="btn ourWork__ProjectsBtn" onClick={() => setPopupOpen(true)}>See all projects<i className="bi bi-caret-right-fill"></i></a>
            </div>

        </div>
    )
}

export default OurWork
