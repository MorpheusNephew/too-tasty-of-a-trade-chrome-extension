/** @jsxImportSource @emotion/react */
import { FC, useState } from "react";

import { Button, Container, css, Grid } from "@mui/material";

import { scrapeTradeData } from "./hooks";
import {
  getMaximumProfitToAccept,
  getMinimumProfitToAccept,
  getStrikePriceDiff,
} from "./utils";

const App: FC = () => {
  const [probabilityOfProfit, setProbabilityOfProfit] = useState<string>();
  const [strikeDifference, setStrikeDifference] = useState<number>();
  const [maximumProfit, setMaximumProfit] = useState<number>();
  const [minimumProfitToAccept, setMinimumProfitToAccept] = useState<number>();
  const [maximumProfitToAccept, setMaximumProfitToAccept] = useState<number>();
  const [isGoodTrade, setIsGoodTrade] = useState<boolean>();

  const handleOnClick = async () => {
    try {
      const {
        pop: [pop, popError],
        maxProfit: [maxProfit, maxProfitError],
        pricesOfStrikes: [pricesOfStrikes, pricesOfStrikesError],
      } = await scrapeTradeData();

      const hasError = popError ?? maxProfitError ?? pricesOfStrikesError;

      if (hasError) {
        alert("An error has occurred");
        console.error({ hasError });
        return;
      }

      const strikePriceDiff = getStrikePriceDiff(pricesOfStrikes);

      const minimumProfitToAccept = getMinimumProfitToAccept(strikePriceDiff);
      const maximumProfitToAccept = getMaximumProfitToAccept(strikePriceDiff);

      const goodTradeToMake =
        maxProfit >= minimumProfitToAccept &&
        maxProfit <= maximumProfitToAccept;

      setProbabilityOfProfit(pop);
      setMaximumProfit(maxProfit);
      setStrikeDifference(strikePriceDiff);
      setMinimumProfitToAccept(minimumProfitToAccept);
      setMaximumProfitToAccept(maximumProfitToAccept);
      setIsGoodTrade(goodTradeToMake);
    } catch (error) {
      console.log("What is it?", { error });
    }
  };

  return (
    <Container
      css={css`
        text-align: center;
        width: 200px;
        height: 250px;
        background-color: beige;
      `}
    >
      <div
        css={css`
          padding-top: 3em;
        `}
      >
        <Button
          css={css`
            margin-bottom: 1em;
          `}
          onClick={handleOnClick}
        >
          Analyze trade
        </Button>
        <Grid container>
          <Grid item xs={12}>
            POP: {probabilityOfProfit}
          </Grid>
          <Grid item xs={12}>
            Strike diff: {strikeDifference}
          </Grid>
          <Grid item xs={12}>
            Max Profit: {maximumProfit}
          </Grid>
          <Grid item xs={6}>
            Min Profit to take: {minimumProfitToAccept}
          </Grid>
          <Grid item xs={6}>
            Max Profit to take: {maximumProfitToAccept}
          </Grid>
          <Grid item xs={12}>
            Is this a good trade? {isGoodTrade ? "Yes" : "No"}
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default App;
