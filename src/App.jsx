import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import TechStacks from './components/TechStacks';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Marquee from './components/Marquee';
import SidebarWidgets from './components/SidebarWidgets';

function App() {
  return (
    <div className="min-h-screen retro-tile-bg">
      <Marquee speed={22} className="retro-announcement-bar">
        <span style={{ padding: '0 2rem' }}>
          ✦ WELCOME TO MY PORTFOLIO ✦ AVAILABLE FOR HIRE ✦ BEST VIEWED IN NETSCAPE NAVIGATOR ✦ THANKS FOR VISITING ✦
        </span>
      </Marquee>

      <Navbar />

      <div className="retro-page-grid">
        <div className="retro-sidebar">
          <SidebarWidgets side="left" />
        </div>

        <main className="retro-center-col">
          <Hero />
          <About />
          <Projects />
          <Skills />
          <TechStacks />
          <Contact />
          <Footer />
        </main>

        <div className="retro-sidebar">
          <SidebarWidgets side="right" />
        </div>
      </div>

      <ScrollToTop />
    </div>
  );
}

export default App;
