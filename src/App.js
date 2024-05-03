import React, { useState } from "react";
import "./App.css";
import { TodoInput } from "./Components/TodoInput";
import Todolist from "./Components/TodoList";

function App() {
  const [listTodo, setListTodo] = useState([]);
  let addList = (inputText) => {
    setListTodo([...listTodo, inputText]);
  };
  return (
    <div className="main-container">

      <h1 className="header">To Do List</h1>
      <hr></hr>
      <TodoInput addList={addList} />
      {listTodo.map((listItem, i) => {
        return <Todolist key={0} item={listItem} />;
      })}
      

      <div className="center-container"></div>
      <Todolist />
    </div>
  );
}

export default App;
