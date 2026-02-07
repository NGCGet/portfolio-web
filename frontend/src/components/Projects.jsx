import React, { useState } from 'react';
import { Github, ExternalLink, Code, Terminal, Shield, Bug, Target, Database } from 'lucide-react';
import { profileData } from '../mock/data';

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  
  const projectTypes = ['All', ...new Set(profileData.projects.map(p => p.type))];
  
  const filteredProjects = selectedFilter === 'All' 
    ? profileData.projects 
    : profileData.projects.filter(p => p.type === selectedFilter);

  const getTypeIcon = (type) => {
    const icons = {
      'Network Security': Shield,
      'Reconnaissance': Target,
      'Information Gathering': Database,
      'Educational': Terminal,
      'Malware Analysis': Bug
    };
    return icons[type] || Code;
  };

  const getTypeColor = (type) => {
    const colors = {
      'Network Security': 'text-green-400',
      'Reconnaissance': 'text-blue-400',
      'Information Gathering': 'text-yellow-400',
      'Educational': 'text-purple-400',
      'Malware Analysis': 'text-red-400'
    };
    return colors[type] || 'text-[#00FFD1]';
  };

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 mb-4">
            <Code className="w-8 h-8 text-[#00FFD1]" />
            <h2 className="text-4xl font-bold text-white">$ ls -la /projects</h2>
          </div>
          <div className="w-24 h-1 bg-[#00FFD1] mx-auto mb-6"></div>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Ferramentas e projetos desenvolvidos para demonstrar conhecimentos em segurança cibernética
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {projectTypes.map((type) => (
            <button
              key={type}
              onClick={() => setSelectedFilter(type)}
              className={`px-6 py-3 border transition-all duration-300 font-medium ${
                selectedFilter === type
                  ? 'bg-[#00FFD1] text-black border-[#00FFD1]'
                  : 'bg-transparent text-white border-white/20 hover:border-[#00FFD1] hover:text-[#00FFD1]'
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => {
            const TypeIcon = getTypeIcon(project.type);
            
            return (
              <div
                key={project.id}
                className="bg-[#121212] border border-[#00FFD1]/30 hover:border-[#00FFD1]/60 transition-all duration-500 group overflow-hidden"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                {/* Project Header */}
                <div className="p-6 border-b border-[#00FFD1]/20">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 border border-[#00FFD1]/50 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <TypeIcon className={`w-5 h-5 ${getTypeColor(project.type)}`} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-[#00FFD1] transition-colors">
                          {project.name}
                        </h3>
                        <span className={`text-sm font-medium ${getTypeColor(project.type)}`}>
                          {project.type}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-white/70 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-[#00FFD1]/10 border border-[#00FFD1]/30 text-[#00FFD1] text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex space-x-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-transparent border border-[#00FFD1]/50 text-[#00FFD1] hover:bg-[#00FFD1] hover:text-black transition-all duration-300 px-4 py-3 flex items-center justify-center space-x-2 text-sm font-medium"
                    >
                      <Github className="w-4 h-4" />
                      <span>Código</span>
                    </a>
                  </div>
                </div>

                {/* Terminal-style footer */}
                <div className="bg-black/30 px-6 py-3 border-t border-[#00FFD1]/20 font-mono text-xs">
                  <div className="flex items-center text-[#00FFD1]">
                    <Terminal className="w-3 h-3 mr-2" />
                    <span className="text-white/60">git clone {project.github}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-16">
          <div className="bg-[#121212] border border-[#00FFD1]/30 p-8 max-w-2xl mx-auto">
            <Github className="w-12 h-12 text-[#00FFD1] mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">
              Explore Mais Projetos
            </h3>
            <p className="text-white/70 mb-6">
              Confira meu perfil no GitHub para ver mais ferramentas e experimentos em desenvolvimento
            </p>
            <a
              href={profileData.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-[#00FFD1] text-black font-semibold px-8 py-4 hover:bg-white transition-all duration-300"
            >
              <Github className="w-5 h-5" />
              <span>Ver GitHub</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;