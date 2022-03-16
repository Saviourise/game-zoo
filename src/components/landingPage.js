import { useState } from 'react';
import './landingPage.css'

function LandingPage() {

    const [searchValue, setSearchValue] = useState('')

    const updateSearchValue = (e) => {
        setSearchValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(searchValue)
    }

    return (
        <div className='home-page' id='home-page'>
            <div className="home-page-container">
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