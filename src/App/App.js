import './App.css';
import { Route,Routes} from "react-router-dom";
import  Home from '../routes/home.component'
import McardContainer from "../component/McardContainer/mcardcontainer.component";
import MdetailsComponent from "../component/Mdetails/mdetails.component";
function App() {
  return (
    <Routes>

      <Route path="/" element={<Home/>}>
        <Route index={true} element={<McardContainer/>}/>
        <Route path=":id" element={<MdetailsComponent/>}/>
        {/*<Route index={true} element={<McardContainer/>}/>*/}
      </Route>

    </Routes>


  )



  // return (
  //   <main className='App'>
  //     <header>
  //       <div className= "movies-container">
  //         <NavBar search={search} searchManipulation={setSearch} page={page} pageManipulation={setPageDisplay}/>
  //         {page === 0 && <McardContainer pageEventHandler={setPageDisplay} mIdSetter={setMovieId} query={search}/>}
  //         {page === 1 && <Mdetails movieId={id} /> }
  //       </div>
  //     </header>
  //   </main>
  // );
}

export default App;
