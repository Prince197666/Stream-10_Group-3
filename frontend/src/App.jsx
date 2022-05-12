import React from 'react';
import {
  Route, NavLink, Routes, BrowserRouter as Router,
} from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div>
        <h1>Software Engineering Practice Evidence Repository (SEPER)</h1>
        <ul className="header">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/">Search</NavLink></li>
          <li><NavLink to="/">Submit</NavLink></li>
          <li><NavLink to="/">Moderate</NavLink></li>
          <li><NavLink to="/">Analyze</NavLink></li>
        </ul>
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
