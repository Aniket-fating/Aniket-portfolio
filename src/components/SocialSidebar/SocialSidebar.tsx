import { Github, Instagram, Linkedin, Mail } from "lucide-react";

const SocialSidebar = () => {
    return (
        <div className="fixed right-4 top-1/2 -translate-y-1/2 flex flex-col items-center space-y-4 z-50">
            {/* LinkedIn */}
            <a
                href="https://linkedin.com/in/fating-aniket"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-800 rounded-full hover:bg-blue-600 transition"
            >
                <Linkedin className="w-5 h-5 text-white" />
            </a>

            {/* GitHub */}
            <a
                href="https://github.com/Aniket-fating"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-800 rounded-full hover:bg-gray-400 transition"
            >
                <Github className="w-5 h-5 text-white" />
            </a>

            {/* Mail */}
            <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=fatinganiket8@gmail.com"
                className="p-2 bg-slate-800 rounded-full hover:bg-red-600 transition"
            >
                <Mail className="w-5 h-5 text-white" />
            </a>

            {/* Instagram */}
            <a
                href="https://instagram.com/aniket_fating"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-800 rounded-full hover:bg-pink-600 transition"
            >
                <Instagram className="w-5 h-5 text-white" />
            </a>
        </div>
    );
};

export default SocialSidebar;
