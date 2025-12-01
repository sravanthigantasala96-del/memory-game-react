import React from "react";

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
            className={`star-icon ${star === 1 ? "full" : "empty"}`} // Added star-icon class
          >
            ⭐
          </span>
        ))}
      </div>

      <p className="score-text">Moves: <span>{totalMoves}</span></p>
      <p className="score-text">Time: <span>{timeFormatted}</span></p>
      {/* Changed Best score text for better alignment in a flex container */}
      <p className="score-text">Best score: <span>{bestScore === Infinity ? "-" : bestScore}</span></p>
    </div>
  );
}

export default ScoreBoard;