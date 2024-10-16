import './App.css';
import searchIcon from '../icons/search.png';
import McardContainer from '../component/McardContainer/mcardcontainer.component';

// Example imports (for later):
// import { useState, useEffect } from 'react';
// import moviePosters from '../data/movie_posters';
// import movieDetails from '../data/movie_details';
// import MoviesContainer from '../MoviesContainer/MoviesContainer';

function App() {
  return (
    <main className='App'>
      <header>
        <div className= "movies-container">
            <h1>rancid tomatillos</h1>
            <McardContainer />
        </div>
      </header>
    </main>
  );
}

export default App;
