import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './pages/Navbar';
import Main from './pages/main';
import Dashboard from './pages/dashboard';
import { UserProvider } from './UserContext'; 

function App() {
  return (
    <Router>
      <UserProvider>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </UserProvider>
    </Router>
  );
}

export default App;
