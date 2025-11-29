const TechStacks = () => {
  const stackCategories = [
    {
      category: "Frontend",
      color: "third-color",
      stacks: [
        { name: "React", level: "Junior" },
        { name: "JavaScript", level: "Junior" },
        { name: "HTML", level: "Junior" },
        { name: "CSS", level: "Junior" },
        { name: "Tailwind CSS", level: "Junior" },
        { name: "Bootstrap", level: "Junior" },
      ],
    },
    {
      category: "Backend & Tools",
      color: "secondary-bg",
      stacks: [
        { name: "Node.js", level: "Junior" },
        { name: "Golang", level: "Intermediate" },
        { name: "MongoDB", level: "Junior" },
        { name: "Docker", level: "Intermediate" },
        { name: "Kubernetes", level: "Junior" },
        { name: "Docker Compose", level: "Junior" },
        { name: "Git", level: "Intermediate" },
        { name: "GitHub", level: "Intermediate" },
        { name: "GitHub Actions", level: "Junior" },
        { name: "Coolify", level: "Junior" },
        { name: "GCP", level: "Junior" },
        { name: "Firebase", level: "Junior" },
        { name: "CI/CD", level: "Junior" },
      ],
    },
  ];

  const getSkillLevel = (level) => {
    switch (level) {
      case "Junior":
        return 100 / 3;
      case "Intermediate":
        return 100 / 2;
      case "Senior":
        return 100 / 1;
      default:
        return 0;
    }
  };

  return (
    <section id="stack" className="py-20 px-4 sm:px-6 lg:px-7 fifth-bg">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-black primary-color mb-6">
            Stacks &{" "}
            <span className="secondary-bg px-4 inline-block border-4 primary-border-color neo-brutal-shadow-md">
              Expertise
            </span>
          </h2>
          <p className="text-xl primary-color max-w-2xl py-2">
            Technologies and tools I use to bring ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {stackCategories.map((category, catIndex) => (
            <div
              key={catIndex}
              className="bg-white border-4 primary-border-color neo-brutal-shadow-lg"
            >
              <div
                className={`${category.color} p-6 border-b-4 primary-border-color`}
              >
                <h3 className="text-3xl font-black primary-color">
                  {category.category}
                </h3>
              </div>{" "}
              <div className="p-8 space-y-6">
                {category.stacks.map((stack, stackIndex) => (
                  <div key={stackIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-bold primary-color text-lg">
                        {stack.name}
                      </span>
                      <span className="font-bold primary-color">
                        {stack.level}
                      </span>
                    </div>
                    <div className="w-full h-6 fifth-bg border-4 primary-border-color">
                      <div
                        className="h-full secondary-bg border-r-4 primary-border-color transition-all duration-500 flex items-center justify-end pr-2"
                        style={{ width: `${getSkillLevel(stack.level)}%` }}
                      >
                        <div className="w-3 h-3 primary-bg"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStacks;
