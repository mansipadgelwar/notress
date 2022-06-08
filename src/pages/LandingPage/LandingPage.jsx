import "./LandingPage.css";
import HeroImg from "../../asset/HeroImg.svg";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="landing-page-wrapper">
      <div className="landing-page-container">
        <div className="landing-page-content">
          <div className="notes-hero-heading h1 text-bold">
            No<span className="inverted-text">Tress</span>
          </div>
          <div className="notes-hero-sub-heading h2 text-bold">
            Meet your modern
            <span className="inverted-text"> Note Taking App</span>
          </div>
          <div className="h4">
            Manage your daily tasks and workflow in a modern way and boost your
            efficiency without any efforts.
          </div>
          <Link to="/signup">
            <button className="btn btn-cta">Join Now</button>
          </Link>
          <Link to="/login">
            <div className="text-bold login-link">Already have an account?</div>
          </Link>
        </div>

        <div className="image-container">
          <img src={HeroImg} alt="responsive_img" className="img-responsive" />
        </div>
      </div>
    </div>
  );
};

export { LandingPage };
