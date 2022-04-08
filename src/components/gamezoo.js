import './gamezoo.css'
import { useState, useEffect } from 'react';
import request from 'superagent';
import { Link, useParams, useNavigate } from 'react-router-dom';

const GameZoo = () => {

    const container = {
        width: '100%',
        height: '100vh',
        backgroundColor: 'black',
        overflowY: 'scroll',
    };

    let params = useParams();

    let navigate = useNavigate();

    const [searchItem, setSearchItem] = useState('')

    const [nextPage, setNextPage] = useState('')

    const [previousPage, setPreviousPage] = useState('')

    const [games, setGames] = useState([])

    const [errorMessage, setErrorMessage] = useState('')

    const addGames = (item) => {
        request
        .get("https://rawg.io/api/games")
        .query({ key: "f33523355be74be0a810f6f4d59421b6" })
        .query({ search: item })
        .query({ page_size: 50 })
        .then((data) => {
            setGames(data.body.results)
            setNextPage(data.body.next)
            setPreviousPage(data.body.previous)
            //console.log(data.body.results)
        })
        .catch(async (error) => {
            setErrorMessage(error.message)
        })
    }
    

    const handleChange = (e) => {
        setGames([])
        
        e.preventDefault();

        let searchValue = e.target.value;

        setSearchItem(searchValue);

        searchValue = searchValue.toLowerCase();

        if (searchValue === '') {
            defaultGame()
            navigate(`/game-zoo`)
            return setGames([])
        }

        if (searchValue != '') {
            //navigate(`/game-zoo/search/${searchValue}`)
            addGames(searchValue)
        }
        
    }

    const handleNextPage = () => {
        changePage(nextPage)
    }

    const handlePreviousPage = () => {
        changePage(previousPage)
    }

    const changePage = (page) => {
        setGames([])
        request
        .get(page)
        .then((data) => {
            setGames(data.body.results)
            setNextPage(data.body.next)
            setPreviousPage(data.body.previous)
            //console.log(data.body);
        })
        .catch(async (error) => {
            setErrorMessage(error.message)
        })
    }

    const defaultGame = () => {
        setGames([])
        request
        .get("https://rawg.io/api/games")
        .query({ key: "f33523355be74be0a810f6f4d59421b6" })
        .query({ page_size: 50 })
        .then((data) => {
            setGames(data.body.results)
            setNextPage(data.body.next)
            setPreviousPage(data.body.previous)
            //console.log(data.body.previous);
        })
        .catch(async (error) => {
            setErrorMessage(error.message)
        })
    }

    useEffect(() => {
        if (params.search === undefined) return defaultGame()

        setSearchItem(params.search)
        addGames(params.search)
    }, [])
    
    
    return (
        <div style={container}>
            <header className='game-zoo-header'>
                <span className='game-zoo-header-name'><span style={{color: '#D95BA0'}}>Game</span> Zoo</span>
                <input className='game-zoo-header-search-input' value={searchItem} onChange={handleChange} type='search' placeholder='Search for games'/>
            </header>

            {
                searchItem.length != 0 ?
                <h2 className='result-header'>Search Result For {searchItem}</h2>
                : <h2 className='result-header'>All Games</h2>
            }
            
            <section className='games-list-container'>
                {
                    games.length != 0 ?
                    games.map((game) => {
                        return (
                            
                            <section className='game-card' key={game.id}>
                                <Link
                                    to={ `/game-zoo/${ game.slug }` }
                                >
                                    <img className='imageFrame' src={game.background_image} />
                                    <div className='desc'>
                                        <h4 className="h4" style={{textDecoration: 'none'}}>{game.name}</h4>
                                    </div>
                                </Link>
                            </section>
                            
                        )
                    }) : 
                        <>
                            {
                                errorMessage === '' ? 
                                    <section className='nothing'>
                                        <div className='loader'></div>
                                    </section> : 
                                    <section className='nothing'>
                                    {errorMessage}
                                    </section>

                            }
                            
                        </>
                }
            </section>

            <div style={{textAlign: 'center'}}>
                {
                    previousPage === null ? 
                    <></> :
                    <button 
                        className='previous-page' 
                        onClick={handlePreviousPage}
                    >
                        Previous Page
                    </button>
                }
                
                {
                    nextPage === null ? 
                    <></> :
                    <button 
                        className='next-page' 
                        onClick={handleNextPage}
                    >
                       Next Page
                    </button>
                }
            </div>
            
        </div>
    );
};


export default GameZoo;