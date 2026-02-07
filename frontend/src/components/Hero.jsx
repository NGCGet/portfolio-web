import React, { useState, useEffect } from 'react';
import { Terminal, Shield, Bug, Github, Linkedin, ExternalLink } from 'lucide-react';
import { profileData } from '../mock/data';

const TerminalText = ({ text, speed = 100, onComplete }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else if (onComplete) {
      onComplete();
    }
  }, [currentIndex, text, speed, onComplete]);
  
  return <span>{displayText}<span className="animate-pulse">|</span></span>;
};

const Hero = () => {
  const [showSecondLine, setShowSecondLine] = useState(false);
  const [showThirdLine, setShowThirdLine] = useState(false);

  return (
    <section id="home" className="min-h-screen bg-black relative overflow-hidden">
      {/* Matrix-like background grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" 
             style={{
               backgroundImage: `
                 repeating-linear-gradient(0deg, transparent, transparent 1px, #00FFD1 1px, #00FFD1 2px),
                 repeating-linear-gradient(-90deg, transparent, transparent 1px, #00FFD1 1px, #00FFD1 2px)
               `,
               backgroundSize: '50px 50px'
             }}
        />
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#00FFD1] rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Terminal Window */}
            <div className="bg-[#121212] border border-[#00FFD1]/30 rounded-none font-mono">
              <div className="flex items-center px-4 py-3 bg-[#1a1a1a] border-b border-[#00FFD1]/30">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="ml-4 text-white/60 text-sm">terminal@ngc-security</div>
              </div>
              <div className="p-6 space-y-2">
                <div className="text-[#00FFD1] text-lg">
                  $ whoami
                </div>
                <div className="text-white text-lg">
                  <TerminalText 
                    text="Carlos Chagas"
                    speed={150}
                    onComplete={() => setShowSecondLine(true)}
                  />
                </div>
                {showSecondLine && (
                  <>
                    <div className="text-[#00FFD1] text-lg">
                      $ cat /etc/role
                    </div>
                    <div className="text-white text-lg">
                      <TerminalText 
                        text={profileData.title}
                        speed={80}
                        onComplete={() => setShowThirdLine(true)}
                      />
                    </div>
                  </>
                )}
                {showThirdLine && (
                  <>
                    <div className="text-[#00FFD1] text-lg">
                      $ echo $MISSION
                    </div>
                    <div className="text-white text-lg">
                      <TerminalText 
                        text="Finding vulnerabilities, securing systems"
                        speed={90}
                      />
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => {
                  document.getElementById('projects')?.scrollIntoView({
                    behavior: 'smooth'
                  });
                }}
                className="bg-[#00FFD1] text-black font-semibold px-8 py-4 hover:bg-white transition-all duration-300 flex items-center space-x-2 text-lg group"
              >
                <Shield className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                <span>Ver Projetos</span>
              </button>
              <a
                href="/Carlos_Chagas_CV.pdf"
                download="Carlos_Chagas_CV.pdf"
                className="bg-transparent border border-[#00FFD1] text-[#00FFD1] font-semibold px-8 py-4 hover:bg-[#00FFD1] hover:text-black transition-all duration-300 flex items-center space-x-2 text-lg group"
              >
                <Terminal className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Download CV</span>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#00FFD1]">{profileData.stats.githubRepos}</div>
                <div className="text-white/60 text-sm uppercase tracking-wider">Repositórios</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#00FFD1]">{profileData.stats.thm_badges}</div>
                <div className="text-white/60 text-sm uppercase tracking-wider">THM Badges</div>
              </div>
              <div className="text-3xl font-bold text-[#00FFD1] text-center">
                <div>{profileData.stats.thm_percentage}</div>
                <div className="text-white/60 text-sm uppercase tracking-wider">TryHackMe</div>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glowing effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#00FFD1] to-[#6FD2C0] rounded-full blur opacity-30 animate-pulse"></div>
              
              <div className="relative w-80 h-80 rounded-full border-4 border-[#00FFD1] overflow-hidden bg-[#121212]">
                <img 
                  src={profileData.avatar}
                  alt={profileData.name}
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                {/* Floating icons */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-[#00FFD1]/20 rounded-full flex items-center justify-center animate-bounce">
                  <Bug className="w-4 h-4 text-[#00FFD1]" />
                </div>
                <div className="absolute bottom-8 left-4 w-8 h-8 bg-[#00FFD1]/20 rounded-full flex items-center justify-center animate-bounce" style={{animationDelay: '1s'}}>
                  <Shield className="w-4 h-4 text-[#00FFD1]" />
                </div>
              </div>

              {/* Social links floating */}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-4">
                <a
                  href={profileData.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#121212] border border-[#00FFD1]/50 hover:border-[#00FFD1] hover:bg-[#00FFD1]/10 flex items-center justify-center transition-all duration-300 group"
                >
                  <Github className="w-5 h-5 text-[#00FFD1] group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href={profileData.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#121212] border border-[#00FFD1]/50 hover:border-[#00FFD1] hover:bg-[#00FFD1]/10 flex items-center justify-center transition-all duration-300 group"
                >
                  <Linkedin className="w-5 h-5 text-[#00FFD1] group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href={profileData.socialLinks.tryhackme}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#121212] border border-[#00FFD1]/50 hover:border-[#00FFD1] hover:bg-[#00FFD1]/10 flex items-center justify-center transition-all duration-300 group"
                >
                  <ExternalLink className="w-5 h-5 text-[#00FFD1] group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#00FFD1] rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#00FFD1] rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;