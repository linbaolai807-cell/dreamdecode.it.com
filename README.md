# Dream Interpretation Guide

A beautiful, responsive website for interpreting dreams and understanding their symbolic meanings.

## 🌟 Features

- **Dream Symbol Database**: Comprehensive collection of dream interpretations
- **Search Functionality**: Easy-to-use search for finding specific dream symbols
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Glass-morphism design with smooth animations
- **SEO Optimized**: Ready for search engine optimization
- **AdSense Ready**: Prepared for Google AdSense integration

## 🚀 Deployment Options

### Option 1: GitHub Pages (Recommended)

1. Go to your repository settings: https://github.com/linbaolai807-cell/dreamdecode.it.com/settings/pages
2. Under "Source", select "Deploy from a branch"
3. Select the `main` branch and `/ (root)` folder
4. Click "Save"
5. Your site will be live at: `https://linbaolai807-cell.github.io/dreamdecode.it.com/`

### Option 2: Netlify

1. Visit [Netlify](https://www.netlify.com/)
2. Sign up or log in
3. Click "Add new site" > "Import an existing project"
4. Connect your GitHub account
5. Select the `dreamdecode.it.com` repository
6. Click "Deploy site"
7. Your site will be live with a custom Netlify URL (you can add a custom domain later)

### Option 3: Vercel

1. Visit [Vercel](https://vercel.com/)
2. Sign up or log in with GitHub
3. Click "New Project"
4. Import the `dreamdecode.it.com` repository
5. Click "Deploy"
6. Your site will be live instantly

### Option 4: Cloudflare Pages

1. Visit [Cloudflare Pages](https://pages.cloudflare.com/)
2. Sign up or log in
3. Click "Create a project"
4. Connect to your GitHub account
5. Select the `dreamdecode.it.com` repository
6. Click "Begin setup" then "Save and Deploy"

## 💻 Local Development

Since this is a static HTML website, you can simply open `index.html` in your browser, or use a local server:

### Using Python:
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

### Using Node.js:
```bash
npx http-server
```

### Using PHP:
```bash
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

## 📁 Project Structure

```
dreamdecode.it.com/
├── index.html              # Homepage
├── about.html             # About page
├── contact.html           # Contact page
├── privacy.html           # Privacy policy
├── terms.html             # Terms of service
├── cookies.html           # Cookie policy
├── pages/                 # Dream symbol pages
│   ├── keyword-1.html
│   ├── keyword-2.html
│   └── ...
├── scripts/               # JavaScript files
│   ├── app.js
│   └── dream_dictionary.js
└── README.md
```

## 🎨 Customization

- **Colors**: Modify the Tailwind config in the `<head>` section of HTML files
- **Content**: Edit HTML files directly to update text and images
- **Dream Symbols**: Add new pages in the `pages/` directory using the `article-template.html`
- **Styling**: Custom styles are in `<style>` tags within each HTML file

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📝 License

All rights reserved © 2025 Dream Interpretation Guide

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📧 Contact

For questions or support, visit the [contact page](contact.html) on the website.
