import React, { useState } from "react";
import Board from "./components/board/board";
import Header from "./components/navbar/navbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import "fontsource-roboto";

function App() {
  const [cards, addCard] = useState([
    {
      laneName: "TO DO",
      laneItems: [
        {
          title: "Sam's User Story",
          status: "In Progress",
          points: "3",
          user: "Sam Rosenthal"
        },
        {
          title: "Joe's User Story",
          status: "In Progress",
          points: "3",
          user: "Joe Smith"
        },
        {
          title: "Dan's User Story",
          status: "In Progress",
          points: "3",
          user: "Dan Nguyen"
        }
      ]
    }, {
      laneName: "IN PROGRESS",
      laneItems: [
        {
          title: "Sam's User Story",
          status: "In Progress",
          points: "3",
          user: "Sam Rosenthal"
        },
        {
          title: "Joe's User Story",
          status: "In Progress",
          points: "3",
          user: "Joe Smith"
        },
        {
          title: "Dan's User Story",
          status: "In Progress",
          points: "3",
          user: "Dan Nguyen"
        }
      ]
    }, {
      laneName: "IN TEST",
      laneItems: []
    }, {
      laneName: "DONE",
      laneItems: [
        {
          title: "Sam's User Story",
          status: "In Progress",
          points: "3",
          user: "Sam Rosenthal"
        },
        {
          title: "Joe's User Story",
          status: "In Progress",
          points: "3",
          user: "Joe Smith"
        },
        {
          title: "Dan's User Story",
          status: "In Progress",
          points: "3",
          user: "Dan Nguyen"
        }
      ]
    }
  ]);

  const createCard = () => { };

  return (
    <>
      <CssBaseline />
      <Header />
      <Board cards={cards} />
    </>
  );
}

export default App;
