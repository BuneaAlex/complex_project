import Table from 'react-bootstrap/Table';

function MyTable(lista) 
{
    
  return (
    <>
       <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Gender</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              
              {lista.map(item => {return <tr>
                      <td>{item.id}</td>
                      <td>{item.first_name}</td>
                      <td>{item.last_name}</td>
                      <td>{item.gender}</td>
                      <td>{item.email}</td>
                  </tr>
              })}
            </tbody>
      </Table>
            
        
    </>
    
  );
}

export default MyTable;