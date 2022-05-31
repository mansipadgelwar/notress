import { Link } from "react-router-dom";
import "../../Authentication/authentication.css";

const Signup = () => {
  return (
    <div className="signup-page-container">
      <article className="form-container">
        <div className="authentication-form-container">
          <form className="form" action="">
            <h3 className="h3">SIGN UP</h3>
            <label htmlFor="email" className="input-label">
              Email:
            </label>
            <input
              className="input"
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email ID"
              required
            />
            <label htmlFor="fname" className="input-label">
              First Name:
            </label>
            <input
              className="input"
              type="text"
              id="fname"
              name="fname"
              placeholder="Enter your first name"
              required
            />

            <label htmlFor="lname" className="input-label">
              Last Name:
            </label>
            <input
              className="input"
              type="text"
              id="lname"
              name="lname"
              placeholder="Enter your last name"
              required
            />

            <div className="input-with-icon">
              <label htmlFor="password" className="input-label">
                Password:
              </label>
              <input
                className="input"
                type="password"
                id="password"
                name="password"
                placeholder="Enter password"
                required
              />
              <button className="btn-link material-icons icons-right">
                visibility
              </button>
            </div>

            <div className="input-with-icon">
              <label htmlFor="confirm-password" className="input-label">
                Confirm Password:
              </label>
              <input
                className="input"
                type="password"
                id="confirm-password"
                name="confirm-password"
                placeholder="Confirm your password"
                required
              />
              <button className="btn-link material-icons icons-right">
                visibility
              </button>
            </div>

            <div className="checkbox-container">
              <input className="checkbox" type="checkbox" />
              <div className="checkbox-detail">
                I accept all terms and conditions
              </div>
            </div>

            <button className="btn btn-cta">Create New Account</button>
            <Link className="btn-link" to="./login">
              Already have an account &gt;
            </Link>
          </form>
        </div>
      </article>
    </div>
  );
};

export { Signup };
