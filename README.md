# 🧮 Smart Calculator Pro

[![Live Demo](https://img.shields.io/badge/Demo-Live-brightgreen)](https://william-osei.github.io/smart-calculator-pro)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-blue)](https://github.com/William-osei/smart-calculator-pro)
[![License](https://img.shields.io/badge/License-MIT-yellow)](LICENSE)
[![Version](https://img.shields.io/badge/Version-1.0.0-orange)]()

An advanced web-based scientific calculator with smart features, built with vanilla JavaScript, HTML5, and CSS3. Designed for students, engineers, and professionals who need powerful calculation tools in their browser.

## 🌟 Features

### 🔬 Scientific Functions
- **Trigonometric Functions**: sin, cos, tan, asin, acos, atan
- **Logarithmic Functions**: log₁₀, ln (natural log)
- **Power Functions**: x², √x, x^y
- **Advanced Math**: factorial (n!), constants (π, e)
- **Angle Modes**: Degree and Radian calculations

### 💾 Memory Operations
- **Memory Store (MS)**: Save current result to memory
- **Memory Recall (MR)**: Retrieve stored value
- **Memory Clear (MC)**: Clear memory storage
- **Persistent Storage**: Memory survives browser sessions

### ⌨️ Keyboard Support
- **Full Keyboard Navigation**: All functions accessible via keyboard
- **Shortcuts**: 
  - `Ctrl+S`: Toggle Scientific Mode
  - `Ctrl+M`: Memory Store
  - `Ctrl+R`: Memory Recall
  - `Ctrl+H`: Show History
  - `Escape`: Clear All
  - `Delete`: Clear Entry
  - `Backspace`: Delete last character

### 📱 Progressive Web App
- **Installable**: Can be installed on mobile devices
- **Offline Support**: Works without internet connection
- **Responsive Design**: Perfect on desktop, tablet, and mobile
- **Touch Optimized**: Large buttons for touch interfaces

### 🎨 User Experience
- **Dual Mode**: Basic and Scientific calculator modes
- **Calculation History**: Track recent calculations with timestamps
- **Audio Feedback**: Optional button sounds
- **Visual Feedback**: Smooth animations and hover effects
- **Error Handling**: Graceful error messages

## 🚀 Live Demo

**[Try the Calculator Live](https://william-osei.github.io/smart-calculator-pro)**

## 📦 Installation

### Option 1: Clone Repository
```bash
git clone https://github.com/William-osei/smart-calculator-pro.git
cd smart-calculator-pro
```

### Option 2: Download ZIP
Download the latest release and extract to your desired location.

### Option 3: Install as PWA
1. Open the [live demo](https://william-osei.github.io/smart-calculator-pro)
2. Click the "Install" button in your browser
3. Use as a native app on your device

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Styling**: CSS Grid, Flexbox, CSS Animations
- **PWA**: Service Worker, Web App Manifest
- **Storage**: localStorage API for persistence
- **Audio**: Web Audio API for sound feedback
- **Icons**: Custom SVG icons and emoji

## 🏗️ Project Structure

```
smart-calculator-pro/
├── index.html          # Main HTML file
├── style.css           # Styling and animations
├── script.js           # Calculator logic and interactions
├── manifest.json       # PWA configuration
├── sw.js              # Service worker (coming soon)
├── icons/             # PWA icons (various sizes)
├── README.md          # Project documentation
└── LICENSE            # MIT license
```

## 🎯 Usage Examples

### Basic Calculations
```
2 + 3 = 5
10 × 7 = 70
15 ÷ 3 = 5
```

### Scientific Functions
```
sin(30°) = 0.5
log₁₀(100) = 2
2³ = 8
5! = 120
```

### Memory Operations
```
1. Calculate: 25 × 4 = 100
2. Press MS (Memory Store)
3. Calculate: 50 ÷ 2 = 25
4. Press MR (Memory Recall) → displays 100
5. Calculate: 100 + 25 = 125
```

## ⚡ Performance

- **Load Time**: < 1 second on modern browsers
- **Bundle Size**: < 50KB (HTML + CSS + JS)
- **Memory Usage**: Minimal, optimized for mobile
- **Calculation Speed**: Instant results for all operations

## 🔧 Development

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Code editor (VS Code recommended)
- Local server (optional, for development)

### Development Setup
```bash
# Clone the repository
git clone https://github.com/William-osei/smart-calculator-pro.git
cd smart-calculator-pro

# Open with live server (if using VS Code)
# Install Live Server extension and right-click index.html

# Or use Python's built-in server
python -m http.server 8000

# Or use Node.js serve
npx serve .
```

### Building for Production
The calculator is built with vanilla technologies and requires no build process. Simply upload the files to any web server or GitHub Pages.

## 🧪 Testing

### Manual Testing Checklist
- [ ] All number buttons work correctly
- [ ] Basic operations (+, -, ×, ÷) function properly
- [ ] Scientific functions calculate accurately
- [ ] Memory operations store and recall values
- [ ] Keyboard shortcuts work as expected
- [ ] Responsive design works on mobile
- [ ] PWA installation works
- [ ] Error handling displays appropriate messages

### Browser Compatibility
- ✅ Chrome 80+
- ✅ Firefox 75+
- ✅ Safari 13+
- ✅ Edge 80+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit issues and pull requests.

### How to Contribute
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Style
- Use consistent indentation (2 spaces)
- Follow semantic HTML practices
- Use modern JavaScript (ES6+)
- Comment complex calculations
- Maintain responsive design principles

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**William Osei Aborah**
- Portfolio: [william-osei.github.io/portfolio](https://william-osei.github.io/portfolio)
- LinkedIn: [william-osei](https://linkedin.com/in/william-osei)
- Email: [trickskidwilliam@gmail.com](mailto:trickskidwilliam@gmail.com)
- GitHub: [@William-osei](https://github.com/William-osei)

## 🙏 Acknowledgments

- Mathematical functions inspired by scientific calculators
- UI/UX design influenced by modern calculator apps
- PWA implementation following Google's best practices
- Accessibility features following WCAG guidelines

## 🔮 Roadmap

- [ ] **v1.1**: Unit converter integration
- [ ] **v1.2**: Graphing capabilities for functions
- [ ] **v1.3**: Formula library for physics/chemistry
- [ ] **v1.4**: Multiple themes and customization
- [ ] **v1.5**: Voice input support
- [ ] **v2.0**: Advanced statistical functions

---

**Made with ❤️ by William Osei Aborah**

*Last Updated: January 2025*

