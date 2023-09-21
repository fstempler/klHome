import './about.css';
import about_img from '../../assets/about/about_img.avif';
const About = () => {
    return (
        <>
        <div className='about__Container container' id='About'>
            <div className='row about__Title-Container'>
                <h1 className='about__Title'>About Our Team</h1>
            </div>
            <div className='row about__Info-Container'>
                <div className='col-12 col-sm-6 about__Info-Text-Container'>
                    <p className='about__Info-Text'>
                        Founded in 2010, Krauss & Livic is a management firm that helps
                        all-size business shorten the Time-To-Market for technology services, using an agile approach to produce MVPs that fits demand needs and pave the way to success. We have delivered over 250 no-code projects, built several templates, tons of plugins, and courses
                    </p>
                </div>
                <div className='col-12 col-sm-6 about__Info-Img-Container'>
                    <img src={about_img} className='about__Info-Img' alt='About Out Team Image' />
                </div>
            </div>
        </div>
        </>
    )
}

export default About