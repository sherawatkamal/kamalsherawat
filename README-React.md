# Academic Portfolio Website - React.js Version

A modern, responsive academic portfolio website built with React.js for PhD students at Virginia Tech.

## 🚀 Features

- **React.js**: Modern, component-based architecture
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Virginia Tech Branding**: Uses official VT colors (maroon #c41e3a) and styling
- **Interactive Components**: Smooth animations and transitions
- **Mobile-First**: Optimized for all screen sizes
- **Accessibility**: Keyboard navigation and focus management
- **Modern Hooks**: Uses React hooks for state management and effects

## 📦 Installation & Setup

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation Steps

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm start
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

4. **Run Tests**
   ```bash
   npm test
   ```

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Header.js          # Navigation component
│   ├── Hero.js            # Hero section
│   ├── About.js           # About section
│   ├── Research.js        # Research projects
│   ├── Publications.js    # Publications list
│   ├── CV.js              # CV download section
│   ├── Contact.js         # Contact information
│   └── Footer.js          # Footer component
├── hooks/
│   └── useScrollAnimation.js  # Custom hook for animations
├── App.js                 # Main App component
├── App.css                # Main styles
└── index.js               # App entry point
```

## 🎨 Customization Guide

### Personal Information
Update the following in each component:

1. **Header.js**: Update name and institution
2. **Hero.js**: Update name, title, and description
3. **About.js**: Update personal background and education
4. **Research.js**: Update research projects and interests
5. **Publications.js**: Add your actual publications
6. **Contact.js**: Update contact information and social links

### Styling
- **Colors**: Modify CSS variables in `App.css`
- **Typography**: Update font imports in `public/index.html`
- **Layout**: Adjust grid and flexbox properties in `App.css`

### Content Updates
1. **Research Section**: Add your actual research projects
2. **Publications**: Format with proper citations
3. **CV Download**: Implement actual CV download functionality
4. **Social Links**: Add your actual profile URLs

## 🔧 Component Details

### Header Component
- Responsive navigation with mobile hamburger menu
- Smooth scroll to sections
- Header background changes on scroll

### Hero Component
- Typing animation for the title
- Call-to-action buttons
- Placeholder for profile image

### Research Component
- Dynamic project cards
- Status indicators (In Progress/Completed)
- Hover animations

### Publications Component
- Organized by publication type
- Click handlers for external links
- Responsive grid layout

### Contact Component
- Contact information display
- Social media links
- Interactive hover effects

## 🌐 Deployment Options

### Netlify (Recommended)
1. Build the project: `npm run build`
2. Drag and drop the `build` folder to Netlify
3. Configure custom domain if needed

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel` in project directory
3. Follow the prompts

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io/portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. Deploy: `npm run deploy`

### Virginia Tech VT Domains
1. Build the project: `npm run build`
2. Upload contents of `build` folder to your VT domain
3. Configure your domain settings

## 🎯 Key React Features Used

- **Functional Components**: Modern React with hooks
- **useState**: For component state management
- **useEffect**: For side effects and lifecycle events
- **useRef**: For DOM element references
- **Custom Hooks**: For reusable animation logic
- **Event Handling**: For user interactions
- **Conditional Rendering**: For dynamic content

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px to 1199px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

## 🔍 SEO Optimization

- Meta tags in `public/index.html`
- Semantic HTML structure
- Alt text for images
- Proper heading hierarchy

## 🧪 Testing

The project includes basic React testing setup. To add tests:

1. Create test files with `.test.js` extension
2. Use React Testing Library
3. Run tests with `npm test`

## 🚀 Performance Optimization

- Lazy loading for images (ready to implement)
- CSS animations with GPU acceleration
- Optimized bundle size with Create React App
- Responsive images

## 📞 Support

For questions about this React template or customization help, feel free to reach out!

## 📝 License

This project is open source and available under the MIT License.

---

**Note**: Remember to replace all placeholder content with your actual information before deploying your website.
