import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

const PopOver = ({header,body}) =>
{
    return(
        <Popover id="popover-basic">
        <Popover.Header as="h3">{header}</Popover.Header>
        <Popover.Body>
        <span>{body}</span>
        </Popover.Body>
        </Popover>
    )   
}
  


const ButtonPopOver = ({name,...rest}) => 
{
    return(
        <OverlayTrigger trigger="click" placement="right" overlay={PopOver({...rest})}>
        <Button variant="success" >{name}</Button>
        </OverlayTrigger>
    );
}


    

export default ButtonPopOver;