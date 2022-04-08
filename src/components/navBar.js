import './navBar.css';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const NavBar = ( props ) =>
{

    const [ gameWhat, setGameWhat ] = useState('');

    useEffect( () =>
    {
        if ( props.gameArena ) return setGameWhat( 'Arena' );
        if ( props.gameZoo ) return setGameWhat( 'Zoo' );
    }, []);

    return (
        <header className='header-header'>
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
    );
};

export default NavBar;