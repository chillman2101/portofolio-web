import { ExternalLink, GithubIcon } from "lucide-react";
import Container from "./Layout";

const projects = [
  {
    title: "AHAMART Platform",
    desc: "Multi-tenant SaaS e-commerce split into 5 microservices: POS, WMS, payment (Midtrans), accounting, voucher, and delivery.",
    tags: ["Go", "Rails", "PostgreSQL", "Redis", "Kafka", "Docker"],
    headerBg: "var(--blue)",
    headerColor: "var(--white)",
  },
  {
    title: "Game Backend — Agate",
    desc: "Backend APIs for game client: daily login rewards with streak tracking, Battle Pass with seasonal progression and tier rewards.",
    tags: ["C#", "Game Backend", "REST API", "Battle Pass"],
    headerBg: "var(--blue-light)",
    headerColor: "var(--dark)",
  },
  {
    title: "Android Data Collection",
    desc: "Native Android app for field officers: real-time data capture, patrol feature, and offline-capable data submission.",
    tags: ["Kotlin", "Android", "Mobile"],
    headerBg: "var(--blue)",
    headerColor: "var(--white)",
  },
  {
    title: "Monalisa Clinic",
    desc: "Healthcare system with BPJS API and Satu Sehat (FHIR) integration for national health insurance and patient data exchange.",
    tags: ["PHP", "Laravel", "BPJS API", "FHIR"],
    headerBg: "var(--blue-light)",
    headerColor: "var(--dark)",
  },
  {
    title: "Travel & Umrah Booking",
    desc: "Rabbani Travel and Riffy Travel booking sites for tours and Umrah packages with Midtrans and Xendit payment gateways.",
    tags: ["PHP", "CodeIgniter", "Midtrans", "Xendit"],
    headerBg: "var(--blue)",
    headerColor: "var(--white)",
  },
  {
    title: "Banking Features",
    desc: "QRIS for Maspion Bank, account opening for INA Bank, interbank transfers for Papua Bank, automation testing for BWS Bank.",
    tags: ["Go", "Java", "Kotlin", "QRIS", "Appium"],
    headerBg: "var(--blue-light)",
    headerColor: "var(--dark)",
  },
];

const Projects = () => (
  <section id="projects" style={{ backgroundColor: "var(--white)", padding: "80px 0" }}>
    <Container>
      <div className="mb-12">
        <h2 className="font-black mb-3" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "var(--dark)" }}>
          Featured{" "}
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
            Projects
          </span>
        </h2>
        <p className="text-base" style={{ color: "var(--dark)", opacity: 0.65 }}>
          Real-world projects across fintech, e-commerce, healthcare, and gaming.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <div
            key={i}
            className="flex flex-col"
            style={{
              backgroundColor: "var(--white)",
              border: "3px solid var(--dark)",
              boxShadow: "6px 6px 0 var(--dark)",
            }}
          >
            <div
              className="px-5 py-4"
              style={{
                backgroundColor: p.headerBg,
                borderBottom: "3px solid var(--dark)",
              }}
            >
              <h3 className="font-black text-base" style={{ color: p.headerColor }}>{p.title}</h3>
            </div>

            <div className="p-5 flex flex-col flex-grow gap-4">
              <p className="text-sm leading-relaxed flex-grow" style={{ color: "var(--dark)", opacity: 0.8 }}>
                {p.desc}
              </p>

              <div className="flex flex-wrap gap-2">
                {p.tags.map((tag, j) => (
                  <span
                    key={j}
                    className="text-xs font-bold px-2 py-1"
                    style={{
                      backgroundColor: "var(--blue-light)",
                      color: "var(--dark)",
                      border: "2px solid var(--dark)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-2">
                <a
                  href="#"
                  className="flex-1 flex items-center justify-center gap-1 py-2 text-sm font-bold neo-btn"
                  style={{ backgroundColor: "var(--blue)", color: "var(--white)" }}
                >
                  <ExternalLink size={13} /> Demo
                </a>
                <a
                  href="#"
                  className="flex-1 flex items-center justify-center gap-1 py-2 text-sm font-bold neo-btn"
                  style={{ backgroundColor: "var(--white)", color: "var(--dark)" }}
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
