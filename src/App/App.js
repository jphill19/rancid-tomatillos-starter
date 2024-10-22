import './App.css';
import Mdetails from "../component/Mdetails/mdetails.component";
import searchIcon from '../icons/search.png';
import homeIcon from '../icons/home.png';
import McardContainer from '../component/McardContainer/mcardcontainer.component';
import {useState} from "react";
import NavBar from '../component/navbar/navbar.component';
// Example imports (for later):
// import { useState, useEffect } from 'react';
// import moviePosters from '../data/movie_posters';
// import movieDetails from '../data/movie_details';
// import MoviesContainer from '../MoviesContainer/MoviesContainer';




function App() {
  const [page,setPage ] = useState(0);
  const [id,setId ] = useState(0);
  const [search, setSearch] = useState('')

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
          {/* <div className ='nav-bar'> 
            <h1>rancid tomatillos </h1>
            { page === 1 && <img
              src={homeIcon}
              alt={'home button'}
              onClick={()=>setPageDisplay(0)}
              className="home-button"
            /> 
            }
            { page === 0  && <input
              type="text"
              placeholder=""
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />}
          </div> */}
          <NavBar search={search} searchManipulation={setSearch} page={page} pageManipulation={setPageDisplay}/>
          {page === 0 && <McardContainer pageEventHandler={setPageDisplay} mIdSetter={setMovieId} query={search}/>}
          {page === 1 && <Mdetails movieId={id} /> }
        </div>
      </header>
    </main>
  );
}

export default App;
