/** @jsxImportSource @emotion/react */
import { Button, Container, css } from "@mui/material";
import { FC } from "react";

const getCurrentTabId = async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  return tab.id;
};

const App: FC = () => {
  const handleOnClick = async () => {
    const [response] = await chrome.scripting.executeScript({
      target: { tabId: await getCurrentTabId() },
      func: () => {
        console.log("I'm on your tab player");
        return "Does this come out?";
      },
    });

    console.log("Here is my response", { response });
  };

  return (
    <Container
      css={css`
        text-align: center;
        width: 200px;
        height: 900px;
        background-color: beige;
      `}
    >
      <div
        css={css`
          padding-top: 3em;
        `}
      >
        You like this magic?
        <Button onClick={handleOnClick}>Click to see some browser magic</Button>
      </div>
    </Container>
  );
};

export default App;
