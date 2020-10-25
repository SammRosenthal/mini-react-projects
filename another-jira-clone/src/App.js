import React, { useState } from "react";
import Board from "./components/board/board";
import Header from "./components/navbar/navbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import "fontsource-roboto";

function App() {
  const [todo, addTodo] = useState([
    {
      title: "Sam's User Story",
      status: "To Do",
      points: "3",
      assignee: "Sam Rosenthal",
      acceptanceCriteria: "Test AC",
      description: "test description"
    }
  ])
  const [inProgress, addInProgress] = useState([
    {
      title: "Jack's User Story",
      status: "In Progress",
      points: "3",
      assignee: "Jack Smith",
      acceptanceCriteria: "Test AC",
      description: "test description"
    }
  ])
  const [inTest, addInTest] = useState([])
  const [done, addDone] = useState([
    {
      title: "Dan's User Story",
      status: "Done",
      points: "3",
      assignee: "Dan Nguyen",
      acceptanceCriteria: "Test AC",
      description: "test description"
    }
  ])

  const addCard = (card) => {
    const lane = card.status;

    try {
      if (lane === "To Do") {
        handleTodo(card);
      } else if (lane === "In Progress") {
        handleInProgress(card);
      } else if (lane === "In Test") {
        handleInTest(card);
      } else if (lane === "Done") {
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
