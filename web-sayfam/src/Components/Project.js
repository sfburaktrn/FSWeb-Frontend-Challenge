import "./Project.css";
import ProjectCard1 from "./ProjectCard1";
import ProjectCard2 from "./ProjectCard2";

function Project() {
  return (
    <div className="project">
      <h1 className="project-yazi">Project</h1>
      <div className="projects">
        <ProjectCard1 />
        <br />
        <ProjectCard2 />
      </div>
    </div>
  );
}

export default Project;
