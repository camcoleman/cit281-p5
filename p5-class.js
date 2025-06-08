// p5-class.js
class GameSession {
    constructor(id) {
      this.id = id;
      this.secretNumber = Math.floor(Math.random() * 100) + 1;
      this.attempts = 0;
      this.isOver = false;
      this.lastResult = "";
    }
  
    checkGuess(guess) {
      if (this.isOver) {
        return { message: "Game over", isOver: true };
      }
  
      this.attempts++;
      if (guess === this.secretNumber) {
        this.isOver = true;
        this.lastResult = "correct";
        return { message: "Correct!", isOver: true };
      }
  
      this.lastResult = guess < this.secretNumber ? "higher" : "lower";
      return { message: this.lastResult, isOver: false };
    }
  
    getState() {
      return {
        id: this.id,
        attempts: this.attempts,
        isOver: this.isOver,
        lastResult: this.lastResult
      };
    }
  }
  
  module.exports = { GameSession };
  