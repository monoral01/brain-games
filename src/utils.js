function getRandomNumber(min = 0, max) {
  return Math.floor(min + Math.random() * (max - min));
}
export default getRandomNumber;
