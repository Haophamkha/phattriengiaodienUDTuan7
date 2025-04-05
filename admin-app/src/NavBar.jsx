import './App.css'
export default function NavBar() {
  return (
    <div className='navBarClass'>
        <div className = "logo">
            <img src="/logo.jpg" alt="" />
            <h1 className='text-xl font-bold'>Logo</h1>
        </div>
        <div className = "listItem">
        <ul>
                <li className="active"><a href="#">Dashboard</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Teams</a></li>
                <li><a href="#">Analytics</a></li>
                <li><a href="#">Messages</a></li>
                <li><a href="#">Integrations</a></li>
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