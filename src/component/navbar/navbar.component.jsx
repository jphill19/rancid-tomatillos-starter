import homeIcon from '../../icons/home.png';
import searchIcon from '../../icons/search.png';
import './navbar.css'
import { useNavigate } from 'react-router-dom';
import { useMemo, useDeferredValue } from 'react';

const NavBar = ({ search, isHome, searchManipulation}) => {
  const navigate = useNavigate()

  const deferredSearch = useDeferredValue(search);

  const memoizedHeader = useMemo(() => (
    <h1>rancid tomatillos</h1>
  ), [])

  return (
    <nav className ='nav-bar' aria-label='Main Navigation'> 
      { memoizedHeader}
      { isHome === false && 
      <button
        onClick= {()=> {
          navigate('/')
        }}
        className='home-button'
        aria-label='Go to Home'
      >
        <img
          src={homeIcon}
          alt='Home icon'
        />
      </button>
      }
      { isHome  &&
        <div className = 'searchBox'>
          <img
            src={searchIcon}
            alt='Search icon'
            aria-hidden='true'
          />
          <input
            type="text"
            tabIndex={0}
            placeholder=""
            value={deferredSearch}
            id='search-input'
            onChange={(event) => searchManipulation(event.target.value)}
            aria-label='Search for movies'
          />
        </div>
      }
    </nav>

  );
};

export default NavBar;