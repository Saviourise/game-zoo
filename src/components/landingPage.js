import { useState } from 'react';
import './landingPage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons'

function LandingPage() {

    const [searchValue, setSearchValue] = useState('')

    const updateSearchValue = (e) => {
        setSearchValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(searchValue)
    }

    const openNav = () => {
        document.getElementsByClassName("home-page-side-nav")[0].style.width = "100%";
    }

    const closeNav = () => {
        document.getElementsByClassName("home-page-side-nav")[0].style.width = "0";
    }

    return (
        <div className='home-page' id='home-page'>
            <div className="home-page-side-nav">
                <a className="close-btn" onClick={closeNav}>&times;</a>
                <a className='home-page-nav-bar-item active'>
                    Home
                </a>
                <a className='home-page-nav-bar-item'>
                    Game Zoo
                </a>
                <a className='home-page-nav-bar-item'>
                    Game Arena
                </a>
                <a className='home-page-nav-bar-item'>
                    About Us
                </a>
                <a className='home-page-nav-bar-item'>
                    Contact Us
                </a>
            </div>
            <div className="home-page-container">

                <div onClick={openNav} className='responsive-nav-bar'>
                    <p className='nav-bar-icon'>
                        <FontAwesomeIcon icon={faBarsStaggered} />
                    </p>
                </div>
                
                <div className='home-page-nav-bar-container'>
                    <nav className='home-page-nav-bar'>
                        <a className='home-page-nav-bar-item active'>
                            Home
                        </a>
                        <a className='home-page-nav-bar-item'>
                            Game Zoo
                        </a>
                        <a className='home-page-nav-bar-item'>
                            Game Arena
                        </a>
                        <a className='home-page-nav-bar-item'>
                            About Us
                        </a>
                        <a className='home-page-nav-bar-item'>
                            Contact Us
                        </a>
                    </nav>
                </div>
                <div className='home-page-search-bar-container'>
                    <div className='search-container'>
                        <form onSubmit={handleSubmit} className='home-page-search-form'>
                            <input type='search' placeholder="Search For Games" className='home-page-search-input' required value={searchValue} onChange={updateSearchValue} />
                            <input type='submit' value='Go' className='home-page-search-submit-btn' />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;