import "./App.css";

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
      {getGreeting()}
      <h1>I am the App.js with JSX</h1>
      <h2>You are a {isMale ? "Male" : "Female"}</h2>
      <h3 className="subtitle">
        Hello {name}, hope you are having a good day.
      </h3>
    </div>
  );
}

export default App;
