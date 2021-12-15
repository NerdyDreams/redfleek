import React from 'react';
import {Carousel} from 'react-bootstrap';



function Slider(props){
return (
<div className = "row slider-div">
{/* first film slide */}
<div className="col-lg-4">
<Carousel>
        <Carousel.Item interval={1000}>
        <div className = "carousel-img">
            <img
            className="d-block w-100"
            src={props.image1}
            alt="First slide"
            />
        </div>
        </Carousel.Item> 

  <Carousel.Item interval={500}>
    <div className = "carousel-img">
        <img
        className="d-block w-100 carousel-img"
        src={props.image2}
        alt="Second slide"
    />
    </div>
  </Carousel.Item>

  <Carousel.Item>
  <div className = "carousel-img">
    <img
      className="d-block w-100 carousel-img"
      src={props.image3}
      alt="Third slide"
    />
    </div>
  </Carousel.Item>
</Carousel>
<div className='container'>
  {props.rating}/5 ⭐
</div>
</div>

{/* second film slide */}
<div className="col-lg-4">
<Carousel>
        <Carousel.Item interval={1000}>
        <div className = "carousel-img">
            <img
            className="d-block w-100"
            src={props.image1}
            alt="First slide"
            />
        </div>
        </Carousel.Item> 

  <Carousel.Item interval={500}>
    <div className = "carousel-img">
        <img
        className="d-block w-100 carousel-img"
        src={props.image2}
        alt="Second slide"
    />
    </div>
  </Carousel.Item>

  <Carousel.Item>
  <div className = "carousel-img">
    <img
      className="d-block w-100 carousel-img"
      src={props.image3}
      alt="Third slide"
    />
    </div>
  </Carousel.Item>
</Carousel>
</div>

{/* third film slide */}
<div className="col-lg-4">
<Carousel>
        <Carousel.Item interval={1000}>
        <div className = "carousel-img">
            <img
            className="d-block w-100"
            src={props.image1}
            alt="First slide"
            />
        </div>
        </Carousel.Item> 

  <Carousel.Item interval={500}>
    <div className = "carousel-img">
        <img
        className="d-block w-100 carousel-img"
        src={props.image2}
        alt="Second slide"
    />
    </div>
  </Carousel.Item>

  <Carousel.Item>
  <div className = "carousel-img">
    <img
      className="d-block w-100 carousel-img"
      src={props.image3}
      alt="Third slide"
    />
    </div>
  </Carousel.Item>
</Carousel>
</div>
</div>
)
}
export default Slider;


