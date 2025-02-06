import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import './App.css'
import Navbar from './components/Navbar';
import DetailMugee from './pages/DetailMugee';
import DetailPamaba from './pages/DetailPamaba';
import DetailTesUjianOnline from './pages/DetailTesUjianOnline';
import DetailYourEmailValidator from './pages/DetailYourEmailValidator';


function App() {

  return (
    <Router>
      <div id="wrapperContainer" className="flex flex-col w-full min-h-screen bg-gray-100 pt-14">
        <Navbar />
        <div id="containerBesarHome" className="flex-grow w-full">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/detail-mugee" element={<DetailMugee />} />
            <Route path="/detail-pamaba" element={<DetailPamaba />} />
            <Route path="/detail-tes-ujian-online" element={<DetailTesUjianOnline />} />
            <Route path="/detail-your-email-validator" element={<DetailYourEmailValidator />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App

