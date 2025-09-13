import React from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
  SiRedux,
  SiTypescript,
  SiGit,
  SiGithub,
} from "react-icons/si";

  
export const Skills: React.FC = () => {
  
  const skills = [
    { icon: <SiHtml5 />, name: "HTML5", color: "hover:text-orange-500", tooltip: "bg-orange-500" },
    { icon: <SiCss3 />, name: "CSS3", color: "hover:text-blue-400", tooltip: "bg-blue-400" },
    { icon: <SiJavascript />, name: "JavaScript", color: "hover:text-yellow-400", tooltip: "bg-yellow-400 text-black" },
    { icon: <SiReact />, name: "React.js", color: "hover:text-cyan-400", tooltip: "bg-cyan-400 text-black" },
    { icon: <SiNodedotjs />, name: "Node.js", color: "hover:text-green-400", tooltip: "bg-green-400" },
    { icon: <SiTailwindcss />, name: "TailwindCSS", color: "hover:text-sky-400", tooltip: "bg-sky-400 text-black" },
    { icon: <SiRedux />, name: "Redux Toolkit", color: "hover:text-purple-400", tooltip: "bg-purple-500" },
    { icon: <SiTypescript />, name: "TypeScript", color: "hover:text-blue-500", tooltip: "bg-blue-500 text-black" },
    { icon: <SiGit />, name: "Git", color: "hover:text-red-400", tooltip: "bg-red-500" },
    { icon: <SiGithub />, name: "GitHub", color: "hover:text-gray-200", tooltip: "bg-gray-700" },
  ];


    return (
      <section id="skills" className="py-20 px-6 bg-gradient-to-b from-slate-950 via-blue-950/20 to-slate-950">
        <div className="max-w-6xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            My <span className="text-purple-400">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-12 rounded-full"></div>

          {/* Skills Grid */}
          <div className="grid grid-cols-3 md:grid-cols-5 gap-10 text-5xl text-gray-400">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center group"
              >
                {/* Icon */}
                <div
                  className={`transition transform hover:scale-110 ${skill.color}`}
                >
                  {skill.icon}
                </div>

                {/* Name below icon with glow */}
                <span
                  className={`mt-3 text-sm md:text-base font-medium text-gray-300 transition group-hover:drop-shadow-[0_0_8px_rgba(0,0,0,0.5)] ${skill.color.replace(
                    "hover:",
                    "group-hover:"
                  )}`}
                >
                  {skill.name}
                </span>
              </div>
            ))}
          </div>


        </div>
      </section>
    )
  }
