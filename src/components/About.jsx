import { Code, Layers, Zap, Users } from "lucide-react";
import Container from "./Layout";

const About = () => {
  const features = [
    { icon: <Code size={24} />, title: "Clean Architecture", desc: "Microservices, domain separation, scalable design patterns" },
    { icon: <Layers size={24} />, title: "Multi-Stack", desc: "Go, Java, PHP, Kotlin, C#, Ruby on Rails" },
    { icon: <Zap size={24} />, title: "Performance", desc: "Concurrency, Redis caching, query optimization" },
    { icon: <Users size={24} />, title: "Collaborative", desc: "Fintech, e-commerce, gaming, and healthcare teams" },
  ];

  return (
    <section id="about" style={{ backgroundColor: "var(--retro-yellow)", padding: "64px 0" }}>
      <Container>
        <div className="mb-12">
          <h2 className="retro-heading" style={{ fontSize: "clamp(1.1rem, 3vw, 1.6rem)", color: "var(--retro-black)" }}>
            About{" "}
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
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="flex flex-col gap-6">
            <div
              className="p-8"
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

            <div className="grid grid-cols-3 gap-4">
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
          </div>

          <div className="grid grid-cols-2 gap-4">
            {features.map((f, i) => (
              <div
                key={i}
                className="p-5"
                style={{
                  backgroundColor: "var(--retro-center-bg)",
                  border: "3px solid var(--retro-black)",
                }}
              >
                <div className="mb-3" style={{ color: "var(--retro-purple)" }}>{f.icon}</div>
                <h3 className="font-bold text-sm mb-1" style={{ color: "var(--retro-black)" }}>{f.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "var(--retro-black)", opacity: 0.7 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
