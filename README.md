# Restaurant Reservation App — Fullstack
Restaurant Reservation App is a fullstack web application that allows customers to book a table at a restaurant through a clean, simple form. Built with React on the frontend and Node.js + Express on the backend, it handles reservation submissions via a REST API, stores data in a MongoDB database, and gives instant feedback to users through toast notifications. On successful booking, users are redirected to a confirmation page — keeping the experience smooth and intuitive.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Project structure](#project-structure)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

---

## Overview

### The challenge

Users should be able to:

- Submit a reservation form with their details
- Receive real-time toast notifications on success or failure
- Be redirected to a dedicated success page on completion
- See a 404 page for any unmatched route

### Links

- **Live Site:** [Add your live URL here](#)
- **Solution URL:** [Add your frontend repo URL here](#)

---

## My process

### Built with

**Frontend**
- [React](https://reactjs.org/) — UI library
- [React Router DOM](https://reactrouter.com/) — Client-side routing
- [react-hot-toast](https://react-hot-toast.com/) — Toast notifications
- CSS / Tailwind (add whichever applies)

**Backend**
- [Node.js](https://nodejs.org/) + [Express](https://expressjs.com/) — REST API server
- [CORS](https://github.com/expressjs/cors) — Cross-origin resource sharing
- [dotenv](https://github.com/motdotla/dotenv) — Environment variable management
- MongoDB / Mongoose (add your DB if applicable)

### Project structure

```
root/
├── backend/
│   ├── config/
│   │   └── config.env          # Environment variables
│   ├── database/
│   │   └── dbConnection.js     # Database connection
│   ├── error/
│   │   └── error.js            # Global error middleware
│   ├── routes/
│   │   └── reservationRoutes.js
│   └── app.js
│
└── frontend/
    ├── src/
    │   ├── Pages/
    │   │   ├── Home.jsx
    │   │   ├── Success.jsx
    │   │   └── NotFound.jsx
    │   └── App.jsx
    └── package.json
```

### What I learned

Working on this project reinforced how to wire a React SPA to an Express REST API, handle cross-origin requests with the CORS middleware, and manage environment-specific configuration cleanly using `dotenv`.

```js
// Restricting CORS to the frontend origin only
app.use(cors({
  origin: [process.env.FRONTEND_URL],
  methods: ["GET", "POST"],
  credentials: true,
}));
```

### Continued development

- Add form validation on both client and server
- Implement email confirmation after a reservation is submitted
- Add admin dashboard to view/manage reservations
- Write unit and integration tests

### Useful resources

- [Express CORS docs](https://expressjs.com/en/resources/middleware/cors.html)
- [React Router v6 guide](https://reactrouter.com/en/main/start/overview)
- [react-hot-toast docs](https://react-hot-toast.com/docs)

---


## Author

- **Name** — [Shubhangi Mishra](#)
- **GitHub** — (https://github.com/ShubhangiMishra215)

---


