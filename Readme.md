# Krito

**Krito** is a full-stack CLI scaffolding tool that kickstarts modern web apps with an optimized developer experience.

It sets up a project with:

- **Frontend**: Vite + React + Tailwind CSS + React Router + Axios + Lucide React
- **Backend**: Express.js + MongoDB (via Mongoose) + Dotenv + CORS + Modular Structure
- **Dev Tools**: Nodemon (for backend development)

Created by **Satyam Rana**, Krito helps you avoid repetitive setup and dive straight into building.

---

## Features

- Instant full-stack project setup with one command
- Clean folder structure with `frontend` and `backend`
- Pre-configured Tailwind CSS and Vite plugin integration
- React Router and Axios pre-installed
- Express server setup with routing, controllers, models, and config
- MongoDB integration via Mongoose
- .env files for both frontend and backend
- Development-ready tooling like Nodemon
- Zero configuration required

---

## Installation

```bash
npm install -g Krito
````


---

## Usage

```bash
Krito my-app
```

This creates a new full-stack app named `my-app`.

---

## Project Structure

```
my-app/
├── frontend/       # React + Vite + Tailwind + React Router + Axios + Lucide
│   ├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   ├── vite.config.js
│   └── .env
├── backend/        # Express + MongoDB + CORS + Dotenv + Mongoose
│   ├── server.js
│   ├── routes/
│   ├── models/
│   ├── controllers/
│   ├── config/dbConfig.js
│   └── .env
```

---

## Technologies Used

### Frontend

* [Vite](https://vitejs.dev/)
* [React](https://react.dev/)
* [Tailwind CSS](https://tailwindcss.com/)
* [React Router DOM](https://reactrouter.com/)
* [Axios](https://axios-http.com/)
* [Lucide React](https://lucide.dev/)

### Backend

* [Express.js](https://expressjs.com/)
* [Mongoose](https://mongoosejs.com/) (MongoDB ORM)
* [Dotenv](https://www.npmjs.com/package/dotenv)
* [CORS](https://www.npmjs.com/package/cors)
* [Nodemon](https://nodemon.io/) (Dev tool)

---

## Getting Started

```bash
# Start frontend
cd my-app/frontend
npm run dev

# Start backend
cd my-app/backend
npm run dev
```

---

## License

ISC

---

## Author

**Satyam Rana**
Curiosity is the real compiler.

