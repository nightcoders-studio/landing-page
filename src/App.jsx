import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import './App.css'
import Navbar from './components/Navbar';
import ProjectDetail from './pages/ProjectDetail';

function App() {

  return (
    <Router>
      <div id="wrapperContainer" className="flex flex-col w-full min-h-screen bg-gray-100 pt-14">
        <Navbar />
        <div id="containerBesarHome" className="flex-grow w-full">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/detail-project" element={<ProjectDetail />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App

