// Mock data para o site biografia de Carlos Eduardo
export const profileData = {
  name: "Carlos Chagas",
  nickname: "NGCGet",
  title: "Analista de Segurança da Informação | Red Team | Pentester | Bug Hunter",
  location: "Brasil",
  bio: "Formado em Segurança da Informação, especializado em testes de intrusão e apaixonado por cibersegurança. Focado em descobrir vulnerabilidades e fortalecer sistemas contra ameaças digitais.",
  
  avatar: "https://avatars.githubusercontent.com/u/116766042?v=4",
  
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/carloschagas12/",
    github: "https://github.com/NGCGet",
    tryhackme: "https://tryhackme.com/p/NGCGet"
  },
  
  stats: {
    githubRepos: 6,
    thm_rank: "83696",
    thm_badges: 16,
    thm_rooms: 74,
    thm_percentage: "Top 5%"
  },

  experiences: [
    {
      id: 1,
      title: "Cybersecurity Researcher | Bug Bounty Hunter",
      company: "IPV7",
      period: "2025 - Presente",
      description: "Colaboração com plataforma privada de bug bounty, com foco em testes de intrusão ética em aplicações web. Submissões aprovadas com base em impacto técnico, abrangência e criticidade da falha.",
      technologies: ["Caido", "Burp Suite", "OWASP Top 10", "Bug Bounty", "Vulnerability Research", "Web Security"]
    },
    {
      id: 2,
      title: "Militar",
      company: "Exército Brasileiro",
      period: "2023 - 2024",
      description: "Atuei na área de infraestrutura de TI e suporte técnico, com experiência em configuração de redes, instalação de sistemas VoIP e manutenção de computadores. Contribuí para a estabilidade e o bom funcionamento dos sistemas e equipamentos de comunicação utilizados na BIA e no Comando.",
      technologies: ["Disciplina", "Trabalho em Equipe", "Liderança", "Organização", "Linux", "Zabbix", "Voip"]
    }
  ],

  projects: [
    {
      id: 1,
      name: "Bad USB com Digispark",
      description: "Este projeto demonstra um vetor de ataque físico utilizando o microcontrolador Digispark ATtiny85 (HID)",
      tech: ["Python", "Java", "Powershell"],
      github: "https://github.com/NGCGet/Bad-USB-com-Digispark",
      type: "Hardware Hacking"
    },
    {
      id: 2,
      name: "PortScan", 
      description: "Scanner de portas desenvolvido em Python para reconhecimento de rede",
      tech: ["Python", "Socket Programming", "Threading"],
      github: "https://github.com/NGCGet/PortScan",
      type: "Reconnaissance"
    },
    {
      id: 3,
      name: "DNS BruteForce",
      description: "Ferramenta para descoberta de subdomínios através de força bruta",
      tech: ["Python", "DNS Enumeration", "Threading"],
      github: "https://github.com/NGCGet/DNS-BruteForce",
      type: "Information Gathering"
    },
    {
      id: 4,
      name: "DoS Tool",
      description: "Ferramenta educativa para demonstração de ataques de negação de serviço",
      tech: ["Python", "Network Programming"],
      github: "https://github.com/NGCGet/Dos",
      type: "Educational"
    },
    {
      id: 5,
      name: "Malwares",
      description: "Repositório com alguns malwares conhecidos e com crypter",
      tech: ["Python", "Reverse Engineering", "Static Analysis"],
      github: "https://github.com/NGCGet/Malwares",
      type: "Malware Analysis"
    },
    {  
      id: 6,
      name: "Sniffer",
      description: "Ferramenta usada para capturar e analisar o tráfego de dados de rede",
      tech: ["Python", "Scapy", "Network Analysis"],
      github: "https://github.com/NGCGet/Sniffer",
      type: "Network Security"
    }
  ],

  certifications: [
    {
      id: 1,
      name: "Formação em Segurança da Informação",
      issuer: "Universidade São Judas Tadeu",
      year: "2024",
      type: "Graduação"
    },
    {
      id: 2,
      name: "Hardware Hacker (SYH2)",
      issuer: "Solyd Offensive Security",
      year: "2026",
      type: "Certificação"
    },
    {
      id: 3,
      name: "Wireless Pentester (SYWP)",
      issuer: "Solyd Offensive Security",
      year: "2025",
      type: "Certificação"
    },
    {
      id: 4,
      name: "Python",
      issuer: "HackerRank",
      year: "2023",
      type: "Certificação"
    },
    {
      id: 5,
      name: "Pentest do Zero ao Profissional (SYCP)",
      issuer: "Solyd Offensive Security",
      year: "2025",
      type: "Certificação"
    },
    {
      id: 6,
      name: "Certified Phishing Prevention Specialist (CPPS)",
      issuer: "Hack & Fix",
      year: "2026",
      type: "Certificação"
    }
  ],

  skills: {
    technical: [
      "Python Programming",
      "Penetration Testing", 
      "Network Security",
      "Vulnerability Assessment",
      "OWASP Methodologies",
      "Linux/Kali Administration",
      "Bug Hunting",
      "Static/Dynamic Analysis"
    ],
    tools: [
      "Burp Suite",
      "Metasploit",
      "Nmap",
      "Wireshark", 
      "Nessus",
      "SQLMap",
      "John the Ripper",
      "Hashcat",
      "OWASP ZAP",
      "Aircrack-ng"
    ]
  },

  achievements: [
    {
      id: 1,
      title: "Top 5% TryHackMe",
      description: "Classificação entre os top 5% de usuários da plataforma TryHackMe",
      year: "2024",
      icon: "trophy"
    },
    {
      id: 2, 
      title: "16 Badges Conquistados",
      description: "Conquista de 16 badges em diferentes categorias na plataforma TryHackMe",
      year: "2024",
      icon: "award"
    },
    {
      id: 3,
      title: "74 Rooms Completed",
      description: "Conclusão de 74 salas de treinamento em cybersecurity",
      year: "2024",
      icon: "flag"
    }
  ]
};