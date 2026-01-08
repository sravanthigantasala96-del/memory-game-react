const useBestScore = ({ level }) => {
  const bestScoreLocalStorageKey = `level-${level}-best-score`;
  const bestScoreInLocalStorage = localStorage.getItem(
    bestScoreLocalStorageKey
  );
  let bestScore = Infinity;
  if (bestScoreInLocalStorage) {
    bestScore = parseInt(bestScoreInLocalStorage);
  }
  const setBestScore = (newScore) => {
    if (newScore < bestScore) {
      bestScore = newScore;
      localStorage.setItem(bestScoreLocalStorageKey, bestScore);
    }
  };
  return [bestScore, setBestScore];
};

export default useBestScore;
