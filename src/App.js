import "./App.css";

function App() {
  const name = "Brian";

  return (
    <div className="app">
      <h1>I am the App.js with JSX</h1>
      <h3 className="subtitle">
        Hello {name}, hope you are having a good day.
      </h3>
    </div>
  );
}

export default App;
