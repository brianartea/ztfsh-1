import React, { useState } from "react";
import styles from "./App.module.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = (e) => {
    e.preventDefault(); //PREVENTS PAGE REFRESH
    setTodos([input, ...todos]);

    setInput("");
  };

  return (
    <div className={styles.app}>
      <h1 className={styles.heading}>Todo App</h1>
      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
        />
        <button type="submit" onClick={addTodo}>
          Add Todo
        </button>
      </form>
      <h2>List of Todos</h2>
      {todos.map((todo) => (
        <p>{todo}</p>
      ))}
    </div>
  );
}

export default App;
