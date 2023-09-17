import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p>&copy; 2022 Your Gambling Site. All rights reserved.</p>
          </div>
          <div className="col-md-6">
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/games">Games</a></li>
              <li><a href="/profile">Profile</a></li>
              <li><a href="/login">Login</a></li>
              <li><a href="/register">Register</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;