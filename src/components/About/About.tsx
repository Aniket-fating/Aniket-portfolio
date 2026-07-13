// import { Github, Linkedin, Mail } from "lucide-react";
import profile from '../../assets/Profile.png'

export const About: React.FC = () => {

    return (


        <section id="about" className="py-20 px-4 bg-gradient-to-r from-slate-900 to-slate-950 ">
            <div className="max-w-6xl mx-auto">
                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        About <span className="text-purple-400">Me</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-6 rounded-full gradient-underline"></div>
                    <p className="text-white text-lg max-w-2xl mx-auto">
                        Passionate about building scalable, high-performance full-stack web applications
                    </p>
                </div>

                {/* Content */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Side (Text) */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold text-white mb-4">
                            Hello! I'm a <span className="highlight">Full-Stack Developer</span>
                        </h3>

                        <p className="text-white leading-relaxed">
                            I’m a results-driven <span className="text-purple-400 font-medium highlight">Full-Stack Developer </span>
                            with 2 years of experience building scalable, responsive React.js applications and Node.js REST services.
                            My core expertise lies in <span className="text-purple-400 font-medium highlight">React.js, TypeScript, Node.js, REST API design,
                                and database-backed applications (SQL/MongoDB)</span>, with hands-on experience in JWT-based
                            authentication, role-based access control, and CI/CD pipelines using Jenkins.
                        </p>

                        <p className="text-white leading-relaxed">
                            Known for writing clean and maintainable code, I've improved page-load performance by 18%
                            and cut unnecessary re-renders by 30% through strategic optimisation and memoization.
                            I thrive on solving problems end-to-end, from frontend UI to backend API and data layer,
                            and enjoy collaborating in cross-functional teams.
                        </p>

                        <p className="text-white leading-relaxed">
                            I’m currently seeking opportunities as a
                            <span className="text-purple-400 font-medium highlight"> Full-Stack Developer</span> where I can
                            apply my end-to-end skills and continue deepening my backend and database expertise.
                        </p>

                        {/* Social Links */}
                        {/* <div className="flex space-x-4 pt-6">
                            <a
                                href="https://github.com/Aniket-fating"
                                target="_blank"
                                className="text-slate-400 hover:text-purple-400 transition-transform duration-300 hover:scale-110"
                            >
                                <Github className="w-6 h-6" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/fating-aniket"
                                target="_blank"
                                className="text-slate-400 hover:text-blue-400 transition-transform duration-300 hover:scale-110"
                            >
                                <Linkedin className="w-6 h-6" />
                            </a>
                            <a
                                href="mailto:fatinganiket8@gmail.com"
                                className="text-slate-400 hover:text-emerald-400 transition-transform duration-300 hover:scale-110"
                            >
                                <Mail className="w-6 h-6" />
                            </a>
                        </div> */}
                    </div>

                    {/* Right Side (Visual) */}
                    <div className="relative">
                        <div className="w-72 h-72 md:w-80 md:h-80 mx-auto bg-gradient-to-br from-purple-500 to-blue-500 rounded-full opacity-20 blur-3xl"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-56 h-56 md:w-64 md:h-64 bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl flex items-center justify-center shadow-2xl profile-container">
                                <img src={profile} alt="Profile" className="profile-img rounded-2xl" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}