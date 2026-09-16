import { RetroLoader, RetroError } from "./Status";

export default function Projects({ projects, loading, error }) {
  return (
    <section id="projects">
      <h2 className="section-heading">Projects</h2>
      {loading && <RetroLoader label="Loading projects" />}
      {error && <RetroError message={error} />}
      {projects && (
        <div className="cartridge-grid">
          {projects.map((project) => (
            <div className="cartridge" key={project._id}>
              <div className="cartridge__label">
                <h3 className="cartridge__title">{project.title}</h3>
                <p className="cartridge__desc">{project.description}</p>
                <div className="cartridge__stack">
                  {project.techStack?.map((tech) => (
                    <span className="tag" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="cartridge__links">
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noreferrer">
                    Code
                  </a>
                )}
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noreferrer">
                    Live
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
