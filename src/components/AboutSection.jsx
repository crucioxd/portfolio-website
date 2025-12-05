import { Brain, Code, Database } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-16 px-6 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Side - Text */}
          <div className="space-y-5">
            <h3 className="text-xl font-semibold">
              Machine Learning Engineer & Full Stack Developer
            </h3>

            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              I create intelligent, data-driven solutions that connect machine
              learning with modern web technologies. My focus is on building
              systems that analyze, predict, and deliver seamless user
              experiences.
            </p>

            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              From developing backend architectures to crafting interactive UIs,
              I enjoy turning complex problems into efficient, scalable, and
              impactful products. I constantly explore new frameworks and ML
              advancements to push what’s possible.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-3">
              <a href="#contact" className="cosmic-button text-sm px-5 py-2">
                Get In Touch
              </a>

              <a
                href="/projects/resume.pdf"
                className="px-5 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 text-sm"
              >
                Resume
              </a>
            </div>
          </div>

          {/* Right Side - Skills */}
          <div className="grid grid-cols-1 gap-4">
            <div className="gradient-border p-4 rounded-xl card-hover">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-full bg-primary/10">
                  <Brain className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-base mb-1">
                    Machine Learning
                  </h4>
                  <p className="text-sm text-muted-foreground leading-snug">
                    Building predictive models and neural networks using Python,
                    TensorFlow, and ML pipelines.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-4 rounded-xl card-hover">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-full bg-primary/10">
                  <Database className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-base mb-1">Data Science</h4>
                  <p className="text-sm text-muted-foreground leading-snug">
                    Turning raw data into insights with Pandas, NumPy, and
                    visualization tools.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-4 rounded-xl card-hover">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-full bg-primary/10">
                  <Code className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-base mb-1">
                    Full Stack Development
                  </h4>
                  <p className="text-sm text-muted-foreground leading-snug">
                    Developing full-fledged web apps with React, Next.js,
                    Express, and MongoDB — from concept to deployment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
