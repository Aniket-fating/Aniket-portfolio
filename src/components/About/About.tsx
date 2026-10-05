// import { Github, Linkedin, Mail } from "lucide-react";
import profile from "../../assets/Profile.png";

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-20 px-4 bg-gradient-to-r from-slate-900 to-slate-950 "
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-purple-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-6 rounded-full gradient-underline"></div>
          <p className="text-white text-lg max-w-2xl mx-auto">
            Passionate about building scalable, high-performance full-stack web
            applications
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side (Text) */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Hello! I'm a <span className="highlight">Web Developer</span>
            </h3>

            <p className="text-white leading-relaxed">
              I’m a results-driven{" "}
              <span className="text-purple-400 font-medium highlight">
                Web Developer with 2 years of experience
              </span>{" "}
              building responsive and user-friendly web applications using{" "}
              <span className="text-purple-400 font-medium highlight">
                React.js, TypeScript, JavaScript, and Tailwind CSS
              </span>
              .
            </p>

            <p className="text-white leading-relaxed">
              I have hands-on experience developing{" "}
              <span className="text-purple-400 font-medium highlight">
                dashboards, CMS interfaces, forms, reusable components, and REST
                API-driven applications
              </span>
              , with a strong focus on clean UI, performance, and maintainable
              code. I’ve improved page-load performance by{" "}
              <span className="text-purple-400 font-medium highlight">18%</span>{" "}
              and reduced unnecessary React re-renders by{" "}
              <span className="text-purple-400 font-medium highlight">30%</span>
              .
            </p>

            <p className="text-white leading-relaxed">
              I’m currently expanding my skills in{" "}
              <span className="text-purple-400 font-medium highlight">
                GA4, Google Tag Manager, conversion tracking, and technical SEO
              </span>{" "}
              while continuing to grow as a modern web developer.
            </p>
          </div>

          {/* Right Side (Visual) */}
          <div className="relative">
            <div className="w-72 h-72 md:w-80 md:h-80 mx-auto bg-gradient-to-br from-purple-500 to-blue-500 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-56 h-56 md:w-64 md:h-64 bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl flex items-center justify-center shadow-2xl profile-container">
                <img
                  src={profile}
                  alt="Profile"
                  className="profile-img rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
