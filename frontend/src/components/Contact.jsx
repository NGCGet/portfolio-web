import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, ExternalLink, Terminal } from 'lucide-react';
import { profileData } from '../mock/data';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Site estático - funcionalidade de contato desabilitada
    alert('Site estático: Entre em contato através do LinkedIn ou GitHub diretamente.');
    
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Github,
      label: 'GitHub',
      value: '@NGCGet',
      link: profileData.socialLinks.github,
      description: 'Projetos e código aberto'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Carlos Chagas',
      link: profileData.socialLinks.linkedin,
      description: 'Conexões profissionais'
    },
    {
      icon: ExternalLink,
      label: 'TryHackMe',
      value: '@NGCGet - Top 5%',
      link: profileData.socialLinks.tryhackme,
      description: 'Perfil na plataforma'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 mb-4">
            <Terminal className="w-8 h-8 text-[#00FFD1]" />
            <h2 className="text-4xl font-bold text-white">$ sudo contact --secure</h2>
          </div>
          <div className="w-24 h-1 bg-[#00FFD1] mx-auto mb-6"></div>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Pronto para colaborar em projetos de segurança? Vamos conversar sobre como posso ajudar
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-[#121212] border border-[#00FFD1]/30 p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center space-x-3">
                <Mail className="w-6 h-6 text-[#00FFD1]" />
                <span>Conecte-se Comigo</span>
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start space-x-4 p-4 bg-black/30 border border-[#00FFD1]/20 hover:border-[#00FFD1]/50 hover:bg-[#00FFD1]/5 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-[#00FFD1]/10 border border-[#00FFD1]/50 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <contact.icon className="w-5 h-5 text-[#00FFD1]" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold text-lg group-hover:text-[#00FFD1] transition-colors">
                        {contact.label}
                      </h4>
                      <p className="text-[#00FFD1] font-medium mb-1">
                        {contact.value}
                      </p>
                      <p className="text-white/60 text-sm">
                        {contact.description}
                      </p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-white/40 group-hover:text-[#00FFD1] transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-[#121212] border border-[#00FFD1]/30 p-8">
              <h4 className="text-xl font-bold text-white mb-4">Especialidades</h4>
              <div className="space-y-3">
                {[
                  'Testes de Penetração',
                  'Análise de Vulnerabilidades',
                  'Bug Hunting & Ethical Hacking',
                  'Desenvolvimento de Ferramentas'
                ].map((specialty, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#00FFD1] rounded-full animate-pulse"></div>
                    <span className="text-white/80">{specialty}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#121212] border border-[#00FFD1]/30 p-8">
            {!isSubmitted ? (
              <>
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center space-x-3">
                  <Send className="w-6 h-6 text-[#00FFD1]" />
                  <span>Enviar Mensagem</span>
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white/80 text-sm font-medium mb-2">
                        Nome
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-black/50 border border-[#00FFD1]/30 text-white px-4 py-3 focus:border-[#00FFD1] focus:outline-none transition-colors"
                        placeholder="Seu nome completo"
                      />
                    </div>
                    <div>
                      <label className="block text-white/80 text-sm font-medium mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-black/50 border border-[#00FFD1]/30 text-white px-4 py-3 focus:border-[#00FFD1] focus:outline-none transition-colors"
                        placeholder="seu.email@exemplo.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">
                      Assunto
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-black/50 border border-[#00FFD1]/30 text-white px-4 py-3 focus:border-[#00FFD1] focus:outline-none transition-colors"
                      placeholder="Assunto da mensagem"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">
                      Mensagem
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full bg-black/50 border border-[#00FFD1]/30 text-white px-4 py-3 focus:border-[#00FFD1] focus:outline-none transition-colors resize-none"
                      placeholder="Descreva seu projeto ou como posso ajudá-lo..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-[#00FFD1] text-black font-semibold py-4 hover:bg-white transition-all duration-300 flex items-center justify-center space-x-2 text-lg"
                  >
                    <Send className="w-5 h-5" />
                    <span>Enviar Mensagem</span>
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-16">
                <Terminal className="w-16 h-16 text-[#00FFD1] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">
                  Site Estático
                </h3>
                <p className="text-white/70 mb-4">
                  Este é um portfolio estático. Para entrar em contato:
                </p>
                <div className="flex justify-center space-x-4">
                  <a
                    href="https://linkedin.com/in/carloschagas12"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-[#00FFD1] text-black px-4 py-2 hover:bg-white transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="https://github.com/NGCGet"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 border border-[#00FFD1] text-[#00FFD1] px-4 py-2 hover:bg-[#00FFD1] hover:text-black transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;