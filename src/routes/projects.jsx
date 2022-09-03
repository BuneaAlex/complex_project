import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Container,Row,Col,Button } from 'react-bootstrap';
import './projects.css';
import ButtonPopOver from '../components/popover';
import { Field, Form } from 'react-final-form';
import BSForm from 'react-bootstrap/Form';
import { BasicTextField } from '../components/textField';
import { Dropdown,DropdownButton,ButtonGroup } from 'react-bootstrap';
import { useTranslation } from "react-i18next";
import Multiselect from "multiselect-react-dropdown";
import { useRef } from 'react';

function Projects() {
    const [showForm,setShowForm] = useState(false)
    const projectsList = useSelector(state => state.counterReducer.projects)
    const employees = useSelector(state => state.counterReducer.employees);
    const statusRequiredLeader = "Experienced"
    const [leadersList,setLeadersList] = useState([]) 
    const [membersList,setMembersList] = useState([]) //the list of members that have NOT been chosen yet for the project
    const selectedMembers = useRef([])
    const { t } = useTranslation()


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

    
    const createProject = (obj) =>
    {
        const selectedMemberListNames = selectedMembers.current.map(mem => {return mem.first_name})

        const project = {
            id: obj.name,
            name: obj.name,
            topic: obj.topic,
            leader: obj.leader,
            members: selectedMemberListNames
        }

        return project
    }

    //a new project is added to the database
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



    const LeaderSelect = ({input}) => {
        return (
          <BSForm.Select aria-label="Default select example" className='grid-projects-leader-filter' {...input}>
            <option>Leaders</option>
            {leadersList.map((leader,index) => {return <option key={index} value={leader.first_name}>{leader.first_name}</option>})}
          </BSForm.Select>
        );
      }

      const onSelect = (selectedList, selectedItem) => {
        selectedMembers.current = selectedList
      }

      const MembersSelect = ({input}) => {
        return (
          
          <Multiselect {...input}
            options={membersList}
            displayValue="first_name"
            onSelect={onSelect}
            placeholder="Members"
            showCheckbox
          />
        );
      }

    const CreateProjectForm = () => {

        return(
            <>
            <Form 
                onSubmit={(obj) => {refreshData(createProject(obj))}} 
                render={({handleSubmit,form, submitting, pristine, values}) => 
                    (<Container>
                        <BSForm onSubmit={handleSubmit} className='grid-projects-form'>
                            
                            <BasicTextField className="grid-projects-text-field1" name="name" label="Name" placeholder={t("Enter name")}/>
                            <BasicTextField className="grid-projects-text-field2" name="topic" label="Topic" placeholder={t("Enter topic")}/>

                            <Field name="leader" component={LeaderSelect}>
                            </Field>
                            
                           
                            <Field name="members" component={MembersSelect}>
                            </Field>     
                            
                            <Button 
                                className="grid-projects-submit-button" 
                                variant="primary" 
                                type="submit" 
                                onClick={refreshPage}
                                >
                                {t("Submit")}
                            </Button>
                            
                                    
                        </BSForm>
                    
                    </Container>)
                            
                    } />    
        </>
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