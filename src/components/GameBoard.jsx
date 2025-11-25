import React, { useState, useEffect } from "react";
import Card from "./Card";

// Import all card images
import butterfly from "../assets/cardImages/butterfly.png";
import dove from "../assets/cardImages/dove.png";
import dragon from "../assets/cardImages/dragon.png";
import flamingo from "../assets/cardImages/flamingo.png";
import ladybug from "../assets/cardImages/ladybug.png";
import peacock from "../assets/cardImages/peacock.png";
import penguin from "../assets/cardImages/penguin.png";
import phoenix from "../assets/cardImages/phoenix.png";
import toucan from "../assets/cardImages/toucan.png";
import unicorn from "../assets/cardImages/unicorn.png";
import ScoreBoard from "./ScoreBoard";
import useBestScore from "./useBestScore";
import EndGameMessageModal from "./EndGameMessageModal";

const GameBoard = () => {
  const level = new URLSearchParams(window.location.search).get("level");
  const cardImages = [
    butterfly,
    dove,
    dragon,
    flamingo,
    ladybug,
    peacock,
    penguin,
    phoenix,
    toucan,
    unicorn,
  ];
// STAR RATING STATE
  const [stars, setStars] = useState([1, 1, 1, 1, 1]);

  function updateStarRating(flipCount) {
    const totalStars = 5;
    let newStars = Array(totalStars).fill(1);

    if (flipCount > 12 && flipCount <= 20) newStars[4] = 0.1;
    else if (flipCount > 20 && flipCount <= 28)
      (newStars[3] = newStars[4] = 0.1);
    else if (flipCount > 28 && flipCount <= 32)
      (newStars[2] = newStars[3] = newStars[4] = 0.1);
    else if (flipCount > 32)
      newStars = [1, 0.1, 0.1, 0.1, 0.1];

    setStars(newStars);
  }

  // GAME STATES
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [freezeBoard, setFreezeBoard] = useState(false);
  const [totalFlips, setTotalFlips] = useState(0);
  const [bestScore, setBestScore] = useBestScore({ level });
  const [gameover, setGameOver] = useState(false);

  // Update star rating based on total flips
  useEffect(() => {
    updateStarRating(totalFlips);
  }, [totalFlips]);

  // Create pairs of cards
  const createBoard = () => {
    //Need to create only required number of pairs based on level
    // 3x3 = 6 pairs = 6 unique images
    // 4x4 = 8 pairs = 8 unique images
    // 5x4 = 10 pairs = 10 unique images

    console.log("Level Selected ::: " + level);
    let selectedImages = [];
    if (level === "easy") {
      selectedImages = cardImages.slice(0, 6);
    } else if (level === "medium") {
      selectedImages = cardImages.slice(0, 8);
    } else if (level === "hard") {
      selectedImages = cardImages;
    }
    const pairs = [...selectedImages, ...selectedImages];

    return pairs
      .map((image, index) => ({
        id: index,
        image: image,
        isFlipped: false,
        isMatched: false,
      }))
      .sort(() => Math.random() - 0.5);
  };
  useEffect(() => {
    setCards(createBoard());
    console.log("Total Flips  :::: " + totalFlips);
  }, []);

  useEffect(() => {
    console.log("Flipped Cards ::::: " + flippedCards);
    console.log("Freeze :::: " + freezeBoard);
    console.log("Total Flips 2 :::: " + totalFlips);
    if (flippedCards.length >= 2) {
      setFreezeBoard(true);
      const card1 = cards.find((card) => card.id === flippedCards[0]);
      const card2 = cards.find((card) => card.id === flippedCards[1]);

      if (card1.image === card2.image) {
        console.log("It's a Match!!!");
        const matchedCards = cards.map((card) => {
          if (card.id === card1.id || card.id === card2.id) {
            return { ...card, isMatched: true };
          }
          return card;
        });
        //styling-color
        setCards(matchedCards);
        resetCards();

        //setMatchedCards(matchedCards);
        //resetCards();
      } else {
        console.log("Not a Match!!");
        setTimeout(() => {
          setCards((prevCards) =>
            prevCards.map((card) =>
              flippedCards.includes(card.id)
                ? { ...card, isFlipped: false }
                : card
            )
          );
          resetCards();
        }, 1000);
      }
    }
  }, [flippedCards]);

  const resetCards = () => {
    const _totalFlips = totalFlips + 1;
    setFlippedCards([]);
    setFreezeBoard(false);
    setTotalFlips(_totalFlips);
    const flippedCardsCount = cards.filter((card) => card.isFlipped).length;
    if (cards.length == flippedCardsCount) {
      setGameOver(true);
      setBestScore(_totalFlips);
    }
  };
  const restartGame = () => {
    setCards(createBoard());
    setFlippedCards([]);
    setFreezeBoard(false);
    setMatchedCards([]);
    setTotalFlips(0);
    setGameOver(false);
  };

  const handleCardClick = (cardId) => {
    console.log("Card Id ::: " + cardId);

    if (freezeBoard) return;

    const newCards = cards.map((card) => {
      if (card.id === cardId) {
        return { ...card, isFlipped: true };
      }
      return card;
    });

    setCards(newCards);
    setFlippedCards((prev) => [...prev, cardId]);
  };

  return (
    <div className="game-container">
      <ScoreBoard totalMoves={totalFlips} bestScore={bestScore} />
      <div className={"Cards-" + level}>
        {cards.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            isFlipped={card.isFlipped}
            //for style-colour

            isMatched={card.isMatched}
            image={card.image}
            onClick={handleCardClick}
            level={level}
          />
        ))}
      </div>
      <button
        className="homeButton"
        onClick={() => (window.location.href = "/")}
      >
        Home
      </button>
      <div>
        <EndGameMessageModal
          totalMoves={totalFlips}
          bestScore={bestScore}
          isOpen={gameover}
          onRestart={restartGame}
        />
      </div>
    </div>
  );
};

export default GameBoard;
