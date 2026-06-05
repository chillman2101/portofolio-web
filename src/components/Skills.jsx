import Container from "./Layout";

const skillCategories = [
  {
    category: "Languages",
    skills: [
      { name: "Go", level: 80 },
      { name: "PHP (Laravel & CodeIgniter)", level: 80 },
      { name: "Java", level: 60 },
      { name: "C#", level: 70 },
      { name: "Kotlin", level: 70 },
      { name: "Ruby on Rails", level: 60 },
    ],
  },
  {
    category: "Tools & Infrastructure",
    skills: [
      { name: "PostgreSQL / MySQL", level: 70 },
      { name: "Docker", level: 50 },
      { name: "Redis", level: 40 },
      { name: "Kafka", level: 30 },
      { name: "Prometheus & Grafana", level: 30 },
      { name: "Git", level: 70 },
    ],
  },
];

const badges = [
  { emoji: "⚡", title: "Fast Learner", desc: "Quick to adapt to new technologies" },
  { emoji: "🎯", title: "Problem Solver", desc: "Creative solutions to complex challenges" },
  { emoji: "🤝", title: "Team Player", desc: "Strong communication and collaboration" },
];

const Skills = () => (
  <section id="skills" style={{ backgroundColor: "var(--blue-light)", padding: "80px 0" }}>
    <Container>
      <div className="mb-12">
        <h2 className="font-black mb-3" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "var(--dark)" }}>
          Skills &{" "}
          <span
            style={{
              backgroundColor: "var(--blue)",
              color: "var(--white)",
              padding: "0 10px",
              border: "3px solid var(--dark)",
              boxShadow: "4px 4px 0 var(--dark)",
              display: "inline-block",
            }}
          >
            Expertise
          </span>
        </h2>
        <p className="text-base" style={{ color: "var(--dark)", opacity: 0.65 }}>
          Technologies and tools I use to build scalable backend systems.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6 mb-8">
        {skillCategories.map((cat, i) => (
          <div
            key={i}
            style={{
              backgroundColor: "var(--white)",
              border: "3px solid var(--dark)",
              boxShadow: "6px 6px 0 var(--dark)",
            }}
          >
            <div
              className="px-6 py-4"
              style={{
                backgroundColor: "var(--blue)",
                borderBottom: "3px solid var(--dark)",
              }}
            >
              <h3 className="font-black text-lg" style={{ color: "var(--white)" }}>{cat.category}</h3>
            </div>

            <div className="p-6 flex flex-col gap-5">
              {cat.skills.map((skill, j) => (
                <div key={j}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-sm" style={{ color: "var(--dark)" }}>{skill.name}</span>
                    <span className="font-bold text-xs" style={{ color: "var(--blue)" }}>{skill.level}%</span>
                  </div>
                  <div
                    className="w-full h-4 relative"
                    style={{
                      backgroundColor: "var(--blue-light)",
                      border: "2px solid var(--dark)",
                    }}
                  >
                    <div
                      style={{
                        width: `${skill.level}%`,
                        height: "100%",
                        backgroundColor: "var(--blue)",
                        borderRight: skill.level < 100 ? "2px solid var(--dark)" : "none",
                        transition: "width 0.5s ease",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="grid sm:grid-cols-3 gap-4">
        {badges.map((b, i) => (
          <div
            key={i}
            className="text-center p-6"
            style={{
              backgroundColor: "var(--white)",
              border: "3px solid var(--dark)",
              boxShadow: "4px 4px 0 var(--dark)",
            }}
          >
            <div style={{ fontSize: "2.5rem" }} className="mb-3">{b.emoji}</div>
            <h4 className="font-black text-sm mb-1" style={{ color: "var(--dark)" }}>{b.title}</h4>
            <p className="text-xs" style={{ color: "var(--dark)", opacity: 0.65 }}>{b.desc}</p>
          </div>
        ))}
      </div>
    </Container>
  </section>
);

export default Skills;
