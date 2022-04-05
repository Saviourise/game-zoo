import { useState } from 'react';
import './landingPage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarsStaggered, faSearch } from '@fortawesome/free-solid-svg-icons'
import request from 'superagent';
import gamezoologo from'../assets/gamezoologo.png'
import AnimatedPage1 from './animatedPage1';
import AnimatedPage2 from './animatedPage2';
import AboutPage from './about';
import { Link, useNavigate } from 'react-router-dom'

function LandingPage() {

    let navigate = useNavigate();

    const [searchValue, setSearchValue] = useState('')

    const updateSearchValue = (e) => {
        setSearchValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log(searchValue);
        return navigate(`/game-zoo/search/${searchValue}`)
    }

    const openNav = () => {
        document.getElementsByClassName("home-page-side-nav")[0].style.width = "100%";
    }

    const closeNav = () => {
        document.getElementsByClassName("home-page-side-nav")[0].style.width = "0";
    }

    return (
        <>
            <div className='home-page' id='home-page'>
                <div className="home-page-side-nav">
                    <a className="close-btn" onClick={closeNav}>&times;</a>
                    <a className='home-page-nav-bar-item active'>
                        Home
                    </a>
                    <Link to='/game-zoo' className='home-page-nav-bar-item'>
                        Game Zoo
                    </Link>
                    <Link to='/game-arena' className='home-page-nav-bar-item'>
                        Game Arena
                    </Link>
                    <a className='home-page-nav-bar-item'>
                        Game Room
                    </a>
                </div>
                <div className="home-page-container">
                    <div className='phone-nav'>
                        <div onClick={openNav} className='responsive-nav-bar'>
                            <p className='nav-bar-logo'>
                                <img src={gamezoologo} alt='logo' className='logo' />
                            </p>
                        </div>
                        <div onClick={openNav} className='responsive-nav-icon'>
                            <p className='nav-bar-icon'>
                                <FontAwesomeIcon icon={faBarsStaggered} />
                            </p>
                        </div>
                    </div>
                    
                    <div className='desktop-nav'>
                        <div className='desktop-nav-1'>
                            <p className='nav-bar-logo-desktop'>
                                <img src={gamezoologo} alt='logo' className='logo' />
                            </p>
                        </div>
                        <div className='home-page-nav-bar-container'>
                            <nav className='home-page-nav-bar'>
                                <a className='home-page-nav-bar-item active'>
                                    Home
                                </a>
                                <Link to='/game-zoo' style={{color: '#fff', textDecoration: 'none'}} className='home-page-nav-bar-item'>
                                    Game Zoo
                                </Link>
                                <Link to='/game-arena' style={{color: '#fff', textDecoration: 'none'}} className='home-page-nav-bar-item'>
                                    Game Arena
                                </Link>
                                <a className='home-page-nav-bar-item'>
                                    Game Room
                                </a>
                            </nav>
                        </div>
                    </div>
                    <div className='home-page-search-bar-container'>
                        <div className='search-container'>
                            <form onSubmit={handleSubmit} className='home-page-search-form'>
                                <input type='search' placeholder="Search For Games" className='home-page-search-input' required value={searchValue} onChange={updateSearchValue} />
                                <button type='submit' value='' className='home-page-search-submit-btn'><FontAwesomeIcon icon={faSearch} /></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <AnimatedPage1 />
            <AnimatedPage2 />
            <AboutPage />
        </>
    )
}

export default LandingPage;

