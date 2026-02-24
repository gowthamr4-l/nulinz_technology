import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineRemoveRedEye, MdVisibilityOff } from "react-icons/md";
import { BsMoon } from "react-icons/bs";
import { IoChevronBack } from "react-icons/io5";
import "../Css/login.css";
import LogoImg from "../assets/horizon-logo.png";

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [checked, setChecked] = useState(true);

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="login-page">

      {/* ══════════════════════════════
          LEFT PANEL — Auth Form
      ══════════════════════════════ */}
      <div className="login-left">

        <a href="/nulinz_technology/dashboard" className="back-link">
          <IoChevronBack size={14} /> Back to dashboard
        </a>

        <div className="form-area">
          <h1 className="form-title">Sign In</h1>
          <p className="form-subtitle">Enter your email and password to sign in!</p>

          {/* Google */}
          <button className="google-btn" type="button">
            <FcGoogle size={20} />
            Sign in with Google
          </button>

          {/* Divider */}
          <div className="divider">
            <span className="divider-line" />
            <span className="divider-text">or</span>
            <span className="divider-line" />
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="signin-form">
            <div className="field-group">
              <label className="field-label">Email<span className="req">*</span></label>
              <input type="email" placeholder="mail@simmmple.com" className="field-input" required />
            </div>

            <div className="field-group">
              <label className="field-label">Password<span className="req">*</span></label>
              <div className="pw-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Min. 8 characters"
                  className="field-input"
                  required
                />
                <button type="button" className="pw-toggle" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <MdVisibilityOff size={18} /> : <MdOutlineRemoveRedEye size={18} />}
                </button>
              </div>
            </div>

            {/* Options row — checkbox fixed, no logo inside */}
            <div className="options-row">
              <label className="checkbox-label">
                <div
                  className={`custom-checkbox ${checked ? "checked" : ""}`}
                  onClick={() => setChecked(!checked)}
                >
                  {checked && (
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5L4 7.5L8 3" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </div>
                Keep me logged in
              </label>
              <a href="/forgot-password" className="forgot-link">Forget password?</a>
            </div>

            <button type="submit" className="submit-btn">Sign In</button>
          </form>

          <p className="register-text">
            Not registered yet? <a href="/signup" className="register-link">Create an Account</a>
          </p>
        </div>

        <div className="left-footer">
          © 2022 Horizon UI. All Rights Reserved. Made with love by <span>Simmmple!</span>
        </div>
      </div>

      {/* ══════════════════════════════
          RIGHT PANEL — Branding
      ══════════════════════════════ */}
      <div className="login-right">
        <div className="right-inner">

          {/* Logo image inside white circle */}
          <div className="logo-circle">
            <img src={LogoImg} alt="Horizon Logo" className="logo-img" />
          </div>

          {/* Brand name */}
          <div className="brand-name-row">
            <span className="brand-text">Horizon</span>
            <span className="brand-badge">UI</span>
          </div>

          {/* Info card */}
          <div className="info-card">
            <p className="info-card-sub">Learn more about Horizon UI on</p>
            <a href="https://horizon-ui.com" className="info-card-link">horizon-ui.com</a>
          </div>

          {/* Footer links */}
          <div className="right-footer-links">
            <a href="#market">Marketplace</a>
            <a href="#license">License</a>
            <a href="#terms">Terms of Use</a>
            <a href="#blog">Blog</a>
          </div>
        </div>

        {/* Moon FAB */}
        <button className="theme-fab" type="button" aria-label="Toggle Theme">
          <BsMoon size={16} />
        </button>
      </div>
    </div>
  );
}