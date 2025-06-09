import React, { useState } from "react";
import "../styles/home.css";
import logo from "../assets/logo.png";
import Copyright from "../components/Copyright";

const Home: React.FC = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    fetch(
      "https://script.google.com/macros/s/AKfycbyrYnos-QvmSvyNJXiDjR6ZJ-kjuA9kTmzZ--ISFz0me9NN8zF101lxmWLkPavEyP-msw/exec",
      {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `email=${encodeURIComponent(email)}`,
      }
    );

    setMessage(`Thanks! You'll hear from us at ${email}`);
    setEmail("");
  };

  return (
    <div className="container">
      <div className="logo-section">
        <img src={logo} alt="QuoriOS Logo" className="logo-img" />
      </div>

      <div className="hero-section">
        <div className="hero-wrapper">
          <div className="hero-content">
            <h1>
              Your <span className="highlight">Blueprint</span> for <br />
              Scalable Execution
            </h1>
            <p className="tagline">Define. Execute. Track.</p>
            <p className="coming-soon">Coming soon to teams that move fast.</p>

            <div className="signup-card">
              <form onSubmit={handleSubmit}>
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit">Join the Waitlist</button>
              </form>
              <p className="form-msg">{message}</p>
            </div>
          </div>

          <div className="footer-section">
            <div className="contact-section">
              <p>
                <a href="mailto:info@quorios.com">info@quorios.com</a>
                &nbsp; | &nbsp;
                <a
                  href="https://www.linkedin.com/company/quorios"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </p>
            </div>
            <Copyright />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
