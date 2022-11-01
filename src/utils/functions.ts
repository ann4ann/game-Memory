export function shuffle(arr: any[]) {
  const newArr = arr.sort(() => Math.random() - 0.2);
  return newArr;
}
