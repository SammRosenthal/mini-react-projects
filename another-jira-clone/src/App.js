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
    const lane = card.status;

    try {
      if (lane === "TO DO") {
        handleTodo(card);
      } else if (lane === "IN PROGRESS") {
        handleInProgress(card);
      } else if (lane === "IN TEST") {
        handleInTest(card);
      } else if (lane === "DONE") {
        handleDone(card);
      }
    } catch (e) {
      throw(e)
    }
  }

  const handleTodo = (newCard) => {
    addTodo([...todo, newCard]);
  }

  const handleInProgress = (newCard) => {
    addInProgress([...inProgress, newCard]);
  }

  const handleInTest = (newCard) => {
    addInTest([...inTest, newCard]);
  }

  const handleDone = (newCard) => {
    addDone([...done, newCard]);
  }

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
