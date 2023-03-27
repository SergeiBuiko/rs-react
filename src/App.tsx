import React from 'react';

import { Navigation } from 'components/Navigation';

import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { MainPage } from './pages/MainPage';
import { About } from './pages/About';
import { NotFound } from './pages/NotFound';

import './App.css';
import FormPage from 'components/FormPage/FormPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />

        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
