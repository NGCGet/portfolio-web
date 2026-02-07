import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, Shield, Bug, Github, Linkedin, Users } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Início', href: '#home', icon: Terminal },
    { name: 'Sobre', href: '#about', icon: Shield },
    { name: 'Projetos', href: '#projects', icon: Bug },
    { name: 'Experiência', href: '#experience', icon: Users },
    { name: 'Contato', href: '#contact', icon: Github }
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-black/95 backdrop-blur-md border-b border-[#00FFD1]/30' 
        : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-[#00FFD1] flex items-center justify-center">
              <Terminal className="w-6 h-6 text-black" />
            </div>
            <div className="text-xl font-bold text-white">
              <span className="text-[#00FFD1]">NGC</span>Get
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="group flex items-center space-x-2 text-white/80 hover:text-[#00FFD1] transition-all duration-300 text-lg font-medium"
              >
                <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>{item.name}</span>
              </a>
            ))}
          </div>

          {/* Social Links Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://github.com/NGCGet"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border border-white/20 hover:border-[#00FFD1] flex items-center justify-center hover:bg-[#00FFD1]/10 transition-all duration-300"
            >
              <Github className="w-5 h-5 text-white hover:text-[#00FFD1]" />
            </a>
            <a
              href="https://linkedin.com/in/carloschagas12"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border border-white/20 hover:border-[#00FFD1] flex items-center justify-center hover:bg-[#00FFD1]/10 transition-all duration-300"
            >
              <Linkedin className="w-5 h-5 text-white hover:text-[#00FFD1]" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-white hover:text-[#00FFD1] transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-6 pb-6 border-t border-white/10">
            <div className="space-y-4 mt-6">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center space-x-3 text-white/80 hover:text-[#00FFD1] transition-colors text-lg font-medium"
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </a>
              ))}
              
              <div className="flex items-center space-x-4 mt-6 pt-4 border-t border-white/10">
                <a
                  href="https://github.com/NGCGet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 border border-white/20 hover:border-[#00FFD1] flex items-center justify-center hover:bg-[#00FFD1]/10 transition-all duration-300"
                >
                  <Github className="w-6 h-6 text-white hover:text-[#00FFD1]" />
                </a>
                <a
                  href="https://linkedin.com/in/carloschagas12"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 border border-white/20 hover:border-[#00FFD1] flex items-center justify-center hover:bg-[#00FFD1]/10 transition-all duration-300"
                >
                  <Linkedin className="w-6 h-6 text-white hover:text-[#00FFD1]" />
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;