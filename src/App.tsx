import { Routes, Route } from "react-router-dom"

import './App.scss'
import HomePage from './components/Content/HomePage/HomePage'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import News from './components/Content/News/News'
import HeaderBannerRoutes from './components/HeaderBanerRoutes/HeaderBannerRoutes'
import FormPage from './components/Content/FormPage/FormPage'

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
        <Route path="/form"
          element={<FormPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
