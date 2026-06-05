import { useState } from "react";
import { Menu, X } from "lucide-react";
import Container from "./Layout";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = ["Home", "About", "Projects", "Skills", "Contact"];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-white"
      style={{ borderBottom: "3px solid var(--dark)" }}
    >
      <Container>
        <div className="flex items-center justify-between h-16">
          <a
            href="#home"
            className="font-black text-base px-4 py-2"
            style={{
              backgroundColor: "var(--blue)",
              color: "var(--white)",
              border: "3px solid var(--dark)",
              boxShadow: "3px 3px 0 var(--dark)",
            }}
          >
            AGR.
          </a>

          <div className="hidden md:flex items-center gap-2">
            {links.map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="font-bold text-sm px-4 py-2 transition-all hover:bg-[var(--blue-light)]"
                style={{
                  color: "var(--dark)",
                  border: "2px solid var(--dark)",
                }}
              >
                {l}
              </a>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
            style={{ border: "2px solid var(--dark)" }}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </Container>

      {isOpen && (
        <div style={{ borderTop: "2px solid var(--dark)" }}>
          <Container>
            <div className="py-3 flex flex-col gap-2">
              {links.map((l) => (
                <a
                  key={l}
                  href={`#${l.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="font-bold text-sm px-4 py-3"
                  style={{
                    color: "var(--dark)",
                    border: "2px solid var(--dark)",
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
