import "./App.css";
import Header from "./Header";

//Functional Component
function App() {
  return (
    //Bem naming convention = Block Element Modifier
    <div className="app">
      <Header />
      <h1 className="app__title">This is a title</h1>
    </div>
  );
}

export default App;
