import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import './myStyles.css';
import { FiHome,FiPlusCircle,FiLayers,FiDatabase,FiUsers,FiSettings } from "react-icons/fi";
import { NavDropdown,Dropdown,Button } from 'react-bootstrap';
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { US,RO } from 'country-flag-icons/react/3x2'

const LanguageDropDown = () => {
  return ( 
    <>
        <Dropdown drop="end">
            <Button variant="light">Language</Button>
            <Dropdown.Toggle variant="light" id='dropdown-button-drop-end'/>
            <Dropdown.Menu>
              <Dropdown.Item eventKey="12" onClick={() => {i18next.changeLanguage("en")}}>
                <US className='drop-flag-icon'/>English
              </Dropdown.Item>
              <Dropdown.Item eventKey="14" onClick = {() => {i18next.changeLanguage("ro")}}>
                <RO className='drop-flag-icon'/>Romana
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
    </>
   );
}
 


const SettingsDropDown = () => {
  return ( 
      <>
        <NavDropdown title={<FiSettings />} id="basic-nav-dropdown" className='settings-navdropdown'>

              <LanguageDropDown />

              <NavDropdown.Item className='nav-item'>
                Another action
              </NavDropdown.Item>

              <NavDropdown.Item className='nav-item'>
                Something
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className='nav-item'>
                Log out
              </NavDropdown.Item>
            </NavDropdown>
      </>
   );
}
 

function MyNavbar() {
  const { t } = useTranslation()
  return (
    <>
      <Navbar bg="primary" variant="dark" expand="sm" collapseOnSelect>
              <Navbar.Brand href="">Navbar</Navbar.Brand>
              <Navbar.Toggle />
              <Navbar.Collapse>
                <Nav className='navbar'> 
                  <NavLink to="/home"><FiHome />{t('Home')} </NavLink>
                  <NavLink to="/register"><FiPlusCircle/>{t('Register')} </NavLink>
                  <NavLink to="/projects"><FiLayers/>{t('Projects')} </NavLink>
                  <NavLink to="/database"><FiDatabase/>{t('Database')} </NavLink>
                  <NavLink to="/management"><FiUsers/>{t('Management')} </NavLink>
                  <SettingsDropDown />

                </Nav>
              </Navbar.Collapse>
              
      </Navbar>
    </>
  );
}

export default MyNavbar;