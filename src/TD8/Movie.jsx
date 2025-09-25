const Movie = ({title, poster_path, vote_average, overview}) => {
  return (
    <div>
        <h2>{title}</h2>
        <img src={"https://image.tmdb.org/t/p/w500/" + poster_path} alt={title} />
        <p>{vote_average}</p>
        <p>{overview}</p>
    </div>
  )
}
export default Movie