// p5-server.js
const express = require("express");
const app = express();
const PORT = 4000;

const {
  createSession,
  submitGuess,
  getGameState
} = require("./p5-game");

app.use(express.json());
app.use(express.static("public"));

app.get("/api/new-game", (req, res) => {
  res.json(createSession());
});

app.get("/api/status/:id", (req, res) => {
  const id = parseInt(req.params.id);
  res.json(getGameState(id));
});

app.post("/api/guess", (req, res) => {
  const { id, guess } = req.body;
  res.json(submitGuess(id, guess));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
