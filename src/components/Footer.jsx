import Container from "./Layout";

const Footer = () => (
  <footer style={{ backgroundColor: "var(--dark)", borderTop: "3px solid var(--dark)", padding: "32px 0" }}>
    <Container>
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-3">
          <span
            className="font-black text-sm px-3 py-1"
            style={{ backgroundColor: "var(--blue)", color: "var(--white)", border: "2px solid var(--blue)" }}
          >
            AGR.
          </span>
          <p className="text-sm font-medium" style={{ color: "var(--white)", opacity: 0.6 }}>
            © {new Date().getFullYear()} Adit Gustiana Ramadhan
          </p>
        </div>
        <div className="flex gap-5">
          {["Home", "About", "Projects", "Skills", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-bold transition-opacity hover:opacity-100"
              style={{ color: "var(--white)", opacity: 0.55 }}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </Container>
  </footer>
);

export default Footer;
