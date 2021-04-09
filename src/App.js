import "./App.css";
import Header from "./Header";

function App() {
  const name = "Brian";
  const isMale = true;

  function getGreeting(user) {
    if (user) {
      return <h1>Hello, {user}!</h1>;
    }
    return <h1>Hello, Stranger</h1>;
  }

  //Bem = Block Element Modifier

  return (
    <div className="app">
      <Header />
      <h1 className="app__title">This is a title</h1>
    </div>
  );
}

export default App;
