import { motion } from "framer-motion";
import { CheckCircle, GraduationCap } from "lucide-react";


export const Education: React.FC = () => {
  const educationData = [
    {
      degree: "B.Tech in Electrical Engineering",
      institute: "KDK College of Engineering, Nagpur",
      year: "2020 – 2024",
      details: ["Completed B.Tech with focus on Electrical Engineering."]
    },
    {
      degree: "12th Standard",
      institute: "Adarsh Sanskar Vidyalaya Junior College, Nagpur",
      year: "2019 – 2020",
      details: ["Completed 12th with focus on Science stream."]
    },
    {
      degree: "10th Standard",
      institute: "Sanskar Vidya Sagar, Nagpur",
      year: "2017 – 2018",
      details: ["Completed 10th board examinations."]
    },
  ];



  return (

    <section id="education" className="py-20 px-4 bg-gradient-to-tr from-slate-950 via-indigo-950/20 to-slate-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-purple-400">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Academic journey and milestones
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-slate-700 ml-6 space-y-12">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="ml-8 relative"
            >
              {/* Dot */}
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [1, 0.8, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute -left-12 top-2 w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 shadow-lg flex items-center justify-center"
              >
                <GraduationCap className="w-4 h-4 text-white" />
              </motion.div>

              <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
              <p className="mt-1 text-sm md:text-base font-medium text-purple-300">
                {edu.institute} <span className="text-slate-400">| {edu.year}</span>
              </p>

              <ul className="text-gray-300 mt-4 space-y-2">
                {edu.details.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 leading-relaxed">
                    <CheckCircle className="w-4 h-4 text-purple-400 mt-1" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}