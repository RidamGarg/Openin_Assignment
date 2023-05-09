import React from "react";
import googleLogo from "../google.png";
import appleLogo from "../apple.png";
function login({ setLogin }) {
  return (
    <div className="container align-items-between">
      <div className="left-panel">
        <h1>Board.</h1>
      </div>
      <div className="right-panel">
        <div className="login">
          <h1 className="no-margin">Sign In</h1>
          <h5 className="fw-light no-margin">Sign in to your account</h5>
          <div>
            <div className="oauth">
              <div className="oauth-google">
                <h6 className="fw-light no-margin center-element">
                  <img src={googleLogo} className="img-resize" /> Sign in with
                  Google
                </h6>
              </div>
              <div className="oauth-apple">
                <h6 className="fw-light no-margin center-element">
                  <img src={appleLogo} className="img-resize" /> Sign in with
                  Apple
                </h6>
              </div>
            </div>
          </div>
          <div className="login-form">
            <div className="input-group">
              <label for="email" className="input-label fs-lato">
                Email address
              </label>
              <br />
              <input type="email" id="password" className="input-field" />
            </div>
            <div className="input-group">
              <label for="password" className="input-label fs-lato">
                Password
              </label>
              <br />
              <input type="email" id="password" className="input-field" />
            </div>
            <div>
              <h5 className="text-blue fs-lato no-margin">Forgot Password?</h5>
              <button
                type="button"
                className="btn-dark"
                style={{ cursor: "pointer" }}
              >
                Sign In
              </button>
            </div>
          </div>
          <div>
            <h5 className="fw-light text-center">
              Don’t have an account?{" "}
              <span className="text-blue">Register here</span>
            </h5>
            <h5
              className="fw-light text-center text-blue"
              onClick={() => setLogin(false)}
              style={{ cursor: "pointer" }}
            >
              Check Out Our Cool Dashboard
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default login;
