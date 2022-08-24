import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import { FiInfo } from "react-icons/fi";

function SideBar() {
  return (
    
    <Nav defaultActiveKey="/home" className="sidebar">
      <Link to="/about"><FiInfo/> About</Link>
    </Nav>
  );
}

export default SideBar;