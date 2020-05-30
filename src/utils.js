export const addDotsToNumber = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

export const round = (num, afterDot = 0) => {
  const mult = 10 ** afterDot;
  return Math.round(num * mult) / mult;
};
