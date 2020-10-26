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

    if (lane === "To Do") {
      addTodo([...todo, card]);
    } else if (lane === "In Progress") {
      addInProgress([...inProgress, card]);
    } else if (lane === "In Test") {
      addInTest([...inTest, card]);
    } else if (lane === "Done") {
      addDone([...done, card]);
    }
  }

  const deleteCard = (card) => {
    // TODO
    console.log(card)
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
        deleteCard={deleteCard}
      />
    </>
  );
}

export default App;
