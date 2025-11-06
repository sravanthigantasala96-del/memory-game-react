**Project Overview**
A simple yet complete React Memory Game built using modern React concepts:

- Functional Components
- useState, useEffect, useContext
- External package (react-card-flip)
- Persistent storage (localStorage)
- Responsive UI

 ✅ **Completed (Base Setup)**

- Create React project with basic folder structure
- Components: GameBoard.jsx, ScoreBoard.jsx
- Layout with 5x4 grid (20 cards)
- Basic styling with CSS Grid
  


**Task List**

**1. Game Board Enhancements (Card visuals + flipping)**
  - Card Flipping use the package react-card-flip
  - Create Card.jsx component
      -Accept props: isFlipped, frontImage, onClick. Renders front and back sides.
  - Add images for cards
      - Add ~10 unique images under /src/assets/cards/. Import and assign pairs in GameBoard.
  - Shuffle cards for each game
      - using useEffect, useState concepts
   
**2. Core Game Logic (Flip, Match, Score)**
  - Track flipped cards
  - Check for matches
  - Lock board temporarily
  - Update flips count
  - Permanent color for matched cards

**3. Global Contexts & Best Score**  [optional - only if we have time]
  - Create GameContext.js
  - Integrate Context in components
  - Persist best score in localStorage

**4.Finishing Touches**
  - Add End Game message
  - Restart/ New game button
  - Responsive Layout


