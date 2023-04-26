import "../css/photoGallery.css";
import image1 from "../images/img1.jpg";
import image2 from "../images/img2.jpg";
import image3 from "../images/img3.jpg";
import image4 from "../images/img4.jpg";
import image5 from "../images/img5.jpg";
import image6 from "../images/img6.jpg";
import image7 from "../images/img7.jpg";
import image8 from "../images/img8.jpg";
import CarouselContainer from "../components/CarouselContainer";

const PhotoGallery = () => {
  return (
    <>
      <div className="gallery_container">
        <div className="gallery1" id="sides">
          <CarouselContainer></CarouselContainer>
        </div>
        <div className="gallery2" id="sides">
          <div className="gallery_divider">
            <img src={image1} alt="image2" id="photo" />
          </div>
          <div className="gallery_divider">
            <img src={image3} alt="image2" id="photo" />
          </div>
          <div className="gallery_divider">
            <img src={image4} alt="image2" id="photo" />
          </div>
          <div className="gallery_divider">
            <img src={image5} alt="image2" id="photo" />
          </div>
        </div>
        <div className="gallery3" id="sides">
          <div className="gallery_divider">
            <img src={image2} alt="image2" id="photo" />
          </div>
          <div className="gallery_divider">
            <img src={image3} alt="image2" id="photo" />
          </div>
          <div className="gallery_divider">
            <img src={image6} alt="image2" id="photo" />
          </div>
          <div className="gallery_divider">
            <img src={image7} alt="image2" id="photo" />
          </div>
        </div>
        <div className="gallery4" id="sides">
          <img src={image8} alt="image1" id="photo" />
        </div>
      </div>

      <div className="gallery_on_mobile">
        <img src={image1} alt="image1" id="photo" />
        <img src={image2} alt="image2" id="photo" />
        <img src={image3} alt="image2" id="photo" />
        <img src={image4} alt="image2" id="photo" />
        <img src={image5} alt="image2" id="photo" />
        <img src={image2} alt="image2" id="photo" />
        <img src={image3} alt="image2" id="photo" />
        <img src={image6} alt="image2" id="photo" />
        <img src={image7} alt="image2" id="photo" />
        <img src={image8} alt="image1" id="photo" />
      </div>
    </>
  );
};

export default PhotoGallery;
