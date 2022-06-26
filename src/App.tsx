import React from 'react';
import { Routes, Route } from "react-router-dom";

import './App.scss';
import HomePage from './components/Content/HomePage/HomePage';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import News from './components/Content/News/News';
import HeaderBannerRoutes from './components/HeaderBanerRoutes/HeaderBannerRoutes';

function App() {
  return (
    <div className="App">
      <Header />
      <HeaderBannerRoutes />
      <Routes>
        <Route path=""
          element={<HomePage />} />
        <Route path="/news"
          element={<News />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
