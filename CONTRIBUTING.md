# Contributing to Coderhouse Metaverse 🤝

Thank you for your interest in contributing to Coderhouse Metaverse! This document provides guidelines and information for contributors.

## 🎯 How Can I Contribute?

### 🐛 Reporting Bugs
- Use the [GitHub Issues](https://github.com/athsb009/coders-house/issues) page
- Include detailed steps to reproduce the bug
- Provide system information (browser, OS, etc.)
- Include screenshots or videos if possible

### 💡 Suggesting Features
- Use the [GitHub Discussions](https://github.com/athsb009/coders-house/discussions) page
- Describe the feature and its benefits
- Consider implementation complexity
- Check if similar features already exist

### 🔧 Code Contributions
- Fork the repository
- Create a feature branch
- Make your changes
- Add tests if applicable
- Submit a pull request

## 🚀 Development Setup

### Prerequisites
- Node.js 16+
- npm or yarn
- Git
- A modern web browser

### Local Development
1. **Fork and clone the repository**
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
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Start development servers**
   ```bash
   # Terminal 1: Start server
   npm run start
   
   # Terminal 2: Start client
   cd client
   npm run dev
   ```

5. **Open your browser**
   ```
   http://localhost:5173
   ```

## 📝 Code Style Guidelines

### TypeScript
- Use TypeScript for all new code
- Define proper types and interfaces
- Avoid `any` type when possible
- Use strict mode

### React Components
- Use functional components with hooks
- Follow naming conventions (PascalCase)
- Keep components focused and reusable
- Use proper prop types

### Phaser Game Code
- Follow Phaser 3 conventions
- Use scene-based architecture
- Keep game logic separate from UI
- Optimize for performance

### File Structure
```
src/
├── components/     # React components
├── scenes/        # Phaser game scenes
├── characters/    # Player character logic
├── items/         # Interactive items
├── stores/        # Redux state management
├── services/      # Network services
└── web/           # WebRTC implementation
```

## 🧪 Testing

### Running Tests
```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

### Writing Tests
- Write tests for new features
- Test both success and error cases
- Use descriptive test names
- Mock external dependencies

## 📋 Pull Request Process

### Before Submitting
1. **Ensure code quality**
   - Run linter: `npm run lint`
   - Run tests: `npm test`
   - Check TypeScript: `npm run type-check`

2. **Update documentation**
   - Update README if needed
   - Add inline comments for complex logic
   - Update API documentation

3. **Test your changes**
   - Test in different browsers
   - Test on different screen sizes
   - Test with multiple users

### Pull Request Template
```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Unit tests pass
- [ ] Integration tests pass
- [ ] Manual testing completed

## Screenshots (if applicable)
Add screenshots of UI changes

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] Tests added/updated
```

## 🏷️ Issue Labels

We use the following labels to categorize issues:

- **bug**: Something isn't working
- **enhancement**: New feature or request
- **documentation**: Improvements to documentation
- **good first issue**: Good for newcomers
- **help wanted**: Extra attention needed
- **question**: Further information requested

## 🎨 Design Contributions

### UI/UX Improvements
- Follow Material-UI design principles
- Maintain consistency with existing design
- Consider accessibility (WCAG guidelines)
- Test on different devices

### Asset Contributions
- Use appropriate licenses
- Optimize for web performance
- Follow naming conventions
- Include source files when possible

## 🔒 Security

### Reporting Security Issues
- **DO NOT** create a public issue
- Email security@coderhouse-metaverse.com
- Include detailed information about the vulnerability
- Allow time for response before public disclosure

### Security Guidelines
- Never commit sensitive information
- Use environment variables for secrets
- Validate all user inputs
- Follow OWASP guidelines

## 📚 Documentation

### Code Documentation
- Use JSDoc for functions and classes
- Write clear inline comments
- Document complex algorithms
- Include usage examples

### User Documentation
- Keep README up to date
- Write clear installation instructions
- Include troubleshooting guides
- Add screenshots for UI changes

## 🏆 Recognition

### Contributors
- All contributors will be listed in the README
- Significant contributions will be highlighted
- Contributors will be added to the repository

### Hall of Fame
- Top contributors will be featured
- Special recognition for major features
- Community spotlight for active contributors

## 📞 Getting Help

### Communication Channels
- **GitHub Issues**: Bug reports and feature requests
- **GitHub Discussions**: General questions and ideas
- **Email**: support@coderhouse-metaverse.com
- **Discord**: Join our community server

### Resources
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React Documentation](https://reactjs.org/docs/)
- [Phaser 3 Documentation](https://photonstorm.github.io/phaser3-docs/)
- [Colyseus Documentation](https://docs.colyseus.io/)

## 🎯 Areas Needing Help

### High Priority
- Performance optimization
- Mobile responsiveness
- Accessibility improvements
- Security enhancements

### Medium Priority
- Additional interactive items
- Enhanced room features
- Better error handling
- More character customization

### Low Priority
- Additional themes
- More game assets
- Advanced animations
- Social features

## 📄 License

By contributing to Coderhouse Metaverse, you agree that your contributions will be licensed under the MIT License.

---

**Thank you for contributing to Coderhouse Metaverse! 🌟**

Your contributions help make collaborative work in the metaverse better for everyone. 