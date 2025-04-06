import '../App.css'
import { FaBell, FaQuestion } from "react-icons/fa6";
export default function Dashboard() {
    const handleClickFabell = () => {
        alert('Ring ring!');
      };
      const handleClickQuestion = () => {
        alert('Muốn hỏi j k!');
      };
  return (
    <div className="dashboard-header">
      <h1 className="dashboard-title">Dashboard</h1>

      
      <div className="dashboard-right">
        
        <img src="/searchicon.jpg" alt="" />
        <div className="dashboard-search">
         
          <input
            type="text"
            className="search-input"
            placeholder="Search..."
          />
        </div>

        <button onClick={handleClickFabell}>
        <FaBell />
        </button>
        <button onClick={handleClickQuestion}>
        <FaQuestion />
        </button>
        <div className="user-avatar">
          <img
            src="/th.jpg" 
            alt="User Avatar"
            className="avatar-image"
          />
        </div>
      </div>
    </div>
  )
}


