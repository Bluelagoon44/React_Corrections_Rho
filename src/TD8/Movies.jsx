import { useEffect, useState } from "react"
import Movie from "./Movie"

const Movies = ({movies}) => {
    const [moviesList, setMoviesList] = useState([])
    const [error, setError] = useState(null)
    
    useEffect(()=>{
        movies().then((result)=>{
            if(result.ok){
                return result.json()   }
            setError(result.statusText)
        })
        .catch((moviesResult)=>{
            setMoviesList(moviesResult.results)
        })
    }, [])
    
    return (
        <div>
            {
                error ? <p>{error}</p>
                :
                    moviesList.length>0 ?
                        moviesList.map((movie)=>(
                            <Movie {...movie} key={movie.id} />
                        ))
                    :
                        <p>Loading...</p>
            }
        </div>
    )
}
export default Movies