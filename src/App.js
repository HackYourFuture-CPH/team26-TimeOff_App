import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './pages/Navbar';
import './index.css'
import Home from './pages/Home';
import Team from './pages/Team';
import MemberPage from "./pages/Member";
import { useEffect, useState } from "react";

function App() {

  const current_theme = localStorage.getItem('current_theme');  // This will store the default theme of web browser
  const [theme, setTheme] = useState(current_theme ? current_theme : 'light'); // Created constant for dark mode

  useEffect (()=>{
    localStorage.setItem('current_theme', theme);
  },[theme])


  return (
    <div className={`App ${theme}`}>
      <Router>
        <Navbar theme={theme} setTheme={setTheme} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/team/:code" element={<Team />} />
          <Route exact path="/members/:id" element={<MemberPage />} />

          <Route exact path="*" element={<h1>404 Page not found</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
