# Reserva Segura

Aplicativo gamificado de educação financeira que ensina crianças e jovens a poupar dinheiro através de "caixinhas" personalizadas, missões diárias e um sistema de recompensas.

## 🦖 Sobre o Projeto

Reserva Segura é uma plataforma educacional que combina gamificação com educação financeira, permitindo que usuários criem "caixinhas" para diferentes objetivos de economia, completem missões diárias e ganhem recompensas.

### Funcionalidades

- 🏠 **Dashboard Inicial**: Visualização de progresso, missões diárias e estatísticas
- 🏆 **Sistema de Ligas**: Competição saudável com rankings e zonas de promoção/rebaixamento
- 📚 **Lições**: Conteúdo educacional sobre educação financeira
- 💰 **Caixinhas**: Gestão de objetivos de economia personalizados
- 🛍️ **Loja**: Sistema de recompensas com badges, ícones, temas e gift cards
- 👤 **Perfil**: Acompanhamento de progresso, conquistas e estatísticas pessoais

## 🛠️ Tecnologias

- **React 18** com TypeScript
- **Tailwind CSS v4** para estilização
- **Lucide React** para ícones
- **React Slick** para carrosséis
- **Vite** como bundler
- **npm** como gerenciador de pacotes

## 📦 Como Usar no VS Code

### 1. Pré-requisitos

Certifique-se de ter instalado:
- [Node.js](https://nodejs.org/) (versão 16 ou superior)
- [npm](https://www.npmjs.com/) (recomendado)

### 2. Clonar/Baixar o Projeto

**Opção A: Se o projeto estiver no GitHub**
```bash
git clone <url-do-repositorio>
cd reserva-segura
```

**Opção B: Se você baixou um arquivo compactado**
- Extraia o arquivo `.zip` ou `.tar.gz`
- Navegue até a pasta do projeto

### 3. Instalar Dependências

```bash
npm install
```

### 4. Executar o Projeto

```bash
npm run dev
```

O aplicativo estará disponível em: `http://localhost:5173`

### 5. Abrir no VS Code

```bash
code .
```

## 📁 Estrutura do Projeto

```
reserva-segura/
├── src/
│   ├── app/
│   │   ├── components/         # Componentes React
│   │   │   ├── AuthScreen.tsx  # Telas de login/cadastro
│   │   │   ├── Boxes.tsx       # Gerenciamento de caixinhas
│   │   │   ├── DesktopLayout.tsx # Layout desktop
│   │   │   ├── Leagues.tsx     # Sistema de ligas
│   │   │   ├── Lessons.tsx     # Lições educacionais
│   │   │   ├── ProfileScreen.tsx # Perfil do usuário
│   │   │   ├── Shop.tsx        # Loja de recompensas
│   │   │   └── icons/          # Ícones customizados
│   │   └── App.tsx             # Componente principal
│   ├── imports/                # Assets importados do Figma
│   └── styles/                 # Arquivos de estilo
│       ├── fonts.css
│       ├── globals.css
│       ├── tailwind.css
│       └── theme.css
├── package.json
├── vite.config.ts
└── tsconfig.json
```

## 🎨 Tema de Cores

- **Verde Principal**: `#618c78`
- **Verde Claro**: `#5bb49b`
- **Dourado (Moedas)**: `#f59e0b`
- **Texto Escuro**: `#101828`
- **Texto Secundário**: `#6a7282`

## 📱 Responsividade

O aplicativo é totalmente responsivo com:
- **Mobile**: Layout vertical com navegação inferior
- **Desktop**: Layout com header, sidebar e conteúdo central

## 🚀 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria build de produção
- `npm run preview` - Visualiza build de produção localmente

## 🔧 Configuração do VS Code (Recomendado)

Extensões recomendadas:
- **ES7+ React/Redux/React-Native snippets**
- **Tailwind CSS IntelliSense**
- **TypeScript Vue Plugin (Volar)**
- **Prettier - Code formatter**

### Settings sugeridos (.vscode/settings.json):
```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

## 📝 Licença

Este projeto é de código aberto para fins educacionais.

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

---

Desenvolvido com 💚 usando React + Tailwind CSS
