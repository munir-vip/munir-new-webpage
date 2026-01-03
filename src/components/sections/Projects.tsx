import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/projects";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const filters = ["all", "React", "TypeScript", "Node.js", "Next.js"];

  const filteredProjects = filter === "all"
    ? projects
    : projects.filter(project => project.tags.includes(filter));

  useEffect(() => {
    if (gridRef.current) {
      gsap.from(gridRef.current.children, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
        opacity: 0,
        y: 60,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out"
      });
    }
  }, [filteredProjects]);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 md:py-32 relative"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-bold mb-8 text-center gradient-text">
          Projects
        </h2>

        <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
          A selection of web applications and digital experiences I've crafted with modern technologies.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map(filterItem => (
            <button
              key={filterItem}
              onClick={() => setFilter(filterItem)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                filter === filterItem
                  ? "bg-gradient-to-r from-cyan-500 to-violet-500 text-white"
                  : "bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-foreground border border-white/10"
              }`}
            >
              {filterItem === "all" ? "All Projects" : filterItem}
            </button>
          ))}
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group glow-card rounded-xl overflow-hidden hover:scale-[1.02] transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-cyan-400 transition-colors"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-cyan-400 transition-colors"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No projects found with this filter.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
