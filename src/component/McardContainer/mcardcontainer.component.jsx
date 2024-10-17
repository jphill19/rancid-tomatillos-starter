import './mcardcontainer.css'
import moviePosters from '../../data/movie_posters'
import Mcard from '../Mcard/mcard.component'
import { Fragment } from 'react'

const McardContainer = ({pageEventHandler,mIdSetter}) => {

  const movieCard = () => {
    return moviePosters.map((data) => {
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