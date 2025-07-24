# Eshika News - Modern News Website

A modern, responsive news website built with React.js and Material-UI, featuring elegant UI components and sample news articles.

## 🚀 Features

- **Modern Design**: Clean, elegant UI with Material-UI components
- **Responsive Layout**: Fully responsive design that works on all devices
- **Category Navigation**: Browse news by categories (Technology, Business, Politics, Sports, Entertainment)
- **Search Functionality**: Search articles by title, content, or author
- **Article Details**: Full article view with related articles
- **Social Sharing**: Share articles on social media platforms
- **Newsletter Signup**: Email subscription feature in the footer
- **Sample Content**: 8 detailed sample news articles across different categories

## 🎨 Design Features

- **Color Scheme**: Primary color #d63384 (pink) with blue accents
- **Typography**: Clean, readable fonts with proper hierarchy
- **Animations**: Smooth hover effects and transitions
- **Cards**: Elegant card-based layout for articles
- **Navigation**: Sticky header with search and mobile menu

## 📱 Pages

1. **Homepage**: Featured articles, latest news, and category sections
2. **Article Page**: Full article view with metadata and related articles
3. **Category Page**: Articles filtered by category with search and sorting
4. **Header**: Navigation with search functionality
5. **Footer**: Newsletter signup, links, and social media

## 🛠️ Technology Stack

- **React 18** with TypeScript
- **Material-UI (MUI)** for UI components
- **React Router** for navigation
- **CSS-in-JS** with MUI's sx prop
- **Responsive Design** with MUI's breakpoint system

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd eshikanews
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx      # Navigation header
│   └── Footer.tsx      # Site footer
├── pages/              # Page components
│   ├── HomePage.tsx    # Homepage
│   ├── ArticlePage.tsx # Individual article view
│   └── CategoryPage.tsx # Category listing
├── data/               # Sample data
│   └── newsData.ts     # News articles and categories
├── App.tsx             # Main app component
└── index.tsx           # App entry point
```

## 📄 Sample Articles

The website includes 8 sample articles across different categories:

- **Technology**: AI healthcare breakthrough, Quantum computing
- **Business**: Market rally, Economic policy changes
- **Politics**: Climate agreement
- **Sports**: Underdog team story, International tournament
- **Entertainment**: Blockbuster movie success

Each article includes:
- High-quality images from Unsplash
- Detailed content with proper formatting
- Author information and read time
- Tags and categories
- Publication dates

## 🎯 Key Features

### Homepage
- Hero section with welcome message
- Featured articles section
- Latest news grid
- Category browsing sections

### Article Page
- Full article content
- Author and publication info
- Social sharing buttons
- Related articles
- Breadcrumb navigation

### Category Page
- Filtered article listings
- Search within category
- Sort by date or read time
- Responsive grid layout

### Header
- Logo and brand name
- Category navigation
- Search functionality
- Mobile-responsive menu

### Footer
- Newsletter subscription
- Category links
- Company information
- Social media links

## 🚀 Deployment

To build the project for production:

```bash
npm run build
```

The build files will be created in the `build` folder, ready for deployment to any static hosting service.

## 🎨 Customization

### Colors
The primary color scheme can be modified in `src/App.tsx`:
- Primary: #d63384 (pink)
- Secondary: #1976d2 (blue)

### Content
Add or modify articles in `src/data/newsData.ts`:
- Add new articles to the `newsArticles` array
- Modify categories in the `categories` array
- Update helper functions as needed

### Styling
- Global styles in `src/index.css`
- Component-specific styles using MUI's `sx` prop
- Theme customization in `src/App.tsx`

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 600px
- **Tablet**: 600px - 960px
- **Desktop**: > 960px

## 🔧 Development

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (not recommended)

### Code Style

- TypeScript for type safety
- Functional components with hooks
- Material-UI components and styling
- Consistent naming conventions

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **Material-UI** for the excellent component library
- **Unsplash** for high-quality images
- **React** team for the amazing framework
- **Create React App** for the project setup

---

Built with ❤️ using React and Material-UI
