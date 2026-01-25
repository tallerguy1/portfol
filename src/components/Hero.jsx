import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="container mx-auto text-center">
        <div className="mb-8 animate-fade-in">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-5xl font-bold">
            <img src="DSC_3655.JPG" alt="Alazar" className='w-40 h-39 rounded-full mx-auto flex items-center justify-center border-4 border-blue-500 object-cover shadow-lg mb-'/>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
          Alazar Yewendater
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-4">
          Full Stack Developer & Designer
        </p>

        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
          Crafting beautiful, responsive web experiences with modern technologies.
          Passionate about clean code and user-centric design.
        </p>

        <div className="flex items-center justify-center space-x-6 mb-12">
          <a
            href="https://github.com/tallerguy1"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-slate-800 hover:bg-cyan-500 transition-all duration-300 hover:scale-110"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com" target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-slate-800 hover:bg-cyan-500 transition-all duration-300 hover:scale-110" 
            > 
            <Linkedin size={24} /> 
          </a>
          <a
            href="https://mail.google.com/mail/u/0/#inbox"
            className="p-3 rounded-full bg-slate-800 hover:bg-cyan-500 transition-all duration-300 hover:scale-110"
          >
            <Mail size={24} />
          </a>
        </div>

        <button
          onClick={scrollToContact}
          className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
        >
          Get In Touch
        </button>

        <div className="mt-16 animate-bounce">
          <ArrowDown className="mx-auto text-gray-400" size={32} />
        </div>
      </div>
    </section>
  );
}
