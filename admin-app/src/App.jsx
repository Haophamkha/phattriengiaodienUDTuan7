import './App.css'
import NavBar from './NavBar'
import Dashboard from './Daskboard'
import OverviewSection from './OverviewSection'
import DetailedReport from './DetailedReport'
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
