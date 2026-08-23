import { useState } from "react";
import { Mail, MapPin, Phone, Send, GithubIcon, LinkedinIcon } from "lucide-react";
import Container from "./Layout";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Message sent! I'll get back to you soon.");
    setTimeout(() => {
      setStatus("");
      setForm({ name: "", email: "", message: "" });
    }, 3000);
  };

  const info = [
    { icon: <Mail size={18} />, label: "Email", value: "adit.gustianar@gmail.com", href: "mailto:adit.gustianar@gmail.com" },
    { icon: <Phone size={18} />, label: "Phone", value: "+62 896 097 428 90", href: "tel:+6289609742890" },
    { icon: <MapPin size={18} />, label: "Location", value: "Bandung, Indonesia", href: "#" },
  ];

  const inputStyle = {
    width: "100%",
    padding: "10px 14px",
    border: "2px solid var(--retro-black)",
    outline: "none",
    fontSize: "0.875rem",
    color: "var(--retro-black)",
    backgroundColor: "var(--retro-center-bg)",
  };

  return (
    <section id="contact" style={{ backgroundColor: "var(--retro-center-bg)", padding: "64px 0" }}>
      <Container>
        <div className="mb-12">
          <h2 className="retro-heading mb-3" style={{ fontSize: "clamp(1.1rem, 3vw, 1.6rem)", color: "var(--retro-black)" }}>
            Get In{" "}
            <span
              style={{
                backgroundColor: "var(--retro-purple)",
                color: "#ffffff",
                padding: "0 10px",
                border: "3px solid var(--retro-black)",
                display: "inline-block",
              }}
            >
              Touch
            </span>
          </h2>
          <p className="text-base" style={{ color: "var(--retro-black)", opacity: 0.65 }}>
            Open to collaborations, freelance work, or just a friendly chat.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          <div className="flex flex-col gap-5">
            <div
              className="p-7"
              style={{ backgroundColor: "var(--retro-center-bg)", border: "3px solid var(--retro-black)" }}
            >
              <h3 className="font-black text-lg mb-4" style={{ color: "var(--retro-black)" }}>Let's Connect</h3>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--retro-black)", opacity: 0.7 }}>
                Feel free to reach out for collaborations, opportunities, or just to say hi.
              </p>
              <div className="flex flex-col gap-3">
                {info.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    className="flex items-center gap-3 p-3 transition-colors"
                    style={{
                      border: "2px solid var(--retro-black)",
                      color: "var(--retro-black)",
                      backgroundColor: "var(--retro-yellow)",
                    }}
                  >
                    <span style={{ color: "var(--retro-purple)" }}>{item.icon}</span>
                    <div>
                      <div className="text-xs font-bold" style={{ opacity: 0.55 }}>{item.label}</div>
                      <div className="text-sm font-semibold">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div
              className="p-6"
              style={{ backgroundColor: "var(--retro-yellow)", border: "3px solid var(--retro-black)" }}
            >
              <h4 className="font-black mb-4" style={{ color: "var(--retro-black)" }}>Find Me On</h4>
              <div className="flex gap-3">
                <a
                  href="https://github.com/chillman2101"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 text-sm font-bold retro-btn"
                >
                  <GithubIcon size={15} /> GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/adit-gustiana-r-8293a91b6/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 text-sm font-bold retro-btn"
                  style={{ backgroundColor: "var(--retro-purple)", color: "#ffffff" }}
                >
                  <LinkedinIcon size={15} /> LinkedIn
                </a>
              </div>
            </div>
          </div>

          <div
            className="p-7"
            style={{ backgroundColor: "var(--retro-center-bg)", border: "3px solid var(--retro-black)" }}
          >
            <h3 className="font-black text-lg mb-6" style={{ color: "var(--retro-black)" }}>Send a Message</h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="block text-sm font-bold mb-1" style={{ color: "var(--retro-black)" }}>Name</label>
                <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="John Doe" style={inputStyle} />
              </div>
              <div>
                <label className="block text-sm font-bold mb-1" style={{ color: "var(--retro-black)" }}>Email</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="john@example.com" style={inputStyle} />
              </div>
              <div>
                <label className="block text-sm font-bold mb-1" style={{ color: "var(--retro-black)" }}>Message</label>
                <textarea name="message" value={form.message} onChange={handleChange} required rows="5" placeholder="Tell me about your project..." style={{ ...inputStyle, resize: "none" }} />
              </div>
              <button
                type="submit"
                className="flex items-center justify-center gap-2 py-3 font-bold retro-btn"
              >
                <Send size={16} /> Send Message
              </button>
              {status && (
                <div
                  className="p-3 text-center text-sm font-bold"
                  style={{ backgroundColor: "var(--retro-yellow)", border: "2px solid var(--retro-black)", color: "var(--retro-black)" }}
                >
                  {status}
                </div>
              )}
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
