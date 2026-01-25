import { Heart, Github, Telegram, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
              Portfolio
            </div>
            <p className="text-gray-400 text-sm">
              Building digital experiences that make a difference.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#home" className="hover:text-cyan-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-cyan-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-cyan-400 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/tallerguy1"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-800 hover:bg-cyan-500 transition-all duration-300"
              >
                <Github size={20} />
              </a>
              <a
                href="https://te.com/Tallguy00"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-800 hover:bg-cyan-500 transition-all duration-300"
              >
                <Telegram size={20} />
              </a>
              <a
                href="https://mail.google.com/mail/u/0/#inbox"
                className="p-2 rounded-lg bg-slate-800 hover:bg-cyan-500 transition-all duration-300"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center">
          <p className="text-gray-400 text-sm flex items-center justify-center space-x-1">
            <span>&copy; {currentYear} All rights reserved.</span>
            <span>Made with</span>
            <Heart size={16} className="text-red-500 fill-current" />
            <span>by AY</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
