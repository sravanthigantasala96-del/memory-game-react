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

const GameBoard = () => {
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

  // Create pairs of cards
  const createBoard = () => {
    const pairs = [...cardImages, ...cardImages];
    return pairs
      .map((image, index) => ({
        id: index,
        image: image,
        isFlipped: false,
        isMatched: false,
      }))
      .sort(() => Math.random() - 0.5);
  };

  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [freezeBoard, setFreezeBoard] = useState(false);
  const [matchedCards, setMatchedCards] = useState([]);
  const [totalFlips, setTotalFlips] = useState(0);

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
        setMatchedCards(matchedCards);
        resetCards();
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
    setFlippedCards([]);
    setFreezeBoard(false);
    setTotalFlips((prev) => prev + 1);
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
    <div className="Cards">
      {cards.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          isFlipped={card.isFlipped}
          image={card.image}
          onClick={handleCardClick}
        />
      ))}
    </div>
  );
};

export default GameBoard;
