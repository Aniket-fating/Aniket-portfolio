      
      
import React, { useEffect } from "react";
import {
  Menu,
  X, 
  Code,
  User,
  Briefcase,
  Home,
  MessageCircle,
  Folder,
  GraduationCap
} from 'lucide-react';
      
   export const Navbar: React.FC = () => {
    const [active, setActive] = React.useState<string>("home");
    const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false);
    

      const navLinks = [
        { name: 'Home', id: 'home', icon: <Home className="w-4 h-4" /> },
        { name: 'About', id: 'about', icon: <User className="w-4 h-4" /> },
        { name: 'Education', id: 'education', icon: <GraduationCap className="w-4 h-4" /> },
        { name: 'Skills', id: 'skills', icon: <Code className="w-4 h-4" /> },
        { name: 'Experience', id: 'experience', icon: <Briefcase className="w-4 h-4" /> },
        { name: 'Projects', id: 'projects', icon: <Folder className="w-4 h-4" /> },
        { name: 'Contact', id: 'contact', icon: <MessageCircle className="w-4 h-4" /> },
      ];

        useEffect(() => {
          const handleScroll = () => {
            navLinks.forEach(link => {
              const section = document.getElementById(link.id);
              if (section) {
                const rect = section.getBoundingClientRect();
                if (rect.top <= 80 && rect.bottom >= 80) setActive(link.id);
              }
            });
          };
          window.addEventListener('scroll', handleScroll);
          return () => window.removeEventListener('scroll', handleScroll);
        }, []);
        const scrollToSection = (sectionId: string) => {
          document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
          setIsMenuOpen(false);
        };
      
    

    return(
      <nav className="fixed top-0 w-full z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo / Name */}
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Aniket Fating
            </div>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex justify-end space-x-6">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className={`flex items-center gap-1 px-3 py-1 rounded-md transition-all duration-300
                    ${active === link.id ? "text-purple-400" : "text-slate-300"}
                    hover:text-purple-400 hover:scale-110`}
                    onClick={() => setActive(link.id)}
                  >
                    <span
                      className={`transition-all duration-300 ${active === link.id
                          ? "drop-shadow-[0_0_8px_rgb(139,92,246)]"
                          : ""
                        }`}
                    >
                      {link.icon}
                    </span>
                    <span className="hidden md:inline">{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-400 hover:text-white"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-800 border-t border-slate-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id);
                    setIsMenuOpen(false); // Close after click
                  }}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-slate-300 hover:text-white hover:bg-slate-700 rounded-md"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    );
}