import React from 'react';
import { Shield, Terminal, Bug, Award, Target, Code } from 'lucide-react';
import { profileData } from '../mock/data';

const About = () => {
  const skillCategories = [
    {
      title: "Technical Skills",
      icon: Code,
      skills: profileData.skills.technical
    },
    {
      title: "Security Tools",
      icon: Shield,
      skills: profileData.skills.tools
    }
  ];

  return (
    <section id="about" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 mb-4">
            <Terminal className="w-8 h-8 text-[#00FFD1]" />
            <h2 className="text-4xl font-bold text-white">$ cat about.md</h2>
          </div>
          <div className="w-24 h-1 bg-[#00FFD1] mx-auto mb-6"></div>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Explorando o mundo da cibersegurança com paixão por descobrir vulnerabilidades e fortalecer sistemas digitais
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Bio */}
            <div className="bg-[#121212] border border-[#00FFD1]/30 p-8">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center space-x-3">
                <Shield className="w-6 h-6 text-[#00FFD1]" />
                <span>Sobre Mim</span>
              </h3>
              <p className="text-white/80 text-lg leading-relaxed mb-6">
                {profileData.bio}
              </p>
              <p className="text-white/80 text-lg leading-relaxed">
                Com experiência prática em testes de penetração, análise de vulnerabilidades e 
                desenvolvimento de ferramentas de segurança, busco constantemente aprimorar minhas 
                habilidades através de plataformas como TryHackMe, onde mantenho posição no top 5% dos usuários.
              </p>
            </div>

            {/* Key Focus Areas */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-[#121212] border border-[#00FFD1]/30 p-6 text-center hover:bg-[#00FFD1]/5 transition-colors">
                <Bug className="w-8 h-8 text-[#00FFD1] mx-auto mb-3" />
                <h4 className="text-white font-semibold mb-2">Bug Hunting</h4>
                <p className="text-white/60 text-sm">Identificação de vulnerabilidades em aplicações web</p>
              </div>
              <div className="bg-[#121212] border border-[#00FFD1]/30 p-6 text-center hover:bg-[#00FFD1]/5 transition-colors">
                <Target className="w-8 h-8 text-[#00FFD1] mx-auto mb-3" />
                <h4 className="text-white font-semibold mb-2">Pentesting</h4>
                <p className="text-white/60 text-sm">Testes de intrusão completos em redes e sistemas</p>
              </div>
              <div className="bg-[#121212] border border-[#00FFD1]/30 p-6 text-center hover:bg-[#00FFD1]/5 transition-colors">
                <Award className="w-8 h-8 text-[#00FFD1] mx-auto mb-3" />
                <h4 className="text-white font-semibold mb-2">Research</h4>
                <p className="text-white/60 text-sm">Pesquisa em segurança e desenvolvimento de ferramentas</p>
              </div>
            </div>
          </div>

          {/* Right Content - Skills */}
          <div className="space-y-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-[#121212] border border-[#00FFD1]/30 p-8">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center space-x-3">
                  <category.icon className="w-6 h-6 text-[#00FFD1]" />
                  <span>{category.title}</span>
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className="flex items-center space-x-3 p-3 bg-black/50 border border-[#00FFD1]/20 hover:border-[#00FFD1]/50 transition-all duration-300"
                    >
                      <div className="w-2 h-2 bg-[#00FFD1] rounded-full animate-pulse"></div>
                      <span className="text-white/80 text-sm font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Certificações & Formações
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {profileData.certifications.map((cert) => (
              <div 
                key={cert.id}
                className="bg-[#121212] border border-[#00FFD1]/30 p-6 hover:bg-[#00FFD1]/5 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#00FFD1]/10 border border-[#00FFD1]/50 flex items-center justify-center">
                    <Award className="w-6 h-6 text-[#00FFD1]" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-semibold text-lg mb-1">{cert.name}</h4>
                    <p className="text-[#00FFD1] text-sm mb-2">{cert.issuer}</p>
                    <div className="flex items-center space-x-4 text-white/60 text-sm">
                      <span>{cert.year}</span>
                      <span className="w-1 h-1 bg-white/60 rounded-full"></span>
                      <span>{cert.type}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;