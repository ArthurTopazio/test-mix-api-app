import React from 'react';
import { Routes, Route } from "react-router-dom";

import './App.scss';
import HomePage from './components/Content/HomePage';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path=""
          element={<HomePage />} />
        <Route path="/sport"
          element={<HomePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
