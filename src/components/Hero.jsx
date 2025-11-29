import { Github, Linkedin, Mail, Download } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 md:px-8 lg:px-12"
    >
      <div className="max-w-6xl w-full">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="third-bg px-6 py-2 border-4 primary-border-color leading-tight inline-block">
              <p className="text-sm font-bold">
                Hello, my name is Adit Gustiana R
              </p>
            </div>

            <h1 className="text-5xl md:text-7xl font-black primary-color leading-tight">
              Backend
              <br />
              <span className="primary-border-color border-4 neo-brutal-shadow-md inline-block px-4 secondary-bg">
                Developer
              </span>
            </h1>

            <p className="text-lg md:text-xl primary-color leading-relaxed py-2">
              I am a Backend Developer with a passion for creating scalable and
              efficient systems.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                className="inline-flex items-center gap-2 secondary-bg primary-color font-bold px-8 py-4 border-4 primary-border-color neo-brutal hover:third-bg m4"
                href="#contact"
              >
                <Mail size={20} />
                Get In Touch
              </a>
              <a
                className="inline-flex items-center gap-2 bg-white primary-color font-bold px-8 py-4 border-4 primary-border-color neo-brutal hover:fourth-bg"
                href="#projects"
              >
                <Download size={20} />
                View Projects
              </a>
            </div>

            <div className="flex gap-4 pt-4">
              <a
                target="_blank"
                href="https://github.com/chillman2101"
                rel="noopener noreferrer"
                className="p-4 primary-bg text-white border-4 primary-border-color neo-brutal hover:third-bg"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/adit-gustiana-r-8293a91b6/"
                rel="noopener noreferrer"
                className="p-4 primary-bg text-white border-4 primary-border-color neo-brutal hover:third-bg"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                target="_blank"
                href="mailto:adit.gustianar@gmail.com"
                rel="noopener noreferrer"
                className="p-4 primary-bg text-white border-4 primary-border-color neo-brutal"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="w-full aspect-square third-bg border-4 primary-border-color neo-brutal-shadow-lg flex items-center justify-center">
              <div className="w-60 h-60 primary-bg border-2 primary-border-color rounded-full flex items-center justify-center">
                <div className="text-center">
                  <img
                    src="https://media.licdn.com/dms/image/v2/D5603AQFozP9SUoWx7g/profile-displayphoto-shrink_200_200/B56ZQC7ZTaG8AY-/0/1735215913249?e=1766016000&v=beta&t=JiomOA-PzHIjyMOmB6VP_x8WSi5g5J4A7tWqC32VMb8"
                    alt="Profile"
                    className="w-58 h-58 rounded-full"
                  />
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 secondary-bg border-4 primary-border-color -z-10"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 fourth-bg border-4 primary-border-color -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
