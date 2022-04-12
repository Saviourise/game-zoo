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
        return;
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
            {
                gameName: 'CALL OF DUTY INFINITY WARFARE',
                gameVideoId: ''
            },
            {
                gameName: 'CALL OF DUTY WWII',
                gameVideoId: ''
            },
            {
                gameName: 'COMPANY OF HEROES 2',
                gameVideoId: ''
            },
            {
                gameName: 'CRYSIS 1',
                gameVideoId: ''
            },
            {
                gameName: 'CRYSIS 2',
                gameVideoId: ''
            },
            {
                gameName: 'CRYSIS 3',
                gameVideoId: ''
            },
            {
                gameName: 'DARKSIDERS 3',
                gameVideoId: ''
            },
            {
                gameName: 'DARKSIDERS II',
                gameVideoId: ''
            },
            {
                gameName: 'DEADPOOL',
                gameVideoId: ''
            },
            {
                gameName: 'DEVIL MAY CRY',
                gameVideoId: ''
            },
            {
                gameName: 'DISHORNED',
                gameVideoId: ''
            },
            {
                gameName: 'FAR CRY 1',
                gameVideoId: ''
            },
            {
                gameName: 'FAR CRY 2',
                gameVideoId: ''
            },
            {
                gameName: 'FAR CRY 3',
                gameVideoId: ''
            },
            {
                gameName: 'FAR CRY 4',
                gameVideoId: ''
            },
            {
                gameName: 'FAR CRY 5',
                gameVideoId: ''
            },
            {
                gameName: 'FIFA 14',
                gameVideoId: ''
            },
            {
                gameName: 'FIFA 15',
                gameVideoId: ''
            },
            {
                gameName: 'FIFA 19',
                gameVideoId: ''
            },
            {
                gameName: 'FIFA 22',
                gameVideoId: ''
            },
            {
                gameName: 'GHOST RECON-FUTURE SOLDIER',
                gameVideoId: ''
            },
            {
                gameName: 'HITMAN 5-ABSOLUTION',
                gameVideoId: ''
            },
            {
                gameName: 'INJUSTICE 2',
                gameVideoId: ''
            },
            {
                gameName: 'INJUSTICE-GODS AMONG US',
                gameVideoId: ''
            },
            {
                gameName: 'JUMP FORCE',
                gameVideoId: ''
            },
            {
                gameName: 'MASS EFFECT 3',
                gameVideoId: ''
            },
            {
                gameName: 'MIDDLE EARTH-SHADOW OF MORDOR',
                gameVideoId: ''
            },
            {
                gameName: 'MORTAL KOMBAT COMPLETE EDITION',
                gameVideoId: ''
            },
            {
                gameName: 'MORTAL KOMBAT XL',
                gameVideoId: ''
            },
            {
                gameName: 'NARUTO STORM 4',
                gameVideoId: ''
            },
            {
                gameName: 'NARUTO SHIPPUDEN Ultimate Ninja STORM 3 Full Burst',
                gameVideoId: ''
            },
            {
                gameName: 'METAL GEAR V- PHANTOM PAIN',
                gameVideoId: ''
            },
            {
                gameName: 'PES 19 SETUP',
                gameVideoId: ''
            },
            {
                gameName: 'Pro Evolution Soccer 2017 Patch',
                gameVideoId: ''
            },
            {
                gameName: 'PRO EVOLUTION SOCCER[s]',
                gameVideoId: ''
            },
            {
                gameName: 'RYSE-SON OF ROME',
                gameVideoId: ''
            },
            {
                gameName: 'SAINT ROW IV - Game of the Century Edition',
                gameVideoId: ''
            },
            {
                gameName: 'SPEC OPS THE LINE',
                gameVideoId: ''
            },
            {
                gameName: 'TEST DRIVE UNLIMITED',
                gameVideoId: ''
            },
            {
                gameName: 'THE WITCHER 2 - Assassins of Kings - Enhanced Edition',
                gameVideoId: ''
            },
            {
                gameName: 'THE WITCHER 3 - WILD HUNT (GOTY)',
                gameVideoId: ''
            },
            {
                gameName: 'WATCH DOGS 2',
                gameVideoId: ''
            },
            {
                gameName: 'ASSASSINS CREED -ORIGINS',
                gameVideoId: ''
            },
            {
                gameName: 'BATMAN-ARKHAM ORIGINS',
                gameVideoId: ''
            },
            {
                gameName: 'BIOMUTANT',
                gameVideoId: ''
            },
            {
                gameName: 'Cyberpunk 2077 [FitGirl Repack]',
                gameVideoId: ''
            },
            {
                gameName: 'DARK SOULS 2 - SCHOLAR OF THE FIRST SIN',
                gameVideoId: ''
            },
            {
                gameName: 'Dead Cells',
                gameVideoId: ''
            },
            {
                gameName: 'Far Cry - New Dawn',
                gameVideoId: ''
            },
            {
                gameName: 'GOD OF WAR',
                gameVideoId: ''
            },
            {
                gameName: 'GTA V',
                gameVideoId: ''
            },
            {
                gameName: 'JUMP FORCE',
                gameVideoId: ''
            },
            {
                gameName: 'JUMP FORCE - ULTIMATE EDITION',
                gameVideoId: ''
            },
            {
                gameName: 'Just Cause 2',
                gameVideoId: ''
            },
            {
                gameName: 'MIDDLE EARTH - SHADOW OF WAR',
                gameVideoId: ''
            },
            {
                gameName: 'MORTAL KOMBAT 9 - KOMPLETE EDITION',
                gameVideoId: ''
            },
            {
                gameName: 'Need for Speed Rivals',
                gameVideoId: ''
            },
            {
                gameName: 'NieR - Automata',
                gameVideoId: ''
            },
            {
                gameName: 'Oriand The Blind Forest - Definitive Edition',
                gameVideoId: ''
            },
            {
                gameName: 'PROTOTYPE',
                gameVideoId: ''
            },
            {
                gameName: 'PROTOTYPE 2',
                gameVideoId: ''
            },
            {
                gameName: 'Red Dead Redemption 2',
                gameVideoId: ''
            },
            {
                gameName: 'SAINTRW III',
                gameVideoId: ''
            },
            {
                gameName: 'Sekiro - Shadows Die Twice',
                gameVideoId: ''
            },
            {
                gameName: 'THE AMAZING SPIDER MAN',
                gameVideoId: ''
            },
            {
                gameName: 'TOMB RAIDER-SURVIVAL EDITION',
                gameVideoId: ''
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
                                        title={ i }
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