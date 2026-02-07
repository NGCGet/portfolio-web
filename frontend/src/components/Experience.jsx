import React from 'react';
import { Briefcase, MapPin, Calendar, Code, Shield } from 'lucide-react';
import { profileData } from '../mock/data';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 mb-4">
            <Briefcase className="w-8 h-8 text-[#00FFD1]" />
            <h2 className="text-4xl font-bold text-white">$ grep -r "experience" /career</h2>
          </div>
          <div className="w-24 h-1 bg-[#00FFD1] mx-auto mb-6"></div>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Jornada profissional na área de cibersegurança e desenvolvimento de soluções
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-12">
          {profileData.experiences.map((exp, index) => (
            <div 
              key={exp.id}
              className="relative"
            >
              {/* Timeline line */}
              <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-[#00FFD1]/30"></div>
              
              {/* Experience Card */}
              <div className="flex items-start space-x-8">
                {/* Timeline dot */}
                <div className="flex-shrink-0 w-16 h-16 bg-[#121212] border-4 border-[#00FFD1] rounded-full flex items-center justify-center relative z-10">
                  <Shield className="w-6 h-6 text-[#00FFD1]" />
                </div>

                {/* Content */}
                <div className="flex-1 bg-[#121212] border border-[#00FFD1]/30 p-8 hover:border-[#00FFD1]/60 transition-all duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Left: Role & Company */}
                    <div className="lg:col-span-2">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {exp.title}
                      </h3>
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="flex items-center space-x-2 text-[#00FFD1]">
                          <Briefcase className="w-4 h-4" />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-white/60">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                      <p className="text-white/70 leading-relaxed mb-6">
                        {exp.description}
                      </p>
                    </div>

                    {/* Right: Technologies */}
                    <div className="bg-black/30 border border-[#00FFD1]/20 p-6">
                      <div className="flex items-center space-x-2 mb-4">
                        <Code className="w-5 h-5 text-[#00FFD1]" />
                        <h4 className="text-white font-semibold">Tecnologias</h4>
                      </div>
                      <div className="space-y-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <div key={techIndex} className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-[#00FFD1] rounded-full animate-pulse"></div>
                            <span className="text-white/80 text-sm">{tech}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Terminal footer */}
                  <div className="mt-6 pt-4 border-t border-[#00FFD1]/20 font-mono text-xs">
                    <div className="text-[#00FFD1]">
                      <span className="text-white/60">Last updated:</span> {exp.period}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-white mb-12 text-center">
            Conquistas & Reconhecimentos
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {profileData.achievements.map((achievement) => (
              <div 
                key={achievement.id}
                className="bg-[#121212] border border-[#00FFD1]/30 p-8 text-center hover:bg-[#00FFD1]/5 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-[#00FFD1]/10 border-2 border-[#00FFD1] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Shield className="w-8 h-8 text-[#00FFD1]" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">
                  {achievement.title}
                </h4>
                <p className="text-white/70 mb-4 leading-relaxed">
                  {achievement.description}
                </p>
                <div className="text-[#00FFD1] font-semibold">
                  {achievement.year}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;