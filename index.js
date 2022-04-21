const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Yeah This Is working");
});
const users = [
  { id: 1, name: "akib", gmail: "akib@gmail.com" },
  { id: 2, name: "sabana", gmail: "sabana@gmail.com" },
  { id: 3, name: "lolita", gmail: "lolita@gmail.com" },
  { id: 4, name: "sabnor", gmail: "sabnor@gmail.com" },
  { id: 5, name: "rajjak", gmail: "rajjak@gmail.com" },
  { id: 6, name: "Sharok", gmail: "sharok@gmail.com" },
  { id: 7, name: "bobita", gmail: "bobita@gmail.com" },
];
app.get("/users", (req, res) => {
  if (req.query.name) {
    const search = req.query.name.toLowerCase();
    const match = users.filter((user) =>
      user.name.toLowerCase().includes(search)
    );
    res.send(match);
  } else {
    res.send(users);
  }
});

app.get("/user/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find((u) => u.id === id);
  res.send(user);
});
app.post("/user", (req, res) => {
  console.log("request", req.body);
  const user = req.body;
  user.id = users.length + 1;
  users.push(user);
  res.send(user);
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
