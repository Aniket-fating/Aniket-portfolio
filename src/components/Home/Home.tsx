import { Typewriter } from "react-simple-typewriter";
// import { FiChevronDown } from 'react-icons/fi';
// import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from "framer-motion";
import resume from "../../public/Aniket_Fating_ReactJS Resume.pdf";

export const Home: React.FC = () => {

    return (

        <section
            id="home"
            className="relative h-screen flex flex-col justify-center items-center text-center overflow-hidden
             bg-gradient-to-b from-slate-950 via-purple-950/20 to-slate-950"
        >
            {/* Animated Blobs */}
            <motion.div
                className="absolute w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
                animate={{ x: [0, 100, -100, 0], y: [0, 50, -50, 0] }}
                transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
            />
            <motion.div
                className="absolute w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
                animate={{ x: [0, -100, 100, 0], y: [0, -50, 50, 0] }}
                transition={{ duration: 12, repeat: Infinity, repeatType: "reverse" }}
            />

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 relative z-10">
                Hi, I’m{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                    Aniket Fating
                </span>
            </h1>

            {/* Typewriter Effect */}
            <div className="text-xl md:text-2xl text-gray-300 font-semibold mb-6 relative z-10">
                <Typewriter
                    words={[
                        "UI Enthusiast",
                        "Frontend Developer",
                        "React.js Developer",
                        "Creative Problem Solver",
                    ]}
                    loop={0} // 0 = infinite loop
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                />
            </div>

            {/* Subtitle */}
            <p className="text-gray-400 max-w-2xl mb-8 relative z-10">
                I build modern, scalable, and user-friendly web applications with clean
                code & great UX.
            </p>

            {/* Action Buttons */}
            <div className="flex gap-4 mb-8 relative z-10">
                <a
                    href="#projects"
                    className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500
                 text-white font-medium shadow-md hover:scale-105 transition transform"
                >
                    View Projects
                </a>
                <a
                    href={resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-lg border border-purple-400 text-purple-400
                 font-medium hover:bg-purple-500 hover:text-white transition"
                >
                    Download Resume
                </a>
            </div>

            {/* Social Icons */}
            {/* <div className="flex gap-6 text-2xl text-gray-400 mb-12 relative z-10">
                <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition"
                >
                    <FaLinkedin />
                </a>
                <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition"
                >
                    <FaGithub />
                </a>
         
                    <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=fatinganiket8@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-red-400 transition"
                    >
                        <FaEnvelope />
                    </a>
                </div> */}

                {/* Scroll Indicator */}
                {/* <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                >
                    <a
                        href="#projects"
                        className="text-gray-400 hover:text-white text-3xl font-bold"
                    >
                        <FiChevronDown />
                    </a>
                </motion.div>
            </div> */}
        </section>
                    
    )
}