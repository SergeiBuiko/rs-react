import React, { useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { MainPage } from './pages/MainPage';
import { About } from './pages/About';
import { NotFound } from './pages/NotFound';
import FormPage from 'components/FormPage/FormPage';
import Modal from 'components/Modal/Modal';
import { Navigation } from 'components/Navigation';

import './App.css';

function App() {
  const [modalActive, setModalActive] = useState<boolean>(true);

  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Modal modalActive={modalActive} setModalActive={setModalActive} />
        <Routes>
          <Route
            path="/"
            element={<MainPage modalActive={modalActive} setModalActive={setModalActive} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
