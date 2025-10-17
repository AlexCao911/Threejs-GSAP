# Contributing to MacBook Pro Landing Page

Thank you for your interest in contributing to this project! This document provides guidelines and information for contributors.

## 🎯 Project Goals

This project serves as a learning showcase for:
- Modern React development with TypeScript
- Advanced 3D web graphics with Three.js
- Professional animation techniques with GSAP
- Performance optimization strategies
- Responsive design implementation

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Git
- Basic knowledge of React, TypeScript, and Three.js

### Development Setup

1. **Fork and Clone**
   ```bash
   git clone https://github.com/your-username/macbook-landing-page.git
   cd macbook-landing-page
   ```

2. **Install Dependencies**
   ```bash
   cd my-project
   npm install
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```

4. **Run Linting**
   ```bash
   npm run lint
   ```

## 📝 How to Contribute

### Types of Contributions Welcome

1. **🐛 Bug Fixes**
   - Performance improvements
   - Cross-browser compatibility fixes
   - Mobile responsiveness issues
   - Animation glitches

2. **✨ Feature Enhancements**
   - Additional 3D model interactions
   - New animation effects
   - Accessibility improvements
   - Performance optimizations

3. **📚 Documentation**
   - Code comments and documentation
   - README improvements
   - Tutorial content
   - API documentation

4. **🎨 Design Improvements**
   - UI/UX enhancements
   - Visual design refinements
   - Animation polish
   - Responsive design improvements

### Contribution Process

1. **Create an Issue**
   - Describe the bug or feature request
   - Include screenshots or videos if applicable
   - Provide steps to reproduce (for bugs)

2. **Fork and Branch**
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bug-fix
   ```

3. **Make Changes**
   - Follow the existing code style
   - Add comments for complex logic
   - Test your changes thoroughly
   - Ensure responsive design works

4. **Test Your Changes**
   ```bash
   npm run lint
   npm run build
   ```

5. **Commit and Push**
   ```bash
   git add .
   git commit -m "feat: add new 3D interaction feature"
   git push origin feature/your-feature-name
   ```

6. **Create Pull Request**
   - Use the PR template
   - Include screenshots/videos of changes
   - Reference related issues

## 🎨 Code Style Guidelines

### TypeScript
- Use strict TypeScript configuration
- Define interfaces for all props and state
- Use meaningful variable and function names
- Add JSDoc comments for complex functions

```typescript
/**
 * Handles smooth transition between MacBook models
 * @param scale - Model scale (0.06 for 14", 0.08 for 16")
 * @param isMobile - Whether the device is mobile
 */
const ModelSwitcher = ({ scale, isMobile }: ModelSwitcherProps) => {
  // Implementation
};
```

### React Components
- Use functional components with hooks
- Implement proper cleanup in useEffect
- Use React.memo for performance optimization
- Follow component composition patterns

### 3D Development
- Preload GLTF models for better performance
- Use efficient lighting setups
- Implement proper material management
- Consider mobile GPU limitations

### Animations
- Use GSAP for complex animations
- Implement proper cleanup for animations
- Consider reduced motion preferences
- Test animations on various devices

## 🧪 Testing Guidelines

### Manual Testing Checklist
- [ ] Desktop responsiveness (1920x1080, 1366x768)
- [ ] Tablet responsiveness (768px, 1024px)
- [ ] Mobile responsiveness (375px, 414px)
- [ ] Cross-browser compatibility (Chrome, Firefox, Safari, Edge)
- [ ] Performance on lower-end devices
- [ ] Accessibility with screen readers
- [ ] Animation performance (60fps target)

### Performance Testing
- [ ] Lighthouse score > 90
- [ ] First Contentful Paint < 1.5s
- [ ] Largest Contentful Paint < 2.5s
- [ ] Cumulative Layout Shift < 0.1

## 📋 Pull Request Template

When creating a pull request, please include:

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Performance improvement
- [ ] Code refactoring

## Screenshots/Videos
Include visual evidence of changes

## Testing
- [ ] Tested on desktop
- [ ] Tested on mobile
- [ ] Tested on multiple browsers
- [ ] Performance tested

## Checklist
- [ ] Code follows project style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex code
- [ ] Documentation updated if needed
```

## 🎓 Learning Resources

### Three.js & React Three Fiber
- [React Three Fiber Documentation](https://docs.pmnd.rs/react-three-fiber)
- [Three.js Journey Course](https://threejs-journey.com/)
- [Three.js Official Examples](https://threejs.org/examples/)

### GSAP Animations
- [GSAP Documentation](https://greensock.com/docs/)
- [GSAP Learning Center](https://greensock.com/learning/)
- [ScrollTrigger Examples](https://codepen.io/collection/AKkZQo)

### Performance Optimization
- [Web.dev Performance](https://web.dev/performance/)
- [React Performance](https://react.dev/learn/render-and-commit)
- [Three.js Performance Tips](https://threejs.org/docs/#manual/en/introduction/How-to-dispose-of-objects)

## 🤝 Community Guidelines

- Be respectful and constructive in discussions
- Help others learn and grow
- Share knowledge and best practices
- Provide detailed feedback in code reviews
- Celebrate contributions from all skill levels

## 📞 Getting Help

- Create an issue for bugs or questions
- Join discussions in existing issues
- Check the documentation first
- Provide detailed information when asking for help

## 🏆 Recognition

Contributors will be recognized in:
- README.md contributors section
- Release notes for significant contributions
- Project showcase documentation

---

Thank you for contributing to this learning project! Every contribution helps make this a better resource for the web development community. 🚀