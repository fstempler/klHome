import './clientsReviews.css';
import img1 from '../../assets/clientsReviews/img1.avif';
import img2 from '../../assets/clientsReviews/img2.avif';
import img3 from '../../assets/clientsReviews/img3.avif';
import review_symbol from '../../assets/clientsReviews/review_symbol.avif';


const ClientsReview = () => {
    return (
        <>
        <div className='clientsReview__Container' id='ClientsReviews'>
            <div className='clientsReview__Title-Container'>
                <h1 className='clientsReview__Title'>
                    What Our Clients Are Saying
                </h1>
            </div>              
            <div className='clientsReview__Cards-Container row'>
                <div className="card border-0 clientsReview__Card clientsReviews__Card-Green" style={{width: '18rem'}}>
                    <img src={img1} className="card-img-top clientsReview__Card-Img" alt="Genniw Kupklosky" />
                        <div className="card-body">
                            <div className='clientsReview__Card-Title-Container'>
                                <h5 className="card-title">Gennie Kupklosky</h5>
                            </div>
                            <div className='clientsReview__Card-Star-Container'>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                            </div>
                            <div className='clientsReview__Card-Subtitle-Container'>
                                <p className='clientsReview__Card-Subtitle'>
                                    Partner @GlobeOnix
                                    Iowa, US ● Des Moines
                                </p>
                            </div>
                            <div className='clientsReview__Card-Review-Container'>
                                <img src={review_symbol}  className='clientsReview__Card-reviewSymbol' alt='Review Symbol Image' />
                            </div>
                            <div className='clientsReview__Card-Text-Container'>
                                <p className='clientsReview__Card-Text card-text'> 
                                    Utilizing Krauss Livic Services has been a seamless, rapid, and highly valuable experience when compared to employing traditional developers. The incredible scope of their capabilities, demonstrated in such a short timeframe, not only enabled me to create my application with more features than originally planned but also allowed for swift and effective adjustments whenever needed. Additionally, the team consists of delightful, intelligent, and incredibly determined individuals who strive to deliver precisely what we require. We anticipate a long-lasting and prosperous partnership with Krauss Livic, and I enthusiastically recommend their services to anyone seeking to develop a tech product!
                                </p>
                            </div>                            
                            
                        </div>
                </div>
                <div className="card border-0 clientsReview__Card clientsReviews__Card-Orange" style={{width: '18rem'}}>
                    <img src={img2} className="card-img-top clientsReview__Card-Img" alt="Genniw Kupklosky" />
                        <div className="card-body">
                            <div className='clientsReview__Card-Title-Container'>
                                <h5 className="card-title">Tara L Brown</h5>
                            </div>
                            <div className='clientsReview__Card-Star-Container'>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                            </div>
                            <div className='clientsReview__Card-Subtitle-Container'>
                                <p className='clientsReview__Card-Subtitle'>
                                    Co-Founder & CEO
                                    Wales, UK ● Sinthesian.io
                                </p>
                            </div>
                            <div className='clientsReview__Card-Review-Container'>
                                <img src={review_symbol}  className='clientsReview__Card-reviewSymbol' alt='Review Symbol Image' />
                            </div>
                            <div className='clientsReview__Card-Text-Container'>
                                <p className='clientsReview__Card-Text card-text'> 
                                    With the assistance of Krauss & Livic, we have successfully developed our own product to streamline our shipping process further. Their initial template closely matched our requirements, and through collaborative reviews, we fine-tuned it to save a significant amount of time. Their guidance and expertise led us seamlessly through the development journey, resulting in an application that perfectly caters to our needs. Choosing Krauss & Livic for landing page templates and sample apps proved to be an excellent decision.
                                </p>
                            </div>                            
                            
                        </div>
                </div>
                <div className="card border-0 clientsReview__Card clientsReviews__Card-Green" style={{width: '18rem'}}>
                    <img src={img3} className="card-img-top clientsReview__Card-Img" alt="Genniw Kupklosky" />
                        <div className="card-body">
                            <div className='clientsReview__Card-Title-Container'>
                                <h5 className="card-title">Karen Write</h5>
                            </div>
                            <div className='clientsReview__Card-Star-Container'>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                            </div>
                            <div className='clientsReview__Card-Subtitle-Container'>
                                <p className='clientsReview__Card-Subtitle'>
                                    Founder ● Intermix
                                </p>
                            </div>
                            <div className='clientsReview__Card-Review-Container'>
                                <img src={review_symbol}  className='clientsReview__Card-reviewSymbol' alt='Review Symbol Image' />
                            </div>
                            <div className='clientsReview__Card-Text-Container'>
                                <p className='clientsReview__Card-Text card-text'> 
                                The team of developers at Krauss Livic provided invaluable support to our management team in enhancing the app with essential features. They seamlessly incorporated functionalities such as milestone creation, necessary workflows, and plugins that perform specific actions, all presented in an aesthetically pleasing format. Their implementation of highly technical design elements was executed flawlessly, showcasing the exceptional skills of the development team. We are incredibly grateful to have collaborated with such a brilliant group of professionals, whose dedication and expertise were instrumental in achieving these remarkable results.I recommend!
                                </p>
                            </div>                            
                            
                        </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default ClientsReview

