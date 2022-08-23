import './database.css'
import MyTable from '../components/table';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { Container, DropdownButton,ButtonGroup,Dropdown,Form,Button } from 'react-bootstrap';


function Database()
{
    const employees = useSelector(state => state.counterReducer.employees);
    const [searchWord,setSearchWord] = useState('')
    const [employeeSearch,setEmployeeSearch] = useState([]) //employee list searched by name
    const [employeeStatusSearch,setEmployeeStatusSearch] = useState([])//employee list searched by status
    const statusList = ["New","Terminated","Experienced","Leaving","Active"]

    const handleOnChange = (e) =>
    {
        const {value} = e.target;
        setSearchWord(value)
    }
   
    const handleOnClick = (word) =>
    {
        const rez = employees.filter(employee => {
          return employee.first_name === word;
        })

        setEmployeeSearch(arr => rez)
    }

    const getEmployeeSearch = () =>
    {
        return MyTable(employeeSearch)
    }

    const statusFilter = (status) =>
    {
        const rez = employees.filter(employee => {
            return employee.status === status;
          })

        setEmployeeStatusSearch(arr => rez)
    }

    const getEmployeeStatusSearch = () =>
    {
        return MyTable(employeeStatusSearch)
    }

    return (  
        <>
        <h1>Database</h1>    
        <Container className='grid-database-container'>

            <div className='grid-table'>
              {MyTable(employees)}
            </div>
            
            <div className='grid-search'>
              <Form>
                <Form.Control
                  type="search"
                  placeholder="Search employee"
                  value={searchWord}
                  onChange={handleOnChange}
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success" onClick={() => handleOnClick(searchWord)}>Search</Button>
              </Form>
              {getEmployeeSearch()}
            </div>
            
           
           <div className='grid-filter'>
              <DropdownButton as={ButtonGroup} title="Status Filters" id="bg-nested-dropdown">
                {statusList.map((status,index) => {
                  return <Dropdown.Item key={index} onClick={() => statusFilter(status)}>{status}</Dropdown.Item>
                })}
              </DropdownButton>
              {getEmployeeStatusSearch()}
           </div>
            
        
        </Container>  
        </>
    );
}
 
export default Database;

/*
const employees = useSelector(state => state.counterReducer.employees);
<ul>
    {employees.map(item => {return <li>{JSON.stringify(item)}</li>})}
 </ul>
*/

