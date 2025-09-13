import Contact from "./components/Contact/ContactSection";
import { About } from "./components/About/About";
import { Education } from "./components/Education/Education";
import { Experience } from "./components/Experience/Experience";
import { Home } from "./components/Home/Home";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import { Skills } from "./components/Skills/Skills";
import { Footer } from "./components/Footer/Footer";
import { TopScroll } from "./components/TopScroll/TopScroll";
import SocialSidebar from "./components/SocialSidebar/SocialSidebar";

function App() {
  return (
    <div className=" bg-slate-900 relative text-white min-h-screen">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(139,92,246,0.3),transparent_60%),radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.3),transparent_60%)]"></div>

      <div className="relative z-10">
        {/* Your existing components */}
        <Navbar />
        <Home />
        <About />
        <Education />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
        <TopScroll />

        <SocialSidebar/>
      </div>
    </div>
  );
}

export default App;






{/* 🔹 Scroll-to-Top Button */ }
{/* {showTopBtn && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-gradient-to-r from-purple-500 to-blue-500 text-white p-3 rounded-full shadow-lg hover:scale-110 transition transform"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <FiChevronUp size={24} />
        </motion.button>
      )} */}
