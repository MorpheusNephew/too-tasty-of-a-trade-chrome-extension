export const getProbabilityOfProfit = () => {
  const pop = document
    .getElementsByClassName("POP")[0]
    .getElementsByTagName("span")[1].textContent;

  return pop;
};

export const getStrikePricesDiff = () => {
  const strikePrices = getStrikePrices();
  let diff = 0;

  const numOfStrikes = strikePrices.length;

  for (let i = 0; i < numOfStrikes; i++) {
    if (i % 2 === 0) {
      diff += strikePrices[i];
    } else {
      diff -= strikePrices[i];
    }
  }

  return Math.abs(diff);
};

export const getStrikePrices = () => {
  const strikePrices: number[] = [];
  const strikePriceElements = document.getElementsByClassName("strike-price");
  const numOfStrikes = strikePriceElements.length;

  for (let i = 0; i < numOfStrikes; i++) {
    const strikePrice = strikePriceElements[i];
    strikePrices.push(Number(strikePrice.textContent));
  }

  return strikePrices;
};

export const getMaximumProfit = () => {
  const maxProfit = Number(
    document
      .getElementsByClassName("MaxProfit")[0]
      .getElementsByTagName("span")[1].textContent
  );

  return maxProfit;
};

const getProfitToAccept = (strikeDiff: number, multiplier: number): number => {
  return Number((strikeDiff * multiplier).toFixed(2));
};

const MINIMUM_AMOUNT_PER_DOLLAR_WIDE = 0.33;
const MAXIMUM_AMOUNT_PER_DOLLAR_WIDE = 0.44;

export const getMinimumProfitToAccept = (strikeDiff: number) =>
  getProfitToAccept(strikeDiff, MINIMUM_AMOUNT_PER_DOLLAR_WIDE);

export const getMaximumProfitToAccept = (strikeDiff: number) =>
  getProfitToAccept(strikeDiff, MAXIMUM_AMOUNT_PER_DOLLAR_WIDE);
