import React from 'react';
// eslint-disable-next-line import/no-unresolved
import { Navigation } from 'components/Navigation';
// eslint-disable-next-line import/no-unresolved

import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { MainPage } from './pages/MainPage';
import { About } from './pages/About';
import { NotFound } from './pages/NotFound';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />

        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
