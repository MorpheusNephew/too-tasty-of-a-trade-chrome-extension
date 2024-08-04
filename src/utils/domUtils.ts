export const getProbabilityOfProfit = (): [string, any] => {
  try {
    const pop = document
      .getElementsByClassName("POP")[0]
      .getElementsByTagName("span")[1].textContent;

    return [pop, undefined];
  } catch (error) {
    return [undefined, error];
  }
};

export const getPricesOfStrikes = (): [number[], any] => {
  try {
    const strikePrices: number[] = [];
    const strikePriceElements = document.getElementsByClassName("strike-price");

    for (let i = 0; i < strikePriceElements.length; i++) {
      strikePrices.push(Number(strikePriceElements[i].textContent));
    }
    return [strikePrices, undefined];
  } catch (error) {
    return [[], error];
  }
};

export const getMaximumProfit = (): [number, any] => {
  try {
    const maxProfit = Number(
      document
        .getElementsByClassName("MaxProfit")[0]
        .getElementsByTagName("span")[1].textContent
    );

    return [maxProfit, undefined];
  } catch (error) {
    return [0, error];
  }
};
