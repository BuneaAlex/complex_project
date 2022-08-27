import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import './myStyles.css';
import { FiHome,FiPlusCircle,FiLayers,FiDatabase,FiUsers,FiSettings } from "react-icons/fi";
import { NavDropdown,Dropdown,Button } from 'react-bootstrap';
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { US,RO } from 'country-flag-icons/react/3x2'
import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

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

  const [activateMenu,setActivateMenu] = useState('main')
  
  return ( 
      <>
        <NavDropdown title={<FiSettings />} id="basic-nav-dropdown" className='settings-navdropdown'>
            <CSSTransition in={activateMenu === 'main'} unmountOnExit timeout={500} classNames='menu-primary'>
              <div className='menu'>
              <LanguageDropDown className='navitem'/>

              <div className='navitem'>
              <Button className='background-button'  onClick={() => {setActivateMenu('background')}}>Background</Button>
              </div>
              
              <NavDropdown.Item className='navitem'>
                Something
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className='navitem'>
                Log out
              </NavDropdown.Item>
              </div>
              
            </CSSTransition>

            <CSSTransition in={activateMenu === 'background'} unmountOnExit timeout={500} classNames='menu-secondary'>
              <div className='menu'>

              <Button className='navitem' onClick={() => {setActivateMenu('main')}}>Back</Button>
              
              <NavDropdown.Item className='navitem'>
                color1
              </NavDropdown.Item>

              <NavDropdown.Item className='navitem'>
                color2
              </NavDropdown.Item>
              
              </div>
              
            </CSSTransition>
              
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