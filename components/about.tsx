const skills = [
  "HTML / CSS / Bootstrap",
  "JavaScript",
  "PHP / MySQL / XAMPP",
  "Node.js / Express.js",
  "Python / Flask",
  "Java",
  "C / C++ / Go",
  "MongoDB",
  "Power BI",
];

export function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary font-mono">01.</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">About Me</h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Hello! I'm Mounith, a highly motivated B.Tech Information Technology student at{" "}
              <span className="text-primary">Kongu Engineering College</span> (2023-2027). 
              I have strong foundations in Full Stack Development, Artificial Intelligence, 
              and Cloud Computing.
            </p>
            <p>
              I'm skilled in designing and developing web applications, algorithms, and database 
              systems with hands-on project experience. I'm passionate about applying technical 
              expertise to solve real-world problems and eager to grow into a challenging role 
              at a top product-based company.
            </p>
            <p>
              Here are a few technologies I've been working with:
            </p>

            <ul className="grid grid-cols-2 gap-2 pt-2">
              {skills.map((skill) => (
                <li key={skill} className="flex items-center gap-2 text-sm">
                  <span className="text-primary">▹</span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative group">
            <div className="absolute -inset-2 bg-primary/20 rounded-md blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative aspect-square bg-muted rounded-md overflow-hidden border-2 border-primary/50">
              <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-300" />
              <div className="w-full h-full flex items-center justify-center text-6xl font-bold text-primary/30">
                MD
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
