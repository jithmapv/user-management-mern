# LOGIN - User Authentication System

A full-stack user authentication and profile management system built with the MERN stack (MongoDB, Express.js, React, Node.js).

## 📋 Description

This repository contains a complete user authentication system with both user and admin functionalities. The application provides secure registration, login, profile management, and admin user management features.

## ✨ Features

- **User Authentication**
  - User registration with name, email, address, gender, and profile picture
  - Secure login with JWT (JSON Web Token) authentication
  - Password encryption using bcrypt
  - User profile management

- **Admin Panel**
  - Admin routes for user management
  - User administration capabilities

- **Security**
  - JWT-based authentication
  - Password hashing with bcryptjs
  - Protected routes and middleware
  - Error handling middleware

## 🛠️ Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web application framework
- **MongoDB** - Database with Mongoose ODM
- **JWT** - Authentication tokens
- **bcryptjs** - Password hashing
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

### Frontend
- **React** - UI library (v17.0.2)
- **React Router** - Client-side routing (v5.3.0)
- **Redux** - State management
- **React Bootstrap** - UI components
- **Axios** - HTTP client

## 📁 Project Structure

```
LOGIN/
├── backend/
│   ├── adminroutes/      # Admin-specific routes
│   ├── config/           # Database and configuration files
│   ├── controllers/      # Request handlers
│   ├── middlewares/      # Custom middleware (error handling, etc.)
│   ├── models/           # Mongoose models
│   ├── routes/           # API routes
│   ├── utils/            # Utility functions (token generation, etc.)
│   └── server.js         # Express server entry point
├── frontend/
│   ├── public/           # Static files
│   └── src/
│       ├── actions/      # Redux actions
│       ├── adminuser/    # Admin user components
│       ├── components/   # Reusable React components
│       ├── constants/    # Redux constants
│       ├── images/       # Image assets
│       ├── reducers/     # Redux reducers
│       ├── screens/      # Page components
│       │   ├── LandingPage/
│       │   ├── LoginScreen/
│       │   ├── RegisterScreen/
│       │   ├── ProfileScreen/
│       │   └── MyNotes/
│       ├── App.js        # Main application component
│       └── store.js      # Redux store configuration
├── .env                  # Environment variables
└── package.json          # Root package configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v12 or higher)
- MongoDB database (local or MongoDB Atlas)
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/jithmapv/LOGIN.git
   cd LOGIN
   ```

2. Install dependencies for both backend and frontend:
   ```bash
   npm install
   cd frontend
   npm install
   cd ..
   ```

3. Configure environment variables:
   Create a `.env` file in the root directory with the following variables:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   NODE_ENV=development
   JWT_SECRET=your_jwt_secret_key
   ```

### Running the Application

- **Development mode (both frontend and backend concurrently):**
  ```bash
  npm run dev
  ```

- **Backend only:**
  ```bash
  npm start
  ```

- **Frontend only:**
  ```bash
  npm run client
  ```

The backend server will run on `http://localhost:5000` and the frontend on `http://localhost:3000`.

## 🔌 API Endpoints

### User Routes (`/api/users`)
- `POST /api/users` - Register a new user
- `POST /api/users/login` - User login
- `GET /api/users/profile` - Get user profile (protected)
- `PUT /api/users/profile` - Update user profile (protected)

### Admin Routes (`/admin`)
- Admin user management endpoints
