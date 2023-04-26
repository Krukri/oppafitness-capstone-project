import "../css/home.css";
import SignUpForm2 from "../components/signup2";
import PhotoGallery from "../components/photo_gallery";
import CarouselContainer from "../components/CarouselContainer";
const HomePage = () => {
  return (
    <div id="home">
      <div className="main_section">
        <div className="hero_section">
          <div className="tex_space_container">
            <div className="text_space" active>
              <h2>
                "Good health comes from a disciplined mind and consistent
                workout..."
              </h2>
            </div>
          </div>
          <div className="equipment_container">
            <div className="equipment_small">
              <div className="photo_gallery_container">
                <PhotoGallery></PhotoGallery>
              </div>
            </div>
          </div>

          <div className="carousel_container mb-3 ">
            <CarouselContainer></CarouselContainer>
          </div>

          <div>
            <SignUpForm2></SignUpForm2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
