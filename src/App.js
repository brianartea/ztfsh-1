import { useState, useRef } from "react";
import styles from "./App.module.css";
import useRandomJoke from "./useRandomJoke";

function App() {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [input, setInput] = useState("");

  const joke = useRandomJoke(firstName, lastName);

  const generateJoke = (e) => {
    e.preventDefault();
    setFirstName(firstNameRef.current.value);
    setLastName(lastNameRef.current.value);

    setInput("");
  };

  return (
    <div className={styles.app}>
      <center>
        <h1 className={styles.heading}>The Joke Generator</h1>

        <h2>{joke}</h2>

        <form>
          <input placeholder="First Name" ref={firstNameRef} />
          <input placeholder="Last Name" ref={lastNameRef} />
          <button onClick={generateJoke}>Generate Joke</button>
        </form>
      </center>
    </div>
  );
}

export default App;

// const [todos, setTodos] = useState([]);
//   const [input, setInput] = useState("");

//   const addTodo = (e) => {
//     e.preventDefault(); //PREVENTS PAGE REFRESH
//     setTodos([input, ...todos]);

//     setInput("");
//   };

//   return (
//     <div className={styles.app}>
//       <h1 className={styles.heading}>Todo App</h1>
//       <form>
//         <input
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           type="text"
//         />
//         <button type="submit" onClick={addTodo}>
//           Add Todo
//         </button>
//       </form>
//       <h2>List of Todos</h2>
//       {todos.map((todo) => (
//         <p>{todo}</p>
//       ))}
//     </div>
//   );
// }
