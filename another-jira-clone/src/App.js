import React, { useState } from "react";
import Board from "./components/board/board";
import Header from "./components/navbar/navbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import "fontsource-roboto";

function App() {
  const [todo, addTodo] = useState([
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
  ])
  const [inProgress, addInProgress] = useState([
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
  ])
  const [inTest, addInTest] = useState([])
  const [done, addDone] = useState([
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
  ])

  const addCard = (card) => {
    console.log(card);
    const lane = card.status;

  }

  const handleTodo = () => {}

  const handleInProgress = () => {}

  const handleInTest = () => {}

  const handleDone = () => {}

  return (
    <>
      <CssBaseline />
      <Header
        addCard={addCard}
        addTodo={addTodo}
        addInProgress={addInProgress}
        addInTest={addInTest}
        addDone={addDone}
      />
      <Board
        todo={todo}
        inProgress={inProgress}
        inTest={inTest}
        done={done}
      />
    </>
  );
}

export default App;
