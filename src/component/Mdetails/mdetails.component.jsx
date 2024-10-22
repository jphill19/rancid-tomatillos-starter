import './mdetails.css'
import {useEffect, useState} from "react";

const emptyMovie = {
  title:"",
  genre_ids:[],
  overview:"",
  backdrop_path:"",
}

const Mdetails = ({movieId}) => {
  const [movieDetails,setMovieDetails ] = useState(emptyMovie);
  const [error,setErr ] = useState('');

  useEffect (()=>{

    const fetchData = async ()=> {
      try {
        const moviesResponse = await fetch(
          `https://rancid-tomatillos-api-cc6f59111a05.herokuapp.com/api/v1/movies/${movieId}`
        )
        const movie = await moviesResponse.json()
        setMovieDetails(movie)
      } catch (err) {
        console.log(err, "err")
        setErr(err.message)
      }
    }
    fetchData()
  },[])

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
      {error && <h2>error</h2>}

      <img src={backdrop_path} alt={title} className="mdetails-backdrop" />
      <h2 className="mdetails-title">{title}</h2>
      <div className="mdetails-genres">
        {error.length < 1 && displayGenres()}
      </div>
      <p className="mdetails-overview">{overview}</p>
    </div>
  );
};

export default Mdetails ;