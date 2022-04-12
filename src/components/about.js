import './about.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, } from '@fortawesome/free-brands-svg-icons';
import AboutSvg from './svgs';

function AboutPage ()
{
    return (
        <div className='about-page'>

            {/* About Section */ }
            <div className='about'>

                <h4 className='about-h4'>
                    About GameZoo
                </h4>

                <div className='about-con'>

                    <div className='svg-con'>
                        <AboutSvg />
                        <button className='svg-btn'>
                            Explore GameZoo
                        </button>
                    </div>

                    <div className='about-text-con'>

                        <p className='about-text'>
                            <p className='about-text-text'>
                                The stone age did not end because we ran out of stone, it ended because of progress. By means of progress
                                in the gaming industry, Game<span style={ { color: '#D95BA0' } }>Zoo</span> was designed to satisfy your gaming curiosity, provide instant gaming thriller, bring to you latest games, games info and lots more.
                                We intend to bridge the gap between your longing for games and it's satisfaction. We also help sort out games and ship it to you anywhere around the world. We also create a safe space for one of the largest community of gamers, of which you can rightly be involved. We have a lot more to offer, and you have a lot to benefit from us.
                            </p>
                            <div className='hr-div'></div>
                            <h4 className='about-quote'>
                                ''The stone age did not end because we ran out of stone, it ended because of progress''
                            </h4>
                        </p>
                    </div>
                </div>

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
                        <span className='contact-info-tel-social-social' id='cling'><FontAwesomeIcon icon={ faFacebook } className='contact-icon' id='contact-icon-facebook' />gamezoo-official</span>
                        <span className='contact-info-tel-social-social'><FontAwesomeIcon icon={ faTwitter } className='contact-icon' id='contact-icon-twitter' />gamezoo-official</span>
                    </p>
                </div>
                <br></br><br></br>
                <hr></hr>
                <div id='reserved'>
                    <p id='reserved-text'>Copyright <span style={ { color: '#D95BA0' } }>@2022</span></p>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;