# 🏢 Company CMS - Full Stack Content Management System

![React](https://img.shields.io/badge/React-19.x-blue?logo=react&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-20.x-green?logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green?logo=mongodb&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-38B2AC?logo=tailwind-css&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-4.x-000000?logo=express&logoColor=white)

A modern, full-stack Content Management System built with **React**, **Node.js**, **MongoDB**, and **Tailwind CSS**. Features a dynamic dashboard for real-time content editing, Cloudinary image management, EmailJS contact forms, and comprehensive data persistence with both localStorage and database storage.

## 🎯 Live Demo

> **Note**: This is a development project. Live demo coming soon!

## ✨ Key Features

### 🎨 **Frontend Features**

- **🖼️ Dynamic Content Management** - Real-time editing of headers, navigation, and footers
- **📤 Image Upload & Management** - Cloudinary integration with drag-drop support
- **📱 Responsive Design** - Mobile-first approach with Tailwind CSS
- **🔄 Real-time Updates** - Live preview of changes without page refresh
- **🎯 Intuitive Dashboard** - User-friendly admin interface
- **📧 Contact Forms** - EmailJS integration for contact functionality
- **🍞 Toast Notifications** - User feedback for all actions

### 🔧 **Backend Features**

- **🗄️ MongoDB Integration** - Secure data persistence with Mongoose ODM
- **🌐 RESTful APIs** - Complete CRUD operations for all content
- **🔒 Environment Security** - Secure configuration management
- **📊 Data Validation** - Server-side validation and sanitization
- **🚀 CORS Support** - Cross-origin resource sharing configured
- **⚡ Express.js** - Fast and lightweight server framework

### 💾 **Data Management**

- **🔄 Dual Persistence** - localStorage for immediate feedback + MongoDB for persistence
- **🔄 Auto-sync** - Automatic synchronization between frontend and backend
- **📦 Context API** - Global state management with React Context
- **🛡️ Error Handling** - Comprehensive error handling and user feedback

## 📁 Project Structure

```
CompanyCMS/
├── LandingPage/              # Frontend React application
│   ├── src/
│   │   ├── components/       # Reusable components
│   │   │   ├── Header.jsx
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   ├── context/          # React Context
│   │   │   └── ComponentContext.jsx
│   │   ├── pages/            # Page components
│   │   │   ├── Home.jsx
│   │   │   └── Dashboard.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   └── package.json
│
└── backend/                  # Backend Express API
    ├── models/
    │   └── Component.js
    ├── server.js
    ├── .env
    └── package.json
```

## 🛠️ Technology Stack

### Frontend

- **React 19** - UI library
- **Vite** - Build tool
- **Tailwind CSS 4** - Styling
- **React Router DOM** - Navigation
- **React Context API** - State management

### Backend

- **Node.js** - Runtime
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **CORS** - Cross-origin support

### Services

- **Cloudinary** - Image hosting and upload

## � Screenshots

> **Coming Soon**: Project screenshots will be added here

| Dashboard View            | Home Page                | Mobile Responsive           |
| ------------------------- | ------------------------ | --------------------------- |
| 🖼️ _Dashboard screenshot_ | 🖼️ _Homepage screenshot_ | 🖼️ _Mobile view screenshot_ |

## ⚡ Quick Start

```bash
# Clone the repository
git clone https://github.com/yourusername/CompanyCMS.git
cd CompanyCMS

# Install frontend dependencies
cd LandingPage && npm install

# Install backend dependencies
cd ../backend && npm install

# Setup environment variables (see below)
# Start the application (see Running section)
```

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **MongoDB** (local installation or Atlas account) - [Setup Guide](https://www.mongodb.com/docs/manual/installation/)
- **Cloudinary Account** (free tier available) - [Sign Up](https://cloudinary.com/users/register/free)
- **EmailJS Account** (for contact forms) - [Sign Up](https://www.emailjs.com/)

## 📦 Installation

### 1. Clone and Setup Frontend

\`\`\`bash
cd LandingPage
npm install
\`\`\`

### 2. Setup Backend

\`\`\`bash
cd backend
npm install
\`\`\`

### 3. Configure Environment Variables

The project uses environment variables for secure configuration. Example files are provided:

#### Backend Configuration

```bash
# Copy the example file
cp backend/.env.example backend/.env
```

Edit `backend/.env` with your actual values:

```env
# Server Configuration
PORT=5002
NODE_ENV=development

# MongoDB Configuration
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/company-cms

# CORS Configuration
FRONTEND_URL=http://localhost:5173
```

#### Frontend Configuration

```bash
# Copy the example file
cp LandingPage/.env.example LandingPage/.env
```

Edit `LandingPage/.env` with your actual values:

```env
# EmailJS Configuration (for contact forms)
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_RECIPIENT_EMAIL=your_email@gmail.com

# Cloudinary Configuration (optional - if using env variables)
VITE_CLOUDINARY_CLOUD_NAME=your_cloud_name
```

### 4. Configure Third-Party Services

#### Cloudinary Setup (Image Uploads)

1. Create a free account at [cloudinary.com](https://cloudinary.com)
2. Go to **Settings → Upload → Add upload preset**
3. Create an **unsigned** upload preset named `zakCompany`
4. Note your **Cloud Name** from the dashboard
5. Update `VITE_CLOUDINARY_CLOUD_NAME` in your `.env` file

#### EmailJS Setup (Contact Forms)

1. Create a free account at [emailjs.com](https://www.emailjs.com/)
2. Create an email service (Gmail, Outlook, etc.)
3. Create an email template with variables: `{{from_name}}`, `{{from_email}}`, `{{message}}`
4. Get your Service ID, Template ID, and Public Key
5. Update the EmailJS variables in your `.env` file

#### MongoDB Setup

- **Local MongoDB**: Install MongoDB Community Edition
- **MongoDB Atlas** (Recommended): Create a free cluster at [mongodb.com](https://www.mongodb.com/cloud/atlas)

## 🚀 Running the Application

### Start Backend Server

\`\`\`bash
cd backend
npm run dev

# Server runs on http://localhost:5000

\`\`\`

### Start Frontend Development Server

\`\`\`bash
cd LandingPage
npm run dev

# App runs on http://localhost:5173

\`\`\`

### Start MongoDB (if running locally)

\`\`\`bash

# macOS (with Homebrew)

brew services start mongodb-community

# Windows

mongod

# Linux

sudo systemctl start mongod
\`\`\`

## 📱 Usage

1. **Visit Home Page**: Navigate to `http://localhost:5173`
2. **Access Dashboard**: Click the "Dashboard" button in the navbar
3. **Edit Content**:
   - Update header title and upload image
   - Modify navbar links (label + URL)
   - Edit footer contact information
4. **Save Changes**: Click individual "Save" buttons or "Save All Changes"
5. **View Updates**: Navigate back to home page to see changes instantly

## 🎨 Component Overview

### Header Component

- Displays dynamic title
- Shows uploaded/linked image
- Gradient background with Tailwind

### Navbar Component

- Three customizable navigation links
- Dashboard access button
- Horizontal layout with hover effects

### Footer Component

- Email with mailto link
- Phone with tel link
- Address display
- Icon-based layout

### Dashboard Component

- Form inputs for all editable content
- Cloudinary image upload with preview
- Individual section save buttons
- Save all functionality
- Navigation between pages

## 🔌 API Endpoints

### GET `/api/components`

Fetch all component data

**Response:**
\`\`\`json
{
"success": true,
"data": {
"header": { "title": "...", "imageUrl": "..." },
"navbar": { "links": [...] },
"footer": { "email": "...", "phone": "...", "address": "..." }
}
}
\`\`\`

### POST `/api/components`

Save/update all component data

**Request Body:**
\`\`\`json
{
"header": { "title": "...", "imageUrl": "..." },
"navbar": { "links": [...] },
"footer": { "email": "...", "phone": "...", "address": "..." }
}
\`\`\`

### PUT `/api/components/:section`

Update specific section (header, navbar, or footer)

**Example:** \`PUT /api/components/header\`

## 💾 Data Persistence

The application uses a **dual-persistence strategy**:

1. **localStorage** (Frontend) - Immediate persistence, works offline
2. **MongoDB** (Backend) - Optional server-side persistence

Changes are saved to localStorage automatically. The backend API can be used for:

- Multi-device synchronization
- Data backup
- Team collaboration

## 🎯 Bonus Features Implemented

- ✅ **Image Preview** - Before and after upload
- ✅ **localStorage** - Automatic data persistence
- ✅ **React Context** - Global state management
- ✅ **MongoDB Backend** - Optional server-side storage
- ✅ **RESTful API** - Complete CRUD operations

## 🧪 Testing the Application

1. Edit content in the dashboard
2. Navigate to home page
3. Refresh the page - changes persist!
4. Try uploading different images
5. Test the API endpoints using Postman/curl

### Example API Test:

\`\`\`bash

# Get current data

curl http://localhost:5000/api/components

# Update header

curl -X PUT http://localhost:5000/api/components/header \\
-H "Content-Type: application/json" \\
-d '{"title":"New Title","imageUrl":"https://example.com/image.jpg"}'
\`\`\`

## 🔧 Customization

### Adding More Navbar Links

Edit \`ComponentContext.jsx\` to add more default links:

\`\`\`javascript
links: [
{ label: 'Home', url: '/' },
{ label: 'About', url: '/about' },
{ label: 'Services', url: '/services' },
{ label: 'Contact', url: '/contact' }
]
\`\`\`

### Changing Color Scheme

Update Tailwind classes in components:

- Header: \`bg-gradient-to-r from-blue-600 to-purple-600\`
- Navbar: \`bg-gray-800\`
- Footer: \`bg-gray-900\`

## 📝 Notes

- **Cloudinary Setup**: Remember to configure your Cloudinary credentials
- **MongoDB**: Optional - app works with localStorage only
- **CORS**: Already configured for local development
- **Environment**: Never commit \`.env\` files to version control

## 🐛 Troubleshooting

### Frontend won't start

- Ensure Node.js is installed: \`node --version\`
- Delete \`node_modules\` and run \`npm install\` again

### Backend connection errors

- Check if MongoDB is running
- Verify \`MONGODB_URI\` in \`.env\`
- Test connection: \`mongosh\`

### Image upload fails

- Verify Cloudinary credentials
- Check upload preset is "unsigned"
- Ensure file size is under limits

### Changes not persisting

- Check browser console for errors
- Verify localStorage is enabled
- Check backend API is running

## 📚 Learn More

- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Cloudinary Upload](https://cloudinary.com/documentation/upload_images)
- [Express.js Guide](https://expressjs.com)
- [MongoDB Documentation](https://www.mongodb.com/docs)

## � Deployment

### Frontend Deployment (Vercel/Netlify)

```bash
cd LandingPage
npm run build
# Deploy the dist/ folder to your hosting service
```

### Backend Deployment (Railway/Render/Heroku)

```bash
cd backend
# Set environment variables on your hosting platform
# Deploy the backend directory
```

### Environment Variables for Production

Make sure to set all environment variables on your hosting platform:

- MongoDB connection string
- EmailJS credentials
- CORS configuration
- Node environment settings

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit your changes**: `git commit -m 'Add some amazing feature'`
4. **Push to the branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Development Guidelines

- Follow the existing code style
- Add comments for complex logic
- Test your changes thoroughly
- Update documentation as needed

## 🎓 Learning Objectives

This project demonstrates proficiency in:

- **Frontend Development**: React 19, Modern JavaScript (ES6+), Component Architecture
- **State Management**: React Context API, Local Storage, Async State Handling
- **UI/UX Design**: Tailwind CSS, Responsive Design, Modern UI Patterns
- **Backend Development**: Node.js, Express.js, RESTful API Design
- **Database Management**: MongoDB, Mongoose ODM, Data Modeling
- **Third-party Integration**: Cloudinary API, EmailJS, External Services
- **Full-stack Architecture**: Client-Server Communication, Error Handling
- **Development Tools**: Vite, Hot Module Replacement, Development Workflow

## � Project Status

- ✅ **Completed**: Full-stack CMS with all core features
- ✅ **Tested**: All functionality tested and working
- ✅ **Production Ready**: Environment configuration and deployment ready
- 🔄 **Future Enhancements**: User authentication, role-based access, advanced analytics

## 🐛 Known Issues

Currently no known issues. If you find any bugs, please [open an issue](https://github.com/yourusername/CompanyCMS/issues).

## 📞 Support & Contact

- **Email**: [kaifzakey22@gmail.com](mailto:kaifzakey22@gmail.com)
- **LinkedIn**: [kaif-Zaki](https://www.linkedin.com/in/kaif-zaki?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app)

## ⭐ Show Your Support

If this project helped you learn or build something awesome, please give it a ⭐!

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">

**🚀 Built with Modern Web Technologies**

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)

**Made with ❤️ for learning and building awesome web applications**

</div>
