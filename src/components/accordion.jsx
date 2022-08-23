import Accordion from 'react-bootstrap/Accordion';

function AccordionItem({eventKey,header,body,...rest}) {
  return (
      <Accordion.Item eventKey={eventKey} {...rest}>
        <Accordion.Header>{header}</Accordion.Header>
        <Accordion.Body>{body}</Accordion.Body>
      </Accordion.Item>
  );
}

export default AccordionItem;