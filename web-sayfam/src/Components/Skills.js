import React from "react";
import "./Skills.css";
import JavaLogo from "../Image/Javalogo.png";
import ReactLogo from "../Image/reactlogo3.png";
import NodeLogo from "../Image/nodelogo3.PNG";
import VsLogo from "../Image/vscodelogo25.png";
import ReduxLogo from "../Image/reduxlogo.PNG";
import FigmaLogo from "../Image/figmalogo3.png";

function Skills() {
  return (
    <div className="skills">
      <div className="skills_left">
        <h2>Skills</h2>
      </div>
      <div className="skills_right">
        <div className="skills_column">
          <div className="skills_item">
            <div
              className="skills_image"
              style={{
                background: `url(${JavaLogo})`,
                backgroundSize: "cover",
              }}
            ></div>
            <div className="skills_name">JAVASCRIPT</div>
          </div>
          <div className="skills_item">
            <div
              className="skills_image"
              style={{
                background: `url(${NodeLogo})`,
                backgroundSize: "cover",
              }}
            ></div>
            <div className="skills_name">NODE</div>
          </div>
        </div>
        <div className="skills_column">
          <div className="skills_item">
            <div
              className="skills_image"
              style={{
                background: `url(${ReactLogo})`,
                backgroundSize: "cover",
              }}
            ></div>
            <div className="skills_name">REACT</div>
          </div>
          <div className="skills_item">
            <div
              className="skills_image"
              style={{
                background: `url(${VsLogo})`,
                backgroundSize: "cover",
              }}
            ></div>
            <div className="skills_name">VS CODE</div>
          </div>
        </div>
        <div className="skills_column">
          <div className="skills_item">
            <div
              className="skills_image"
              style={{
                background: `url(${ReduxLogo})`,
                backgroundSize: "cover",
              }}
            ></div>
            <div className="skills_name">REDUX</div>
          </div>
          <div className="skills_item">
            <div
              className="skills_image"
              style={{
                background: `url(${FigmaLogo})`,
                backgroundSize: "cover",
              }}
            ></div>
            <div className="skills_name">FIGMA</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
