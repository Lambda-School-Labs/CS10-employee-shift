import React from 'react';
import { Link } from 'react-router-dom';

// import {
//     Billing,
//     Calendar,
//     Dashboard,
//     Employees,
//     Settings,
// } from "../Pages";


const Sidebar = () => {
    return (
        <div className="container">
            <div className="sidebar-container">
                <div className="nav-sidebar">
                    <div className="nav-sidebar"><Link to="/calendar"><button>Calendar</button></Link></div>
                    <div className="nav-sidebar"><Link to="/employees" ><button > Employee </button></Link></div>
                    <div className="nav-sidebar"><Link to="/dashboard" ><button> Create Schedule </button></Link></div>
                    <div className="nav-sidebar"><Link to="/billing"><button>Billing</button></Link></div>
                    <div className="nav-sidebar"><Link to="/settings"><button>Settings</button></Link></div>
                    <div className="nav-sidebar"><Link to="/" > < button > Home </button></Link ></div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;