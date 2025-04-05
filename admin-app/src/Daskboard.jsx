import './App.css'
export default function Dashboard() {
    const handleClick = () => {
        alert('Icon clicked!');
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

        <button onClick={handleClick}>
            <img src="/chuong.jpg" alt="" />
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


