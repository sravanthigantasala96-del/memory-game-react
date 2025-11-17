import ReactCardFlip from "react-card-flip";

const Card = ({ id, isFlipped, isMatched, onClick, image, level }) => {
  return (
    <ReactCardFlip
      isFlipped={isFlipped || isMatched}
      flipDirection="horizontal"
    >
      {/* FRONT SIDE */}
      <div
        className={`frontCard-${level} ${isMatched ? "matched" : ""}`}
        onClick={() => onClick(id)}
      />

      {/* Front of the card (shown when not flipped) */}
      {/*<div 
        className={"frontCard-"+level}
        onClick={() => onClick(id)}
      /> */}

      {/* BACK SIDE */}
      <div className={`backCard ${isMatched ? "matched" : ""}`}>
        <img src={image} alt="card" />
      </div>

      {/* Back of the card (shown when flipped) */}
      {/*<div 
        className="backCard"
        // onClick={() => onClick(id)}
      >
        <img 
          src={image} 
          alt="card"
        />
      </div>*/}
    </ReactCardFlip>
  );
};

export default Card;
