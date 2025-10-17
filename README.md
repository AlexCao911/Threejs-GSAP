# MacBook Pro Landing Page Projects

This repository contains two MacBook Pro landing page implementations showcasing modern web development techniques with React, Three.js, and GSAP animations.

## 📁 Project Structure

```
macbook-landing-page/
├── reference/          # Complete reference implementation
├── my-project/         # Personal implementation with enhancements
└── README.md          # This file
```

## 🚀 Projects Overview

### 📂 Reference Project (`/reference`)
The original completed implementation serving as a reference and learning resource.

**Features:**
- Basic MacBook Pro landing page
- Three.js 3D models
- GSAP scroll animations
- React + JavaScript implementation

**Quick Start:**
```bash
cd reference
npm install
npm run dev
```

### 📂 My Project (`/my-project`)
Enhanced implementation with additional features, TypeScript, and improved architecture.

**Features:**
- ✨ **Enhanced 3D Experience**: Interactive MacBook models with real-time color customization
- 🎬 **Advanced Animations**: Sophisticated GSAP scroll-triggered animations
- 📱 **Responsive Design**: Optimized for all device sizes
- 🎥 **Video Textures**: Dynamic video mapping on 3D models
- 🔧 **TypeScript**: Full type safety and better developer experience
- 🏪 **State Management**: Zustand for efficient state handling
- 🎨 **Modern Styling**: Tailwind CSS with custom design system

**Quick Start:**
```bash
cd my-project
npm install
npm run dev
```

**Detailed Documentation:** See [my-project/README.md](./my-project/README.md) for comprehensive documentation including:
- Architecture overview
- Component walkthrough
- Sequence diagrams
- Performance optimizations
- Development guidelines

## 🛠️ Tech Stack Comparison

| Feature | Reference | My Project |
|---------|-----------|------------|
| **Framework** | React + JS | React + TypeScript |
| **3D Graphics** | Three.js + R3F | Three.js + R3F + Drei |
| **Animations** | GSAP | GSAP + ScrollTrigger |
| **Styling** | CSS | Tailwind CSS |
| **State Management** | React State | Zustand |
| **Build Tool** | Vite | Vite |
| **Type Safety** | ❌ | ✅ TypeScript |
| **Responsive** | Basic | Advanced |
| **Interactive 3D** | Basic | Enhanced |

## 🎯 Learning Objectives

This repository demonstrates progression in modern web development:

1. **3D Web Development**: Three.js integration with React
2. **Advanced Animations**: GSAP scroll-triggered animations
3. **State Management**: From React state to Zustand
4. **TypeScript Adoption**: Type-safe development practices
5. **Performance Optimization**: 3D rendering and animation performance
6. **Responsive Design**: Mobile-first development approach
7. **Component Architecture**: Scalable React component design

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Development Workflow

1. **Explore the Reference**
   ```bash
   cd reference
   npm install
   npm run dev
   ```

2. **Run My Enhanced Version**
   ```bash
   cd my-project
   npm install
   npm run dev
   ```

3. **Compare Implementations**
   - Study the differences in component architecture
   - Compare animation implementations
   - Analyze performance optimizations

## 📚 Key Learning Resources

### Three.js & React Three Fiber
- [React Three Fiber Documentation](https://docs.pmnd.rs/react-three-fiber)
- [Three.js Drei Helpers](https://github.com/pmndrs/drei)
- [Three.js Official Documentation](https://threejs.org/docs/)

### GSAP Animations
- [GSAP Documentation](https://greensock.com/docs/)
- [ScrollTrigger Plugin](https://greensock.com/scrolltrigger/)
- [GSAP + React Best Practices](https://greensock.com/react/)

### State Management
- [Zustand Documentation](https://github.com/pmndrs/zustand)
- [React State Management Patterns](https://react.dev/learn/managing-state)

## 🎨 Design Inspiration

This project draws inspiration from:
- Apple's official MacBook Pro pages
- Modern web design trends
- Interactive 3D web experiences
- Scroll-driven storytelling

## 🔧 Development Tips

### Performance Optimization
- Use `React.memo()` for expensive components
- Implement proper cleanup for GSAP animations
- Optimize 3D models and textures
- Use `useCallback` and `useMemo` appropriately

### 3D Development Best Practices
- Preload GLTF models for better performance
- Use efficient lighting setups
- Implement proper material management
- Consider mobile GPU limitations

### Animation Guidelines
- Use `requestAnimationFrame` for smooth animations
- Implement proper scroll event throttling
- Consider reduced motion preferences
- Test animations on various devices

## 🤝 Contributing

Feel free to:
- Report issues or bugs
- Suggest improvements
- Submit pull requests
- Share your own implementations

## 📄 License

This project is for educational and demonstration purposes.

---

**Happy Coding! 🚀**

*Built with passion for modern web development*