import { NavLink } from "react-router-dom";
import { MdOutlineDashboard, MdOutlineIntegrationInstructions } from "react-icons/md";
import { CiFolderOn } from "react-icons/ci";
import { BsPeople } from "react-icons/bs";
import { GrAnalytics } from "react-icons/gr";
import { BiMessageAltDetail } from "react-icons/bi";

export default function NavBar() {
  return (
    <div className='navBarClass'>
      <div className="logo">
        <img src="/logo.jpg" alt="" />
        <h1 className='text-xl font-bold'>Logo</h1>
      </div>
      <div className="listItem">
        <ul>
          <li>
            <NavLink to="/" end className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              <MdOutlineDashboard /> Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              <CiFolderOn /> Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/teams" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              <BsPeople /> Teams
            </NavLink>
          </li>
          <li>
            <NavLink to="/analytics" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              <GrAnalytics /> Analytics
            </NavLink>
          </li>
          <li>
            <NavLink to="/messages" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              <BiMessageAltDetail /> Messages
            </NavLink>
          </li>
          <li>
            <NavLink to="/integrations" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              <MdOutlineIntegrationInstructions /> Integrations
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="trynow">
        <img src="/trynow.jpg" alt="" />
        <p>V2.0 is available</p>
        <button>Try now</button>
      </div>
    </div>
  );
}
