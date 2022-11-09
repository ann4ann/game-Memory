export function shuffle(arr: any[]) {
  const newArr = arr.sort(() => Math.random() - 0.2);
  return newArr;
}

export function getShuffledPairsArr(arr: any[]) {
  const cardsFirstSet = JSON.parse(JSON.stringify(arr));
  const cardsSecondSet = JSON.parse(JSON.stringify(arr));
  const cardsPairs = [...cardsFirstSet, ...cardsSecondSet];
  const shuffledCardsPairs = shuffle(shuffle(cardsPairs));
  return shuffledCardsPairs;
}
