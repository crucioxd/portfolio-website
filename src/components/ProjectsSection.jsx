import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "PrepPal",
    description:
      "An AI-powered mock interview platform that simulates real interview experiences and provides intelligent feedback to help users prepare effectively.",
    image: "/projects/preppal.png", // 🖼️ replace this with your actual image
    tags: ["Next.js", "React", "OpenAI API", "TailwindCSS"],
    demoUrl: "https://preppal-azure.vercel.app/dashboard",
    githubUrl: "https://github.com/crucioxd/PrepPal",
  },
  {
    id: 2,
    title: "ML Hyperparameter Visualizer",
    description:
      "An interactive visualization tool for exploring and tuning machine learning hyperparameters with real-time performance insights.",
    image: "/projects/hyperparameter.png", // 🖼️ replace this with your actual image
    tags: ["Python", "Streamlit", "Matplotlib", "Scikit-learn"],
    demoUrl: "#", // add live link if you host it later
    githubUrl: "https://github.com/crucioxd/ml-hyperparameter",
  },
  {
    id: 3,
    title: "Movie Recommendation System",
    description:
      "A personalized recommendation engine that suggests movies using collaborative filtering and content-based machine learning models.",
    image: "/projects/movie-recommender.png", // 🖼️ replace this with your actual image
    tags: ["Python", "Pandas", "Scikit-learn", "Flask"],
    demoUrl: "#", // add live link if deployed
    githubUrl: "https://github.com/crucioxd/movie-recommender-system",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A selection of projects that blend my expertise in full-stack
          development and machine learning — combining intelligent systems with
          clean, user-focused interfaces.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    {project.demoUrl !== "#" && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/crucioxd"
            rel="noreferrer"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
