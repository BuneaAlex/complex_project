import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import React from 'react';
import { useEffect,forwardRef } from 'react';
import './myStyles.css';


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
 
const UpdatingPopover = forwardRef(({header,body, ...props }, ref) => {
      
      return (
        <div className='projects-popover'>
            <Popover ref={ref} {...props}>
            <Popover.Header as="h3">{header}</Popover.Header>
            <Popover.Body >
            <span>{body}</span>
            </Popover.Body>
            </Popover>
        </div>
        
      );
    }
  );


const ButtonPopOver = ({name,...rest}) => 
{
    return(
        <div>
        <OverlayTrigger trigger="click" placement="right" overlay={<UpdatingPopover {...rest}/>}>
            <Button variant="success" >{name}</Button>
        </OverlayTrigger>
        </div>
    );
}


    

export default ButtonPopOver;