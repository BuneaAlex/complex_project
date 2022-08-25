import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import { FiInfo } from "react-icons/fi";
import { useTranslation } from "react-i18next";

function SideBar() {
  const { t } = useTranslation()
  return (
    
    <Nav defaultActiveKey="/home" className="sidebar">
      <Link to="/about"><FiInfo/>{t("About")} </Link>
    </Nav>
  );
}

export default SideBar;