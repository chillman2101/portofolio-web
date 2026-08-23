import { useState } from "react";
import { Menu, X } from "lucide-react";
import Container from "./Layout";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = ["Home", "About", "Projects", "Skills", "Contact"];

  return (
    <nav
      style={{
        borderBottom: "3px solid var(--retro-black)",
        backgroundColor: "var(--retro-center-bg)",
      }}
    >
      <Container>
        <div className="flex items-center justify-between h-16">
          <a
            href="#home"
            className="retro-heading text-xs px-4 py-2"
            style={{
              backgroundColor: "var(--retro-purple)",
              color: "#ffffff",
              border: "3px solid var(--retro-black)",
            }}
          >
            AGR.
          </a>

          <div className="hidden md:flex items-center gap-2">
            {links.map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="font-bold text-sm px-4 py-2 transition-all hover:bg-[var(--retro-yellow)]"
                style={{
                  color: "var(--retro-black)",
                  border: "2px solid var(--retro-black)",
                }}
              >
                {l}
              </a>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
            style={{ border: "2px solid var(--retro-black)" }}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </Container>

      {isOpen && (
        <div style={{ borderTop: "2px solid var(--retro-black)" }}>
          <Container>
            <div className="py-3 flex flex-col gap-2">
              {links.map((l) => (
                <a
                  key={l}
                  href={`#${l.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="font-bold text-sm px-4 py-3"
                  style={{
                    color: "var(--retro-black)",
                    border: "2px solid var(--retro-black)",
                  }}
                >
                  {l}
                </a>
              ))}
            </div>
          </Container>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
