import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Component/NavBar'
import Dashboard from './Component/Daskboard'
import OverviewSection from './Component/OverviewSection'
import DetailedReport from './Component/DetailedReport'
function App() {
  return (
    <>
      <div className="container">
        <div className="daskboard">
          <Dashboard></Dashboard>
        </div>
        <div className="logo">
        <NavBar />
        </div>
        <div className="overview">
        <OverviewSection />
        </div>
        <div className="detail">
        <DetailedReport />
        </div>
      </div>
    </>
  )
}

export default App
