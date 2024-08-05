import {
  executeScriptInTab,
  getMaximumProfit,
  getPricesOfStrikes,
  getProbabilityOfProfit,
} from "../utils";

export const scrapeTradeData = async () =>
  executeScriptInTab(() => {
    const pop = getProbabilityOfProfit();
    const maxProfit = getMaximumProfit();
    const pricesOfStrikes = getPricesOfStrikes();

    return {
      pop,
      maxProfit,
      pricesOfStrikes,
    };
  });
