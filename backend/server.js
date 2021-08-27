import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Im here baby");
});

app.listen(5000, (req, res) => {
  console.log("server is ready baby");
});
