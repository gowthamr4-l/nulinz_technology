import React from "react";
import { useNavigate } from "react-router-dom";
import "../Css/login.css";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // You can add validation here
    navigate("/dashboard"); // redirect after login
  };

  return (
    <div className="login-container">
      {/* LEFT SIDE */}
      <div className="login-left">
        <div className="back-link">← Back to dashboard</div>

        <div className="login-card">
          <h1>Sign In</h1>
          <p className="subtitle">
            Enter your email and password to sign in!
          </p>

          <button className="google-btn">
            Sign in with Google
          </button>

          <div className="divider">
            <span></span>
            <p>or</p>
            <span></span>
          </div>

          <form onSubmit={handleLogin}>
            <label>Email*</label>
            <input type="email" required />

            <label>Password*</label>
            <input type="password" required />

            <div className="options">
              <div>
                <input type="checkbox" id="keep" />
                <label htmlFor="keep">Keep me logged in</label>
              </div>
              <a href="#">Forgot password?</a>
            </div>

            <button className="signin-btn" type="submit">
              Sign In
            </button>
          </form>

          <p className="create">
            Not registered yet? <span>Create an Account</span>
          </p>
        </div>

        {/* <div className="footer">
          © 2022 Horizon UI. All Rights Reserved.
        </div> */}
      </div>

      {/* RIGHT SIDE */}
      <div className="login-right">
        <div className="logo-circle"></div>
        <h2>Horizon UI</h2>

        <div className="info-box">
          <p>Learn more about Horizon UI on</p>
          <h3>horizon-ui.com</h3>
        </div>
      </div>
    </div>
  );
}