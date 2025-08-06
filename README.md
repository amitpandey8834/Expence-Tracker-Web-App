# Expense‑Tracker Web App

A full‑stack expense management application built with React (frontend), Node.js/Express (backend), and MongoDB. Users can register, log in, and track expenses with real‑time updates. Designed for deployment with Docker.

---

## 🚀 Features

- **User authentication** — secure sign-up and login using JWT.
- **Expense management** — add, list, delete user‑specific expenses.
- **Dashboard UI** — clean React + Tailwind interface for user interaction.
- **Live balance** — calculates total expenses instantly.
- **Dockerized setup** — runs both frontend and backend via Docker Compose.
- **MongoDB** — stores expenses per user; securely separated.

---

## 🧰 Tech Stack

| Layer        | Tech Stack              |
|-------------:|--------------------------|
| Frontend     | React.js, Tailwind CSS   |
| Backend      | Node.js, Express.js      |
| Database     | MongoDB                   |
| Authentication | JWT (JSON Web Tokens) |
| Containerization | Docker, Docker Compose |
| Hosting      | (Optional) Docker on any cloud or Linux host |

---

## 🔧 Prerequisites

- Install **Docker** and **Docker Compose**
- (Optionally) Node.js / npm locally if you plan to run without Docker.
- Access to a MongoDB instance (via Docker or cloud).

---

## 🏁 Quick Start

### Using Docker (Recommended)

```bash
git clone https://github.com/amitpandey8834/Expence-Tracker-Web-App.git
cd Expence-Tracker-Web-App
docker-compose down --volumes
docker-compose up --build
Backend: http://localhost:5000

Frontend: http://localhost:3000

Local Development (Without Docker)
Backend:
bash
Copy
Edit
cd backend
npm install
# Create a .env file with MONGO_URI, JWT_SECRET, PORT
npm run dev
Frontend:
bash
Copy
Edit
cd expense-tracker-frontend
npm install
npm start
📁 Project Structure
arduino
Copy
Edit
/
├── backend
│   ├── server.js
│   ├── db.js
│   ├── routes/
│   └── models/
└── expense-tracker-frontend
    ├── src/
    ├── tailwind.config.js
    └── public/
🛠️ API Endpoints
Endpoint	Method	Purpose	Auth Required
POST /api/auth/register	POST	Register a new user	❌
POST /api/auth/login	POST	User login returns JWT	❌
GET /api/expenses	GET	Get user’s expenses	✅
POST /api/expenses	POST	Create a new expense	✅
DELETE /api/expenses/:id	DELETE	Remove an expense by ID	✅

🎨 Frontend Highlights
Clean Tailwind CSS UI with responsive design

Forms for Register and Login

Dashboard to add, view, and delete expenses

Protected routes via React Router and JWT (requires login to access dashboard)

