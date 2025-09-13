import { useEffect, useState } from "react";
import { FiChevronUp } from "react-icons/fi";
import { motion } from "framer-motion";

export const TopScroll = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    const section = document.getElementById("home");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {showTopBtn && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-gradient-to-r from-purple-500 to-blue-500 text-white p-3 rounded-full shadow-lg hover:scale-110 transition transform"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <FiChevronUp size={24} />
        </motion.button>
      )}
    </>
  );
};