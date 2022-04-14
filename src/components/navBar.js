import './navBar.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered, faSearch, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import gamezoologo from '../assets/gamezoologo.png';

const NavBar = ( props ) =>
{

    const [ gameWhat, setGameWhat ] = useState( '' );
    const [ user, setUser ] = useState( '' );
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
        document.querySelector( '.phone-header-nav' ).style.width = '50%';
        document.querySelector( '.phone-header-nav' ).style.padding = '20px';
        document.querySelector( '.overlay-nav ' ).style.opacity = '.8';
        document.querySelector( '.overlay-nav' ).style.width = '100%';
        document.querySelector( '.header-header-phone' ).style.marginTop = '-70px';
    };

    const closeNavBar = () =>
    {
        document.querySelector( '.phone-header-nav' ).style.width = '0';
        document.querySelector( '.phone-header-nav' ).style.padding = '0px';
        document.querySelector( '.overlay-nav' ).style.opacity = '0';
        document.querySelector( '.overlay-nav' ).style.width = '0';
        document.querySelector( '.header-header-phone' ).style.marginTop = '0';
    };

    useEffect( () =>
    {
        if ( props.gameArena ) return setGameWhat( 'Arena' );
        if ( props.gameZoo ) return setGameWhat( 'Zoo' );
        if ( props.gameroom ) return setGameWhat( 'Room' );
    }, [ props.gameZoo, props.gameArena, props.gameroom ] );

    useEffect( () =>
    {

        if(props.logged) setUser(props.name)
        window.addEventListener( 'scroll', () =>
        {
            if ( window.scrollY > 50 )
            {
                setBlackNav( true );
            } else setBlackNav( false );
        } );
        return () =>
        {
            window.removeEventListener( 'scroll' );
        };
    }, [] );

    return (
        <>
            <header className={ `header-header-desktop ${ blackNav && "nav-black" }` }>
                <span className='header-header-name'><span style={ { color: '#D95BA0' } }>Game</span> { gameWhat }</span>
                {
                    !props.gameroom ?
                        <input
                            className='header-header-search-input'
                            value={ props.searchItem }
                            onChange={ props.handleChange }
                            maxLength='25'
                            type='search'
                            placeholder='Search for games'
                        /> :
                        <></>
                }
                <nav className='header-nav'>
                    <Link
                        to='/'
                        style={ { color: '#fff', textDecoration: 'none' } }
                        className='home-page-nav-bar-item active'
                    >
                        Home
                    </Link>
                    {
                        props.gameroom ?
                            <>

                                {
                                    props.room === 'Live Stream' ? <Link
                                        to={`/game-room/livestream`}
                                        style={ { color: '#D95BA0', textDecoration: 'none' } }
                                        className='home-page-nav-bar-item'
                                        onClick={ closeNavBar }
                                    >
                                        LiveStream
                                    </Link> : <Link
                                        to='/game-room/livestream'
                                        style={ { color: '#fff', textDecoration: 'none' } }
                                        className='home-page-nav-bar-item'
                                        onClick={ closeNavBar }
                                    >
                                        LiveStream
                                    </Link>
                                }

                                {
                                    props.room === 'Gaming Community' ? <Link
                                        to='/game-room/community'
                                        style={ { color: '#D95BA0', textDecoration: 'none' } }
                                        className='home-page-nav-bar-item'
                                        onClick={ closeNavBar }
                                    >
                                        Gaming Community
                                    </Link> : <Link
                                        to='/game-room/community'
                                        style={ { color: '#fff', textDecoration: 'none' } }
                                        className='home-page-nav-bar-item'
                                        onClick={ closeNavBar }
                                    >
                                        Gaming Community
                                    </Link>
                                }

                                {
                                    props.room === 'Events' ? <Link
                                        to='/game-room/events'
                                        style={ { color: '#D95BA0', textDecoration: 'none' } }
                                        className='home-page-nav-bar-item'
                                        onClick={ closeNavBar }
                                    >
                                        Events
                                    </Link> : <Link
                                        to='/game-room/events'
                                        style={ { color: '#fff', textDecoration: 'none' } }
                                        className='home-page-nav-bar-item'
                                        onClick={ closeNavBar }
                                    >
                                        Events
                                    </Link>
                                }

                                { !props.logged ?
                                    <>
                                        {
                                            props.room === 'Sign In' ? <Link
                                                to='/game-room/signin'
                                                style={ { color: '#D95BA0', textDecoration: 'none' } }
                                                className='home-page-nav-bar-item'
                                                onClick={ closeNavBar }
                                            >
                                                Sign In
                                            </Link> : <Link
                                                to='/game-room/signin'
                                                style={ { color: '#fff', textDecoration: 'none' } }
                                                className='home-page-nav-bar-item'
                                                onClick={ closeNavBar }
                                            >
                                                Sign In
                                            </Link>
                                        }

                                        {
                                            props.room === 'Sign Up' ? <Link
                                                to='/game-room/signup'
                                                style={ { color: '#D95BA0', textDecoration: 'none' } }
                                                className='home-page-nav-bar-item'
                                                onClick={ closeNavBar }
                                            >
                                                Sign Up
                                            </Link> : <Link
                                                to='/game-room/signup'
                                                style={ { color: '#fff', textDecoration: 'none' } }
                                                className='home-page-nav-bar-item'
                                                onClick={ closeNavBar }
                                            >
                                                Sign Up
                                            </Link>
                                        }
                                    </> :
                                    <>
                                        <p className='home-page-nav-bar-item' style={ { color: '#D95BA0', marginRight: 0} }>{ props.name }</p>
                                        <p className='home-page-nav-bar-item' style={ { color: '#D95BA0', fontSize: 30, marginLeft: 0 } }><FontAwesomeIcon icon={ faUserCircle } /></p>
                                    </>
                                }
                            </> :
                            <>
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

                                {
                                    props.gameroom ?
                                        <Link to='/game-room' style={ { color: '#D95BA0', textDecoration: 'none' } } className='home-page-nav-bar-item'>
                                            Game Room
                                        </Link> :
                                        <Link to='/game-room' style={ { color: '#fff', textDecoration: 'none' } } className='home-page-nav-bar-item'>
                                            Game Room
                                        </Link>
                                }
                            </>
                    }

                </nav>



            </header>


            <header className={ `header-header-phone-head ${ blackNav && "nav-black" }` }>

                {
                    !props.gameroom ? <div className='input-con'>
                        <input className='header-header-phone-search-input' maxLength='25' value={ props.searchItem } onChange={ props.handleChange } type='search' placeholder='Search for games' />
                        <button className='input-btn' onClick={ closeSearch }>Close</button>
                    </div> : <></>
                }



                <div className='phone-header-nav'>
                    <nav className='header-phone-nav'>
                        <p className='header-phone-nav-bar-logo'>
                            <img src={ gamezoologo } alt='logo' className='header-phone-logo' />
                        </p>
                        <Link to='/' style={ { color: '#fff', textDecoration: 'none' } } className='home-page-nav-bar-item-phone'>
                            Home
                        </Link>
                        {
                            props.gameroom ?
                                <>

                                    {
                                        props.room === 'Live Stream' ? <Link
                                            to='/game-room/livestream'
                                            style={ { color: '#D95BA0', textDecoration: 'none' } }
                                            className='home-page-nav-bar-item-phone'
                                            onClick={ closeNavBar }
                                        >
                                            LiveStream
                                        </Link> : <Link
                                            to='/game-room/livestream'
                                            style={ { color: '#fff', textDecoration: 'none' } }
                                            className='home-page-nav-bar-item-phone'
                                            onClick={ closeNavBar }
                                        >
                                            LiveStream
                                        </Link>
                                    }

                                    {
                                        props.room === 'Gaming Community' ? <Link
                                            to='/game-room/community'
                                            style={ { color: '#D95BA0', textDecoration: 'none' } }
                                            className='home-page-nav-bar-item-phone'
                                            onClick={ closeNavBar }
                                        >
                                            Gaming Community
                                        </Link> : <Link
                                            to='/game-room/community'
                                            style={ { color: '#fff', textDecoration: 'none' } }
                                            className='home-page-nav-bar-item-phone'
                                            onClick={ closeNavBar }
                                        >
                                            Gaming Community
                                        </Link>
                                    }

                                    {
                                        props.room === 'Events' ? <Link
                                            to='/game-room/events'
                                            style={ { color: '#D95BA0', textDecoration: 'none' } }
                                            className='home-page-nav-bar-item-phone'
                                            onClick={ closeNavBar }
                                        >
                                            Events
                                        </Link> : <Link
                                            to='/game-room/events'
                                            style={ { color: '#fff', textDecoration: 'none' } }
                                            className='home-page-nav-bar-item-phone'
                                            onClick={ closeNavBar }
                                        >
                                            Events
                                        </Link>
                                    }

                                    { !props.logged ?
                                        <>
                                            {
                                                props.room === 'Sign In' ? <Link
                                                    to='/game-room/signin'
                                                    style={ { color: '#D95BA0', textDecoration: 'none' } }
                                                    className='home-page-nav-bar-item-phone'
                                                    onClick={ closeNavBar }
                                                >
                                                    Sign In
                                                </Link> : <Link
                                                    to='/game-room/signin'
                                                    style={ { color: '#fff', textDecoration: 'none' } }
                                                    className='home-page-nav-bar-item-phone'
                                                    onClick={ closeNavBar }
                                                >
                                                    Sign In
                                                </Link>
                                            }

                                            {
                                                props.room === 'Sign Up' ? <Link
                                                    to='/game-room/signup'
                                                    style={ { color: '#D95BA0', textDecoration: 'none' } }
                                                    className='home-page-nav-bar-item-phone'
                                                    onClick={ closeNavBar }
                                                >
                                                    Sign Up
                                                </Link> : <Link
                                                    to='/game-room/signup'
                                                    style={ { color: '#fff', textDecoration: 'none' } }
                                                    className='home-page-nav-bar-item-phone'
                                                    onClick={ closeNavBar }
                                                >
                                                    Sign Up
                                                </Link>
                                            }
                                        </> :
                                        <>
                                            <p className='home-page-nav-bar-item-phone' style={ { color: '#D95BA0', marginLeft: 0 } }>{ props.name }</p>
                                            <p className='home-page-nav-bar-item-phone' style={ { color: '#D95BA0', fontSize: 30, marginLeft: 0 } }><FontAwesomeIcon icon={ faUserCircle } /></p>
                                        </>
                                    }
                                </> :
                                <>
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

                                    {
                                        props.gameroom ?
                                            <Link to='/game-room' style={ { color: '#D95BA0', textDecoration: 'none' } } className='home-page-nav-bar-item-phone'>
                                                Game Room
                                            </Link> :
                                            <Link to='/game-room' style={ { color: '#fff', textDecoration: 'none' } } className='home-page-nav-bar-item-phone'>
                                                Game Room
                                            </Link>
                                    }
                                </>
                        }
                    </nav>

                    <button className='input-btn' onClick={ closeNavBar }>Close</button>
                </div>

                <div className='header-header-phone'>
                    <span className='header-header-phone-name'><span style={ { color: '#D95BA0' } }>Game</span> { gameWhat }</span>
                    {
                        !props.gameroom ?
                            <FontAwesomeIcon icon={ faSearch } className='header-header-phone-search-icon' onClick={ openSearch } /> :
                            <></>
                    }
                    <FontAwesomeIcon icon={ faBarsStaggered } className='header-header-phone-menu-icon' onClick={ openNavBar } />
                </div>
            </header>

            <div className='overlay-nav' onClick={ closeNavBar }>

            </div>
        </>
    );
};

export default NavBar;