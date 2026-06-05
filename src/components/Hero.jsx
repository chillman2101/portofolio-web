import { GithubIcon, LinkedinIcon, Mail, ArrowRight } from "lucide-react";
import Container from "./Layout";

const Hero = () => (
  <section
    id="home"
    className="bg-white"
    style={{ paddingTop: "96px", paddingBottom: "80px", minHeight: "100vh", display: "flex", alignItems: "center" }}
  >
    <Container>
      <div className="grid md:grid-cols-2 gap-16 items-center">

        {/* Left */}
        <div className="flex flex-col gap-6">
          <div
            className="inline-flex items-center gap-2 text-sm font-bold w-fit px-4 py-2"
            style={{
              backgroundColor: "var(--blue-light)",
              color: "var(--dark)",
              border: "2px solid var(--dark)",
            }}
          >
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: "var(--blue)" }}
            />
            Available for work
          </div>

          <h1
            className="font-black leading-tight"
            style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)", color: "var(--dark)" }}
          >
            Hi, I'm{" "}
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
              Adit
            </span>
            <br />
            Software Engineer
          </h1>

          <p
            className="text-base leading-relaxed"
            style={{ color: "var(--dark)", opacity: 0.75, maxWidth: "480px" }}
          >
            Versatile backend engineer with 4+ years building scalable
            microservices, APIs, and mobile apps across Go, Java, PHP, Kotlin, and C#.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 font-bold px-6 py-3 neo-btn"
              style={{ backgroundColor: "var(--blue)", color: "var(--white)" }}
            >
              Get In Touch <ArrowRight size={16} />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 font-bold px-6 py-3 neo-btn bg-white"
              style={{ color: "var(--dark)" }}
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
                className="p-3 neo-btn"
                style={{ backgroundColor: "var(--dark)", color: "var(--white)" }}
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
                width: "340px",
                height: "380px",
                backgroundColor: "var(--blue-light)",
                border: "3px solid var(--dark)",
                boxShadow: "8px 8px 0 var(--dark)",
                position: "relative",
                zIndex: 1,
              }}
            >
              <span style={{ fontSize: "5rem" }}>👨‍💻</span>
              <p className="font-bold text-base" style={{ color: "var(--dark)" }}>
                Your Photo Here
              </p>
            </div>
            {/* Decorative block behind */}
            <div
              style={{
                position: "absolute",
                top: "12px",
                left: "12px",
                width: "340px",
                height: "380px",
                backgroundColor: "var(--blue)",
                border: "3px solid var(--dark)",
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
