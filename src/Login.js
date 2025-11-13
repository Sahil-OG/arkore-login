import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="login-page">
      {/* Header Section */}
      <header className="header">
        <img
          src={process.env.PUBLIC_URL + "/arkore-logo.jpg"}
          alt="Arkore Solutions"
          className="header-logo"
        />
        <h2 className="header-title">Arkore Class360</h2>
      </header>

      <div className="login-container">
        {/* Left Section - Login Form */}
        <div className="left-column">
          <div className="login-box">
            <h2>Sign in</h2>
            <p>Enter your email and password to access your account.</p>

            <form>
              <label>Email</label>
              <input type="email" placeholder="Enter your email" required />

              <label>Password</label>
              <input type="password" placeholder="Enter your password" required />

              <div className="forgot-password">
                <a href="/" onClick={(e) => e.preventDefault()}>
                  Forgot your password?
                </a>
              </div>

              <button type="submit" className="login-btn">
                Log in
              </button>
            </form>

            <div className="login-as">
              <p>Login As</p>
              <div className="role-buttons">
                <button>Superadmin</button>
                <button>Admin</button>
                <button>Teacher</button>
                <button>Parent</button>
                <button>Student</button>
                <button>Accountant</button>
                <button>Librarian</button>
                <button>Driver</button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Hero Image */}
        <div
          className="right-column"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + "/hero.jpg"})`,
          }}
        ></div>
      </div>
    </div>
  );
}

export default Login;
