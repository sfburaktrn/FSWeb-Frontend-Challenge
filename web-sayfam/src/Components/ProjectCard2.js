import "./ProjectCard2.css";
import Proje2 from "../Image/frontendproje22.png";

function ProjectCard2() {
  return (
    <div className="projectcard2">
      <div
        className="projectcard2foto"
        style={{ background: `url(${Proje2})`, backgroundSize: "cover" }}
      ></div>
      <div className="projectcard1info">
        <p className="projectcard1infobaslik">WORKINTECH</p>
        <p className="projectcard1infobilgi">
          In this project, I created a simple calculator application that can
          add, multiply and subtract numbers in any order, as well as add save
          and callback features.
        </p>
        <div className="projectcardskills">
          <p className="react">React</p>
          <p className="redux">Redux</p>
          <p className="vercel">Vercel</p>
        </div>
        <div className="projectcardlinks">
          <p className="viewsite">
            <a
              href="https://fsweb-s10g1-reducer-calculator-sfburaktrn.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Site
            </a>
          </p>
          <p className="githublink">
            <a
              href="https://github.com/sfburaktrn/fsweb-s10g1-reducer-calculator"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard2;
