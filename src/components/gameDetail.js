import './gameDetail.css'
import { useState, useEffect } from 'react';
import request from 'superagent';
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const GameDatail = () => {
        
    const [gameDetail, setgameDetail] = useState({})
    const [gameGenres, setgameGenres] = useState([])
    const [gameTags, setgameTags] = useState([])
    const [gamePlatforms, setgamePlatforms] = useState([])
    const [gameVids, setgameVids] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    let params = useParams();

    const getSlug = () => {
        getGameDetails(params.slug)
    }

    const getGameDetails = (game) => {
        if (game === '') return

        request
        .get(`https://rawg.io/api/games/${game}`)
        .query({ key: "f33523355be74be0a810f6f4d59421b6" })
        .then((data) => {
            setgameDetail(data.body)
            setgameGenres(data.body.genres)
            setgameTags(data.body.tags)
            setgamePlatforms(data.body.platforms)
            //console.log(data)
        })
        .catch(async (error) => {
            setErrorMessage(error.message)
        })
    }

    const getTrailer = () => {
        const gameName = params.slug + " game official trailer";
        //console.log(gameName)
        request
        .get("https://www.googleapis.com/youtube/v3/search")
        .query({ key: "AIzaSyCKaraln3if3P7V-8sVLiGdOifFnjM6Uh4" })
        .query({ type: "video" })
        .query({ q: gameName })
        .query({ maxResults: 1 })
        .then((datavid) => {
            setgameVids(datavid.body.items[0].id.videoId)
        })
        .catch(async (error) => {
            setErrorMessage(error.message)
        })
    }

    useEffect(() => {
      getSlug()
      getTrailer()
    }, [])
    

    return (
        <>
            {
                Object.keys(gameDetail).length === 0 ? 
                    <section className='nothing-yet'>
                        {
                            errorMessage === '' ?
                                <>
                                    <div className='loading'></div>
                                    <div style={{marginTop: 10,}}>Loading</div>
                                </> :
                                <div>{errorMessage}</div>
                                
                        }
                        
                    </section> : 
                    <GameDetails 
                        name={gameDetail.name} 
                        genres={gameGenres} 
                        des={gameDetail.description_raw}
                        platforms={gamePlatforms}
                        tags={gameTags}
                        rating={gameDetail.rating}
                        website={gameDetail.website}
                        gameVids={gameVids}
                    />
            }
        </>
    )
}

const GameDetails = (props) => {
    return (
        <div className='game-detail-container'>
            
            <div className='details-con'>
                <h2 className='game-name'>
                    {props.name}
                </h2>
                <p className='game-genre'>
                    <span className='genre'>
                        Genre: 
                    </span>
                    {
                        props.genres.map((gen, i) => {
                            return (
                                <span key={i} className='genres'>{gen.name}, </span>
                            )
                        })
                    }
                </p>
                <p className='des'>Description</p>
                <p className='game-des'>{props.des}</p>

                <p className='des'>Operating Systems</p>
                {
                    props.platforms.map((platform, i) => {
                        return (
                            <details key={i}>
                                <summary>{platform.platform.name}</summary>
                                <p className='min-req'>{platform.requirements.minimum}</p>
                            </details>
                        )
                    })
                }

                <div className='game-tags'>
                    <span className='tag'>
                        Tags: 
                    </span>
                    {
                        props.tags.map((tag, i) => {
                            return (
                                <span key={i} className='tags'>{tag.name.replace('-', ' ')}</span>
                            )
                        })
                    }
                </div>
            </div>
            <div className='trailer-con'>
                <p className='trailer-name'>Trailer</p>

                
                <iframe className='videosFrame'
                    src={`https://www.youtube.com/embed/${props.gameVids}`}
                    allowFullScreen="allowfullscreen"
                    frameBorder="0"
                    title={props.name}
                >
                </iframe>


                <p className='game-rating'>
                    <span className='rating'> 
                        Rating: 
                    </span>
                    {props.rating === 0 ? <>None</> : <>{props.rating} / 5</>}
                </p>
                <p className='website'>
                    <button className='web-btn'>
                        <FontAwesomeIcon style={{color: '#fff', marginRight: 10}} icon={faPaperPlane} />
                        <a className='website' href={`${props.website}`} target='_blank'>
                            Go to website
                        </a>     
                    </button>              
                </p>
            </div>
        </div>
    )
}

export default GameDatail;