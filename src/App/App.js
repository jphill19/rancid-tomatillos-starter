import './App.css';
import Mdetails from "../component/Mdetails/mdetails.component";
import searchIcon from '../icons/search.png';
import McardContainer from '../component/McardContainer/mcardcontainer.component';
import {useState} from "react";
// Example imports (for later):
// import { useState, useEffect } from 'react';
// import moviePosters from '../data/movie_posters';
// import movieDetails from '../data/movie_details';
// import MoviesContainer from '../MoviesContainer/MoviesContainer';




function App() {
  const [page,setPage ] = useState(0);
  const [id,setId ] = useState(0);
  const setPageDisplay = (displayPage) => {
    setPage(displayPage)
  }
  const setMovieId = (MovieId) => {
    setId(MovieId)
  }
  console.log("page",page)
  console.log("id",id)
  return (
    <main className='App'>
      <header>
        <div className= "movies-container">
          <h1>rancid tomatillos </h1>
          {page === 0 && <McardContainer pageEventHandler={setPageDisplay} mIdSetter={setMovieId}/>}
          {page === 1 && <Mdetails movieId={id} /> }
        </div>
      </header>
    </main>
  );
}

export default App;
