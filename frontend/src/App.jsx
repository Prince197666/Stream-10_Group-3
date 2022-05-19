import React from 'react';
import {
  Route, NavLink, Routes, BrowserRouter as Router,
} from 'react-router-dom';
import Home from './pages/Home';
import Moderate from './pages/Moderate';
import ModeratorForm from './pages/ModeratorForm';
import Analyse from './pages/Analyse';

function App() {
  return (
    <Router>
      <div>
        <h1>Software Engineering Practice Evidence Repository (SEPER)</h1>
        <ul className="header">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/">Search</NavLink></li>
          <li><NavLink to="/">Submit</NavLink></li>
          <li><NavLink to="/Moderate">Moderate</NavLink></li>
          <li><NavLink to="/Analyse">Analyze</NavLink></li>
        </ul>
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Moderate" element={<Moderate />} />
            <Route path="/Moderate/:id" element={<Moderate />} />
            <Route path="/show-article/:id" element={<ModeratorForm />} />
            <Route exact path="/Analyse" element={<Analyse />} />
            <Route path="/Analyse/:id" element={<Analyse />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
