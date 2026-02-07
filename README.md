# Portfolio Carlos Chagas - Site Estático

## 🎯 Sobre o Projeto

Portfolio pessoal de **Carlos Eduardo dos Santos Chagas** (NGCGet), especialista em cibersegurança, com estética hacker/cybersecurity moderna.

## 🚀 Características

- **🎮 Site Totalmente Estático** - Apenas React, sem backend
- **🌟 Design Temático** - Dark theme com cores cyan (#00FFD1) 
- **📱 Responsivo** - Funciona em desktop, tablet e mobile
- **⚡ Performance** - Carregamento rápido sem dependências externas
- **🔒 Seguro** - Sem formulários ativos, apenas apresentação

## 📂 Estrutura do Projeto

```
/app/frontend/
├── public/
│   ├── Carlos_Chagas_CV.pdf     # CV para download
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.jsx           # Navegação
│   │   ├── Hero.jsx             # Seção principal com terminal
│   │   ├── About.jsx            # Sobre mim
│   │   ├── Projects.jsx         # Projetos GitHub
│   │   ├── Experience.jsx       # Experiências profissionais
│   │   ├── Contact.jsx          # Links de contato (estático)
│   │   └── Footer.jsx           # Rodapé
│   ├── mock/
│   │   └── data.js              # Dados do portfolio
│   ├── App.js                   # Componente principal
│   └── index.css                # Estilos Tailwind
└── package.json
```

## 🛠️ Tecnologias Utilizadas

- **React 19** - Framework frontend
- **Tailwind CSS** - Estilização
- **Lucide React** - Ícones
- **Create React App** - Setup base

## 📄 Funcionalidades

### ✅ Funcionais
- **Terminal Animado** - Efeito de digitação no hero
- **Download de CV** - Arquivo PDF local
- **Navegação Suave** - Scroll entre seções
- **Links Externos** - GitHub, LinkedIn, TryHackMe
- **Design Responsivo** - Todos os dispositivos

### 🔒 Desabilitadas (Site Estático)
- **Formulário de Contato** - Mostra alerta e redireciona para redes sociais
- **Dashboard Admin** - Removido completamente
- **Backend APIs** - Não utilizado

## 🚀 Como Executar

```bash
# Instalar dependências
yarn install

# Executar em desenvolvimento
yarn start

# Build para produção
yarn build
```

## 📊 Dados do Portfolio

Todos os dados estão em `/src/mock/data.js`:

- **Perfil**
- **Cargo Atual**
- **Experiência Anterior**
- **Projetos**
- **Certificações**

## 🎨 Design

- **Tema**: Dark cybersecurity/hacker
- **Cores**: Preto (#000000) + Cyan (#00FFD1)
- **Tipografia**: Inter + elementos monospace
- **Animações**: Transições suaves + efeito de terminal
- **Layout**: Grid responsivo + spacing generoso

## 📱 Seções

1. **Hero** - Terminal animado + foto + estatísticas
2. **Sobre** - Bio + skills técnicas + ferramentas
3. **Projetos** - GitHub repos com filtros por categoria
4. **Experiência** - Timeline profissional + tecnologias
5. **Contato** - Links para redes sociais
6. **Footer** - Informações + stats resumidos

## 🔧 Customização

Para atualizar as informações, edite `/src/mock/data.js`:

```javascript
export const profileData = {
  name: "Carlos Chagas",
  nickname: "NGCGet", 
  title: "Cybersecurity Researcher | Bug Bounty Hunter | Pentester",
  // ... outros dados
};
```

## 🌐 Deploy

O site é totalmente estático e pode ser deployado em:
- **GitHub Pages**
- **Netlify** 
- **Vercel**
- **Firebase Hosting**
- Qualquer hosting estático

## 📞 Contato

- **LinkedIn**: [carlos-chagas-12](https://linkedin.com/in/carloschagas12)
- **GitHub**: [NGCGet](https://github.com/NGCGet)
- **TryHackMe**: [NGCGet](https://tryhackme.com/p/NGCGet)

---

**Desenvolvido com React - Site Estático**
