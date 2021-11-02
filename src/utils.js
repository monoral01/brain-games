export default function getRandomNumber(min, max) {
  return Math.floor(min + Math.random() * (max - min));
}
