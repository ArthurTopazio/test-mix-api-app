import { Routes, Route } from "react-router-dom"

import './App.scss'
import HomePage from './components/Content/HomePage/HomePage'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import News from './components/Content/News/News'
import HeaderBannerRoutes from './components/Header/HeaderBanerRoutes/HeaderBannerRoutes'
import FormPage from './components/Content/FormPage/FormPage'
import DogsList from "./components/Content/DogsList/DogsList"
import JokesPage from "./components/Content/JokesPage/JokesPage"
import SocialNetwork from "./components/Content/SocialNetwork/SocialNetwork"

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
        <Route path="/dogs"
          element={<DogsList />} />
        <Route path="/jokes"
          element={<JokesPage />} />
        <Route path="/social_network/*"
          element={<SocialNetwork />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
