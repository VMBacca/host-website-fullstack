# Host Website Fullstack

![Build Status](https://github.com/VMBacca/Host-Website/actions/workflows/ci.yml/badge.svg)

A web application that started as a static website and was evolved into a **fullstack application**, featuring a REST API, automated tests, and CI/CD pipeline.

---

## Demo

<p align="center">
  <img src="https://user-images.githubusercontent.com/102605061/164043853-ecaa84fe-2364-4b28-a9e3-dfb4b4d8aa1e.gif" width="60%">
</p>

<p align="center">
  <img src="https://user-images.githubusercontent.com/102605061/164025140-1f6ea9a3-95c0-4f6d-87a1-cd136a3a1af1.jpg" width="40%">
</p>

---

## About the Project

This project simulates a hosting platform with plans (Basic, Pro, etc.), allowing users to:

- Retrieve plans via API
- Create new plans (POST request)
- Serve frontend and backend together

---

## Technologies

- **Node.js + Express** → Backend and REST API
- **HTML, CSS, JavaScript** → Frontend
- **Docker** → Containerization
- **Cypress** → End-to-end testing
- **GitHub Actions** → CI/CD

---

## Project Structure

```
host-website/
├── cypress/
├── index.html
├── server.js
├── package.json
├── Dockerfile
└── .github/workflows/ci.yml
```

---

## Running the Project

### Run locally

```bash
npm install
npm start
```

Access:

```
http://localhost:3000
```

---

### Run with Docker

```bash
docker build -t host-website .
docker run -p 3000:3000 host-website
```

---

## API

### GET /api/plans

Returns all plans:

```json
[
  { "id": 1, "name": "Basic", "price": 10 },
  { "id": 2, "name": "Pro", "price": 20 }
]
```

---

### POST /api/plans

Creates a new plan:

```json
{
  "name": "Enterprise",
  "price": 50
}
```

---

## Tests

Run Cypress tests:

```bash
npx cypress open
```

or

```bash
npx cypress run
```

---

## CI/CD

This project uses **GitHub Actions** to:

- Install dependencies
- Start the server
- Run automated tests

✔ Triggered on every push to the repository

---

## Project Evolution

This project evolved from:

- Static website
- Fullstack application with REST API
- Automated testing with Cypress
- Docker containerization
- CI/CD pipeline integration

---

## Author

Developed by **Vinicius Marcondes Bacca**

---

## Purpose

This project demonstrates skills in:

- Backend development
- Test automation (QA)
- Continuous Integration
- Software engineering best practices
