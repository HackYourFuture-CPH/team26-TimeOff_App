import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import Team from './pages/Team';
// import MemberDetails from "./component/MemberDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />     
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/team/:code" element={<Team />} />
          {/* <Route exact path="/members/:id" element={<MemberDetails />} /> */}

          <Route exact path="*" element={<h1>404 Page not found</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
