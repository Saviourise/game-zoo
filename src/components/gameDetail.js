import './gameDetail.css'
import { useState, useEffect } from 'react';
import request from 'superagent';
import { useParams } from "react-router-dom";

const GameDatail = () => {
        
    const [gameDetail, setgameDetail] = useState({})
    const [gameGenres, setgameGenres] = useState([])
    const [gameTags, setgameTags] = useState([])
    const [gamePlatforms, setgamePlatforms] = useState([])
    const [gameVids, setgameVids] = useState('')

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
            //console.log(data.body)
        })
        .catch(async (error) => {
            alert(error.message)
        })
    }

    const getTrailer = () => {
        const gameName = params.slug + " trailer";
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
        .catch(async (_error) => {
            alert(_error.message)
        })
    }

    useEffect(() => {
      getSlug()
      getTrailer()
    }, [])
    

    return (
        <div className='game-detail-container'>
            
            <div className='details-con'>
                <h2 className='game-name'>
                    {
                        gameDetail.name
                    }
                </h2>
                <p className='game-genre'>
                    <span className='genre'>
                        Genre: 
                    </span>
                    {
                        gameGenres.map((gen) => {
                            return (
                                <span className='genres'>{gen.name}, </span>
                            )
                        })
                    }
                </p>
                <p className='des'>Description</p>
                <p className='game-des'>{gameDetail.description_raw}</p>

                <p className='des'>Operating Systems</p>
                {
                    gamePlatforms.map((platform) => {
                        return (
                            <details>
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
                        gameTags.map((tag) => {
                            return (
                                <span className='tags'>{tag.name.replace('-', ' ')}</span>
                            )
                        })
                    }
                </div>
            </div>
            <div className='trailer-con'>
                <p className='trailer-name'>Trailer</p>

                
                <iframe className='videosFrame'
                    src={`https://www.youtube.com/embed/${gameVids}`}
                    allowFullScreen="allowfullscreen"
                    frameBorder="0"
                >
                </iframe>


                <p className='game-rating'>
                    <span className='rating'> 
                        Rating: 
                    </span>
                    {gameDetail.rating === 0 ? <>None</> : <>{gameDetail.rating} / 5</>}
                </p>
                <p className='website'>
                    <a className='website' href={`${gameDetail.website}`} target='_blank'>
                        Go to website
                    </a>                   
                </p>
            </div>
        </div>
    )
}

export default GameDatail;