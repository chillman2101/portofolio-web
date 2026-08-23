import { ExternalLink, GithubIcon } from "lucide-react";
import Container from "./Layout";

const projects = [
  {
    title: "AHAMART Platform",
    desc: "Multi-tenant SaaS e-commerce split into 5 microservices: POS, WMS, payment (Midtrans), accounting, voucher, and delivery.",
    tags: ["Go", "Rails", "PostgreSQL", "Redis", "Kafka", "Docker"],
    headerBg: "var(--retro-purple)",
    headerColor: "#ffffff",
  },
  {
    title: "Game Backend — Agate",
    desc: "Backend APIs for game client: daily login rewards with streak tracking, Battle Pass with seasonal progression and tier rewards.",
    tags: ["C#", "Game Backend", "REST API", "Battle Pass"],
    headerBg: "var(--retro-yellow)",
    headerColor: "var(--retro-black)",
  },
  {
    title: "Android Data Collection",
    desc: "Native Android app for field officers: real-time data capture, patrol feature, and offline-capable data submission.",
    tags: ["Kotlin", "Android", "Mobile"],
    headerBg: "var(--retro-purple)",
    headerColor: "#ffffff",
  },
  {
    title: "Monalisa Clinic",
    desc: "Healthcare system with BPJS API and Satu Sehat (FHIR) integration for national health insurance and patient data exchange.",
    tags: ["PHP", "Laravel", "BPJS API", "FHIR"],
    headerBg: "var(--retro-yellow)",
    headerColor: "var(--retro-black)",
  },
  {
    title: "Travel & Umrah Booking",
    desc: "Rabbani Travel and Riffy Travel booking sites for tours and Umrah packages with Midtrans and Xendit payment gateways.",
    tags: ["PHP", "CodeIgniter", "Midtrans", "Xendit"],
    headerBg: "var(--retro-purple)",
    headerColor: "#ffffff",
  },
  {
    title: "Banking Features",
    desc: "QRIS for Maspion Bank, account opening for INA Bank, interbank transfers for Papua Bank, automation testing for BWS Bank.",
    tags: ["Go", "Java", "Kotlin", "QRIS", "Appium"],
    headerBg: "var(--retro-yellow)",
    headerColor: "var(--retro-black)",
  },
];

const Projects = () => (
  <section id="projects" style={{ backgroundColor: "var(--retro-center-bg)", padding: "64px 0" }}>
    <Container>
      <div className="mb-12">
        <h2 className="retro-heading mb-3" style={{ fontSize: "clamp(1.1rem, 3vw, 1.6rem)", color: "var(--retro-black)" }}>
          Featured{" "}
          <span
            style={{
              backgroundColor: "var(--retro-purple)",
              color: "#ffffff",
              padding: "0 10px",
              border: "3px solid var(--retro-black)",
              display: "inline-block",
            }}
          >
            Projects
          </span>
        </h2>
        <p className="text-base" style={{ color: "var(--retro-black)", opacity: 0.65 }}>
          Real-world projects across fintech, e-commerce, healthcare, and gaming.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <div
            key={i}
            className="flex flex-col"
            style={{
              backgroundColor: "var(--retro-center-bg)",
              border: "3px solid var(--retro-black)",
            }}
          >
            <div
              className="px-5 py-4"
              style={{
                backgroundColor: p.headerBg,
                borderBottom: "3px solid var(--retro-black)",
              }}
            >
              <h3 className="font-black text-base" style={{ color: p.headerColor }}>{p.title}</h3>
            </div>

            <div className="p-5 flex flex-col flex-grow gap-4">
              <p className="text-sm leading-relaxed flex-grow" style={{ color: "var(--retro-black)", opacity: 0.8 }}>
                {p.desc}
              </p>

              <div className="flex flex-wrap gap-2">
                {p.tags.map((tag, j) => (
                  <span
                    key={j}
                    className="text-xs font-bold px-2 py-1"
                    style={{
                      backgroundColor: "var(--retro-yellow)",
                      color: "var(--retro-black)",
                      border: "2px solid var(--retro-black)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-2">
                <a
                  href="#"
                  className="flex-1 flex items-center justify-center gap-1 py-2 text-sm font-bold retro-btn"
                >
                  <ExternalLink size={13} /> Demo
                </a>
                <a
                  href="#"
                  className="flex-1 flex items-center justify-center gap-1 py-2 text-sm font-bold retro-btn"
                  style={{ backgroundColor: "var(--retro-yellow)", color: "var(--retro-black)" }}
                >
                  <GithubIcon size={13} /> Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  </section>
);

export default Projects;
