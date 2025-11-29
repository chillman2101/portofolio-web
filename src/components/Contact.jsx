import { Mail, MapPin, Phone, Send } from "lucide-react";
const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: "Email",
      value: "adit.gustianar@gmail.com",
      link: "mailto:adit.gustianar@gmail.com",
    },
    {
      icon: <Phone size={24} />,
      title: "Phone",
      value: "+62 896 097 428 90",
      link: "tel:+6289609742890",
    },
    {
      icon: <MapPin size={24} />,
      title: "Location",
      value: "Bandung, Indonesia",
      link: "#",
    },
  ];
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 fifth-bg">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-black primary-color mb-6">
            Get In{" "}
            <span className="secondary-bg px-4 inline-block border-4 primary-border-color neo-brutal-shadow-md">
              Touch
            </span>
          </h2>
          <p className="text-xl primary-color max-w-2xl py-2">
            Have a project in mind? Let's work together to create something
            amazing!
          </p>
        </div>

        <div className="bg-white p-8 border-4 primary-border-color neo-brutal-shadow-lg">
          <h3 className="text-3xl font-black primary-color mb-6">
            Let's Connect
          </h3>
          <p className="primary-color mb-8 text-lg">
            Feel free to reach out for collaborations, opportunities, or just a
            friendly chat. I'm always open to discussing new projects and
            creative ideas.
          </p>
        </div>

        {contactInfo.map((info, index) => (
          <a
            key={index}
            href={info.link}
            className="flex items-center gap-4 p-4 fifth-bg border-4 primary-border-color neo-brutal hover:secondary-bg transition-colors"
          >
            <div className="primary-color">{info.icon}</div>
            <div>
              <div className="font-bold primary-color text-sm">
                {info.title}
              </div>
              <div className="primary-color">{info.value}</div>
            </div>
          </a>
        ))}

        <div className="py-4">
          <div className="third-color p-8 border-4 primary-border-color neo-bruotal-shadow-lg">
            <h4 className="text-xl font-black primary-color mb-4">Follow Me</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/chillman2101"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center py-3 primary-bg text-white font-bold border-4 primary-border-color neo-brutal hover:bg-white hover:primary-color transition-colors"
              >
                Github
              </a>
              <a
                href="https://www.linkedin.com/in/adit-gustiana-r-8293a91b6/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center py-3 primary-bg text-white font-bold border-4 primary-border-color neo-brutal hover:bg-white hover:primary-color transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://www.instagram.com/aditgustianar/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center py-3 primary-bg text-white font-bold border-4 primary-border-color neo-brutal hover:bg-white hover:primary-color transition-colors"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
