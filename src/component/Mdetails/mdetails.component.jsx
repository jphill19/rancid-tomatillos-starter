import './mdetails.css'
import {useEffect, useState} from "react";
import { useParams } from 'react-router-dom';

const emptyMovie = {
  title:"",
  genre_ids:[],
  overview:"",
  backdrop_path:"",
}

const Mdetails = () => {
  const { movieId } = useParams();
  const [movieDetails,setMovieDetails ] = useState(emptyMovie);
  const [error,setErr ] = useState('');

  console.log(useParams())

  useEffect (()=>{

    const fetchData = async ()=> {
      try {
        const moviesResponse = await fetch(
          `https://rancid-tomatillos-api-cc6f59111a05.herokuapp.com/api/v1/movies/${movieId}`
        )

        if (!moviesResponse.ok) {
          throw new Error("Failed to fetch movie details");
        }
        const movie = await moviesResponse.json()
        setMovieDetails(movie)
        setErr('')
      } catch (err) {
        setErr(err.message)
      }
    }
    fetchData()
  },[movieId])

  const {title,genre_ids = [],overview,backdrop_path} = movieDetails
  const displayGenres = ()=>{
    return genre_ids.map((genre)=>{
      return (
        <div className = "mdetails-genre">
          {genre}
        </div>
      )
    })
  }
  console.log("error", error)
  return (
    <div className="mdetails-container">
      {error ? (
        <h2 className='error-message'>Error: {error}</h2>
      ) : (
        <>
          <img src={backdrop_path} alt={title} className="mdetails-backdrop" />
          <h2 className="mdetails-title">{title}</h2>
          <div className="mdetails-genres">
            {displayGenres()}
          </div>
          <p className="mdetails-overview">{overview}</p>
        </>
      )}
    </div>

  );
};

export default Mdetails ;