import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Team from "./pages/Team";
import MemberPage from "./pages/Member";
import { MyContextProvider } from "./component/Context"; 

function App() {
  return (
    <div className="App">
      <Router>
        <MyContextProvider> 
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/team/:code" element={<Team />} />
            <Route exact path="/members/:id" element={<MemberPage />} />
            <Route path="*" element={<h1>404 Page not found</h1>} />
          </Routes>
        </MyContextProvider>
      </Router>
    </div>
  );
}

export default App;
