// import React from 'react';
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel'
// import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";

// reference:

// const LandFirst = () => {
//   return (
//     <div>
//       Landing page
//     </div>
//   );
// };


const LandFirst = () => {

  return (
      <Carousel>
      <Carousel.Item>
      <img
          className="d-block w-100"
          // src="holder.js/800x400?text=First slide&bg=373940"
          src="../../images/dogcouch1.jpg"
          alt="takout"
      />
      <Carousel.Caption>
          <h3>Order Takeout</h3>
          <p>Search for takeout from home!.</p>
      </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          // src="holder.js/800x400?text=Second slide&bg=282c34"
          src="../../images/dogcouch2.jpg"
          alt="Search for a movie from home!"
      />
  
      <Carousel.Caption>
          <h3>Find a Movie</h3>
          <p>Discuss options with friends online!</p>
      </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          // src="holder.js/800x400?text=Third slide&bg=20232a"
          src="../../images/dogcouch3.jpg"
          alt="Discuss options with friends online!"
      />
  
      <Carousel.Caption>
          <h3>Chat online</h3>
          <p>Discuss options with friends online!.</p>
      </Carousel.Caption>
      </Carousel.Item>
  </Carousel>
  );
};

// export default CarouselLanding;

export default LandFirst;