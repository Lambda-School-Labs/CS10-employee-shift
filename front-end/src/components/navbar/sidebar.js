import React from 'react';
import { Link  } from 'react-router-dom';

import "../../styles/sidebar.css"

const Sidebar = () => {
    return (
        <div className="container">
            <div className="nav-sidebar">
                <Link to="/calendar">
                    <button>Calendar</button>
                </Link>
                < Link to="/employees" >
                    <button > Employee </button> 
                </Link>
                 < Link to="/schedules" >
                    <button> Create Schedule </button> 
                </Link>
                <Link to="/billing">
                    <button>Billing</button>
                </Link>
                <Link to="/setting">
                    <button>Settings</button>
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;