import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

import InsertChartIcon from "@mui/icons-material/InsertChart";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import {NavLink} from "react-router-dom";
// import { DarkModeContext } from "../../context/darkModeContext";


const Sidebar = () => {
  
  return (
    <div className="sidebar">
      <div className="top">
        <NavLink to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Điện Nước</span>
        </NavLink>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Users</span>
            </li>
        
            
         
          <p className="title">USEFUL</p>
          <li>
            <InsertChartIcon className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <NavLink to='/setting' style={{textDecoration:'none'}}>
            <SettingsIcon className="icon" />
            <span>Setting</span></NavLink>
          </li>
          
          <p className="title">USER</p>
        
          <li> 
            <NavLink  to='/login' style={{ textDecoration: "none" }}>
            <AccountCircleOutlinedIcon className="icon" />
             <span>Login</span></NavLink>
          </li>

        
        </ul>
      </div>
    
    </div>
  );
};

export default Sidebar;
