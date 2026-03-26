const express = require("express");
const path = require("path");
const app = express();

app.use(express.json());

app.use(express.static(__dirname));

// "fake data"
let plans = [
  { id: 1, name: "Basic", price: 10 },
  { id: 2, name: "Pro", price: 20 },
];

// GET
app.get("/api/plans", (req, res) => {
  res.json(plans);
});

// POST
app.post("/api/plans", (req, res) => {
  const newPlan = {
    id: plans.length + 1,
    name: req.body.name,
    price: req.body.price,
  };

  plans.push(newPlan);

  res.status(201).json(newPlan);
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
