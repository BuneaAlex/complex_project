import Home from "./routes/home";
import Database from "./routes/database";
import Register from "./routes/register";
import Projects from "./routes/projects";
import { Routes, Route } from 'react-router-dom';
import MyNavbar from "./components/navbar";
import { useEffect } from 'react';
import fetchData from './data/fetchData';
import { useDispatch } from "react-redux";
import { updateEmployees, updateProjects } from "./data/counterSlice";
import SideBar from "./components/side_navbar";
import EmployeeManagement from "./routes/management";

function App() {
  const dispatch = useDispatch();
  useEffect (() => {
        fetchData('http://localhost:3000/employees').then(data => { dispatch(updateEmployees(data))});  
        fetchData('http://localhost:3000/projects').then(data => { dispatch(updateProjects(data))});     
    },[dispatch])

  return (
    <>
    <div className="App">
      <div className="grid-navbar">
      <MyNavbar />
      </div>

      <div className="grid-sidebar">
      <SideBar />
      </div>
    
    
    {/* <label className="grid-navbar">navbar</label> */}
    {/* <label className="grid-sidebar">sidebar</label> */}
      <div className="grid-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/database" element={<Database />} />
          <Route path="/management" element={<EmployeeManagement />}/>
        </Routes>
      </div>
      
    </div>
    </>
    
  );
}

export default App;
