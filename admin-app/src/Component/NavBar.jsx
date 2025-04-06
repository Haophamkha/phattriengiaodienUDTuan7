import '../App.css';
import { MdOutlineDashboard , MdOutlineIntegrationInstructions} from "react-icons/md";
import { CiFolderOn } from "react-icons/ci";
import { BsPeople } from "react-icons/bs";
import { GrAnalytics } from "react-icons/gr";
import { BiMessageAltDetail } from "react-icons/bi";
export default function NavBar() {
  return (
    <div className='navBarClass'>
        <div className = "logo">
            <img src="/logo.jpg" alt="" />
            <h1 className='text-xl font-bold'>Logo</h1>
        </div>
        <div className = "listItem">
        <ul>
                <li className="active"><a href="#"><MdOutlineDashboard />Dashboard</a></li>
                <li><a href="#"><CiFolderOn />Projects</a></li>
                <li><a href="#"><BsPeople />Teams</a></li>
                <li><a href="#"><GrAnalytics />Analytics</a></li>
                <li><a href="#"><BiMessageAltDetail />Messages</a></li>
                <li><a href="#"><MdOutlineIntegrationInstructions />Integrations</a></li>
            </ul>
            
        </div>
        <div className = "trynow">
            <img src="/trynow.jpg" alt="" />
            
            <p>V2.0 is available</p>
        <button>Try now</button>
        </div>
        
        
    </div>
  )
}