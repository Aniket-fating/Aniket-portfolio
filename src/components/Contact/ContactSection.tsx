import { useState, FormEvent } from "react";
import emailjs from "emailjs-com";
import { Mail, Linkedin, Github, Send } from "lucide-react";

const ContactSection = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  const getMsg = (msg: string) => {
    // Replace with your custom toast/snackbar if needed
    alert(msg);
  };

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setErrors({});

    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("from_name")?.toString().trim();
    const email = formData.get("from_email")?.toString().trim();
    const message = formData.get("message")?.toString().trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const newErrors: Record<string, string> = {};

    if (!name) newErrors.name = "Name is required";
    if (!email) newErrors.email = "Email is required";
    else if (!emailRegex.test(email)) newErrors.email = "Enter a valid email address";
    if (!message) newErrors.message = "Message is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      getMsg("Please fix the errors before sending.");
      setLoading(false);
      return;
    }

    emailjs
      .sendForm(
        "service_2wal6bw",
        "template_59xrzuo",
        form,
        "ZQH21cNCwoCn0LpQL"
      )
      .then(
        (result) => {
          console.log(result);
          setSuccess("✅ Message sent successfully!");
          setLoading(false);
          form.reset();

          // Hide message after 5 seconds
          setTimeout(() => {
            setSuccess("");
          }, 5000);
        },
        (error) => {
          console.error(error.text);
          setSuccess("❌ Something went wrong. Please try again.");
          setLoading(false);

          // Hide message after 5 seconds
          setTimeout(() => {
            setSuccess("");
          }, 3000);

        }

      );
  };

  return (
    <section
      id="contact"
      className="relative py-20 px-4 h-full  bg-gradient-to-r from-slate-900  via-slate-900 to-slate-950 "
    >
                                                                            
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="text-purple-400">Connect</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-12 rounded-full"></div>
          <p className="text-slate-200 text-lg max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Side - Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Get in Touch</h3>
              <p className="text-white leading-relaxed mb-6">
                I'm always open to discussing new opportunities, interesting projects,
                or just having a conversation about technology and development.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=fatinganiket8@gmail.com"
                rel="noopener noreferrer"
                className="flex items-center text-slate-400 hover:text-red-400 transition-colors duration-300"
              >
                <Mail className="w-6 h-6 mr-4" />
                fatinganiket8@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/fating-aniket"
                className="flex items-center text-slate-400 hover:text-blue-400 transition-colors duration-300"
              >
                <Linkedin className="w-6 h-6 mr-4" />
                linkedin.com/in/fating-aniket
              </a>
              <a
                href="https://github.com/Aniket-fating"
                className="flex items-center text-slate-400 hover:text-slate-200 transition-colors duration-300"
              >
                <Github className="w-6 h-6 mr-4" />
                github.com/Aniket-fating
              </a>
            </div>
          </div>

          {/* Right Side - Form */}
          <form onSubmit={sendEmail} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                Name
              </label>
              <input
                type="text"
                name="from_name"
                id="name"
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-colors duration-300"
                placeholder="Your name"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                Email
              </label>
              <input
                type="email"
                name="from_email"
                id="email"
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-colors duration-300"
                placeholder="your.email@example.com"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-colors duration-300 resize-none"
                placeholder="Tell me about your project..."
              ></textarea>
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center"
            >
              {loading ? "Sending..." : <><Send className="w-5 h-5 mr-2" /> Send Message</>}
            </button>

            {success && <p className="text-center text-slate-300 mt-4">{success}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
