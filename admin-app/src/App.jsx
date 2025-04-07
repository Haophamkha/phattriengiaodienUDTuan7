import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Component/NavBar";
import Dashboard from "./Component/Daskboard";
import OverviewSection from "./Component/OverviewSection";
import DetailedReport from "./Component/DetailedReport";

function Projects() {
  return <h2>Projects Component</h2>;
}

function Teams() {
  return <h2>Teams Component</h2>;
}

function Analytics() {
  return <h2>Analytics Component</h2>;
}

function Messages() {
  return <h2>Messages Component</h2>;
}

function Integrations() {
  return <h2>Integrations Component</h2>;
}

function App() {
  return (
    <div className="container">
      <div className="daskboard">
        <Dashboard />
      </div>
      <div className="logo">
        <NavBar />
      </div>
      <div className="overviewDetail">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="overview">
                  <OverviewSection />
                </div>
                <div className="detail">
                  <DetailedReport />
                </div>
              </>
            }
          />
          <Route path="/projects" element={<Projects />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/integrations" element={<Integrations />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
