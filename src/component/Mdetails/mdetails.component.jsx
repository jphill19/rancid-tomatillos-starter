import './mdetails.css'
import movieDetails from '../../data/movie_details'







const Mdetails = ({movieId}) => {
  console.log(movieDetails)
  const {title,genre_ids,overview,backdrop_path} = movieDetails
  const displayGenres = ()=>{
    return genre_ids.map((genre)=>{
      return (
        <div>
          {genre}
        </div>
      )
    })
  }
  return (
      <div>
        <img src={backdrop_path}/>
        <h2>{title}</h2>
        <div>
          {displayGenres()}
        </div>
        <p>{overview}</p>
      </div>
  );
};

export default Mdetails ;