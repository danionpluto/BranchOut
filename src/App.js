import './App.css';
import Home from './pages/home';
import Ex from './pages/explain';
import Pj from './pages/project_teams';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function Navbar () {
  return (
    <nav>
      {/* <Link className = {"link-styles"} to="/">Branch Out</Link> */}
      <Link className = {"link-styles2"} to="/">Home</Link>
      <Link className = {"link-styles2"} to="/explain">How It Works</Link>
      <Link className = {"link-styles2"} to="/project_teams">Project Teams</Link>
      
    </nav>
   )
}

function App() {
  return (
      <Router>
          <Navbar />
          <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/explain" element={<Ex />} />
              <Route path="/project_teams" element={<Pj />} />
          </Routes>
      </Router>
  );
}




export default App;
