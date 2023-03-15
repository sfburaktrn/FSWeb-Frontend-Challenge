import "./ProjectCard1.css";
import Proje1 from "../Image/frontendproje111.png";

function ProjectCard1() {
  return (
    <div className="projectcard1">
      <div
        className="projectcard1foto"
        style={{ background: `url(${Proje1})`, backgroundSize: "cover" }}
      ></div>
      <div className="projectcard1info">
        <p className="projectcard1infobaslik">WORKINTECH</p>
        <p className="projectcard1infobilgi">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <div className="projectcardskills">
          <p className="react">React</p>
          <p className="redux">Redux</p>
          <p className="vercel">Vercel</p>
        </div>
        <div className="projectcardlinks">
          <p className="viewsite">
            <a
              href="https://fsweb-s11g1-shopping-cart-sfburaktrn.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Site
            </a>
          </p>
          <p className="githublink">
            <a
              href="https://github.com/sfburaktrn/fsweb-s11g1-shopping-cart"
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

export default ProjectCard1;
