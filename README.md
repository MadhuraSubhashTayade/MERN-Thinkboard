MERN Thinkboard

A collaborative digital thinkboard application built using the MERN stack (MongoDB, Express, React, Node.js), now fully dockerized for easier development and deployment.

🚀 Tech Stack

Frontend

- React 19, Vite 7, TailwindCSS 3, DaisyUI 4
- React Router 7, Lucide React, React Hot Toast, Axios
- TypeScript 5.8

Backend

- Node.js, Express 4, Mongoose 8, MongoDB
- Upstash Redis, CORS, Dotenv, Nodemon

Containerization

- Docker & Docker Compose for full-stack deployment

-----------------------------------------------------------------------------------------------------------------------------------------------------------------

✨ Features

- Create and manage boards
- Add and edit items
- Rate limiting via Upstash Redis
- Fully responsive design
- Dockerized for easy development and deployment

-----------------------------------------------------------------------------------------------------------------------------------------------------------------

📂 Folder Structure

<pre>├── backend
│   ├── src
│   │   ├── server.js
│   │   ├── routes
│   │   ├── models
│   │   ├── middleware
│   │   ├── controllers
│   │   └── config
│   └── package.json
│   └── Dockerfile   
├── frontend
│   ├── src
│   ├── public
│   └── package.json
│   └── Dockerfile    
├── docker-compose.yml
└── README.md</pre>

-----------------------------------------------------------------------------------------------------------------------------------------------------------------

⚙️ Installation & Setup

1. Clone the repository
  
   `git clone https://github.com/MadhuraSubhashTayade/MERN-Thinkboard.git`

   `cd MERN-Thinkboard`

2. Environment Variables
  
   Create `.env` files for backend and frontend:


   Backend (backend/.env)
   - PORT=5000
   - MONGO_URI=your_mongodb_connection_string
   - UPSTASH_REDIS_URL=your_upstash_redis_url


   Frontend (frontend/.env)
   - VITE_API_URL=http://localhost:5000

4. Run Full Stack with Docker
   Build and start all services (frontend, backend, MongoDB, Redis):
   - docker-compose up --build
   
   Stop all services:
   - docker-compose down
   
   After this, your app should be available at:
   - Frontend: http://localhost:5173
   - Backend: http://localhost:5001

6. Manual Development

   You can still run frontend and backend locally without Docker:

   Backend

   `cd backend
   npm install
   npm run dev`

   Frontend

   `cd frontend
   npm install
   npm run dev`

-----------------------------------------------------------------------------------------------------------------------------------------------------------------

🌍 Deployment

Dockerized app can be deployed to AWS ECS, Docker Hub, Render, Railway, etc.
Ensure MongoDB and Redis connections are correctly set up for production.
