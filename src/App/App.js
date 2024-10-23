import './App.css';
import { Route,Routes} from "react-router-dom";
import  Home from '../routes/home.component'
import McardContainer from "../component/McardContainer/mcardcontainer.component";
import Mdetails from "../component/Mdetails/mdetails.component";

function App() {
  return (
    <Routes>

      <Route path="/" element={<Home/>}>
        <Route path=":movieId" element={<Mdetails/>}/>
        <Route path="*" element={<h2>Cannot find anything under that route</h2>}/>

      </Route>
    
    </Routes>


  )

  // return (
  //   <main className='App'>
  //     <header>
  //       <div className= "movies-container">
  //         <NavBar search={search} searchManipulation={setSearch} page={page} pageManipulation={setPageDisplay}/>
  //         use
  //         {page === 1 && <Mdetails movieId={id} /> }
  //       </div>
  //     </header>
  //   </main>
  // );
}

export default App;
