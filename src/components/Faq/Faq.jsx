import './faq.css';
import faq_img from '../../assets/faq/faq_img.avif';

const Faq = () => {
    return (
        <>
        <div className='faq__Container' id='Faq'>
            <div className='row'>
                <div className='faq__Text-Container col'>
                    <div className='faq__Text-Title-Container'>
                        <h1 className='faq__Text-Title'>
                            Frequently Asked Questions
                        </h1>
                    </div>
                    <div className='faq__Text-Subtitle-Container'>
                        <p className='faq__Text-Subtitle'>
                            Maybe we already have an answer to your question? 🙂
                        </p>
                    </div>
                    <div className='faq__Text-Img-Container'>
                        <img src={faq_img} className='faq__Text-Img' />
                    </div>
                </div>
                <div className='col faq__Accordion-Container'>               


                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item faq__Accordion-Item">
                            <h2 className="accordion-header">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    What is No-code?
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    No-code is a software development approach that requires few, if any, programming skills to build an application.
                                    This allows anyone who has the necessary institutional knowledge and understands the business requirements for an app but lacks knowledge of programming languages to create software applications such as a form, a website, or something more complex as a marketplace or a CRM.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="accordion" id="accordionExample">    
                        <div className="accordion-item faq__Accordion-Item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Who uses no-code?
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                Anybody with an idea that can be translated into software. With or without coding knowledge, no-code software development streamlines the creation process and is a highly efficient approach to getting an idea built fast.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item faq__Accordion-Item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    What can I build with no-code?
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                There are virtually no limitations here, and if there are any minor ones, by the time you read this text even they may be obsolete.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item faq__Accordion-Item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                    How much faster is no-code?
                                </button>
                            </h2>
                            <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                On average, 10x faster, but it depends on too many factors (including purely non-technical ones) to pick one single number.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item faq__Accordion-Item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                    Why choose Bubble for my project?
                                </button>
                            </h2>
                            <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <strong>Speed of development and iteration</strong>- on average no-code development is 10X faster than traditional.
                                    <br />
                                    <strong>Development cost</strong> - significantly reduced cost due to shorter development time.
                                    <br />
                                    <strong>Scale</strong> - we design apps with scalability in mind and optimize them for high performance.
                                    <br />
                                    <strong>Extensibility</strong> - any integrations and limitations can be handled with custom plugins.
                                    <br />
                                    <strong>Converting into native mobile apps</strong> - Bubble applications are responsive by default and well optimized for mobile devices, but it’s also possible to convert a Bubble app into a native app.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item faq__Accordion-Item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                    Are Bubble apps scalable?
                                </button>
                            </h2>
                            <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    Yes. And if you expect to grow your business, apps built on Bubble are perfect to scale.
                                    Using Bubble, you can upgrade server capacity at any time as well as migrate to a Dedicated Cluster on AWS. Tracking server capacity is made easy on Bubble with intuitive dashboards and notifications.
                                </div>
                            </div>
                        </div>                        
                    </div>
                    
                </div>
                
            </div>
        </div>
        </>
    )
}

export default Faq;