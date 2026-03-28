const express = require("express");
const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

let lastDonation = null;

app.post("/webhook", (req, res) => {
  lastDonation = req.body;
  console.log("DONATION:", lastDonation);
  res.send("ok");
});

app.get("/events", (req, res) => {
  res.json(lastDonation || {});
});

app.listen(3000, () => console.log("Server running"));
