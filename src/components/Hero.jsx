import { GithubIcon, LinkedinIcon, Mail, ArrowRight } from "lucide-react";
import Container from "./Layout";

const Hero = () => (
  <section
    id="home"
    style={{ paddingTop: "48px", paddingBottom: "80px", backgroundColor: "var(--retro-center-bg)" }}
  >
    <Container>
      <div className="grid md:grid-cols-2 gap-16 items-center">

        {/* Left */}
        <div className="flex flex-col gap-6">
          <div
            className="inline-flex items-center gap-2 text-sm font-bold w-fit px-4 py-2"
            style={{
              backgroundColor: "var(--retro-yellow)",
              color: "var(--retro-black)",
              border: "2px solid var(--retro-black)",
            }}
          >
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: "var(--retro-purple)" }}
            />
            Available for work
          </div>

          <h1
            className="retro-heading leading-tight"
            style={{ fontSize: "clamp(1.4rem, 4vw, 2rem)", color: "var(--retro-black)" }}
          >
            Hi, I'm{" "}
            <span
              style={{
                backgroundColor: "var(--retro-purple)",
                color: "#ffffff",
                padding: "0 10px",
                border: "3px solid var(--retro-black)",
                display: "inline-block",
              }}
            >
              Adit
            </span>
            <br />
            Software Engineer
          </h1>

          <p
            className="text-base leading-relaxed"
            style={{ color: "var(--retro-black)", opacity: 0.75, maxWidth: "480px" }}
          >
            Versatile backend engineer with 4+ years building scalable
            microservices, APIs, and mobile apps across Go, Java, PHP, Kotlin, and C#.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 font-bold px-6 py-3 retro-btn"
            >
              Get In Touch <ArrowRight size={16} />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 font-bold px-6 py-3 retro-btn"
              style={{ backgroundColor: "var(--retro-yellow)", color: "var(--retro-black)" }}
            >
              View Projects
            </a>
          </div>

          <div className="flex gap-3">
            {[
              { href: "https://github.com/chillman2101", icon: <GithubIcon size={18} />, label: "GitHub" },
              { href: "https://www.linkedin.com/in/adit-gustiana-r-8293a91b6/", icon: <LinkedinIcon size={18} />, label: "LinkedIn" },
              { href: "mailto:adit.gustianar@gmail.com", icon: <Mail size={18} />, label: "Email" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={s.label}
                className="p-3 retro-btn"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Right — Photo */}
        <div className="flex justify-center md:justify-end">
          <div className="relative">
            <div
              className="flex flex-col items-center justify-center gap-3"
              style={{
                width: "260px",
                height: "300px",
                backgroundColor: "var(--retro-yellow)",
                border: "3px solid var(--retro-black)",
                position: "relative",
                zIndex: 1,
              }}
            >
              <span style={{ fontSize: "4rem" }}>👨‍💻</span>
              <p className="font-bold text-base" style={{ color: "var(--retro-black)" }}>
                Your Photo Here
              </p>
            </div>
            {/* Decorative block behind */}
            <div
              style={{
                position: "absolute",
                top: "12px",
                left: "12px",
                width: "260px",
                height: "300px",
                backgroundColor: "var(--retro-purple)",
                border: "3px solid var(--retro-black)",
                zIndex: 0,
              }}
            />
          </div>
        </div>

      </div>
    </Container>
  </section>
);

export default Hero;
