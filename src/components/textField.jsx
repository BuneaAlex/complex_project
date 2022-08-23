import  BSForm  from 'react-bootstrap/Form';
import { Field } from 'react-final-form';


const AdaptedBSForm = ({input,label,name,...rest}) =>
{
    return(
    <>
        <BSForm.Control required
            type="text"
            name={name}  
            {...input}
            {...rest}
            />
    </>     
    )     
}
 

export const BasicTextField = ({...rest}) =>
{
    return (  
        <Field 
        component={AdaptedBSForm}
        {...rest}
        />
        
    );
}
 
export default AdaptedBSForm;