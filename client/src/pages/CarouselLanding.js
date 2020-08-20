import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel'
// import ReactBootstrapCarousel from "react-bootstrap-carousel";
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";

// npm i --save react-bootstrap-carousel

// reference: https://react-bootstrap.github.io/components/carousel/

const CarouselLanding = () => {

    return (
        <Carousel>
        <Carousel.Item>
        <img
            className="d-block w-100"
            src="holder.js/800x400?text=First slide&bg=373940"
            alt="First slide"
        />
        <Carousel.Caption>
            <h3>slide 1</h3>
            <p>Title 1.</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img
            className="d-block w-100"
            src="holder.js/800x400?text=Second slide&bg=282c34"
            alt="Third slide"
        />
    
        <Carousel.Caption>
            <h3>slide 2</h3>
            <p>Title 2.</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img
            className="d-block w-100"
            src="holder.js/800x400?text=Third slide&bg=20232a"
            alt="Third slide"
        />
    
        <Carousel.Caption>
            <h3>slide 3</h3>
            <p>Title 3.</p>
        </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    );
};

export default CarouselLanding;
