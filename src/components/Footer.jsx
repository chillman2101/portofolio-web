const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section
      id="footer"
      className="primary-bg text-white py-8 px-4 sm:px-6 lg:px-8 border-t-8 primary-border-color"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <p className="text-white font-bold">© {currentYear} Portfolio.</p>
          </div>
          <div className="flex gap-4">
            <a
              href="#home"
              className="text-white hover:secondary-color font-bold transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-white hover:secondary-color font-bold transition-colors"
            >
              About
            </a>
            <a
              href="#stack"
              className="text-white hover:secondary-color font-bold transition-colors"
            >
              Tech Stack
            </a>
            <a
              href="#projects"
              className="text-white hover:secondary-color font-bold transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-white hover:secondary-color font-bold transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Footer;
