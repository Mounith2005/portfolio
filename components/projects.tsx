import Link from "next/link";
import { Github, Folder } from "lucide-react";

const featuredProjects = [
  {
    title: "Agro-Guard",
    subtitle: "AI-based Plant Disease Detection System",
    description:
      "Built a web-based application to detect plant diseases from leaf images using machine learning models. This project won first prize at the Tecno Fest Ideathon at Kongu Engineering College.",
    technologies: ["Python", "Flask", "HTML", "CSS", "JavaScript", "Jupyter Notebook"],
    github: "https://github.com/Mounith2005/Agro-gaurd",
  },
  {
    title: "Student Management System",
    description:
      "Developed a full-stack application to manage student records with complete CRUD operations (Create, Read, Update, Delete). Features a clean interface for efficient data management.",
    technologies: ["Node.js", "Express.js", "MongoDB", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/Mounith2005/student-management-system",
  },
  {
    title: "Online Car Rental Application",
    description:
      "Developed a comprehensive web application for car booking and rental management. Users can browse available vehicles, make reservations, and manage their bookings.",
    technologies: ["HTML", "CSS", "JavaScript", "MongoDB"],
    github: "https://github.com/Mounith2005/car-rentel",
  },
];

const otherProjects = [
  {
    title: "Data Compression Tool",
    description: "Built a tool to reduce file size using compression algorithms for efficient storage and transfer.",
    technologies: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
    github: "https://github.com/Mounith2005/Datacompression",
  },
  {
    title: "Sudoku Solver",
    description: "Designed an AI-based Sudoku solver using logical deduction and backtracking algorithms.",
    technologies: ["Python"],
    github: "https://github.com/Mounith2005/SudokuSolver",
  },
  {
    title: "Airline Management System",
    description: "Developed a system for flight scheduling, ticket booking, and passenger management.",
    technologies: ["Java", "AWT"],
    github: "https://github.com/Mounith2005/AirlineManagementSystem",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary font-mono">03.</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Projects</h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Featured Projects */}
        <div className="space-y-24 mb-24">
          {featuredProjects.map((project, index) => (
            <div
              key={project.title}
              className={`grid md:grid-cols-12 gap-4 items-center ${
                index % 2 === 1 ? "md:text-right" : ""
              }`}
            >
              <div
                className={`md:col-span-7 ${
                  index % 2 === 1 ? "md:col-start-6 md:row-start-1" : ""
                }`}
              >
                <div className="relative aspect-video bg-muted rounded-md overflow-hidden group">
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Folder className="h-16 w-16 text-primary/30" />
                  </div>
                </div>
              </div>

              <div
                className={`md:col-span-6 md:row-start-1 ${
                  index % 2 === 1 ? "md:col-start-1" : "md:col-start-6"
                } z-10`}
              >
                <p className="text-primary font-mono text-sm mb-2">Featured Project</p>
                <h3 className="text-2xl font-bold text-foreground mb-1">{project.title}</h3>
                {project.subtitle && (
                  <p className="text-primary/80 text-sm mb-3">{project.subtitle}</p>
                )}
                <div className="bg-card p-6 rounded-md shadow-lg mb-4">
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
                <div className={`flex flex-wrap gap-3 mb-4 ${index % 2 === 1 ? "md:justify-end" : ""}`}>
                  {project.technologies.map((tech) => (
                    <span key={tech} className="text-sm font-mono text-muted-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className={`flex gap-4 ${index % 2 === 1 ? "md:justify-end" : ""}`}>
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-primary transition-colors"
                    aria-label="GitHub repository"
                  >
                    <Github className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div className="text-center mb-12">
          <h3 className="text-xl font-bold text-foreground">Other Noteworthy Projects</h3>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {otherProjects.map((project) => (
            <div
              key={project.title}
              className="group bg-card p-6 rounded-md hover:translate-y-[-4px] transition-transform duration-300"
            >
              <div className="flex items-center justify-between mb-6">
                <Folder className="h-10 w-10 text-primary" />
                <div className="flex gap-40">
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="GitHub repository"
                  >
                    <Github className="h-5 w-5" />
                  </Link>
                </div>
              </div>
              <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                {project.title}
              </h4>
              <p className="text-muted-foreground text-sm mb-6">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="text-xs font-mono text-muted-foreground">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
