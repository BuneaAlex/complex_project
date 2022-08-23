import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "bootstrap/dist/css/bootstrap.css";


const CarouselItem = ({img_src,title,paragraph,...rest}) => {
  
  return (
        <Carousel.Item className="carousel-item" {...rest}  >
        <img
          src={img_src}
          alt=""
        />
        <CarouselCaption title={title} paragraph={paragraph}/>
      </Carousel.Item>
        
  );
}

const CarouselCaption = ({title,paragraph,...rest}) =>
{
    return(
      <Carousel.Caption {...rest}>
          <h3>{title}</h3>
          <p>{paragraph}</p>
        </Carousel.Caption>
    );
}

export default CarouselItem;