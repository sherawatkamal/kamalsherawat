# Virginia Tech Academic Portfolio Website

A professional, Virginia Tech-branded academic portfolio website built with React.js for PhD students.

## 🎓 Virginia Tech Branding

This website uses the official Virginia Tech colors and branding guidelines:

- **Chicago Maroon**: `#630031` (Primary color)
- **Burnt Orange**: `#CF4420` (Secondary/Accent color)
- **Custom VT Logo**: SVG-based logo component with fallback to image

## 🚀 Features

- **Official VT Colors**: Chicago Maroon and Burnt Orange color scheme
- **VT Logo Integration**: Custom SVG logo with image fallback
- **Responsive Design**: Mobile-first approach with VT branding
- **Modern React Architecture**: Functional components with hooks
- **Interactive Elements**: Smooth animations and transitions
- **Accessibility**: Keyboard navigation and focus management

## 📦 Installation & Setup

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Quick Start

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

## 🎨 Virginia Tech Branding Elements

### Colors
The website uses CSS custom properties for consistent VT branding:

```css
:root {
    --vt-maroon: #630031;    /* Chicago Maroon */
    --vt-orange: #CF4420;    /* Burnt Orange */
    --text-color: #333333;
    --background-color: #ffffff;
    --light-gray: #f8f9fa;
    --border-color: #e9ecef;
}
```

### Logo Component
The `VTLogo` component supports:
- Multiple sizes (small, medium, large)
- SVG-based design with VT colors
- Image fallback capability
- Responsive scaling

### Usage
```jsx
import VTLogo from './components/VTLogo';

// Small logo for header
<VTLogo size="small" />

// Medium logo for hero section
<VTLogo size="medium" />

// Large logo for main sections
<VTLogo size="large" />

// Use image instead of SVG
<VTLogo size="medium" useImage={true} />
```

## 🏗️ Project Structure

```
src/
├── components/
│   ├── VTLogo.js           # VT Logo component
│   ├── Header.js           # Navigation with VT logo
│   ├── Hero.js             # Hero section with VT branding
│   ├── About.js            # About section
│   ├── Research.js         # Research projects
│   ├── Publications.js     # Publications list
│   ├── CV.js               # CV download section
│   ├── Contact.js          # Contact information
│   └── Footer.js           # Footer component
├── hooks/
│   └── useScrollAnimation.js
├── App.js                  # Main App component
├── App.css                 # VT-branded styles
└── index.js                # App entry point
```

## 🎯 VT Branding Guidelines

### Logo Usage
- Use the official VT logo in appropriate sizes
- Maintain proper spacing and proportions
- Ensure logo is visible on all background colors

### Color Usage
- **Chicago Maroon**: Primary headings, buttons, links
- **Burnt Orange**: Hover states, accent elements
- **White/Gray**: Background and text colors

### Typography
- Source Sans Pro font family
- Proper hierarchy with VT colors
- Consistent spacing and sizing

## 📱 Responsive Design

The website is fully responsive with VT branding maintained across all screen sizes:

- **Desktop**: Full VT logo and branding
- **Tablet**: Adjusted logo sizes
- **Mobile**: Stacked layout with smaller logos
- **Small Mobile**: Optimized for touch interaction

## 🌐 Deployment

### Virginia Tech VT Domains (Recommended)
1. Build the project: `npm run build`
2. Upload contents of `build` folder to your VT domain
3. Your website will be available at `yourname.vt.edu`

### Other Hosting Options
- **Netlify**: Drag and drop the `build` folder
- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: Use the deploy script

## 🔧 Customization

### Adding Your VT Logo Image
1. Download the official VT logo from the [VT Brand Center](https://www.outreach.vt.edu/brand-center.html)
2. Save it as `vt-logo.png` in the `public` folder
3. Update the VTLogo components to use `useImage={true}`

### Updating Personal Information
Edit the following components with your information:
- `Header.js`: Your name and title
- `Hero.js`: Your introduction
- `About.js`: Your background and education
- `Research.js`: Your research projects
- `Publications.js`: Your publications
- `Contact.js`: Your contact information

### Color Customization
All VT colors are defined as CSS custom properties in `App.css`. You can easily adjust them if needed while maintaining the VT branding guidelines.

## 📞 Support

For questions about VT branding guidelines:
- [Virginia Tech Brand Center](https://www.outreach.vt.edu/brand-center.html)
- [VT Color Guide](https://brand.vt.edu/content/brand_vt_edu/en/identity/color.html)

## 📝 License

This project is open source and available under the MIT License.

---

**Note**: This website follows Virginia Tech's official branding guidelines. Make sure to review the [VT Brand Center](https://www.outreach.vt.edu/brand-center.html) for the most current branding requirements.
