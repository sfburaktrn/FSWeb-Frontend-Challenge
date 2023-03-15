import React from "react";
import "./Hero.css";
import Foto from "../Image/vesikalıkk.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {
  return (
    <div className="hero">
      <span className="whoiam">Sefa Burak</span>

      <div className="hero_content">
        <div className="hero_content_left">
          <h1>I am a FrontEnd Developer...</h1>
          <p>
            ...who likes to craft solid and scalable frontend products with
            great user experiences.
          </p>
          <div className="hero_buttons">
            <button>
              <a
                href="https://github.com/sfburaktrn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
                GitHub
              </a>
            </button>
            <button>
              <a
                href="https://tr.linkedin.com/in/sefaburaktorun"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
                Linkedin
              </a>
            </button>
          </div>
        </div>
        <div
          className="hero_content_right"
          style={{ background: `url(${Foto})`, backgroundSize: "cover" }}
        ></div>
      </div>
    </div>
  );
}

export default Hero;
