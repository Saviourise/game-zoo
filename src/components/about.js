import './about.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, } from '@fortawesome/free-brands-svg-icons'

function AboutPage() {
    return (
        <div className='about-page'>
            <div className='about'>

            </div>
            <div className='contact'>
                <p id='contact-header-text'>Contact Us</p>
                <br></br>
                <p id='tel-text'>Tel:</p>
                <br></br>
                <div className='contact-info'>
                    <p id='contact-info-tel-text' className='contact-info-info'>
                        <span className='contact-info-tel-text-text' id='contact-info-tel-text-text-1'>+234 811 5561 060</span>
                        <span className='contact-info-tel-text-text' id='contact-info-tel-text-text-2'>+234 904 7294 659</span>
                    </p>
                    <p id='contact-info-tel-social' className='contact-info-info'>
                        <span className='contact-info-tel-social-social' id='cling'><FontAwesomeIcon icon={faFacebook} className='contact-icon' id='contact-icon-facebook' />gamezoo-official</span>
                        <span className='contact-info-tel-social-social'><FontAwesomeIcon icon={faTwitter} className='contact-icon' id='contact-icon-twitter' />gamezoo-official</span>
                    </p>
                </div>
                <br></br><br></br>
                <hr></hr>
                <div id='reserved'>
                    <p id='reserved-text'>Copyright <span style={{color: '#D95BA0'}}>@2022</span></p>
                </div>
            </div>
        </div>
    )
}

export default AboutPage;