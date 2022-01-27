import { useState } from "react";
import "./App.css";

function App() {
  let [wallet, incrementCount] = useState(0);
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>StonkCoin</h1>
        <h2>Wallet: {wallet}</h2>
        <button
          onClick={() => {
            incrementCount((currentCount) => (currentCount += 1));
          }}
        >
          👆
        </button>
      </header>
    </div>
  );
}

export default App;
