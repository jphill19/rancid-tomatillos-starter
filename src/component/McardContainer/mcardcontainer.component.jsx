import './mcardcontainer.component.css'

import moviePosters from '../../data/movie_posters'
import Mcard from '../Mcard/mcard.component'
import { Fragment } from 'react'

export default function McardContainer () {


  const movieCard = () => {
    return moviePosters.map((data) => {
      return (
        <Mcard 
          key={data.id}
          title={data.title}
          vote_count={data.vote_count}
          image={data.poster_path}
        />
      );
    });
  };
  return (
    <div className='mcard-container'>
      { movieCard() }
    </div>
  )
}