import { Code, Palette, Zap, Coffee } from "lucide-react";
const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 fourth-bg">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-black primary-color mb-6">
            About{" "}
            <span className="secondary-bg px-4 inline-block border-4 primary-border-color neo-brutal-shadow-md">
              Me
            </span>
          </h2>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-8 border-4 primary-border-color neo-brutal-shadow-lg">
            <p className="text-lg primary-color leading-relaxed mb-4">
              I'm a versatile software engineer with experience in software
              development for more than 4 years, using various technology
              stacks, i spesifically focused with golang . I'm always eager to
              learn new technologies and take on new challenges. I'm also a fast
              learner and a team player.
            </p>
            <p className="text-lg primary-color leading-relaxed mb-4">
              When I'm not coding, you can find me studying Japanese language
              (JLPT N5 holder), grinding Leetcode, or chatting/movie time with
              my wife.
            </p>{" "}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
