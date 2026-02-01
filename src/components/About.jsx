import { Code2, Palette, Rocket, Users } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: <Code2 size={32} />,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and well-documented code that follows best practices.',
    },
    {
      icon: <Palette size={32} />,
      title: 'Creative Design',
      description: 'Crafting beautiful, intuitive interfaces that provide exceptional user experiences.',
    },
    {
      icon: <Rocket size={32} />,
      title: 'Performance',
      description: 'Building fast, optimized applications that deliver seamless performance.',
    },
    {
      icon: <Users size={32} />,
      title: 'Collaboration',
      description: 'Working effectively with teams to deliver projects on time and exceed expectations.',
    },
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            I'm Alazar Yewendater and passionate with full-stack developement since from high school experience building websites.
            I specialize in creating elegant solutions to complex problems, with a focus on user experience
            and modern design principles. When I'm not coding, you'll find me exploring new technologies,
            contributing to open source, or sharing knowledge with the developer community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="text-cyan-400 mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 md:p-12 border border-cyan-500/20">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-cyan-400 mb-2">5+</div>
              <div className="text-gray-400">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyan-400 mb-2">2+</div>
              <div className="text-gray-400">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyan-400 mb-2">3+</div>
              <div className="text-gray-400">Happy Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
