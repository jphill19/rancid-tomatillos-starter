import NavBar from "../component/navbar/navbar.component";
import McardContainer from "../component/McardContainer/mcardcontainer.component";
import Mdetails from "../component/Mdetails/mdetails.component";
import {useState} from "react";
import {Outlet, useLocation} from "react-router-dom";


function Home () {
  const [search, setSearch] = useState('')

  const location = useLocation();
  const isHome = location.pathname === '/';

  console.log("location", location)

  return (
    <main className=''>
      <header>
        <div className="movies-container">
          <NavBar search={search} isHome={isHome} searchManipulation={setSearch}/>
          { isHome ? <McardContainer query={search}/> :<Outlet/>}
        </div>
      </header>
    </main>
  );
}

export default Home;