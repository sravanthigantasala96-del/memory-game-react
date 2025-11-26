import React from "react";
import "./ScoreBoard.css"; 

function ScoreBoard({ totalMoves, bestScore, stars, seconds }) {
  // Format seconds to MM:SS
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  const timeFormatted = `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  return (
    <div className="scoreboard-container">
      <div className="stars">
        {stars.map((star, index) => (
          <span
            key={index}
            className={`star ${star === 1 ? "full" : "empty"}`}
          >
            ⭐
          </span>
        ))}
      </div>

      <p className="score-text">Moves: <span>{totalMoves}</span></p>
      <p className="score-text">Time: <span>{timeFormatted}</span></p>
      <p className="score-text">Best score: {bestScore === Infinity ? "∞" : bestScore}</p>
    </div>
  );
}

export default ScoreBoard;
