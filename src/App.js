import "./Style/style.css";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Herosection from "./Pages/Herosection";
import Animelistsection from "./Pages/Animelistsection";


function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar/>
          <Herosection/>
          <Animelistsection/>
        </div>
      </Router>
    </div>
  );
}

export default App;
