import homeIcon from '../../icons/home.png';
import searchIcon from '../../icons/search.png';
import './navbar.css'
import { useNavigate } from 'react-router-dom';

const NavBar = ({ search, isHome, searchManipulation}) => {
  const navigate = useNavigate()

  return (
    <nav className ='nav-bar' aria-label='Main Navigation'> 
      <h1>
        rancid tomatillos 
      </h1>
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
            placeholder=""
            value={search}
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