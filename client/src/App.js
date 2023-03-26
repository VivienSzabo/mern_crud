import "./App.css";

function App() {
  return (
    <div className="App">
      <h1 className="title">Help for a varied meal!</h1>
      <label className="foodName">Food Name</label>
      <input type="text" />
      <label className="daysSinceIAte">Days Since You Ate It</label>
      <input type="number" />
      <button className="button">ADD TO THE LIST</button>
    </div>
  );
}

export default App;
