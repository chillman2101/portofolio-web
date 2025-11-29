import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform (demo)",
      description:
        "A full-featured e-commerce platform with cart, payment integration, and admin dashboard built with React and Node.js.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      color: "third-color",
      demo: "#",
      github: "#",
    },
  ];
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 fourth-bg">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-black primary-color mb-6">
            Featured{" "}
            <span className="secondary-bg px-4 inline-block border-4 primary-border-color neo-brutal-shadow-md">
              Projects
            </span>
          </h2>
          <p className="text-xl primary-color max-w-2xl py-2">
            {" "}
            Here are some of my recent projects that showcase my skills and
            experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white border-4 primary-border-color neo-brutal-shadow-lg transition-all flex flex-col"
            >
              <div
                className={`${project.color} p-6 border-b-4 primary-border-color`}
              >
                <h3 className="text-2xl font-black primary-color mb-2">
                  {project.title}
                </h3>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <p className="primary-color mb-4 flex-grow">
                  {project.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mb-4 p-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="text-xs font-bold fifth-bg primary-color px-3 py-1 border-2 primary-border-color"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 p-4">
                <a
                  href={project.demo}
                  className="flex-1 flex items-center justify-center gap-2 secondary-bg primary-color font-bold py-3 px-4 border-4 primary-border-color neo-brutal hover:translate-x-1 hover:translate-y-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink size={18} />
                  Demo
                </a>
                <a
                  href={project.demo}
                  className="flex-1 flex items-center justify-center gap-2 primary-bg text-white font-bold py-3 px-4 border-4 primary-border-color neo-brutal hover:translate-x-1 hover:translate-y-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={18} />
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
