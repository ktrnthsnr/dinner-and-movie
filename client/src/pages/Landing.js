// import React from "react";
// //import "../styles/landing.css";
// import Carousel from 'react-bootstrap/Carousel';



// const carouselSlides = [
//   {
//     title: "We travel all over the US",
//     subtitle: "Check out our schedule!",
//     img: "/images/curtain.jpg",
//     btnText: "View Schedule",
//     btnUrl: "schedule.html",
//   },
//   {
//     title: "Our food is seriously the bomb!",
//     subtitle: "What are you waiting for?",
//     img: "/images/catcouch.jpg",
//     btnText: "Purchase Tickets",
//     btnUrl: "tickets.html",
//   },
// ];


// const Landing = (props) => {
//   const [slides, setSlides] = React.useState(carouselSlides);
//   return (
//     <div class="carousel slide" >
//         <div class="carousel-inner min-80-vh">
//       {slides.map((slide) => (
//         <div
//           class="carousel-item fullscreen-carousel "
//           style={{ backgroundImage: `url('${process.env.PUBLIC_URL + slide.img}')` }}
//         >
//           <div class="d-flex h-100 align-items-center justify-content-center carousel-caption">
//             <div class="container">
//               <div class="row align-items-center justify-content-center">
//                 <h2 class="display-4 mb-2">{slide.title}</h2>
//               </div>
//               <div class="row align-items-center justify-content-center">
//                 <h3>{slide.subtitle}</h3>
//               </div>
//               <div class=" mt-4 row align-items-center justify-content-center">
//                 <a class="btn btn-primary" href={slide.btnUrl}>
//                   {slide.btnText}
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//     </div>
//   );
// };

// export default Landing 
