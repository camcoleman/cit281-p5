// public/script.js
let gameId = null;

async function startGame() {
  const res = await fetch("/api/new-game");
  const data = await res.json();
  gameId = data.id;
  document.getElementById("game-id").textContent = gameId;
  document.getElementById("game-area").style.display = "block";
  document.getElementById("result").textContent = "";
}

async function submitGuess() {
  const guess = parseInt(document.getElementById("guess-input").value);
  if (!gameId || isNaN(guess)) return;

  const res = await fetch("/api/guess", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: gameId, guess })
  });

  const data = await res.json();
  document.getElementById("result").textContent = data.message;
}
