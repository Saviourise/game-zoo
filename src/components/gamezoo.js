import './gamezoo.css';
import { useState, useEffect } from 'react';
import request from 'superagent';
import { Link, useParams, useNavigate } from 'react-router-dom';
import NavBar from './navBar';

const GameZoo = () =>
{

    // game zoo container style
    const container = {
        width: '100%',
        backgroundColor: '#111',
        paddingTop: 60,
        zIndex: 1000,
    };

    // router url parameter
    let params = useParams();

    // router navigate function
    let navigate = useNavigate();

    // state for the item in the search bar
    const [ searchItem, setSearchItem ] = useState( '' );

    // state for next page url
    const [ nextPage, setNextPage ] = useState( '' );

    // state for previous state url
    const [ previousPage, setPreviousPage ] = useState( '' );

    // state for games url
    const [ games, setGames ] = useState( [] );

    // state for error message 
    const [ errorMessage, setErrorMessage ] = useState( '' );

    // this function is used to search for games from the api
    const addGames = ( item ) =>
    {
        request
            .get( "https://rawg.io/api/games" )
            .query( { key: "f33523355be74be0a810f6f4d59421b6" } )
            .query( { search: item } )
            .query( { page_size: 50 } )
            .then( ( data ) =>
            {
                setGames( data.body.results );
                setNextPage( data.body.next );
                setPreviousPage( data.body.previous );
            } )
            .catch( async ( error ) =>
            {
                error.message.includes( 'Request has been terminated' ) ?
                    setErrorMessage( 'No internet connection, try again!' ) :
                    setErrorMessage( error.message );
            } );
    };


    // this function runs when you are searching for an item. anytime the search item is changed, the function runs
    const handleChange = ( e ) =>
    {
        setGames( [] );

        e.preventDefault();

        let searchValue = e.target.value;

        setSearchItem( searchValue );

        searchValue = searchValue.toLowerCase();

        if ( searchValue === '' )
        {
            defaultGame();
            navigate( `/game-zoo` );
            return setGames( [] );
        }

        if ( searchValue !== '' )
        {
            addGames( searchValue );
        }

    };

    // this function runs on next page button click
    const handleNextPage = () =>
    {
        changePage( nextPage );
    };

    // this function runs on previous page button click
    const handlePreviousPage = () =>
    {
        changePage( previousPage );
    };


    // this function runs when you click next or previous page
    const changePage = ( page ) =>
    {
        setGames( [] );
        request
            .get( page )
            .then( ( data ) =>
            {
                setGames( data.body.results );
                setNextPage( data.body.next );
                setPreviousPage( data.body.previous );
                //console.log(data.body);
            } )
            .catch( async ( error ) =>
            {
                error.message.includes( 'Request has been terminated' ) ?
                    setErrorMessage( 'No internet connection, try again!' ) :
                    setErrorMessage( error.message );
            } );
    };

    // this function runs when there is no search item
    const defaultGame = () =>
    {
        setGames( [] );
        request
            .get( "https://rawg.io/api/games" )
            .query( { key: "f33523355be74be0a810f6f4d59421b6" } )
            .query( { page_size: 50 } )
            .then( ( data ) =>
            {
                setGames( data.body.results );
                setNextPage( data.body.next );
                setPreviousPage( data.body.previous );
            } )
            .catch( async ( error ) =>
            {
                error.message.includes( 'Request has been terminated' ) ?
                    setErrorMessage( 'No internet connection, try again!' ) :
                    setErrorMessage( error.message );
            } );
    };


    /*


        create new route page for gamezoo next and previous pages, so that if you click next and you go back, it takes you back to the previous page...


    */








    // run when page loads
    useEffect( () =>
    {
        // check if there is a search item in the url, and run defaultGame if false
        if ( params.search === undefined ) return defaultGame();

        // if there is a search item in the url, store it as the search item
        setSearchItem( params.search );

        // if there is a search item in the url, search for the item from the api with this function
        addGames( params.search );

        // when the page loads, set error message to nothing
        setErrorMessage( '' );

    }, [ params.search ] );


    return (
        <div style={ container }>
            <NavBar searchItem={ searchItem } handleChange={ handleChange } gameZoo />
            {
                searchItem.length !== 0 ?
                    <h2 className='result-header'>Search Result For { searchItem }</h2>
                    : <h2 className='result-header'>All Games</h2>
            }

            <section className='games-list-container'>
                {
                    games.length !== 0 ?
                        games.map( ( game ) =>
                        {
                            return (

                                <section className='game-card' key={ game.id }>
                                    <Link
                                        to={ `/game-zoo/${ game.slug }` }
                                        style={ { color: '#D95BA0', textDecoration: 'none' } }
                                    >
                                        <img className='imageFrame' src={ game.background_image } alt={ game.name } />
                                        <div className='desc'>
                                            <h4 className="h4" style={ { textDecoration: 'none' } }>{ game.name }</h4>
                                        </div>
                                    </Link>
                                </section>

                            );
                        } ) :
                        <>
                            {
                                errorMessage === '' ?
                                    <section className='nothing'>
                                        <div className='loader'></div>
                                    </section> :
                                    <section className='nothing'>
                                        { errorMessage }
                                    </section>

                            }

                        </>
                }
            </section>

            <div style={ { textAlign: 'center' } }>
                {
                    errorMessage !== '' || previousPage === null ?
                        <></> :
                        <button
                            className='previous-page'
                            onClick={ handlePreviousPage }
                        >
                            Previous Page
                        </button>
                }

                {
                    errorMessage !== '' || nextPage === null ?
                        <></> :
                        <button
                            className='next-page'
                            onClick={ handleNextPage }
                        >
                            Next Page
                        </button>
                }
            </div>

        </div>
    );
};


export default GameZoo;