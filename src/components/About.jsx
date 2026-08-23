import Container from "./Layout";

const About = () => {
  const highlights = [
    "Clean Architecture — microservices, domain separation, scalable design patterns",
    "Multi-Stack — Go, Java, PHP, Kotlin, C#, Ruby on Rails",
    "Performance — concurrency, Redis caching, query optimization",
    "Collaborative — fintech, e-commerce, gaming, and healthcare teams",
  ];

  return (
    <section id="about" style={{ backgroundColor: "var(--retro-yellow)", padding: "64px 0" }}>
      <Container>
        <div className="mb-8" style={{ maxWidth: "700px", margin: "0 auto 32px" }}>
          <h2 className="retro-heading text-center" style={{ fontSize: "clamp(1.1rem, 3vw, 1.6rem)", color: "var(--retro-black)" }}>
            ~ About{" "}
            <span
              style={{
                backgroundColor: "var(--retro-purple)",
                color: "#ffffff",
                padding: "0 10px",
                border: "3px solid var(--retro-black)",
                display: "inline-block",
              }}
            >
              Me
            </span>{" "}
            ~
          </h2>

          <div
            className="p-8 mt-8"
            style={{ backgroundColor: "var(--retro-center-bg)", border: "3px solid var(--retro-black)" }}
          >
            <p className="text-base leading-relaxed mb-4" style={{ color: "var(--retro-black)" }}>
              I'm a versatile software engineer based in Bandung, Indonesia with 4+ years
              of experience building scalable backend systems, microservices, and mobile apps.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: "var(--retro-black)" }}>
              I've worked across fintech, e-commerce, healthcare, and gaming —
              from QRIS payment systems and multi-tenant SaaS to Android apps
              and game backend services.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "var(--retro-black)" }}>
              My core stack: Go, PHP (Laravel), Java, C#, and Kotlin.
              Always eager to learn and take on new challenges.
            </p>
          </div>

          <div className="retro-divider">★</div>

          <div className="grid grid-cols-3 gap-4 mb-8">
            {[
              { val: "4+", label: "Years Exp" },
              { val: "5+", label: "Companies" },
              { val: "10+", label: "Tech Stacks" },
            ].map((s, i) => (
              <div
                key={i}
                className="text-center py-5"
                style={{
                  backgroundColor: "var(--retro-center-bg)",
                  border: "3px solid var(--retro-black)",
                }}
              >
                <div className="font-black text-3xl" style={{ color: "var(--retro-purple)" }}>{s.val}</div>
                <div className="text-xs font-bold mt-1" style={{ color: "var(--retro-black)" }}>{s.label}</div>
              </div>
            ))}
          </div>

          <div
            className="p-8"
            style={{ backgroundColor: "var(--retro-center-bg)", border: "3px solid var(--retro-black)" }}
          >
            <h3 className="retro-heading mb-4" style={{ fontSize: "0.85rem", color: "var(--retro-black)" }}>
              What I Bring
            </h3>
            <ul className="retro-list">
              {highlights.map((h, i) => (
                <li key={i} className="text-sm leading-relaxed" style={{ color: "var(--retro-black)" }}>
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
