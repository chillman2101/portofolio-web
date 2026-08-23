import Marquee from "./Marquee";
import Container from "./Layout";

const skillCategories = [
  {
    category: "Languages",
    skills: ["Go", "PHP (Laravel & CodeIgniter)", "Java", "C#", "Kotlin", "Ruby on Rails"],
  },
  {
    category: "Frontend",
    skills: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Bootstrap"],
  },
  {
    category: "Tools & Infrastructure",
    skills: [
      "PostgreSQL / MySQL", "Docker", "Kubernetes", "Redis", "Kafka",
      "Git", "GitHub Actions", "GCP", "Firebase", "Prometheus & Grafana", "CI/CD", "Coolify","Railway",
    ],
  },
];

const allSkillNames = skillCategories.flatMap((c) => c.skills);

const badges = [
  { title: "Fast Learner", desc: "Quick to adapt to new technologies" },
  { title: "Problem Solver", desc: "Creative solutions to complex challenges" },
  { title: "Team Player", desc: "Strong communication and collaboration" },
];

const Skills = () => (
  <section id="skills" style={{ backgroundColor: "var(--retro-yellow)", padding: "64px 0" }}>
    <Container>
      <div className="mb-8 text-center">
        <h2 className="retro-heading mb-3" style={{ fontSize: "clamp(1.1rem, 3vw, 1.6rem)", color: "var(--retro-black)" }}>
          ~ Skills &{" "}
          <span
            style={{
              backgroundColor: "var(--retro-purple)",
              color: "#ffffff",
              padding: "0 10px",
              border: "3px solid var(--retro-black)",
              display: "inline-block",
            }}
          >
            Expertise
          </span>{" "}
          ~
        </h2>
        <p className="text-base" style={{ color: "var(--retro-black)", opacity: 0.65 }}>
          Technologies and tools I use to build scalable backend systems.
        </p>
      </div>

      <Marquee speed={30} className="mb-10">
        <span style={{ padding: "0 1.5rem", fontFamily: "var(--font-display)", fontSize: "0.6rem", color: "var(--retro-purple)" }}>
          {allSkillNames.join("   ★   ")}   ★
        </span>
      </Marquee>

      <div className="grid lg:grid-cols-2 gap-6 mb-8">
        {skillCategories.map((cat, i) => (
          <div
            key={i}
            style={{
              backgroundColor: "var(--retro-center-bg)",
              border: "3px solid var(--retro-black)",
            }}
          >
            <div
              className="px-6 py-4"
              style={{
                backgroundColor: "var(--retro-purple)",
                borderBottom: "3px solid var(--retro-black)",
              }}
            >
              <h3 className="font-black text-lg" style={{ color: "#ffffff" }}>{cat.category}</h3>
            </div>

            <div className="p-6 flex flex-wrap gap-2">
              {cat.skills.map((skill, j) => (
                <span key={j} className="retro-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="retro-divider">★</div>

      <div className="grid sm:grid-cols-3 gap-4">
        {badges.map((b, i) => (
          <div
            key={i}
            className="text-center p-6"
            style={{
              backgroundColor: "var(--retro-center-bg)",
              border: "3px solid var(--retro-black)",
            }}
          >
            <div style={{ fontSize: "2.5rem" }} className="mb-3">{b.emoji}</div>
            <h4 className="font-black text-sm mb-1" style={{ color: "var(--retro-black)" }}>{b.title}</h4>
            <p className="text-xs" style={{ color: "var(--retro-black)", opacity: 0.65 }}>{b.desc}</p>
          </div>
        ))}
      </div>
    </Container>
  </section>
);

export default Skills;
