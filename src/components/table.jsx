import Table from 'react-bootstrap/Table';
import { useTranslation } from "react-i18next";

function MyTable(lista) 
{
  const { t } = useTranslation()
    
  return (
    <>
       <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>{t("First Name")}</th>
                <th>{t("Last Name")}</th>
                <th>{t("Gender")}</th>
                <th>{t("Email")}</th>
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