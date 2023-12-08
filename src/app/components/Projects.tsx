import Image from "next/image";
import Link from "next/link";
import { projectsData } from "@/lib/data";
import {v4 as uuidv4} from "uuid";

const Projects = () => {
  return (
    <section id="projects" aria-label="Projects" className="container--section">
      <header className="section__title">
        <h2 className="project__header">Projects</h2>
      </header>

      <div className="projects-container">
        <ul className="project__list" role="list" aria-label="Project List">
          {projectsData.map((project, idx) => {
            return (
              <li className="project" key={uuidv4()}>
                <div className="preview">
                  <Image
                    src={project.thumbnail}
                    alt={`${project.title} website screenshot`}
                  />
                </div>
                <div className="project__info">
                  <div className="project__title">
                    <p className="num">0{idx + 1}</p>
                    <Link href={project.link} className="title">
                      <h3>{project.title}</h3>
                    </Link>
                  </div>
                  <p className="project__description">{project.description}</p>
                  <p className="project__tools">{project.tools.join(", ")}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
