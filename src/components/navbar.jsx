import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import './myStyles.css';
import { FiHome,FiPlusCircle,FiLayers,FiDatabase,FiUsers } from "react-icons/fi";

function MyNavbar() {
  return (
    <>
      <Navbar bg="primary" variant="dark" expand="sm" collapseOnSelect>
              <Navbar.Brand href="">Navbar</Navbar.Brand>
              <Navbar.Toggle />
              <Navbar.Collapse>
                <Nav className='navbar'> 
                  <NavLink to="/home"><FiHome /> Home</NavLink>
                  <NavLink to="/register"><FiPlusCircle/> Register</NavLink>
                  <NavLink to="/projects"><FiLayers/> Projects</NavLink>
                  <NavLink to="/database"><FiDatabase/> Database</NavLink>
                  <NavLink to="/management"><FiUsers/> Management</NavLink>
                </Nav>
              </Navbar.Collapse>
              
      </Navbar>
    </>
  );
}

export default MyNavbar;