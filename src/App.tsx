import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import { MainPage } from './pages/MainPage';
import { About } from './pages/About';
import { NotFound } from './pages/NotFound';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p> */}
        <Link className="App-link" to="/">
          Home
        </Link>
        <Link className="App-link" to="/about">
          About US
        </Link>
        {/* <Link className="App-link" to="/*">
          404
        </Link> */}
      </header>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
