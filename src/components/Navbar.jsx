import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "home", href: "#home" },
    { label: "about", href: "#about" },
    { label: "tech stack", href: "#stack" },
    { label: "projects", href: "#projects" },
    { label: "contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 fifth-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a
            href="#home"
            className="text-2xl font-bold secondary-bg primary-color px-6 py-3 border-4 primary-border-color neo-brutal-shadow-sm hover:third-color transition-colors"
          >
            Portfolio
          </a>

          {/* Desktop mode*/}
          <div className="hidden md:flex items-center space-x-4 gap-1">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="primary-color font-bold px-5 py-2 border-4 primary-border-color bg-white hover:third-color transition-all hover:translate-x-1 hover:translate-y-1 neo-brutal-shadow-sm "
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-3 border-4 primary-border-color secondary-bg neo-brutal-shadow-sm hover:third-color"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden fifth-bg border-t-4 primary-border-color">
          <div className="px-4 pt-2 pb-4 space-y-3">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block primary-color font-bold px-5 py-3 border-4 primary-border-color bg-white hover:third-color transition-all neo-brutal-shadow-sm"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
