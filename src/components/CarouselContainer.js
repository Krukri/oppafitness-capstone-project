import "../css/carousel.css";
import Carousel from "react-bootstrap/Carousel";
import image1 from "../images/img1.jpg";
import image2 from "../images/img2.jpg";
import image3 from "../images/img3.jpg";
import image4 from "../images/img4.jpg";
import image5 from "../images/img5.jpg";
import image6 from "../images/img6.jpg";
import image7 from "../images/img7.jpg";
import image8 from "../images/img8.jpg";
const CarouselContainer = () => {
  return (
    <div>
      <Carousel className="carousel_wrapper">
        <Carousel.Item>
          <img src={image1} alt="image2" id="photo" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={image2} alt="image2" id="photo" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={image3} alt="image2" id="photo" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={image4} alt="image2" id="photo" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={image5} alt="image2" id="photo" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={image6} alt="image2" id="photo" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={image7} alt="image2" id="photo" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={image8} alt="image2" id="photo" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselContainer;
