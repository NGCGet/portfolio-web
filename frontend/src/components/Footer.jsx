import React from 'react';
import { Terminal, Github, Linkedin, ExternalLink, Heart, Code } from 'lucide-react';
import { profileData } from '../mock/data';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-[#00FFD1]/30">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand & Bio */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-[#00FFD1] flex items-center justify-center">
                <Terminal className="w-6 h-6 text-black" />
              </div>
              <div className="text-xl font-bold text-white">
                <span className="text-[#00FFD1]">NGC</span>Get
              </div>
            </div>
            <p className="text-white/70 leading-relaxed max-w-md">
              {profileData.title} dedicado a explorar e fortalecer a segurança de sistemas digitais. 
              Sempre em busca de novas vulnerabilidades e soluções inovadoras.
            </p>
            <div className="flex items-center space-x-2 text-[#00FFD1] text-sm">
              <Code className="w-4 h-4" />
              <span>Desenvolvido com React - Site Estático</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Navegação</h4>
            <div className="space-y-3">
              {[
                { name: 'Início', href: '#home' },
                { name: 'Sobre', href: '#about' },
                { name: 'Projetos', href: '#projects' },
                { name: 'Experiência', href: '#experience' },
                { name: 'Contato', href: '#contact' }
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-white/60 hover:text-[#00FFD1] transition-colors text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Social & Stats */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Conecte-se</h4>
            <div className="space-y-4">
              <a
                href={profileData.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-white/60 hover:text-[#00FFD1] transition-colors text-sm"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href={profileData.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-white/60 hover:text-[#00FFD1] transition-colors text-sm"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href={profileData.socialLinks.tryhackme}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-white/60 hover:text-[#00FFD1] transition-colors text-sm"
              >
                <ExternalLink className="w-4 h-4" />
                <span>TryHackMe</span>
                <span className="text-[#00FFD1] text-xs">Top 5%</span>
              </a>
            </div>

            {/* Stats */}
            <div className="mt-6 pt-4 border-t border-white/10">
              <div className="grid grid-cols-2 gap-3 text-center">
                <div>
                  <div className="text-[#00FFD1] font-bold text-lg">6</div>
                  <div className="text-white/60 text-xs">Repos</div>
                </div>
                <div>
                  <div className="text-[#00FFD1] font-bold text-lg">16</div>
                  <div className="text-white/60 text-xs">Badges</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-white/60 text-sm">
              <span>© {currentYear} {profileData.name}.</span>
              <span>Desenvolvido com</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>para o meu portfólio</span>
            </div>
            
            <div className="flex items-center space-x-6 text-white/60 text-sm">
              <span>Powered by</span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#00FFD1] rounded-full animate-pulse"></div>
                <span className="text-[#00FFD1]">React</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#00FFD1] rounded-full animate-pulse"></div>
                <span className="text-[#00FFD1]">Static Site</span>
              </div>
            </div>
          </div>

          {/* Terminal signature */}
          <div className="mt-6 bg-[#121212] border border-[#00FFD1]/20 p-4 font-mono text-sm">
            <div className="text-[#00FFD1]">
              $ echo "Obrigado pela visita! Boa sorte com o hacking! 🔐"
            </div>
            <div className="text-white/60 mt-1">
              Obrigado pela visita! Boa sorte com o hacking! 🔐
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;