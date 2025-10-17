# MacBook Pro Landing Page Projects

[![GitHub stars](https://img.shields.io/github/stars/your-username/macbook-landing-page?style=for-the-badge)](https://github.com/your-username/macbook-landing-page/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/your-username/macbook-landing-page?style=for-the-badge)](https://github.com/your-username/macbook-landing-page/network)
[![GitHub issues](https://img.shields.io/github/issues/your-username/macbook-landing-page?style=for-the-badge)](https://github.com/your-username/macbook-landing-page/issues)
[![GitHub license](https://img.shields.io/github/license/your-username/macbook-landing-page?style=for-the-badge)](https://github.com/your-username/macbook-landing-page/blob/main/LICENSE)

[![Deploy to GitHub Pages](https://github.com/your-username/macbook-landing-page/actions/workflows/deploy.yml/badge.svg)](https://github.com/your-username/macbook-landing-page/actions/workflows/deploy.yml)
[![Lighthouse Performance](https://img.shields.io/badge/Lighthouse-95%2B-brightgreen?style=for-the-badge&logo=lighthouse)](https://your-username.github.io/macbook-landing-page)
[![TypeScript](https://img.shields.io/badge/TypeScript-100%25-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)

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

## 🌟 Project Highlights

### 🏆 Technical Achievements
- **Advanced 3D Integration**: Seamless Three.js integration with React
- **Performance Optimized**: 95+ Lighthouse score with complex 3D animations
- **TypeScript Excellence**: Full type safety with strict configuration
- **Modern Architecture**: Component-based design with efficient state management
- **Responsive Design**: Mobile-first approach with adaptive 3D rendering

### 📊 Key Metrics
- **Bundle Size**: Optimized for fast loading
- **Animation Performance**: Consistent 60fps animations
- **Cross-Browser Support**: Chrome, Firefox, Safari, Edge
- **Mobile Compatibility**: iOS and Android optimized

## 🚀 Live Demo & Deployment

**🔗 [View Live Demo](https://your-username.github.io/macbook-landing-page)**

The project is automatically deployed using GitHub Actions whenever changes are pushed to the main branch.

## 📸 Project Showcase

For detailed screenshots, performance metrics, and technical deep-dive, see [SHOWCASE.md](./SHOWCASE.md).

## 🤝 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for detailed guidelines.

### Quick Contribution Steps:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## 🙏 Acknowledgments

- **Three.js Community** for excellent 3D web graphics tools
- **GSAP Team** for professional animation libraries
- **React Three Fiber** for seamless React-Three.js integration
- **Sketchfab Artists** for high-quality 3D models
- **Open Source Community** for inspiration and learning resources

## 📞 Contact & Support

- **GitHub Issues**: For bugs and feature requests
- **Discussions**: For questions and community interaction
- **Portfolio**: [Your Portfolio Link]
- **LinkedIn**: [Your LinkedIn Profile]

---

**🎯 This project demonstrates advanced frontend development skills including 3D graphics, complex animations, TypeScript, and modern React patterns.**

**Built with ❤️ by Alex Cou | Showcasing Modern Web Development Excellence**