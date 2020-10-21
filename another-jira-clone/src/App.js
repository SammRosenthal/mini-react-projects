import React, { useState } from "react";
import Board from "./components/board/board";
import Header from "./components/navbar/navbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import "fontsource-roboto";

function App() {
  const [cards, addCard] = useState([]);

  const createCard = () => {};

  return (
    <>
      <CssBaseline />
      <Header />
      <Board />
    </>
  );
}

export default App;
