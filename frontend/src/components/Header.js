import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import "./Header.css";
const Header = () => {
    const [sidebar, setSidebar] = useState(false);

    const handleSidebar = () => {
        setSidebar(!sidebar)
        if (sidebar) {
            console.log("inside")
            document.getElementById("sidebar").classList.remove("sidebar-animation-ends")
            document.getElementById("sidebar").classList.add("sidebar-animation")
            
        } else {
            document.getElementById("sidebar").classList.remove("sidebar-animation")
            document.getElementById("sidebar").classList.add("sidebar-animation-ends")
        }
    }

    return (
        <div>
            <nav className="navbar navbar-dark">
                <div className="container-fluid">
                    <span onClick={handleSidebar}> <a className='navbar-brand'>Savings Bank</a></span>
                </div>
            </nav>
            <div className="sidebar" id="sidebar">
                <nav className="navbar navbar-dark" style={{backgroundColor: "transparent !important"}}>
                    <div className="container-fluid">
                    <span onClick={handleSidebar}> <a className='navbar-brand'>Savings Bank</a></span>
                    </div>
                </nav>
                <div className="">
                    <ul className="list-group pt-5">
                        <Link to="/dashboard"><li className='list-group-item' style={{borderTop: "none"}}>Dashboard</li></Link>
                        <Link to="/dashboard/transaction"><li className='list-group-item'>Transactions</li></Link>
                        <Link to="/dashboard/profile"><li className='list-group-item'>Profile</li></Link>
                        <Link to="/dashboard/transfer"><li className='list-group-item'>Transfer Money</li></Link>
                        <Link to="/dashboard/withdraw"><li className='list-group-item'>Withdraw</li></Link>
                        <Link to="/dashboard/deposit"><li className='list-group-item'>Deposit</li></Link>
                        <Link to="/"><li className='list-group-item'>Log out</li></Link>
                    </ul>
                        
                    
                </div>
            </div>
        </div>
    );
};

export default Header;