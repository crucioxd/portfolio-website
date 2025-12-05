import { ArrowRight, ExternalLink, Github } from "lucide-react";
import VideoPreview from "./VideoPreview";
const projects = [
  {
    id: 1,
    title: "PrepPal",
    description:
      "An AI-powered mock interview platform that simulates real interview experiences and provides intelligent feedback to help users prepare effectively.",
    video: "/projects/preppal.mp4",
    tags: ["Next.js", "React", "OpenAI API", "TailwindCSS"],
    demoUrl: "https://preppal-azure.vercel.app/dashboard",
    githubUrl: "https://github.com/crucioxd/PrepPal",
  },
  {
    id: 2,
    title: "ML Hyperparameter Visualizer",
    description:
      "An interactive visualization tool for exploring and tuning machine learning hyperparameters with real-time performance insights.",
    video: "/projects/hyperparameter.mp4",
    tags: ["Python", "Streamlit", "Matplotlib", "Scikit-learn"],
    demoUrl: "https://ml-hyperparameter-tuning.streamlit.app/",
    githubUrl: "https://github.com/crucioxd/ml-hyperparameter",
  },
  {
    id: 3,
    title: "Vibe Matrix",
    description:
      "An intelligent hybrid recommendation engine using embeddings, collaborative filtering, and FastAPI backend with a modern React UI.",
    video: "/projects/vibematrix.mp4",
    tags: ["FastAPI", "React", "Python", "Machine Learning", "Embeddings"],
    githubUrl: "https://github.com/crucioxd/hybrid-movie-recommender",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A selection of projects that blend my expertise in machine learning
          and full stack development, combining intelligent systems with clean,
          user-focused interfaces.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <VideoPreview src={project.video} />

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
