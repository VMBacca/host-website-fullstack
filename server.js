const express = require("express");
const path = require("path");

const app = express();

// Middleware
app.use(express.json());

// memory "bank"
let users = [];

// API Routes

// GET - list users
app.get("/api/users", (req, res) => {
  res.json(users);
});

// POST - add users
app.post("/api/users", (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  // validation
  if (!firstName || !lastName || !email || !password) {
    return res.status(400).json({ error: "Dados incompletos" });
  }

  const newUser = { firstName, lastName, email };
  users.push(newUser);

  res.status(201).json(newUser);
});

// API test route
app.get("/teste", (req, res) => {
  res.send("API OK");
});

// Static files

app.use(express.static(path.join(__dirname, "public")));

// Start server

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
