import './navBar.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered, faSearch } from '@fortawesome/free-solid-svg-icons';

const NavBar = ( props ) =>
{

    const [ gameWhat, setGameWhat ] = useState( '' );

    const openSearch = () =>
    {
        document.querySelector( '.header-header-phone' ).style.opacity = '0';
        document.querySelector( '.input-con' ).style.opacity = '1';
        document.querySelector( '.input-con' ).style.top = '10px';
    };

    const closeSearch = () =>
    {
        document.querySelector( '.header-header-phone' ).style.opacity = '1';
        document.querySelector( '.input-con' ).style.opacity = '0';
        document.querySelector( '.input-con' ).style.top = '-50px';
    };

    const openNavBar = () =>
    {
        document.querySelector( '.phone-header-nav' ).style.width = '100%';
    }

    const closeNavBar = () =>
    {
        document.querySelector( '.phone-header-nav' ).style.width = '0';
    }

    useEffect( () =>
    {
        if ( props.gameArena ) return setGameWhat( 'Arena' );
        if ( props.gameZoo ) return setGameWhat( 'Zoo' );
    }, [] );

    return (
        <>
            <header className='header-header-desktop'>
                <span className='header-header-name'><span style={ { color: '#D95BA0' } }>Game</span> { gameWhat }</span>
                <input className='header-header-search-input' value={ props.searchItem } onChange={ props.handleChange } type='search' placeholder='Search for games' />
                <nav className='header-nav'>
                    <Link to='/' style={ { color: '#fff', textDecoration: 'none' } } className='home-page-nav-bar-item active'>
                        Home
                    </Link>
                    {
                        props.gameZoo ?
                            <Link to='/game-zoo' style={ { color: '#D95BA0', textDecoration: 'none' } } className='home-page-nav-bar-item'>
                                Game Zoo
                            </Link> :
                            <Link to='/game-zoo' style={ { color: '#fff', textDecoration: 'none' } } className='home-page-nav-bar-item'>
                                Game Zoo
                            </Link>
                    }

                    {
                        props.gameArena ?
                            <Link to='/game-arena' style={ { color: '#D95BA0', textDecoration: 'none' } } className='home-page-nav-bar-item'>
                                Game Arena
                            </Link> :
                            <Link to='/game-arena' style={ { color: '#fff', textDecoration: 'none' } } className='home-page-nav-bar-item'>
                                Game Arena
                            </Link>
                    }

                    <Link to='/' style={ { color: '#fff', textDecoration: 'none' } } className='home-page-nav-bar-item'>
                        Game Room
                    </Link>
                </nav>



            </header>


            <header className='header-header-phone-head'>

                <div className='input-con'>
                    <input className='header-header-phone-search-input' value={ props.searchItem } onChange={ props.handleChange } type='search' placeholder='Search for games' />
                    <button className='input-btn' onClick={ closeSearch }>Close</button>
                </div>

                <div className='phone-header-nav'>
                    <nav className='header-phone-nav'>
                        <Link to='/' style={ { color: '#fff', textDecoration: 'none' } } className='home-page-nav-bar-item-phone'>
                            Home
                        </Link>
                        {
                            props.gameZoo ?
                                <Link to='/game-zoo' style={ { color: '#D95BA0', textDecoration: 'none' } } className='home-page-nav-bar-item-phone'>
                                    Game Zoo
                                </Link> :
                                <Link to='/game-zoo' style={ { color: '#fff', textDecoration: 'none' } } className='home-page-nav-bar-item-phone'>
                                    Game Zoo
                                </Link>
                        }

                        {
                            props.gameArena ?
                                <Link to='/game-arena' style={ { color: '#D95BA0', textDecoration: 'none' } } className='home-page-nav-bar-item-phone'>
                                    Game Arena
                                </Link> :
                                <Link to='/game-arena' style={ { color: '#fff', textDecoration: 'none' } } className='home-page-nav-bar-item-phone'>
                                    Game Arena
                                </Link>
                        }

                        <Link to='/' style={ { color: '#fff', textDecoration: 'none' } } className='home-page-nav-bar-item-phone'>
                            Game Room
                        </Link>
                    </nav>

                    <button className='input-btn' onClick={ closeNavBar }>Close</button>
                </div>

                <div className='header-header-phone'>
                    <span className='header-header-phone-name'><span style={ { color: '#D95BA0' } }>Game</span> { gameWhat }</span>
                    <FontAwesomeIcon icon={ faSearch } className='header-header-phone-search-icon' onClick={ openSearch } />
                    <FontAwesomeIcon icon={ faBarsStaggered } className='header-header-phone-menu-icon' onClick={ openNavBar } />
                </div>
            </header>
        </>
    );
};

export default NavBar;