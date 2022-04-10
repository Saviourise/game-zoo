import { useEffect, useState } from 'react';
import './gamearena.css';
import NavBar from './navBar';

function GameArena ()
{

    const [ searchItem, setSearchItem ] = useState( '' );

    const [ games, setGames ] = useState( [] );

    const [ filteredGames, setFilteredGames ] = useState( [] );

    const [ empty, setEmpty ] = useState( 'Uh Oh! This Place Is Empty!!' );

    useEffect( () =>
    {
        addGames();
    }, [] );

    const addGames = () =>
    {
        const gamesArray = [
            {
                gameName: 'PES 2022',
                gameVideoId: 'mKak2Kk5eDI'
            },
            {
                gameName: 'Elden Ring',
                gameVideoId: 'pDUZNP52obY'
            },
            {
                gameName: 'Assassins Creed - Freedom Cry (2014)',
                gameVideoId: 'FLayHHZ0hLQ'
            },
            {
                gameName: 'Assassins Creed IV (2013)',
                gameVideoId: 'WdKIQSwkYHI'
            },
            {
                gameName: 'ASSASSINS CREED ODDYSY',
                gameVideoId: 's_SJZSAtLBA'
            },
            {
                gameName: 'Assassins Creed - Revelations (2011)',
                gameVideoId: 'HMsbMK9Odoc'
            },
            {
                gameName: 'ASSASSINS CREED ROGUE',
                gameVideoId: 'xtIEo2CbaI0'
            },
            {
                gameName: 'ASSASSINS CREED SYNDICATE',
                gameVideoId: 'WTBbwgsyxvg'
            },
            {
                gameName: 'Assassin\'s Creed - Unity',
                gameVideoId: 'xzCEdSKMkdU'
            },
            {
                gameName: 'BATMAN TELLTALE',
                gameVideoId: 'hXVkXYaKqxM'
            },
            {
                gameName: 'BATTLE FIELD  2 BAD COMPANY',
                gameVideoId: 'gApu9Xa3dgw'
            },
            {
                gameName: 'BATTLE FIELD V',
                gameVideoId: 'LCZLabOywYU'
            },
            {
                gameName: 'CALL OF DUTY 10 - ADVANCED WARFARE',
                gameVideoId: 'sFu5qXMuaJU'
            },
            {
                gameName: 'Call Of Duty 13 - Modern Warfare Remastered',
                gameVideoId: 'l-eMi1xJ2dM'
            },
            {
                gameName: 'CALL OF DUTY 7 - BLACK OPS',
                gameVideoId: 'OPTOVQFRggI'
            },
            {
                gameName: 'CALL OF DUTY 9 - GHOSTS',
                gameVideoId: 'Zxnx3W-HA18'
            },
        ];

        setGames( gamesArray );
        setFilteredGames( gamesArray );
    };


    const handleChange = ( e ) =>
    {
        let searchValue = e.target.value;

        setSearchItem( searchValue );

        searchValue = searchValue.toLowerCase();

        if ( searchValue === '' )
        {
            setEmpty( 'Uh Oh! This Place Is Empty!!' );
            return setFilteredGames( games );
        }


        searchValue = searchValue.replaceAll( ' ', '' );
        const filtered = games.filter( value =>
        {
            return value.gameName.toLowerCase().replaceAll( ' ', '' ).replaceAll( '\'', '' ).match( new RegExp( searchValue, 'g' ) );
        } );

        setFilteredGames( filtered );

        setEmpty( `Could not find item '${ e.target.value }'!` );

        //console.log(filtered);
    };

    return (
        <div className='game-arena-container'>
            <NavBar searchItem={ searchItem } handleChange={ handleChange } gameArena />

            {
                searchItem.length !== 0 ?
                    <h2 className='result-header'>Search Result For { searchItem }</h2>
                    : <h2 className='result-header'>All Games</h2>
            }

            <section className='games-list-container'>
                {
                    filteredGames.length !== 0 ?
                        filteredGames.map( ( game, i ) =>
                        {
                            return (
                                <section className='game-card' key={ i }>
                                    <iframe className='videoFrame'
                                        src={ `https://www.youtube.com/embed/${ game.gameVideoId }` }
                                        allowFullScreen="allowfullscreen"
                                        frameBorder="0"
                                        title={i}
                                    >
                                    </iframe>
                                    <div className='desc'>
                                        <h4 className="h4">{ game.gameName }</h4>
                                    </div>
                                </section>
                            );
                        } ) :
                        <section className='nothing'>{ empty }</section>

                }
            </section>
        </div>
    );

}

export default GameArena;