import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[80vh] flex items-center justify-center px-6 py-20"
    >
      <div className="container max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Side - Text Content */}
        <div className="text-left space-y-5 z-10">
          <div className="space-y-3">
            <span className="text-sm md:text-base text-muted-foreground opacity-0 animate-fade-in">
              Hello, I'm
            </span>

            <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
              <span className="text-primary opacity-0 animate-fade-in-delay-1">
                Puneet
              </span>
              <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
                Upadhayay
              </span>
            </h1>
          </div>

          <p className="text-base md:text-lg text-muted-foreground max-w-lg opacity-0 animate-fade-in-delay-3 leading-relaxed">
            I craft intelligent digital solutions powered by data and modern web
            technologies. Specializing in Machine Learning and Full Stack
            Development, I build systems that learn, adapt, and deliver seamless
            user experiences.
          </p>

          <div className="pt-2 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button text-sm px-5 py-2">
              View My Work
            </a>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative group">
            {/* Outer animated border */}
            <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-70 transition-opacity duration-300 animate-spin-slow"></div>

            {/* Main image container */}
            <div className="relative rounded-full bg-background p-1">
              <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-2 border-border relative">
                <img
                  src="/projects/myimg.jpg"
                  alt="Puneet Upadhayay"
                  className="w-full h-full object-cover opacity-0 animate-fade-in-delay-2 scale-105 group-hover:scale-100 transition-transform duration-500"
                />

                {/* Shine effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>

              {/* Floating elements */}
              <div className="absolute -bottom-3 -left-3 w-5 h-5 bg-primary rounded-full opacity-0 animate-fade-in-delay-3 animate-float"></div>
              <div className="absolute -top-4 -right-4 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-0 animate-fade-in-delay-4 animate-float-slow"></div>
              <div className="absolute top-1/2 -right-5 w-3 h-3 bg-blue-500 rounded-full opacity-0 animate-fade-in-delay-5 animate-float"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-xs text-muted-foreground mb-1">Scroll</span>
        <ArrowDown className="h-4 w-4 text-primary" />
      </div>
    </section>
  );
};
