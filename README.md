<<<<<<< HEAD
# Apna Dentist

Apna Dentist is a full-stack MERN web application built for a modern dental clinic. It provides an intuitive interface for patients to book appointments, view services, and learn about the clinic. It also includes an admin dashboard for managing appointments and patients efficiently.

## Tech Stack

**Frontend:**
- React (with Vite)
- Tailwind CSS
- React Router DOM
- Axios (for API requests)
- Framer Motion (for animations)
- React Icons & React Hot Toast

**Backend:**
- Node.js & Express.js
- MongoDB & Mongoose
- JSON Web Token (JWT) & Bcrypt (for authentication)
- Nodemailer (for emails)
- Multer (for file uploads)
- CORS & Dotenv

## Installation Steps

1. **Clone the repository** (or navigate to the project directory):
   ```bash
   cd apna-dentist
   ```

2. **Install Frontend Dependencies:**
   ```bash
   cd client
   npm install
   ```

3. **Install Backend Dependencies:**
   ```bash
   cd ../server
   npm install
   ```

4. **Environment Variables:**
   - In `client/.env`:
     ```env
     VITE_API_URL=http://localhost:5000/api
     ```
   - In `server/.env`:
     ```env
     PORT=5000
     MONGO_URI=mongodb://localhost:27017/apna-dentist
     JWT_SECRET=your_jwt_secret_here
     EMAIL_USER=your_email@gmail.com
     EMAIL_PASS=your_email_app_password
     NODE_ENV=development
     ```

5. **Start the Application:**
   Open two terminals.
   
   **Terminal 1 (Backend):**
   ```bash
   cd server
   npm run dev
   ```

   **Terminal 2 (Frontend):**
   ```bash
   cd client
   npm run dev
   ```

## Folder Structure

```
apna-dentist/
├── client/                     # React Frontend
│   ├── public/                 # Static assets
│   ├── src/
│   │   ├── assets/             # Images and icons
│   │   ├── components/         # Reusable UI components (common, home, admin)
│   │   ├── context/            # React Context API providers (Auth, App)
│   │   ├── hooks/              # Custom React hooks
│   │   ├── pages/              # Page components (Home, About, Dashboard, etc.)
│   │   ├── routes/             # App routing configuration
│   │   ├── services/           # API services & Axios configuration
│   │   ├── utils/              # Helper functions (date formatters, validators)
│   │   ├── App.jsx             # Main App component
│   │   ├── main.jsx            # React entry point
│   │   └── index.css           # Global styles and Tailwind directives
│   └── tailwind.config.js      # Tailwind CSS configuration
│
└── server/                     # Node.js Backend
    ├── config/                 # Database configuration
    ├── controllers/            # Route controllers (logic)
    ├── middleware/             # Custom Express middlewares (Auth, Error Handler)
    ├── models/                 # Mongoose database models (User, Appointment, Service)
    ├── routes/                 # Express API routes
    ├── utils/                  # Helper utilities (Token generator, Email service)
    ├── uploads/                # Directory for user-uploaded files
    ├── app.js                  # Express app setup
    └── server.js               # Main entry point for the backend server
```

## Available Scripts

### In `client/`
- `npm run dev`: Starts the Vite development server.
- `npm run build`: Builds the frontend for production.
- `npm run lint`: Runs ESLint on the frontend codebase.
- `npm run preview`: Previews the production build locally.

### In `server/`
- `npm start`: Starts the backend server using Node.
- `npm run dev`: Starts the backend server in watch mode using `node --watch`.

## API Endpoints List

*Note: All endpoints are prefixed with `/api`*

### Authentication (`/api/auth`)
- `POST /register` - Register a new user
- `POST /login` - Login user & get token
- `GET /profile` - Get current logged-in user profile (Protected)

### Appointments (`/api/appointments`)
- `POST /` - Book a new appointment (Protected)
- `GET /` - Get all user appointments (Protected)
- `GET /all` - Get all appointments (Admin)
- `PUT /:id/status` - Update appointment status (Admin)

### Services (`/api/services`)
- `GET /` - Get all clinic services
- `POST /` - Add a new service (Admin)
- `PUT /:id` - Update an existing service (Admin)
- `DELETE /:id` - Delete a service (Admin)

### Patients (`/api/patients`)
- `GET /` - Get all patients list (Admin)
- `GET /:id` - Get specific patient details (Admin)

### Contact (`/api/contact`)
- `POST /` - Submit a contact us message
=======
# city-dental
>>>>>>> 30e306546106de2918ac19385770d945fb133c43
