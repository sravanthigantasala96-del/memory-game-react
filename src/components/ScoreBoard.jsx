import React from "react";

function ScoreBoard(props) {
  const { totalMoves, bestScore } = props;
  return (
    <div>
      <div className="score-info">
        <p>
          Moves <span>{totalMoves}</span>
        </p>
        <p>Time 3:05</p>
        <p>Best score :{bestScore == Infinity ? "∞" : bestScore}</p>
      </div>
    </div>
  );
}

export default ScoreBoard;
