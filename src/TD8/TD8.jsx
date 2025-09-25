import { popularMovies } from "../services/movies"
import Movies from "./Movies"

const TD8 = () => {
  const popularMoviesResult = async()=>(await popularMovies())
  return (
    <Movies movies={popularMoviesResult}/>
  )
}
export default TD8