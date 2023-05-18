import Carousel from 'react-bootstrap/Carousel';
import React from "react";
import "./imageslider.css";

function ImageSlider() {
  return (
    <Carousel>
      <Carousel.Item>
        <img width={900} height={600}
          className="d-block w-100"
          src="https://cf-images.eu-west-1.prod.boltdns.net/v1/static/3588749423001/927a3fe4-fd36-4fea-8aa0-ecefc21971a7/987ef05e-0351-446f-a6c5-8ab6b01b9766/1280x720/match/image.jpg"
          alt="First slide"
        />
        <Carousel.Caption >
          <h1  style={{color:"black"}}>Indian Premier League</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img width={900} height={600}
          className="d-block w-100"
          src="https://cf-images.eu-west-1.prod.boltdns.net/v1/static/3588749423001/07a946f6-a70e-4ed3-bd69-1235f9d70aef/32b358fa-2386-4ae5-9757-b00d22892988/1280x720/match/image.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h1  style={{color:"black"}}>Indian Premier League</h1>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img width={900} height={600}
          className="d-block w-100"
          src="https://cf-images.eu-west-1.prod.boltdns.net/v1/static/3588749423001/cfba3555-efd4-48ca-b5af-58c8e152ed0c/663ff9a7-e7cb-4e9b-b8b0-3403f63e194e/1280x720/match/image.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h1 style={{color:"black"}}>Indian Premier League</h1>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ImageSlider;