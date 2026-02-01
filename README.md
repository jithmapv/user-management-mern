# User Authentication System (MERN)

A full-stack user authentication and profile management system built with the MERN stack (MongoDB, Express.js, React, Node.js).

**Academic Project:** This project was developed for academic purposes at **SLIIT** (2nd Year, 2nd Semester) for the **IT2080 – IT Project** module.

---

## ✨ Features

- User registration and login with JWT authentication
- Password hashing with bcryptjs
- User profile viewing and updating
- Admin panel functionality for user management
- Protected routes and authentication middleware
- Centralized error handling middleware

---

## 🛠️ Tech Stack

### Backend

- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT (JSON Web Token)
- bcryptjs
- CORS
- dotenv

### Frontend

- React (v17.0.2)
- React Router (v5.3.0)
- Redux
- React Bootstrap
- Axios

---

## 📁 Project Structure

```text
LOGIN/
├── backend/
│   ├── adminroutes/      # Admin-specific routes
│   ├── config/           # Database and configuration files
│   ├── controllers/      # Request handlers
│   ├── middlewares/      # Custom middleware (auth, error handling, etc.)
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
│       ├── reducers/     # Redux reducers
│       ├── screens/      # Page components
│       ├── App.js        # Main application component
│       └── store.js      # Redux store configuration
├── .env                  # Environment variables
└── package.json          # Root package configuration
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v12 or higher)
- MongoDB database (local or MongoDB Atlas)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/jithmapv/user-management-mern.git
   cd LOGIN
   ```

2. Install dependencies:

   ```bash
   npm install
   cd frontend
   npm install
   cd ..
   ```

### Environment Variables

Create a `.env` file in the root directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
NODE_ENV=development
JWT_SECRET=your_jwt_secret_key
```

---

## ▶️ Running the Application

### Development Mode (Frontend + Backend)

```bash
npm run dev
```

### Backend Only

```bash
npm start
```

### Frontend Only

```bash
npm run client
```

- Backend: `http://localhost:5000`
- Frontend: `http://localhost:3000`

---

## 🔌 API Endpoints

### User Routes (`/api/users`)

- `POST /api/users` — Register a new user
- `POST /api/users/login` — User login
- `GET /api/users/profile` — Get user profile (protected)
- `PUT /api/users/profile` — Update user profile (protected)

### Admin Routes (`/admin`)

- Admin user management endpoints (protected)

---

## 📌 Notes

- This project is intended for learning and academic use.
- Ensure your `.env` file is **not** committed to the repository.

---

## 📚 Module Information

**Institute:** SLIIT
**Year/Semester:** 2nd Year, 2nd Semester
**Module:** IT2080 – IT Project

---
