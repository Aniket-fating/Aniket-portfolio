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
                        Passionate about creating exceptional digital experiences through code and design
                    </p>
                </div>

                {/* Content */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Side (Text) */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold text-white mb-4">
                            Hello! I'm a <span className="highlight">Frontend Developer</span>
                        </h3>

                        <p className="text-white leading-relaxed">
                            I’m a passionate <span className="text-purple-400 font-medium highlight">Frontend Developer </span>
                            specializing in building modern, scalable, and user-friendly web applications.
                            My core expertise lies in <span className="text-purple-400 font-medium highlight">Html, Css, React.js, Node.js, JavaScript,
                                and UI/UX design</span>, where I focus on creating seamless digital experiences.
                        </p>

                        <p className="text-white leading-relaxed">
                            Known for writing clean and maintainable code, I thrive on solving problems
                            and collaborating in cross-functional teams. I enjoy exploring new technologies,
                            contributing to open-source projects, and sharing knowledge with the developer community.
                        </p>

                        <p className="text-white leading-relaxed">
                            I’m currently seeking opportunities as a
                            <span className="text-purple-400 font-medium highlight"> Frontend Developer</span> where I can
                            apply my skills and continue growing into a full-stack role.
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