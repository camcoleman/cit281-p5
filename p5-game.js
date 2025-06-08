// p5-game.js
const { GameSession } = require("./p5-class");

let sessions = [];
let sessionIdCounter = 1;

function createSession() {
  const session = new GameSession(sessionIdCounter++);
  sessions.push(session);
  return session.getState();
}

function submitGuess(id, guess) {
  const session = sessions.find(s => s.id === id);
  if (!session) return { error: "Session not found" };
  return session.checkGuess(guess);
}

function getGameState(id) {
  const session = sessions.find(s => s.id === id);
  return session ? session.getState() : { error: "Session not found" };
}

module.exports = {
  createSession,
  submitGuess,
  getGameState
};
