import { Carousel } from "react-bootstrap";
import { useEffect, useState } from "react";
import hotelData from "../../db.json";
import "../css/carousel.css";

function HotelCarousel() {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    setSlides(hotelData);
  }, []);

  return (
    <Carousel fade interval = {3000}>
      {slides.map((item) => (
        <Carousel.Item key = {item.id}>
          <img
            className = "carousel-image"
            src = {item.image}
            alt = {item.title || item.name} 
          />
          <Carousel.Caption>
            <h3>{item.title || item.name}</h3>
            <p>{item.description || ""}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default HotelCarousel;