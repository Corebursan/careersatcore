# CORE Careers - Job Portal Website

A modern, responsive job portal website built with React and Vite, featuring job listings, filters, and integration with the Atract.in API.

## Features

- 🎯 **Job Listings**: Browse and search jobs from Atract.in API
- 🔍 **Advanced Filters**: Filter by department, job type, location, salary, and more
- 📱 **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- 💬 **Chatbot**: Interactive chatbot with welcome message
- 🎨 **Modern UI**: Clean and attractive user interface
- ⚡ **Fast Performance**: Built with Vite for optimal performance

## Tech Stack

- **React 19** - UI library
- **React Router** - Routing
- **Vite** - Build tool
- **CSS3** - Styling

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd Core
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run deploy` - Build and deploy to GitHub Pages (requires gh-pages)

## Project Structure

```
src/
├── components/       # Reusable components (Header, Footer, Chatbot)
├── pages/           # Page components
├── assets/          # Images and static assets
├── App.jsx          # Main app component with routing
└── main.jsx         # Entry point
```

## Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions to GitHub Pages.

### Quick Deploy

1. Update `vite.config.js` base path to match your repository name
2. Push to GitHub
3. Enable GitHub Pages in repository settings
4. Select "GitHub Actions" as the source

## Configuration

### API Integration

The jobs page fetches data from:
- API Endpoint: `https://api.atract.in/job/public`
- Supports pagination and filtering

### Base Path

Update `vite.config.js` if your repository name differs:
```javascript
base: process.env.NODE_ENV === 'production' ? '/YOUR-REPO-NAME/' : '/',
```

## Features in Detail

### Job Search & Filters
- Real-time search
- Multi-select filters for:
  - Department
  - Job Type
  - Employment Type
  - Experience Level
  - Work Mode
  - Location
  - Qualification
  - Salary Range
  - Number of Openings
  - Posted Date
  - End Date

### Job Details Modal
- Comprehensive job information
- Skills display
- Apply Now button (redirects to Atract.in signin)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is private and proprietary.

## Support

For issues or questions, please contact the development team.
