import { Award, FileText } from "lucide-react";

const education = {
  institution: "Kongu Engineering College",
  degree: "B.Tech Information Technology",
  period: "2023 — 2027",
  cgpa: "7.64",
  location: "Erode, Tamil Nadu",
};

const achievements = [
  {
    title: "Plant Disease Prediction",
    description: "Won first prize in Tecno Fest Ideathon at Kongu Engineering College",
    icon: Award,
  },
];

const papers = [
  {
    title: "AI in E-Waste",
    venue: "Sri Ramakrishna College of Technology",
  },
  {
    title: "Pet-Adoption Website",
    venue: "Kongu Engineering College",
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-card/50">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary font-mono">02.</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Education & Achievements</h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Education */}
          <div className="bg-card p-6 rounded-md border border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">Education</h3>
            <div className="space-y-4">
              <div>
                <p className="text-primary font-medium">{education.institution}</p>
                <p className="text-foreground">{education.degree}</p>
                <p className="text-muted-foreground font-mono text-sm">{education.period}</p>
                <p className="text-muted-foreground text-sm mt-2">CGPA: <span className="text-primary">{education.cgpa}</span></p>
              </div>
              <div className="pt-4 border-t border-border">
                <p className="text-muted-foreground text-sm">Previous Education</p>
                <p className="text-foreground text-sm mt-1">Kurinji Matric Hr Sec School, Namakkal</p>
                <p className="text-muted-foreground text-sm">12th Grade: 87.1% | 11th Grade: 82%</p>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="space-y-6">
            <div className="bg-card p-6 rounded-md border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                Achievements
              </h3>
              <div className="space-y-3">
                {achievements.map((achievement) => (
                  <div key={achievement.title}>
                    <p className="text-foreground font-medium">{achievement.title}</p>
                    <p className="text-muted-foreground text-sm">{achievement.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card p-6 rounded-md border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                Papers Presented
              </h3>
              <div className="space-y-3">
                {papers.map((paper) => (
                  <div key={paper.title}>
                    <p className="text-foreground font-medium">{paper.title}</p>
                    <p className="text-muted-foreground text-sm">at {paper.venue}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Soft Skills */}
        <div className="mt-8 bg-card p-6 rounded-md border border-border">
          <h3 className="text-lg font-semibold text-foreground mb-4">Soft Skills</h3>
          <div className="flex flex-wrap gap-3">
            {["Strong Leadership & Initiative", "Analytical & Problem-Solving", "Effective Team Collaboration", "Independent Work"].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 text-sm bg-primary/10 text-primary rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
