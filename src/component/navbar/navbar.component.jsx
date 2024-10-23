import homeIcon from '../../icons/home.png';
import searchIcon from '../../icons/search.png';
import './navbar.css'

{/* <img
        src={homeIcon}
        alt={'home button'}
        onClick={()=>pageManipulation(0)}
        className="home-button"
      />  */}
const NavBar = ({ searchManipulation, page, pageManipulation, search}) => {
  return (
    <nav className ='nav-bar' aria-label='Main Navigation'> 
      <h1>rancid tomatillos </h1>
      { page === 1 && 
      <button
      onClick={() => pageManipulation(0)}
      className='home-button'
      aria-label='Go to Home'
    >
      <img
        src={homeIcon}
        alt='Home icon'
      />
    </button>
      }
      { page === 0  &&
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