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
    <section id="about" style={{ backgroundColor: "var(--blue-light)", padding: "80px 0" }}>
      <Container>
        {/* Heading */}
        <div className="mb-12">
          <h2 className="font-black" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "var(--dark)" }}>
            About{" "}
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
              Me
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left — Bio + Stats */}
          <div className="flex flex-col gap-6">
            <div
              className="p-8"
              style={{ backgroundColor: "var(--white)", border: "3px solid var(--dark)", boxShadow: "6px 6px 0 var(--dark)" }}
            >
              <p className="text-base leading-relaxed mb-4" style={{ color: "var(--dark)" }}>
                I'm a versatile software engineer based in Bandung, Indonesia with 4+ years
                of experience building scalable backend systems, microservices, and mobile apps.
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ color: "var(--dark)" }}>
                I've worked across fintech, e-commerce, healthcare, and gaming —
                from QRIS payment systems and multi-tenant SaaS to Android apps
                and game backend services.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "var(--dark)" }}>
                My core stack: Go, PHP (Laravel), Java, C#, and Kotlin.
                Always eager to learn and take on new challenges.
              </p>
            </div>

            {/* Stats */}
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
                    backgroundColor: "var(--white)",
                    border: "3px solid var(--dark)",
                    boxShadow: "4px 4px 0 var(--dark)",
                  }}
                >
                  <div className="font-black text-3xl" style={{ color: "var(--blue)" }}>{s.val}</div>
                  <div className="text-xs font-bold mt-1" style={{ color: "var(--dark)" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Feature Cards */}
          <div className="grid grid-cols-2 gap-4">
            {features.map((f, i) => (
              <div
                key={i}
                className="p-5"
                style={{
                  backgroundColor: "var(--white)",
                  border: "3px solid var(--dark)",
                  boxShadow: "4px 4px 0 var(--dark)",
                }}
              >
                <div className="mb-3" style={{ color: "var(--blue)" }}>{f.icon}</div>
                <h3 className="font-bold text-sm mb-1" style={{ color: "var(--dark)" }}>{f.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "var(--dark)", opacity: 0.7 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
