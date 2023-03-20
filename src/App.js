import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import AddCandidates from './users/AddCandidates';
import EditCandidates from './users/EditCandidates';

function App() {
  return (
    <div className="App">
      <Router>
       <Navbar/>
       <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/addcandidates" element={<AddCandidates/>}/>
        <Route exact path="/editcandidates/:id" element={<EditCandidates/>}/>

       </Routes>
      </Router>
      

    </div>
  );
}

export default App;
