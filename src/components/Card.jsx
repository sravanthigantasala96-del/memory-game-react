import ReactCardFlip from 'react-card-flip';

const Card = ({ id, isFlipped, onClick, image }) => {
  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      {/* Front of the card (shown when not flipped) */}
      <div 
        className="frontCard"
        onClick={() => onClick(id)}
      />

      {/* Back of the card (shown when flipped) */}
      <div 
        className="backCard"
        // onClick={() => onClick(id)}
      >
        <img 
          src={image} 
          alt="card"
        />
      </div>
    </ReactCardFlip>
  );
};

export default Card;


