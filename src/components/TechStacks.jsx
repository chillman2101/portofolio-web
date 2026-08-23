import Marquee from "./Marquee";
import Container from "./Layout";

const stackCategories = [
  {
    category: "Frontend",
    stacks: [
      { name: "React", level: "Junior" },
      { name: "JavaScript", level: "Junior" },
      { name: "HTML", level: "Junior" },
      { name: "CSS", level: "Junior" },
      { name: "Tailwind CSS", level: "Junior" },
      { name: "Bootstrap", level: "Junior" },
    ],
  },
  {
    category: "Backend & Tools",
    stacks: [
      { name: "Node.js", level: "Junior" },
      { name: "Golang", level: "Intermediate" },
      { name: "MongoDB", level: "Junior" },
      { name: "Docker", level: "Intermediate" },
      { name: "Kubernetes", level: "Junior" },
      { name: "Docker Compose", level: "Junior" },
      { name: "Git", level: "Intermediate" },
      { name: "GitHub", level: "Intermediate" },
      { name: "GitHub Actions", level: "Junior" },
      { name: "Coolify", level: "Junior" },
      { name: "GCP", level: "Junior" },
      { name: "Firebase", level: "Junior" },
      { name: "CI/CD", level: "Junior" },
    ],
  },
];

const allStackNames = stackCategories.flatMap((c) => c.stacks.map((s) => s.name));

const getSkillLevel = (level) => {
  switch (level) {
    case "Junior":
      return 100 / 3;
    case "Intermediate":
      return 100 / 2;
    case "Senior":
      return 100 / 1;
    default:
      return 0;
  }
};

const TechStacks = () => (
  <section id="stack" style={{ backgroundColor: "var(--retro-center-bg)", padding: "64px 0" }}>
    <Container>
      <div className="mb-10">
        <h2 className="retro-heading mb-3" style={{ fontSize: "clamp(1.1rem, 3vw, 1.6rem)", color: "var(--retro-black)" }}>
          Stacks &{" "}
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
          </span>
        </h2>
        <p className="text-base" style={{ color: "var(--retro-black)", opacity: 0.65 }}>
          Technologies and tools I use to bring ideas to life.
        </p>
      </div>

      <Marquee speed={30} className="mb-10">
        <span style={{ padding: "0 1.5rem", fontFamily: "var(--font-display)", fontSize: "0.6rem", color: "var(--retro-purple)" }}>
          {allStackNames.join("   ★   ")}   ★
        </span>
      </Marquee>

      <div className="grid lg:grid-cols-2 gap-6">
        {stackCategories.map((category, catIndex) => (
          <div
            key={catIndex}
            style={{ backgroundColor: "var(--retro-center-bg)", border: "3px solid var(--retro-black)" }}
          >
            <div
              className="p-5"
              style={{ backgroundColor: "var(--retro-yellow)", borderBottom: "3px solid var(--retro-black)" }}
            >
              <h3 className="font-black text-xl" style={{ color: "var(--retro-black)" }}>
                {category.category}
              </h3>
            </div>
            <div className="p-6 flex flex-col gap-5">
              {category.stacks.map((stack, stackIndex) => (
                <div key={stackIndex}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-sm" style={{ color: "var(--retro-black)" }}>
                      {stack.name}
                    </span>
                    <span className="font-bold text-xs" style={{ color: "var(--retro-purple)" }}>
                      {stack.level}
                    </span>
                  </div>
                  <div
                    className="w-full h-4"
                    style={{ backgroundColor: "var(--retro-yellow)", border: "2px solid var(--retro-black)" }}
                  >
                    <div
                      style={{
                        width: `${getSkillLevel(stack.level)}%`,
                        height: "100%",
                        backgroundColor: "var(--retro-purple)",
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
    </Container>
  </section>
);

export default TechStacks;
