import "./LandingPage.css";
import HeroImg from "../../asset/HeroImg.svg";

const LandingPage = () => {
  return (
    <div className="landing-page-wrapper">
      <div className="landing-page-container">
        <div className="landing-page-content">
          <div className="notes-hero-heading h1 text-bold">
            No<span className="inverted-text">Tress</span>
          </div>
          <div className="notes-hero-sub-heading h3 text-bold">
            Meet your modern{" "}
            <span className="inverted-text">Note Taking App</span>
          </div>
          <div className="h4">
            Manage your daily tasks and workflow in a modern way and boost your
            efficiency without any efforts.
          </div>
          <div>
            <button className="btn btn-cta">Join Now</button>
          </div>
          <div>Already have an account?</div>
        </div>

        <div className="image-container">
          <img src={HeroImg} alt="responsive_img" className="img-responsive" />
        </div>
      </div>
    </div>
  );
};

export { LandingPage };
