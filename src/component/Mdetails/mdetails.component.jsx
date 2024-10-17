import './mdetails.css'
import movieDetails from '../../data/movie_details'







const Mdetails = ({movieId}) => {
  console.log(movieDetails)
  const {title,genre_ids,overview,backdrop_path} = movieDetails
  const displayGenres = ()=>{
    return genre_ids.map((genre)=>{
      return (
        <div className = "mdetails-genre">
          {genre}
        </div>
      )
    })
  }
  return (
    <div className="mdetails-container">
      <img src={backdrop_path} alt={title} className="mdetails-backdrop" />
      <h2 className="mdetails-title">{title}</h2>
      <div className="mdetails-genres">
        {displayGenres()}
      </div>
      <p className="mdetails-overview">{overview}</p>
    </div>
  );
};

export default Mdetails ;