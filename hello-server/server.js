const express = require("express");

const app = express();
const PORT = 3000;


app.get("/", (req, res) => {
  res.send("Welcome to Hello Server 🚀");
});


app.get("/about", (req, res) => {
  res.send("This is the About page");
});


app.get("/contact", (req, res) => {
  res.send("Contact us at: example@gmail.com");
});


app.get("/hello", (req, res) => {
  res.send("Hello from Node.js server 👋");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});