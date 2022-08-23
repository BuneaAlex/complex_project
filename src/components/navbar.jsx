import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './myStyles.css';

function MyNavbar() {
  return (
    <>
      <Navbar className='navbar' bg="primary" variant="dark" >
              <Navbar.Brand href="">Navbar</Navbar.Brand>
              <Link to="/home">Home</Link>
              <Link to="/register">Register</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/database">Database</Link>
              <Link to="/management">Management</Link>
      </Navbar>
    </>
  );
}

export default MyNavbar;