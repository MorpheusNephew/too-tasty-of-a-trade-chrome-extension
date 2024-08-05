const getProfitToAccept = (strikeDiff: number, multiplier: number): number => {
  return Number((strikeDiff * multiplier * 100).toFixed(2));
};

const MINIMUM_AMOUNT_PER_DOLLAR_WIDE = 0.33;
const MAXIMUM_AMOUNT_PER_DOLLAR_WIDE = 0.44;

export const getMinimumProfitToAccept = (strikeDiff: number) =>
  getProfitToAccept(strikeDiff, MINIMUM_AMOUNT_PER_DOLLAR_WIDE);

export const getMaximumProfitToAccept = (strikeDiff: number) =>
  getProfitToAccept(strikeDiff, MAXIMUM_AMOUNT_PER_DOLLAR_WIDE);

export const getStrikePriceDiff = (strikePrices: number[]) => {
  const numOfPrices = strikePrices.length;
  let diff = 0;

  for (let i = 0; i < numOfPrices; i++) {
    if (i % 2 === 0) {
      diff += strikePrices[i];
    } else {
      diff -= strikePrices[i];
    }
  }

  return Number(Math.abs(diff).toFixed(2));
};
