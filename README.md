# User Authentication System (MERN)

A full-stack user authentication and profile management system built with the MERN stack (MongoDB, Express.js, React, Node.js).

**Academic Project:** This project was developed for academic purposes at **SLIIT** (2nd Year, 2nd Semester) for the **IT2080 – IT Project** module.

---

## ✨ Features

- User registration and login with JWT authentication
- Password hashing with bcryptjs
- User profile viewing and updating
- User account deletion
- Admin panel to view all registered users
- Centralized error handling middleware
- CORS-enabled REST API

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
- Redux (with Redux Thunk)
- React Bootstrap
- Axios

---

## 📁 Project Structure

```text
user-management-mern/
├── backend/
│   ├── adminroutes/      # Admin-specific routes
│   ├── config/           # Database connection configuration
│   ├── controllers/      # Request handlers (register, login, update profile)
│   ├── middlewares/      # Custom middleware (error handling)
│   ├── models/           # Mongoose models (User schema)
│   ├── routes/           # User API routes
│   ├── utils/            # Utility functions (JWT token generation)
│   └── server.js         # Express server entry point
├── frontend/
│   ├── public/           # Static files
│   └── src/
│       ├── actions/      # Redux action creators
│       ├── adminuser/    # Admin user components
│       ├── components/   # Reusable React components (Header, Footer)
│       ├── constants/    # Redux action type constants
│       ├── reducers/     # Redux reducers
│       ├── screens/      # Page components (Login, Register, Profile)
│       ├── App.js        # Main application component with routing
│       └── store.js      # Redux store configuration
├── .env                  # Environment variables (do not commit)
├── .gitignore            # Git ignore rules
└── package.json          # Root package configuration
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v12 or higher)
- [MongoDB](https://www.mongodb.com/) database (local or [MongoDB Atlas](https://www.mongodb.com/atlas))
- npm (comes with Node.js)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/jithmapv/user-management-mern.git
   cd user-management-mern
   ```

2. Install backend dependencies:

   ```bash
   npm install
   ```

3. Install frontend dependencies:

   ```bash
   cd frontend
   npm install
   cd ..
   ```

### Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
NODE_ENV=development
JWT_SECRET=your_jwt_secret_key
```

> **Note:** Never commit your `.env` file to version control. It may contain sensitive credentials.

---

## ▶️ Running the Application

### Development Mode (Frontend + Backend concurrently)

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

Once running, access the application at:

- **Frontend:** [http://localhost:3000](http://localhost:3000)
- **Backend API:** [http://localhost:5000](http://localhost:5000)

---

## 🔌 API Endpoints

### User Routes (`/api/users`)

| Method   | Endpoint                | Description              |
| -------- | ----------------------- | ------------------------ |
| `POST`   | `/api/users`            | Register a new user      |
| `POST`   | `/api/users/login`      | Authenticate (login)     |
| `POST`   | `/api/users/profile`    | Update user profile      |
| `DELETE` | `/api/users/delete/:id` | Delete a user by ID      |

### Admin Routes (`/admin`)

| Method | Endpoint       | Description              |
| ------ | -------------- | ------------------------ |
| `GET`  | `/admin/user`  | Get all registered users |

---

## 🖥️ Frontend Routes

| Path            | Component        | Description            |
| --------------- | ---------------- | ---------------------- |
| `/`             | LandingPage      | Home / landing page    |
| `/login`        | LoginScreen      | User login page        |
| `/register`     | RegisterScreen   | User registration page |
| `/profile`      | ProfileScreen    | User profile page      |
| `/admin`        | AdminComponent   | Admin dashboard        |
| `/admin/users`  | AllUsers         | View all users (admin) |

---

## 📌 Notes

- This project is intended for learning and academic use.
- Ensure your `.env` file is **not** committed to the repository.
- The backend uses [nodemon](https://nodemon.io/) for automatic server restarts during development.
- The frontend proxies API requests to `http://127.0.0.1:5000` during development.

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add your feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the [ISC License](https://opensource.org/licenses/ISC).

---

## 📚 Module Information

| Detail           | Value                    |
| ---------------- | ------------------------ |
| **Institute**    | SLIIT                    |
| **Year/Semester**| 2nd Year, 2nd Semester   |
| **Module**       | IT2080 – IT Project      |

---
