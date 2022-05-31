import { Link } from "react-router-dom";
import "../../Athentication/authentication.css";

const Login = () => {
  return (
    <div className="authentication-page">
      <article className="form-container login-form">
        <div className="authentication-form-container">
          <form className="form" action="">
            <h3 className="h3">LOGIN</h3>
            <label htmlFor="email" className="input-label">
              Email Address:{" "}
            </label>
            <div className="input-icon icons-left">
              <span className="material-icons">email</span>
              <input
                className="input"
                type="email"
                id="email"
                name="email"
                placeholder="Enter Email ID"
              />
            </div>

            <label htmlFor="password" className="input-label">
              Password:{" "}
            </label>
            <div className="input-icon icons-left">
              <span className="material-icons">lock</span>
              <input
                className="input"
                type="password"
                id="password"
                name="password"
                placeholder="Enter Password"
              />
            </div>

            <div className="checkbox-container">
              <div>
                <input
                  className="checkbox"
                  type="checkbox"
                  name="remember-me"
                  id="remember-me"
                />
                <label htmlFor="remember-me">
                  <span className="checkbox-detail">Remember me</span>
                </label>
              </div>
              <Link to="/" className="btn-link">
                Forgot Password?
              </Link>
            </div>

            <button className="btn btn-cta">Login</button>
            <Link to="/signup" className="btn-link">
              Create New Account &gt;
            </Link>
          </form>
        </div>
      </article>
    </div>
  );
};

export { Login };
