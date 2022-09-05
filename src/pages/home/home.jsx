import CarouselItem from '../../components/carousel';
import { Accordion, Carousel } from 'react-bootstrap';
import road from "../../pictures/road.jpg";
import AccordionItem from '../../components/accordion';
import { Container } from 'react-bootstrap';
import './home.css'

function Home()
{
    return (  
        <>
            <h1>Home</h1>
            <Container className='grid-home-container'>
                
                <Carousel className="carousel" interval={null} >
                    <CarouselItem img_src={road} title="Slide #1" paragraph="ceva" />
                    <CarouselItem img_src={road} title="Slide #2" paragraph="ceva" />
                    <CarouselItem img_src={road} title="Slide #3" paragraph="ceva" />
                </Carousel>

                <Accordion className='accordion'>
                    <AccordionItem eventKey="0" header="Head 1" body="Ceva"/>
                    <AccordionItem eventKey="1" header="Head 2" body="Ceva2"/>
                    <AccordionItem eventKey="2" header="Head 3" body="Ceva3"/>
                </Accordion>
            </Container>
            
        </>
    );
}
 
export default Home;