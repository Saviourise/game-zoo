import './gameroom.css';
import NavBar from './navBar';
import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

const GameRoom = () =>
{

    // router url parameter
    let params = useParams();

    let navigate = useNavigate();

    // state for the type of room
    const [ room, setRoom ] = useState( 'Game Room' );
    const [ name, setName ] = useState( '' );
    const [ logged, setLogged ] = useState( false );

    useEffect( () =>
    {
        fetch( 'https://guarded-lake-44093.herokuapp.com/user', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': params.token
            },
        } )
            .then( res => res.json() )
            .then(
                data =>
                {

                    if ( data.error )
                    {
                        return setLogged( false );
                        //console.log(data)
                        //return navigate('signup')
                    }

                    setName( data.user );
                    return setLogged( true );
                }
            );

    }, [ params ] );

    // useEffect( () =>
    // {
    //     if ( params.room === 'livestream' ) return setRoom( 'Live Stream' );
    //     if ( params.room === 'community' ) return setRoom( 'Gaming Community' );
    //     if ( params.room === 'events' ) return setRoom( 'Events' );
    //     if ( params.room === 'signin' ) return setRoom( 'Sign In' );
    //     if ( params.room === 'signup' ) return setRoom( 'Sign Up' );
    // }, [ params ] );

    return (
        <div className='game-room-con'>
            <NavBar gameroom room={ room } token={ params.token } logged={ logged } name={ name } />
            { !logged ? <>
                    <Link
                        to='/game-room/signin'
                        style={ { color: '#fff', textDecoration: 'none' } }
                        className='sign-in-btn-room'
                    >
                        Sign In
                    </Link>
                    <Link
                        to='/game-room/signup'
                        style={ { color: '#fff', textDecoration: 'none' } }
                        className='sign-up-btn-room'
                    >
                        Sign Up
                    </Link>
            </> : <><h4 className='game-room-name'>Welcome { name }</h4>
                <h4 className='game-room-h4'>{ room }</h4>
                <p className='game-room-p'>Coming Soon</p></>
            }
            
        </div>
    );
};

export default GameRoom;