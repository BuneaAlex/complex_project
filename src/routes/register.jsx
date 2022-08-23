import './register.css'
import BSForm from 'react-bootstrap/Form';
import { useSelector } from "react-redux";
import { Button } from 'react-bootstrap';
import { Container} from 'react-bootstrap';
import { Form } from 'react-final-form';
import { BasicTextField } from '../components/textField';
import { useState } from 'react';

/*
const initialState = {
    id: "",
    first_name:"",
    last_name:"",
    email:"",
    gender:"",
    status:""
}
*/


function Register()
{
    const employees = useSelector(state => state.counterReducer.employees); 
    const count  = employees.length;
    const [submitSafe,setSubmitSafe] = useState(false);
    const [errorMessage,setErrorMessage] = useState([]);//error list from the form

    //new employee registered
    const refreshData = (data) =>
    {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
        fetch('http://localhost:3000/employees',options)
        //fetchData().then(data => { dispatch(updateEmployees(data))}); 
        //NU MAI TREBUIE DEOARECE STORE-UL E DEJA LEGAT LA SERVER
    }

    function refreshPage() {
        window.location.reload(false);
      }

    //if the there is no error, then the new employee is registered, otherwise the user get a error message
    const handleClick = errors =>
    {
        if(Object.values(errors).length === 0)
        {
            setSubmitSafe(true);
            refreshPage();
        }
        else
        {
            setErrorMessage(Object.values(errors))
        } 
    }
    
    return ( 
        
        <>
            

        <Form 
        onSubmit={(employee) => {if(submitSafe === true) refreshData(employee)}} 
        validate={values => {
            const errors = {}
            if(values.gender !== 'Male' && values.gender !== 'Female')
                errors.gender = 'gender must be: Male or Female'
            return errors
          }}
        render={({handleSubmit,form, submitting, pristine, values,errors}) => 
            (<Container>
                <h1>Register {count}</h1>
                <BSForm className="grid-register" onSubmit={handleSubmit}>
                    
                <BasicTextField className="grid-register-text-field1"  name="id" label="Employee id" placeholder="Enter id"/>
                <BasicTextField className="grid-register-text-field2" name="first_name" label="First name" placeholder="Enter first name"/>
                <BasicTextField className="grid-register-text-field3" name="last_name" label="Last name" placeholder="Enter last name"/>
                <BasicTextField className="grid-register-text-field4" name="email" label="Email" placeholder="Enter email"/>
                <BasicTextField className="grid-register-text-field5" name="gender" label="Gender" placeholder="Enter gender"/>
                <BasicTextField className="grid-register-text-field6" name="status" label="Status" placeholder="Enter status"/>
                              
                <img className='grid-register-img' src='https://picsum.photos/300' alt="" />
                      
                <span className='grid-register-span'>{errorMessage}</span>
                     
                <Button 
                className="grid-register-submit-button" 
                variant="primary" 
                type="submit" 
                onClick={() => handleClick(errors)}
                disabled={submitting}
                    >
                Submit
                </Button>
                    
                    
                </BSForm>
    
            </Container>)
            
    }/>    
        </>
        
    );
    

}


 
export default Register;

/*
<span>{JSON.stringify(values,0,2)}</span>
*/