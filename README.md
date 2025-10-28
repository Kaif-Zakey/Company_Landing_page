<div align="center">

# 🚀 Company CMS - Full Stack Content Management System

<p align="center">
  <img src="https://img.shields.io/badge/React-19.x-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/Node.js-20.x-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4.x-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Express.js-4.x-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/EmailJS-Integration-FF6B6B?style=for-the-badge&logo=gmail&logoColor=white" alt="EmailJS" />
  <img src="https://img.shields.io/badge/Cloudinary-Image_Upload-3448C5?style=for-the-badge&logo=cloudinary&logoColor=white" alt="Cloudinary" />
  <img src="https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge" alt="License" />
</p>

<h3 align="center">A modern, full-stack Content Management System with real-time editing capabilities</h3>

<p align="center">
  Built with <strong>React 19</strong>, <strong>Node.js</strong>, <strong>MongoDB Atlas</strong>, and <strong>Tailwind CSS 4</strong><br>
  Features dynamic dashboard, Cloudinary image management, EmailJS contact forms, and dual data persistence
</p>

<p align="center">
  <a href="#-live-demo"><strong>Live Demo</strong></a> ·
  <a href="#-quick-start"><strong>Quick Start</strong></a> ·
  <a href="#-features"><strong>Features</strong></a> ·
  <a href="#-documentation"><strong>Documentation</strong></a>
</p>

</div>

---

## 🎯 Live Demo

> **Coming Soon**: Live demo will be available at [your-deployment-url.com](https://your-deployment-url.com)

<div align="center">

### 📸 Screenshots

|                               🏠 **Homepage**                                |                                📊 **Dashboard**                                |                            📱 **Mobile View**                            |
| :--------------------------------------------------------------------------: | :----------------------------------------------------------------------------: | :----------------------------------------------------------------------: |
|                     _Landing page with dynamic content_                      |                     _Admin dashboard for content editing_                      |                        _Fully responsive design_                         |
| ![Homepage](https://via.placeholder.com/300x200/4F46E5/FFFFFF?text=Homepage) | ![Dashboard](https://via.placeholder.com/300x200/059669/FFFFFF?text=Dashboard) | ![Mobile](https://via.placeholder.com/300x200/DC2626/FFFFFF?text=Mobile) |

</div>

---

## 📋 Table of Contents

<details>
<summary><strong>Click to expand navigation</strong></summary>

- [✨ Features](#-features)
- [🏗️ Tech Stack](#️-tech-stack)
- [📁 Project Structure](#-project-structure)
- [⚡ Quick Start](#-quick-start)
- [📦 Installation](#-installation)
- [🔧 Configuration](#-configuration)
- [🚀 Running the Application](#-running-the-application)
- [📱 Usage Guide](#-usage-guide)
- [🔌 API Documentation](#-api-documentation)
- [📧 EmailJS Integration](#-emailjs-integration)
- [☁️ Deployment](#️-deployment)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

</details>

---

## ✨ Features

<div align="center">

### 🎨 Frontend Excellence

| Feature                           | Description                                           | Technology              |
| --------------------------------- | ----------------------------------------------------- | ----------------------- |
| 🖼️ **Dynamic Content Management** | Real-time editing of headers, navigation, and footers | React Context API       |
| 📤 **Image Upload & Management**  | Drag-drop image uploads with instant preview          | Cloudinary API          |
| 📱 **Responsive Design**          | Pixel-perfect mobile-first design                     | Tailwind CSS 4          |
| 🔄 **Real-time Updates**          | Live preview without page refresh                     | React State Management  |
| 🎯 **Intuitive Dashboard**        | User-friendly admin interface                         | Modern UI/UX            |
| 📧 **Contact Forms**              | Fully functional contact system                       | EmailJS Integration     |
| 🍞 **Toast Notifications**        | Beautiful user feedback system                        | Custom React Components |

### 🔧 Backend Power

| Feature                     | Description                              | Technology      |
| --------------------------- | ---------------------------------------- | --------------- |
| 🗄️ **MongoDB Integration**  | Secure data persistence with validation  | Mongoose ODM    |
| 🌐 **RESTful APIs**         | Complete CRUD operations for all content | Express.js      |
| 🔒 **Environment Security** | Secure configuration management          | dotenv          |
| 📊 **Data Validation**      | Server-side validation and sanitization  | MongoDB Schemas |
| 🚀 **CORS Support**         | Cross-origin resource sharing configured | CORS Middleware |
| ⚡ **Performance**          | Fast and lightweight server framework    | Node.js         |

### 💾 Data & Integration

| Feature                  | Description                     | Benefit                          |
| ------------------------ | ------------------------------- | -------------------------------- |
| 🔄 **Dual Persistence**  | localStorage + MongoDB storage  | Offline capability + Data backup |
| 🔄 **Auto-sync**         | Automatic frontend-backend sync | Real-time data consistency       |
| 📦 **Context API**       | Global state management         | Efficient data flow              |
| 🛡️ **Error Handling**    | Comprehensive error management  | Robust user experience           |
| 📧 **Email Integration** | ContactJS for form submissions  | Direct communication channel     |
| ☁️ **Cloud Storage**     | Cloudinary for image management | Fast, scalable image delivery    |

</div>

## 📁 Project Structure

<div align="center">

### 🏗️ Architecture Overview

```mermaid
graph TB
    A[React Frontend] --> B[Express.js API]
    B --> C[MongoDB Atlas]
    A --> D[Cloudinary]
    A --> E[EmailJS]
    A --> F[LocalStorage]
```

</div>

### 📂 Directory Structure

```
CompanyCMS/
├── 📁 LandingPage/              # 🎨 Frontend React Application
│   ├── 📁 public/               # Static assets
│   ├── 📁 src/
│   │   ├── 📁 components/       # 🧩 Reusable UI Components
│   │   │   ├── Header.jsx       # Dynamic header with image
│   │   │   ├── Navbar.jsx       # Navigation with dashboard link
│   │   │   ├── Footer.jsx       # Contact information footer
│   │   │   └── Toast.jsx        # Notification system
│   │   ├── 📁 context/          # 🔄 State Management
│   │   │   └── ComponentContext.jsx  # Global app state
│   │   ├── 📁 pages/            # 📄 Route Components
│   │   │   ├── Home.jsx         # Landing page
│   │   │   ├── About.jsx        # About page
│   │   │   ├── Contact.jsx      # Contact form page
│   │   │   └── Dashboard.jsx    # Admin dashboard
│   │   ├── 📁 services/         # 🌐 External Services
│   │   │   └── emailService.js  # EmailJS integration
│   │   ├── 📁 utils/            # 🛠️ Utilities
│   │   │   └── api.js           # Backend API client
│   │   ├── App.jsx              # Main app component
│   │   ├── main.jsx             # React entry point
│   │   └── index.css            # Global styles
│   ├── .env                     # Environment variables
│   ├── .env.example             # Environment template
│   ├── package.json             # Dependencies & scripts
│   └── vite.config.js           # Vite configuration
│
├── 📁 backend/                  # ⚙️ Backend Express API
│   ├── 📁 models/               # 🗄️ Database Models
│   │   └── Component.js         # MongoDB schema
│   ├── server.js                # Express server setup
│   ├── .env                     # Server environment variables
│   ├── .env.example             # Server environment template
│   └── package.json             # Backend dependencies
│
├── README.md                    # 📚 Project documentation
├── LICENSE                      # 📄 MIT License
└── .gitignore                   # Git ignore rules
```

### 🧩 Component Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     React Application                       │
├─────────────────────────────────────────────────────────────┤
│  App.jsx (Router + Context Provider)                       │
│  ├── ComponentContext (Global State)                       │
│  └── React Router                                          │
│      ├── Home (Header + Navbar + Footer)                  │
│      ├── About (Company information)                      │
│      ├── Contact (EmailJS form)                           │
│      └── Dashboard (Content management)                   │
├─────────────────────────────────────────────────────────────┤
│  External Integrations                                     │
│  ├── MongoDB Atlas (Data persistence)                     │
│  ├── Cloudinary (Image storage)                           │
│  └── EmailJS (Contact forms)                              │
└─────────────────────────────────────────────────────────────┘
```

## 🏗️ Tech Stack

<div align="center">

### Frontend Technologies

| Technology                                                                                                         | Version | Purpose       | Why We Use It                                   |
| ------------------------------------------------------------------------------------------------------------------ | ------- | ------------- | ----------------------------------------------- |
| ![React](https://img.shields.io/badge/React-19.x-61DAFB?style=flat&logo=react&logoColor=white)                     | 19.x    | UI Framework  | Modern, efficient, component-based architecture |
| ![Vite](https://img.shields.io/badge/Vite-7.x-646CFF?style=flat&logo=vite&logoColor=white)                         | 7.x     | Build Tool    | Lightning-fast development server and builds    |
| ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-38B2AC?style=flat&logo=tailwind-css&logoColor=white) | 4.x     | CSS Framework | Utility-first, responsive design system         |
| ![React Router](https://img.shields.io/badge/React_Router-7.x-CA4245?style=flat&logo=react-router&logoColor=white) | 7.x     | Routing       | Client-side navigation and routing              |

### Backend Technologies

| Technology                                                                                                | Version | Purpose       | Why We Use It                                  |
| --------------------------------------------------------------------------------------------------------- | ------- | ------------- | ---------------------------------------------- |
| ![Node.js](https://img.shields.io/badge/Node.js-20.x-339933?style=flat&logo=node.js&logoColor=white)      | 20.x    | Runtime       | JavaScript runtime for server-side development |
| ![Express.js](https://img.shields.io/badge/Express.js-4.x-000000?style=flat&logo=express&logoColor=white) | 4.x     | Web Framework | Fast, unopinionated web framework              |
| ![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=flat&logo=mongodb&logoColor=white)     | Atlas   | Database      | NoSQL database for flexible data storage       |
| ![Mongoose](https://img.shields.io/badge/Mongoose-8.x-880000?style=flat&logo=mongoose&logoColor=white)    | 8.x     | ODM           | Object Document Mapping for MongoDB            |

### External Services

| Service                                                                                                     | Purpose          | Free Tier                    |
| ----------------------------------------------------------------------------------------------------------- | ---------------- | ---------------------------- |
| ![Cloudinary](https://img.shields.io/badge/Cloudinary-3448C5?style=flat&logo=cloudinary&logoColor=white)    | Image Management | 25GB storage, 25GB bandwidth |
| ![EmailJS](https://img.shields.io/badge/EmailJS-FF6B6B?style=flat&logo=gmail&logoColor=white)               | Email Service    | 200 emails/month             |
| ![MongoDB Atlas](https://img.shields.io/badge/MongoDB_Atlas-47A248?style=flat&logo=mongodb&logoColor=white) | Cloud Database   | 512MB storage                |

</div>

## 🛠️ Development Tools

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

<details>
<summary><strong>📧 EmailJS Setup (Contact Forms) - Click to expand</strong></summary>

#### Step 1: Create EmailJS Account

1. Visit [emailjs.com](https://www.emailjs.com/) and create a free account
2. Verify your email address
3. You get **200 free emails per month** on the free plan

#### Step 2: Create Email Service

1. Go to **Email Services** in your dashboard
2. Click **Add New Service**
3. Choose your email provider:
   - **Gmail** (Recommended for beginners)
   - **Outlook/Hotmail**
   - **Yahoo Mail**
   - **Custom SMTP**

**For Gmail Setup:**

```
Service: Gmail
Name: Your Service Name (e.g., "Company Contact Form")
```

#### Step 3: Create Email Template

1. Go to **Email Templates** → **Create New Template**
2. Use this template structure:

**Template Settings:**

```
Template Name: Contact Form Template
Subject: New Contact Form Submission from {{from_name}}
```

**Email Template Content:**

```html
Hello, You have received a new message from your website contact form: Name:
{{from_name}} Email: {{from_email}} Subject: {{subject}} Message: {{message}}
--- This email was sent from your Company CMS contact form. Reply directly to
this email to respond to {{from_name}}.
```

#### Step 4: Get Your Credentials

1. **Service ID**: Found in Email Services section (e.g., `service_abc123`)
2. **Template ID**: Found in Email Templates section (e.g., `template_xyz789`)
3. **Public Key**: Go to Account → General → Public Key (e.g., `abcDEF123xyz`)

#### Step 5: Update Environment Variables

Add to your `LandingPage/.env` file:

```env
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_EMAILJS_PUBLIC_KEY=abcDEF123xyz
VITE_RECIPIENT_EMAIL=your-email@gmail.com
```

#### Step 6: Test Your Setup

1. Restart your development server: `npm run dev`
2. Go to the Contact page: `http://localhost:5173/contact`
3. Fill out and submit the form
4. Check your email for the message!

#### Troubleshooting EmailJS

| Issue                         | Solution                                         |
| ----------------------------- | ------------------------------------------------ |
| ❌ **"Failed to send email"** | Check Service ID, Template ID, and Public Key    |
| ❌ **"Template not found"**   | Ensure template exists and ID is correct         |
| ❌ **"Service not found"**    | Verify email service is active and ID is correct |
| ❌ **"Quota exceeded"**       | You've hit the 200/month limit - upgrade plan    |
| ❌ **Emails not arriving**    | Check spam folder, verify recipient email        |

#### Email Template Variables

The following variables are automatically sent to your template:

- `{{from_name}}` - Sender's name from the form
- `{{from_email}}` - Sender's email address
- `{{subject}}` - Message subject
- `{{message}}` - Message content
- `{{to_name}}` - Set to "Company CMS Team"

</details>

<details>
<summary><strong>☁️ Cloudinary Setup (Image Uploads) - Click to expand</strong></summary>

#### Step 1: Create Cloudinary Account

1. Create a free account at [cloudinary.com](https://cloudinary.com)
2. Note your **Cloud Name** from the dashboard

#### Step 2: Create Upload Preset

1. Go to **Settings → Upload → Upload presets**
2. Click **Add upload preset**
3. Configure:
   ```
   Preset name: zakCompany
   Signing Mode: Unsigned
   Folder: company-cms (optional)
   ```

#### Step 3: Update Configuration

The cloud name is already configured in the Dashboard component:

```javascript
const CLOUDINARY_CLOUD_NAME = "djb8thtjx";
const CLOUDINARY_UPLOAD_PRESET = "zakCompany";
```

</details>

<details>
<summary><strong>🗄️ MongoDB Setup - Click to expand</strong></summary>

#### MongoDB Atlas (Recommended)

1. Create a free account at [mongodb.com](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster (M0 Free tier)
3. Create a database user
4. Get your connection string
5. Update `MONGODB_URI` in `backend/.env`

#### Local MongoDB

1. Install MongoDB Community Edition
2. Start MongoDB service
3. Use connection string: `mongodb://localhost:27017/company-cms`

</details>

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

## 📱 Usage Guide

<div align="center">

### 🎯 User Journey

```mermaid
flowchart TD
    A[🏠 Visit Homepage] --> B[🧭 Navigate via Navbar]
    B --> C[📊 Access Dashboard]
    C --> D[✏️ Edit Content]
    D --> E[💾 Save Changes]
    E --> F[🔄 View Live Updates]

    B --> G[📧 Contact Form]
    G --> H[📤 Send Email]
    H --> I[✅ Confirmation]
```

</div>

### 🚀 Getting Started

#### 1. 🏠 **Homepage Experience**

- **URL**: `http://localhost:5173`
- **Features**: Dynamic header, responsive navigation, company information
- **Actions**: Browse content, access other pages via navbar

#### 2. 📊 **Dashboard Access**

- **How**: Click "Dashboard" button in navbar
- **URL**: `http://localhost:5173/dashboard`
- **Purpose**: Content management interface

#### 3. ✏️ **Content Editing**

<details>
<summary><strong>Header Management</strong></summary>

- **Title**: Edit the main headline text
- **Image Upload**:
  - Drag & drop images or click to browse
  - Automatic Cloudinary upload with preview
  - Support for JPG, PNG, GIF formats
- **URL Input**: Alternative manual image URL entry

</details>

<details>
<summary><strong>Navigation Management</strong></summary>

- **Link 1**: Home page link (default: "/")
- **Link 2**: About page link (default: "/about")
- **Link 3**: Contact page link (default: "/contact")
- **Format**: Each link has Label and URL fields

</details>

<details>
<summary><strong>Footer Management</strong></summary>

- **Email**: Contact email with automatic mailto links
- **Phone**: Phone number with automatic tel links
- **Address**: Full business address display

</details>

#### 4. 💾 **Saving Changes**

| Method               | Scope                 | Use Case             |
| -------------------- | --------------------- | -------------------- |
| **Save Header**      | Header section only   | Quick header updates |
| **Save Navbar**      | Navigation only       | Menu link changes    |
| **Save Footer**      | Footer section only   | Contact info updates |
| **Save All Changes** | Everything + redirect | Complete site update |

#### 5. 📧 **Contact Form Usage**

- **URL**: `http://localhost:5173/contact`
- **Fields**: Name, Email, Subject, Message
- **Features**:
  - Form validation
  - EmailJS integration
  - Success/error notifications
  - Automatic email delivery

#### 6. 🔄 **Live Updates**

- Changes save to localStorage immediately
- Backend sync happens automatically
- No page refresh needed for updates
- Toast notifications confirm all actions

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

## 🔌 API Documentation

<div align="center">

### 🌐 Base URL

```
http://localhost:5002/api
```

</div>

### 📋 Endpoints Overview

| Method | Endpoint               | Purpose                 | Auth Required |
| ------ | ---------------------- | ----------------------- | ------------- |
| `GET`  | `/components`          | Fetch all content       | No            |
| `POST` | `/components`          | Save all content        | No            |
| `PUT`  | `/components/:section` | Update specific section | No            |
| `GET`  | `/health`              | Health check            | No            |

---

### 🔍 **GET** `/api/components`

**Purpose**: Retrieve all component data from the database

**Parameters**: None

**Response Format**:

```json
{
  "success": true,
  "data": {
    "header": {
      "title": "Welcome to Our Company",
      "imageUrl": "https://res.cloudinary.com/..."
    },
    "navbar": {
      "links": [
        { "label": "Home", "url": "/" },
        { "label": "About", "url": "/about" },
        { "label": "Contact", "url": "/contact" }
      ]
    },
    "footer": {
      "email": "contact@company.com",
      "phone": "+1 (555) 123-4567",
      "address": "123 Business St, Suite 100, City, State 12345"
    },
    "_id": "...",
    "createdAt": "2025-10-28T...",
    "updatedAt": "2025-10-28T..."
  }
}
```

**Error Response**:

```json
{
  "success": false,
  "message": "Error fetching component data",
  "error": "Database connection failed"
}
```

---

### 💾 **POST** `/api/components`

**Purpose**: Save or update all component data

**Request Body**:

```json
{
  "header": {
    "title": "Your Company Name",
    "imageUrl": "https://your-image-url.com/image.jpg"
  },
  "navbar": {
    "links": [
      { "label": "Home", "url": "/" },
      { "label": "Services", "url": "/services" },
      { "label": "Contact", "url": "/contact" }
    ]
  },
  "footer": {
    "email": "info@yourcompany.com",
    "phone": "+1 (555) 987-6543",
    "address": "456 New Address St, Your City, State 54321"
  }
}
```

**Success Response**:

```json
{
  "success": true,
  "message": "Component data saved successfully",
  "data": {
    /* Updated component data */
  }
}
```

---

### ✏️ **PUT** `/api/components/:section`

**Purpose**: Update a specific section (header, navbar, or footer)

**Parameters**:

- `section` (path): One of `header`, `navbar`, or `footer`

**Examples**:

**Update Header**: `PUT /api/components/header`

```json
{
  "title": "New Company Title",
  "imageUrl": "https://new-image-url.com/image.jpg"
}
```

**Update Navbar**: `PUT /api/components/navbar`

```json
{
  "links": [
    { "label": "Home", "url": "/" },
    { "label": "Products", "url": "/products" },
    { "label": "About", "url": "/about" },
    { "label": "Contact", "url": "/contact" }
  ]
}
```

**Update Footer**: `PUT /api/components/footer`

```json
{
  "email": "support@company.com",
  "phone": "+1 (555) 111-2222",
  "address": "789 Support Ave, Help City, State 11111"
}
```

---

### 🔧 **Testing the API**

#### Using cURL:

```bash
# Get all components
curl http://localhost:5002/api/components

# Update header
curl -X PUT http://localhost:5002/api/components/header \
  -H "Content-Type: application/json" \
  -d '{"title":"New Title","imageUrl":"https://example.com/image.jpg"}'

# Save all data
curl -X POST http://localhost:5002/api/components \
  -H "Content-Type: application/json" \
  -d @data.json
```

#### Using JavaScript Fetch:

```javascript
// Get components
const response = await fetch("http://localhost:5002/api/components");
const data = await response.json();

// Update header
await fetch("http://localhost:5002/api/components/header", {
  method: "PUT",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    title: "New Title",
    imageUrl: "https://example.com/image.jpg",
  }),
});
```

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

<div align="center">

### 🚨 Common Issues & Solutions

</div>

<details>
<summary><strong>🔧 Installation & Setup Issues</strong></summary>

| Issue                   | Symptoms            | Solution                                           |
| ----------------------- | ------------------- | -------------------------------------------------- |
| **Node.js Version**     | `npm install` fails | Ensure Node.js v18+ is installed: `node --version` |
| **Port Already in Use** | `EADDRINUSE` error  | Kill process: `kill -9 $(lsof -ti:5002)`           |
| **Dependencies Issues** | Build failures      | Delete `node_modules`, run `npm install`           |
| **Permission Errors**   | `EACCES` errors     | Use `sudo` or fix npm permissions                  |

</details>

<details>
<summary><strong>🌐 Backend Connection Issues</strong></summary>

| Issue                  | Symptoms                    | Solution                                  |
| ---------------------- | --------------------------- | ----------------------------------------- |
| **MongoDB Connection** | "MongoDB Connection Error"  | Verify `MONGODB_URI` in `.env` file       |
| **Database Not Found** | Empty data responses        | Check database name in connection string  |
| **CORS Errors**        | Blocked requests in browser | Verify frontend URL in CORS configuration |
| **API Not Responding** | 404 errors                  | Ensure backend is running on port 5002    |

**Test Database Connection:**

```bash
# Test MongoDB Atlas connection
mongosh "mongodb+srv://username:password@cluster.mongodb.net/database-name"

# Check backend health
curl http://localhost:5002/health
```

</details>

<details>
<summary><strong>📤 Image Upload Issues</strong></summary>

| Issue                | Symptoms               | Solution                                        |
| -------------------- | ---------------------- | ----------------------------------------------- |
| **Upload Fails**     | "Upload failed" error  | Check Cloudinary cloud name and preset          |
| **Preset Not Found** | "Invalid preset" error | Create unsigned upload preset in Cloudinary     |
| **File Size Limit**  | Large files rejected   | Compress images or check Cloudinary limits      |
| **Network Errors**   | Timeout errors         | Check internet connection and Cloudinary status |

**Cloudinary Debug:**

```javascript
// Check configuration in Dashboard.jsx
const CLOUDINARY_CLOUD_NAME = "djb8thtjx";
const CLOUDINARY_UPLOAD_PRESET = "zakCompany";
```

</details>

<details>
<summary><strong>📧 EmailJS Issues</strong></summary>

| Issue                   | Symptoms               | Solution                                   |
| ----------------------- | ---------------------- | ------------------------------------------ |
| **Send Fails**          | "Failed to send email" | Verify Service ID, Template ID, Public Key |
| **Template Errors**     | "Template not found"   | Check template exists and ID is correct    |
| **Quota Exceeded**      | "Quota exceeded" error | Upgrade EmailJS plan or wait for reset     |
| **Emails Not Arriving** | No emails received     | Check spam folder and recipient email      |

**EmailJS Debug:**

```bash
# Check environment variables
echo $VITE_EMAILJS_SERVICE_ID
echo $VITE_EMAILJS_TEMPLATE_ID
echo $VITE_EMAILJS_PUBLIC_KEY
```

</details>

<details>
<summary><strong>💾 Data Persistence Issues</strong></summary>

| Issue                    | Symptoms                        | Solution                                   |
| ------------------------ | ------------------------------- | ------------------------------------------ |
| **Changes Not Saving**   | Data reverts on refresh         | Check browser console for errors           |
| **localStorage Blocked** | No local persistence            | Enable localStorage in browser settings    |
| **API Sync Failing**     | Local saves but no backend sync | Verify backend is running and accessible   |
| **Stale Data**           | Old data appears                | Clear localStorage: `localStorage.clear()` |

</details>

<details>
<summary><strong>🎨 UI/Display Issues</strong></summary>

| Issue                           | Symptoms               | Solution                               |
| ------------------------------- | ---------------------- | -------------------------------------- |
| **Styles Not Loading**          | Broken layout          | Check Tailwind CSS build process       |
| **Images Not Displaying**       | Broken image icons     | Verify image URLs and Cloudinary setup |
| **Mobile Layout Broken**        | Poor mobile experience | Check responsive Tailwind classes      |
| **Toast Notifications Missing** | No user feedback       | Check Toast component implementation   |

</details>

### 🔍 Debug Mode

Enable debug mode by adding to your browser console:

```javascript
localStorage.setItem("debug", "true");
// Reload page to see debug information
```

### 📞 Getting Help

1. **Check Browser Console**: Look for error messages
2. **Check Network Tab**: Verify API calls are being made
3. **Verify Environment Variables**: Ensure all `.env` files are properly configured
4. **Test Individual Components**: Isolate the issue to specific functionality
5. **Check Service Status**: Verify third-party services (MongoDB Atlas, Cloudinary, EmailJS) are operational

## � Deployment

<div align="center">

### 🌐 Production Deployment Options

</div>

<details>
<summary><strong>📦 Frontend Deployment (Vercel - Recommended)</strong></summary>

#### Step 1: Build the Project

```bash
cd LandingPage
npm run build
```

#### Step 2: Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow prompts to configure:
# - Project name: company-cms
# - Framework: Vite
# - Build command: npm run build
# - Output directory: dist
```

#### Step 3: Environment Variables

Add to Vercel dashboard:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_RECIPIENT_EMAIL=your_email@gmail.com
VITE_API_URL=https://your-backend-url.com/api
```

</details>

<details>
<summary><strong>⚙️ Backend Deployment (Railway - Recommended)</strong></summary>

#### Step 1: Prepare for Deployment

```bash
cd backend
# Ensure start script in package.json
"scripts": {
  "start": "node server.js"
}
```

#### Step 2: Deploy to Railway

1. Visit [railway.app](https://railway.app)
2. Connect your GitHub repository
3. Select the `backend` folder as root
4. Railway will auto-deploy

#### Step 3: Environment Variables

Add to Railway dashboard:

```env
PORT=5002
MONGODB_URI=your_mongodb_atlas_connection_string
NODE_ENV=production
FRONTEND_URL=https://your-frontend-url.vercel.app
```

</details>

<details>
<summary><strong>🌍 Alternative Deployment Options</strong></summary>

| Platform                  | Frontend   | Backend    | Database      | Free Tier |
| ------------------------- | ---------- | ---------- | ------------- | --------- |
| **Vercel + Railway**      | ✅ Vercel  | ✅ Railway | MongoDB Atlas | Yes       |
| **Netlify + Render**      | ✅ Netlify | ✅ Render  | MongoDB Atlas | Yes       |
| **GitHub Pages + Heroku** | ✅ Pages   | ✅ Heroku  | MongoDB Atlas | Limited   |
| **AWS Amplify**           | ✅ Amplify | ✅ Lambda  | DynamoDB      | Free tier |

</details>

<details>
<summary><strong>🔒 Production Environment Setup</strong></summary>

#### Security Checklist

- [ ] All environment variables configured
- [ ] No hardcoded credentials in code
- [ ] CORS configured for production domains
- [ ] HTTPS enabled on all services
- [ ] MongoDB Atlas IP whitelist configured

#### Performance Optimizations

- [ ] Images optimized via Cloudinary
- [ ] Build assets minified
- [ ] CDN configured for static assets
- [ ] Database indexes created
- [ ] Error monitoring setup (optional)

</details>

## 📚 Documentation & Resources

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
