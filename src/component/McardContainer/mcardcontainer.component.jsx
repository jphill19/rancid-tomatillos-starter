import './mcardcontainer.css'
import Mcard from '../Mcard/mcard.component'
import { Fragment } from 'react'
import {useState} from "react";
import {useEffect} from "react";

const McardContainer = ({pageEventHandler,mIdSetter}) => {
  const [moviesData,setMoviesData ] = useState([]);

  useEffect (()=>{
    const fetchData = async ()=> {
      try {
        const moviesResponse = await fetch(
          `https://rancid-tomatillos-api-cc6f59111a05.herokuapp.com/api/v1/movies`
        )
        const movies = await moviesResponse.json()
        setMoviesData([...moviesData, ...movies])
      } catch (err) {
        console.log(err, "err")
      }
    }
    fetchData()
  },[])
  
  // console.log(moviesData)

  const movieCard = () => {
    return moviesData.map((data) => {
      return (
        <Mcard 
          key={data.id}
          uniqueId={data.id}
          title={data.title}
          vote_count={data.vote_count}
          image={data.poster_path}
          mIdSetter={mIdSetter}
          pageEventHandler={pageEventHandler}
        />
      );
    });
  };

  return (
    <div className='mcard-container'>
      { movieCard() }
    </div>
  );
};

export default McardContainer;