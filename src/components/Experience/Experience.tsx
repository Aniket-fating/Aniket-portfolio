import { motion } from "framer-motion";


export const Experience: React.FC = () => {
    //   const listVariants = {
    //     hidden: { opacity: 0, x: -20 },
    //     visible: (i: number) => ({
    //       opacity: 1,
    //       x: 0,
    //       transition: {
    //         delay: i * 0.2,
    //         duration: 0.6,
    //         ease: "easeOut"
    //       }
    //     })
    //   };



    return (
        <section id="experience" className="py-20 px-4 bg-gradient-to-r from-slate-950 via-purple-900/20 to-slate-950">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        My <span className="text-purple-400">Experience</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-12 rounded-full"></div>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        A snapshot of my professional journey
                    </p>
                </div>

                {/* Timeline Items */}
                <div className="space-y-12">
                    {/* React.js Developer */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="relative border-l border-slate-700 ml-6 pl-6"
                    >
                        {/* Timeline Dot */}
                        <motion.div
                            animate={{ scale: [1, 1.2, 1], opacity: [1, 0.8, 1] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                            className="absolute -left-4 top-2 w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 shadow-lg"
                        ></motion.div>

                        <h3 className="text-xl font-semibold text-white">React.js Developer</h3>
                        <p className="mt-2 font-medium text-slate-200">
                            <span className="px-2 py-1 rounded-md bg-slate-800/70 border border-slate-600">
                                Appynitty Communications Pvt. Ltd. | 2024 – 2025
                            </span>
                        </p>

                        <ul className="text-gray-300 mt-4 space-y-2 list-disc list-inside">
                            {[
                                "Developed responsive SPAs using React + TypeScript, with reusable and scalable UI components.",
                                "Managed global state efficiently using Redux Toolkit and Context API.",
                                "Integrated REST APIs for dynamic data retrieval and interactive features.",
                                "Optimized performance with React hooks such as memo, useMemo, useCallback, and lazy loading.",
                                "Implemented secure authentication & authorization using JWT, LocalStorage, SessionStorage, and cookies.",
                            ].map((item, i) => (
                                <motion.li
                                    key={i}
                                    custom={i}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    className="leading-relaxed"
                                >
                                    {item}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Frontend Developer Intern */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="relative border-l border-slate-700 ml-6 pl-6"
                    >
                        {/* Timeline Dot */}
                        <motion.div
                            animate={{ scale: [1, 1.2, 1], opacity: [1, 0.8, 1] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                            className="absolute -left-4 top-2 w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-yellow-500 shadow-lg"
                        ></motion.div>

                        <h3 className="text-xl font-semibold text-white">Frontend Developer Intern</h3>
                        <p className="mt-2 font-medium text-slate-200">
                            <span className="px-2 py-1 rounded-md bg-slate-800/70 border border-slate-600">
                                ARC Technologies & Institutions | 2024
                            </span>
                        </p>

                        <ul className="text-gray-300 mt-4 space-y-2 list-disc list-inside">
                            {[
                                "Contributed to the Jobby App project by developing the frontend using React.js.",
                                "Collaborated with team members to design responsive UI components.",
                                "Enhanced project usability by implementing interactive features with React hooks.",
                                "Gained hands-on experience in Git workflow and team-based version control.",
                            ].map((item, i) => (
                                <motion.li
                                    key={i}
                                    custom={i}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    className="leading-relaxed"
                                >
                                    {item}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}