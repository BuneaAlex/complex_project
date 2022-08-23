import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Container,Row,Col,Button } from 'react-bootstrap';
import './projects.css';
import ButtonPopOver from '../components/popover';
import { Form } from 'react-final-form';
import BSForm from 'react-bootstrap/Form';
import { BasicTextField } from '../components/textField';
import { Dropdown,DropdownButton,ButtonGroup } from 'react-bootstrap';
import { Field } from 'react-final-form';

function Projects() {
    const [showForm,setShowForm] = useState(false)
    const projectsList = useSelector(state => state.counterReducer.projects)
    const employees = useSelector(state => state.counterReducer.employees);
    const statusRequiredLeader = "Experienced"
    const [leadersList,setLeadersList] = useState([])
    const [membersList,setMembersList] = useState([])
    const [selectedMember,setSelectedMember] = useState({})
    const [selectedLeader,setSelectedLeader] = useState({})
    const [selectedMemberList,setSelectedMemberList] = useState([])


    const handleClick = () =>
    {
        setShowForm(true)
    }

    function refreshPage() {
        window.location.reload(false);
      }

    useEffect(() => {
        setLeadersList(employees.filter(employee => {
            return employee.status === statusRequiredLeader
        }))
        setMembersList(employees.filter(employee => {
            return employee.status !== statusRequiredLeader
        }))
    },[employees])

    const handleClickLeader = (employee) =>
    {
        setSelectedLeader(employee)

    }

    const handleClickMember = (employee) =>
    {
        setSelectedMember(employee)
        setSelectedMemberList(prevList => [...prevList,employee])
        setMembersList(prevList => prevList.filter(emp => {return emp !== employee}))
    }
    
    const createProject = (obj) =>
    {
        const selectedMemberListNames = selectedMemberList.map(mem => {return mem.first_name})

        const project = {
            id: obj.name,
            name: obj.name,
            topic: obj.topic,
            leader: selectedLeader.first_name,
            members: selectedMemberListNames
        }

        return project
    }

    const refreshData = (data) =>
    {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
        fetch('http://localhost:3000/projects',options)
    }

    const CreateProjectForm = () => {

        return(
            <Form 
                onSubmit={(obj) => {refreshData(createProject(obj))}} 
                render={({handleSubmit,form, submitting, pristine, values}) => 
                    (<Container>
                        <BSForm onSubmit={handleSubmit} className='grid-projects-form'>
                            
                            <BasicTextField className="grid-projects-text-field1" name="name" label="Name" placeholder="Enter name"/>
                            <BasicTextField className="grid-projects-text-field2" name="topic" label="Topic" placeholder="Enter topic"/>
                                
                            <Field name="leader" className='grid-projects-leader-filter'>
                                {({input}) => (
                                    <DropdownButton className="dropdown" as={ButtonGroup} title="Leaders List" id="bg-nested-dropdown">
                                    {
                                    leadersList.map((employee,index) => {
                                        return <Dropdown.Item key={index} onClick={() => {handleClickLeader(employee)}}>{employee.first_name}</Dropdown.Item>
                                    })}
                                    </DropdownButton>  
                            )}
                            
                            </Field>
                            
                            <Field name="member" className='grid-projects-member-filter'>
                            {({input}) => (
                                 <DropdownButton className="dropdown" as={ButtonGroup} title="Member" id="bg-nested-dropdown">
                                 {
                                 membersList.map((employee,index) => {
                                     return <Dropdown.Item key={index} onClick={() => {handleClickMember(employee)}}>{employee.first_name}</Dropdown.Item>
                                 })}
                                 </DropdownButton>
                            )}
                            </Field>

                            
                            <span className='grid-projects-leader'>{`Selected leader: 
                            ${selectedLeader.first_name !== undefined ? selectedLeader.first_name : "-"}`}</span>

                        
                            <span className='grid-projects-members'>{`Selected members: 
                            ${selectedMemberList.map(mem => {return mem.first_name})}`}</span>
                                
                            
                            <Button 
                                className="grid-projects-submit-button" 
                                variant="primary" 
                                type="submit" 
                                onClick={refreshPage}
                                >
                                Submit
                            </Button>
                            
                                    
                        </BSForm>
                    
                    </Container>)
                            
                    } />    

        )
    }
    

    return ( 
        <>
            <Container className='projects-container'>
                <h1>Projects</h1>
                <Row className='first-row'>
                    <Col className='projects-container-col1'>
                        <Row className='row-padding'>
                            <Button className="add-button" onClick={handleClick}>
                                <span>+</span>
                            </Button>
                        </Row>
                        {
                        projectsList.map((project,index) => {
                           return <Row className='row-padding' key={index}>
                                <ButtonPopOver 
                                name={project.name} 
                                header="Info" 
                                body={`Topic: ${project.topic} \n 
                                Leader: ${project.leader} \n 
                                Members: ${project.members}`}/>
                            </Row>
                            
                        })}  
                        
                    </Col>
                    <Col>
                        {showForm ? <CreateProjectForm /> : null}
                    </Col>
                </Row>
            </Container>
        </>
        
     );
}
 
export default Projects;