export function generateRandom(min, max) {
  const result = Math.random() * (max - min) + min;
  console.log(result);
  return result;
}
