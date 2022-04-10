import './navBar.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered, faSearch } from '@fortawesome/free-solid-svg-icons';

const NavBar = ( props ) =>
{

    const [ gameWhat, setGameWhat ] = useState( '' );
    const [ blackNav, setBlackNav ] = useState( false );

    const openSearch = () =>
    {
        document.querySelector( '.header-header-phone' ).style.opacity = '0';
        document.querySelector( '.input-con' ).style.opacity = '1';
        document.querySelector( '.input-con' ).style.top = '0px';
    };

    const closeSearch = () =>
    {
        document.querySelector( '.header-header-phone' ).style.opacity = '1';
        document.querySelector( '.input-con' ).style.opacity = '0';
        document.querySelector( '.input-con' ).style.top = '-50px';
    };

    const openNavBar = () =>
    {
        document.querySelector( '.phone-header-nav' ).style.width = '60%';
        document.querySelector( '.overlay' ).style.opacity = '.8';
        document.querySelector( '.overlay' ).style.width = '100%';
        document.querySelector( '.header-header-phone' ).style.marginTop = '-70px';
    };

    const closeNavBar = () =>
    {
        document.querySelector( '.phone-header-nav' ).style.width = '0';
        document.querySelector( '.overlay' ).style.opacity = '0';
        document.querySelector( '.overlay' ).style.width = '0';
        document.querySelector( '.header-header-phone' ).style.marginTop = '0';
    };

    useEffect( () =>
    {
        if ( props.gameArena ) return setGameWhat( 'Arena' );
        if ( props.gameZoo ) return setGameWhat( 'Zoo' );
    }, [props.gameZoo, props.gameArena] );

    useEffect( () =>
    {
        window.addEventListener( 'scroll', () =>
        {
            if ( window.scrollY > 50 )
            {
                setBlackNav( true );
            } else setBlackNav( false );
        }, true)
        return () => {
            window.removeEventListener('scroll')
        };
    }, []);

    return (
        <>
            <header className={`header-header-desktop ${blackNav && "nav-black"}`}>
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


            <header className={`header-header-phone-head ${blackNav && "nav-black"}`}>

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

            <div className='overlay' onClick={closeNavBar}>

            </div>
        </>
    );
};

export default NavBar;