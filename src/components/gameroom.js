import './gameroom.css';
import NavBar from './navBar';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const GameRoom = () =>
{

    // router url parameter
    let params = useParams();

    // state for the type of room
    const [ room, setRoom ] = useState( 'Game Room' );

    useEffect( () =>
    {
        if ( params.room === 'livestream' ) return setRoom( 'Live Stream' );
        if ( params.room === 'community' ) return setRoom( 'Gaming Community' );
        if ( params.room === 'events' ) return setRoom( 'Events' );
        if ( params.room === 'signin' ) return setRoom( 'Sign In' );
        if ( params.room === 'signup' ) return setRoom( 'Sign Up' );
    }, [ params ] );

    return (
        <div className='game-room-con'>
            <NavBar gameroom room={ room } />
            <h4 className='game-room-h4'>{ room }</h4>
            <p className='game-room-p'>Coming Soon</p>
        </div>
    );
};

export default GameRoom;