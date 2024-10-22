import homeIcon from '../../icons/home.png';
import './navbar.css'


const NavBar = ({ searchManipulation, page, pageManipulation, search}) => {
  return (
    <div className ='nav-bar'> 
      <h1>rancid tomatillos </h1>
      { page === 1 && <img
        src={homeIcon}
        alt={'home button'}
        onClick={()=>pageManipulation(0)}
        className="home-button"
      /> 
      }
      { page === 0  && <input
        type="text"
        placeholder=""
        value={search}
        onChange={(event) => searchManipulation(event.target.value)}
      />}
    </div>

  );
};

export default NavBar;