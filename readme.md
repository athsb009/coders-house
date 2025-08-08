# Coderhouse Metaverse 🌟

[![License](https://img.shields.io/badge/license-MIT-blue)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-green.svg)](CONTRIBUTING.md)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Phaser](https://img.shields.io/badge/Phaser-3.55.2-2E8B57)](https://phaser.io/)

A real-time multiplayer virtual office environment built with modern web technologies. Experience collaborative work in a 2D metaverse with video calls, screen sharing, and interactive workspaces.

## ✨ Features

### 🏢 **Virtual Office Environment**
- **2D Metaverse**: Immersive office environment with pixel art graphics
- **Real-time Multiplayer**: Live interaction with other users
- **Character System**: 4 playable characters with unique animations
- **Interactive Items**: Computers, whiteboards, chairs, and vending machines

### 🎮 **Room Management**
- **Create Custom Rooms**: Set up private or public workspaces
- **Room Discovery**: Browse and join existing rooms
- **Password Protection**: Secure access to private rooms
- **Room Sharing**: Share room links with colleagues
- **Direct Join**: Join specific rooms via URL parameters

### 💬 **Communication Tools**
- **Real-time Chat**: Text messaging with all room participants
- **Video Calls**: WebRTC peer-to-peer video communication
- **Screen Sharing**: Share your screen during computer interactions
- **Voice Chat**: Audio communication with other users

### 🎯 **Interactive Workspaces**
- **Computer Stations**: Sit at computers and share screens
- **Whiteboards**: Collaborative drawing and brainstorming
- **Meeting Areas**: Designated spaces for team discussions
- **Break Rooms**: Relaxation areas with vending machines

## 🚀 Live Demo

**[🌐 Try Coderhouse Metaverse Live](https://coderhouse-metaverse.netlify.app/)**

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern UI framework
- **TypeScript** - Type-safe development
- **Phaser 3** - 2D game engine
- **Redux Toolkit** - State management
- **Material-UI** - Component library
- **Styled Components** - CSS-in-JS styling

### Backend
- **Node.js** - Server runtime
- **Express** - Web framework
- **Colyseus** - Real-time game server
- **WebSocket** - Real-time communication
- **WebRTC** - Peer-to-peer video/audio

### Development
- **Vite** - Fast build tool
- **ESLint** - Code linting
- **TypeScript** - Type checking

## 📦 Installation

### Prerequisites
- Node.js 16+ 
- npm or yarn
- Git

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/athsb009/coders-house.git
   cd coders-house
   ```

2. **Install dependencies**
   ```bash
   # Install server dependencies
   npm install
   
   # Install client dependencies
   cd client
   npm install
   cd ..
   ```

3. **Set up environment variables**
   ```bash
   # Create .env file in root directory
   cp .env.example .env
   ```

4. **Start development servers**
   ```bash
   # Start server (from root directory)
   npm run start
   
   # Start client (in another terminal)
   cd client
   npm run dev
   ```

5. **Open your browser**
   ```
   http://localhost:5173
   ```

## 🏗️ Architecture

### System Overview
```
┌─────────────────┐    WebSocket    ┌─────────────────┐
│   React Client  │ ←──────────────→ │  Colyseus Server│
│                 │                 │                 │
│  ┌───────────┐  │                 │  ┌───────────┐  │
│  │  Phaser   │  │                 │  │   Room    │  │
│  │   Game    │  │                 │  │  Manager  │  │
│  └───────────┘  │                 │  └───────────┘  │
│                 │                 │                 │
│  ┌───────────┐  │    WebRTC      │  ┌───────────┐  │
│  │   WebRTC  │ ←──────────────→ │  │  Peer     │  │
│  │  Clients  │                 │  │  Manager  │  │
│  └───────────┘                 │  └───────────┘  │
└─────────────────┘                 └─────────────────┘
```

### Key Components

#### 1. **Game Engine (Phaser 3)**
- Renders 2D virtual office environment
- Handles character movement and animations
- Manages game assets and physics
- Provides collision detection

#### 2. **Real-time Networking (Colyseus)**
- WebSocket-based communication
- Room state synchronization
- Player position updates
- Chat message broadcasting

#### 3. **State Management (Redux Toolkit)**
- User session management
- Room information tracking
- Chat message history
- UI state management

#### 4. **WebRTC Communication**
- Peer-to-peer video calls
- Screen sharing functionality
- Audio communication
- Direct client connections

## 🎮 User Guide

### Getting Started
1. **Visit the app** and see the main menu
2. **Choose your option**:
   - Join Public Lobby
   - Explore Custom Rooms
   - Create New Room
   - Join Room by ID

### Creating a Room
1. Click **"Create New Room"**
2. Fill in room details:
   - **Name**: Room title
   - **Description**: Room purpose
   - **Password**: Optional for private rooms
3. Click **"Create"** to start your workspace

### Joining a Room
- **From URL**: Visit `app.com?room=ROOM_ID`
- **From List**: Browse available rooms and click "Join"
- **Manual Entry**: Use "Join Room by ID" with room code

### Character Controls
- **Movement**: WASD or Arrow keys
- **Interact**: E key (near computers, whiteboards)
- **Chat**: Enter key to open chat
- **Video**: Automatic connection when joining

### Interactive Features
- **Computers**: Sit and share your screen
- **Whiteboards**: Draw and collaborate
- **Chairs**: Sit and relax
- **Vending Machines**: Interactive break areas

## 🔧 Development

### Project Structure
```
coders-house/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── scenes/        # Phaser game scenes
│   │   ├── characters/    # Player character logic
│   │   ├── items/         # Interactive items
│   │   ├── stores/        # Redux state management
│   │   ├── services/      # Network services
│   │   └── web/           # WebRTC implementation
│   └── public/            # Static assets
├── server/                 # Node.js backend
│   ├── rooms/             # Colyseus room handlers
│   ├── commands/          # Game commands
│   └── schema/            # State schemas
├── types/                  # Shared TypeScript types
└── assets/                 # Game assets
```

### Available Scripts

#### Server
```bash
npm run start          # Start development server
npm run build          # Build for production
npm run test           # Run tests
```

#### Client
```bash
cd client
npm run dev            # Start development server
npm run build          # Build for production
npm run preview        # Preview production build
```

### Environment Variables
```bash
# Server
PORT=2567              # Server port
NODE_ENV=development   # Environment

# Client
VITE_SERVER_URL=ws://localhost:2567  # WebSocket server URL
```

## 🚀 Deployment

### Netlify (Frontend)
1. Connect your GitHub repository
2. Set build command: `cd client && npm run build`
3. Set publish directory: `client/dist`
4. Add environment variables

### Heroku (Backend)
1. Connect your GitHub repository
2. Set buildpack: `heroku/nodejs`
3. Add environment variables
4. Deploy automatically

### Docker
```dockerfile
# Dockerfile example
FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 2567
CMD ["npm", "start"]
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Setup
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Code Style
- Use TypeScript for all new code
- Follow ESLint configuration
- Write meaningful commit messages
- Add tests for new features

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Phaser 3** - 2D game framework
- **Colyseus** - Real-time game server
- **Material-UI** - React component library
- **WebRTC** - Peer-to-peer communication
- **React** - UI framework

## 📞 Support

- **Documentation**: [Wiki](https://github.com/athsb009/coders-house/wiki)
- **Issues**: [GitHub Issues](https://github.com/athsb009/coders-house/issues)
- **Discussions**: [GitHub Discussions](https://github.com/athsb009/coders-house/discussions)
- **Email**: support@coderhouse-metaverse.com

## 🌟 Star History

[![Star History Chart](https://api.star-history.com/svg?repos=athsb009/coders-house&type=Date)](https://star-history.com/#athsb009/coders-house&Date)

---

**Made with ❤️ by the Coderhouse Metaverse Team**

*Experience the future of collaborative work in the metaverse!*
