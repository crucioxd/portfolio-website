import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  SiPython,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiNumpy,
  SiPandas,
  SiTensorflow,
  SiGit,
  SiHtml5,
  SiCss3,
} from "react-icons/si";

const skills = [
  { name: "Python", icon: SiPython, category: "ml" },
  { name: "NumPy", icon: SiNumpy, category: "ml" },
  { name: "Pandas", icon: SiPandas, category: "ml" },
  { name: "TensorFlow", icon: SiTensorflow, category: "ml" },

  { name: "React", icon: SiReact, category: "frontend" },
  { name: "Next.js", icon: SiNextdotjs, category: "frontend" },
  { name: "Tailwind CSS", icon: SiTailwindcss, category: "frontend" },
  { name: "HTML", icon: SiHtml5, category: "frontend" },
  { name: "CSS", icon: SiCss3, category: "frontend" },
  { name: "JavaScript", icon: SiJavascript, category: "frontend" },

  { name: "Node.js", icon: SiNodedotjs, category: "backend" },
  { name: "Express", icon: SiExpress, category: "backend" },
  { name: "MongoDB", icon: SiMongodb, category: "backend" },

  { name: "Git / GitHub", icon: SiGit, category: "tools" },
];

const categories = ["all", "ml", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-20 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          Tech <span className="text-primary">Stack</span>
        </h2>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-4 py-1.5 rounded-full transition-all duration-300 capitalize border text-sm sm:text-base",
                activeCategory === category
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-card hover:bg-primary/10 border-border text-foreground"
              )}
            >
              {category === "ml" ? "ML / Data Science" : category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {filteredSkills.map((skill, idx) => {
            const Icon = skill.icon;
            return (
              <div
                key={idx}
                className="bg-card p-4 rounded-xl shadow-sm text-center border border-border hover:shadow-md transition-all"
              >
                <Icon className="h-7 w-7 mx-auto text-primary mb-2" />
                <h3 className="font-medium text-sm sm:text-base">
                  {skill.name}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
