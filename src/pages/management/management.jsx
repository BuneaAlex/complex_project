import React, { useState } from 'react';
import { Form } from 'react-final-form';
import BSForm from 'react-bootstrap/Form'
import { BasicTextField } from '../../components/textField';
import { Button, Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import './management.css'
import { useTranslation } from "react-i18next";

const EmployeeManagement = () => {

    const [employeeFound,setEmployeeFound] = useState('');
    const [disableButtons,setDisableButtons] = useState(true);
    const [showUpdateFields,setShowUpdateFields] = useState(false);
    const employees = useSelector(state => state.counterReducer.employees);
    const { t } = useTranslation()


    function refreshPage() {
        window.location.reload(false);
      }

    const handleSubmitClick = (values) =>
    {
        const emp_id = Object.values(values).at(0); //obtinere id
        const employee = employees.find(emp => {return emp.id === emp_id;})

        setShowUpdateFields(false);
        
        if(employee === undefined)
        {
            setEmployeeFound('Not found')
            setDisableButtons(true)
        }
            
        else
        {
            const rez = Object.values(employee);
             setEmployeeFound(rez.map(item => {return item + ' '}))
             setDisableButtons(false)
        }
           
    }

    const handleDeleteClick = (values) =>
    {
        const emp_id = Object.values(values).at(0); //obtinere id

        const options = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }

        fetch(`http://localhost:3000/employees/${emp_id}`,options);
        refreshPage();
    }

    const handleActualUpdateClick = (values) =>
    {
        const emp_id = Object.values(values).at(0); //obtinere id
        const emp_email = Object.values(values).at(1); //obtinere email
        const emp_status = Object.values(values).at(2); //obtinere status
        const employee = employees.find(emp => {return emp.id === emp_id;})

        const new_employee = {...employee,email:emp_email,status:emp_status}

        const options = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(new_employee)
        }

        fetch(`http://localhost:3000/employees/${emp_id}`,options);
        refreshPage();
    }

    const UpdateFields = ({values}) =>
    {
        return(
            <>
                
                <BasicTextField className="grid-textfield2" label="" name="email" placeholder={t("Enter new email")}/>
                <BasicTextField className="grid-textfield3" label="" name="status" placeholder={t("Enter new status")}/>
                <Button
                className="grid-confirm-update-button" 
                variant="primary"
                onClick={() => handleActualUpdateClick(values)}
                >
                    {t("Confirm Update")}
                </Button>
                        
            </>
        );
        
    }

    return (  
        <div className='Management'>
            <h1>Employee Management</h1>
            <Container >
                <Form onSubmit={() => {}}
                    render={({handleSubmit,form, submitting, pristine, values,errors}) => (
                        <BSForm className='management-container' onSubmit={handleSubmit}>
                            <BasicTextField className="grid-textfield1" label="" name="emp_id" placeholder={t("Enter id")}/>
                            <span className="grid-span">{employeeFound}</span>
                            <Button 
                            className="grid-submit-button" 
                            variant="primary"
                            type="submit"
                            onClick={() => handleSubmitClick(values)}
                            >
                            {t("Search")}
                            </Button>

                            <Button
                            className="grid-update-button" 
                            variant="primary"
                            disabled={disableButtons}
                            onClick={() => {setShowUpdateFields(true)}}
                            >
                                {t("Update")}
                            </Button>

                            <Button
                            className="grid-delete-button" 
                            variant="primary"
                            disabled={disableButtons}
                            onClick={() => handleDeleteClick(values)}
                            >
                                {t("Delete")}
                            </Button>
                            {showUpdateFields ? <UpdateFields values={values}/> : null} 
                            
                        </BSForm>
                    )}
                /> 
               
            </Container>
             
        </div>
    );
}
 
export default EmployeeManagement;