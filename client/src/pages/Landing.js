import React from "react";
import "../styles/landing.css";
// import img1 from "../images/curtain.jpg";
// import img2 from "../images/catcouch.jpg";
import img3 from "../images/hobbit.jpg";
import img4 from "../images/batm.jpg";
import img5 from "../images/dogcouch3.jpg";


const carouselSlides = [
  {
    title: "We travel all over the US",
    subtitle: "Check out our schedule!",
    img: "/images/curtain.jpg",
    btnText: "View Schedule",
    btnUrl: "schedule.html",
  },
  {
    title: "Our food is seriously the bomb!",
    subtitle: "What are you waiting for?",
    img: "/images/catcouch.jpg",
    btnText: "Purchase Tickets",
    btnUrl: "tickets.html",
  },
];


const Landing = (props) => {
  const [slides, setSlides] = React.useState(carouselSlides);
  return (
    <div className="carousel slide" >
        <div className="carousel-inner min-80-vh">
      {slides.map((slide) => (
        <div
          className="carousel-item fullscreen-carousel "
          style={{ backgroundImage: `url('${process.env.PUBLIC_URL + slide.img}')` }}
        >
          <div className="d-flex h-100 align-items-center justify-content-center carousel-caption">
            <div className="container">
              <div className="row align-items-center justify-content-center">
                <h2 className="display-4 mb-2">{slide.title}</h2>
              </div>
              <div className="row align-items-center justify-content-center">
                <h3>{slide.subtitle}</h3>
              </div>
              <div className=" mt-4 row align-items-center justify-content-center">
                <a className="btn btn-primary" href={slide.btnUrl}>
                  {slide.btnText}
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Landing 