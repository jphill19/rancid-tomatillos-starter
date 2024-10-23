import NavBar from "../component/navbar/navbar.component";
import McardContainer from "../component/McardContainer/mcardcontainer.component";
import Mdetails from "../component/Mdetails/mdetails.component";
import {useState} from "react";
import {Outlet} from "react-router-dom";


function Home () {
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
    <main className=''>
      <header>
        <div className="movies-container">
          <NavBar search={search} searchManipulation={setSearch} page={page} pageManipulation={setPageDisplay}/>
          <Outlet/>

        </div>
      </header>
    </main>
  );
}

export default Home;