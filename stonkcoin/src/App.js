import { useState } from "react";
import "./App.css";
import { Stats } from "./components/Stats";
import { Resources } from "./components/Resources";
import { Marketplace } from "./components/Marketplace";
import { Header } from "./components/Header";

function App() {
  const [mintTally, setMintTally] = useState(0);
  const [wallet, setWallet] = useState(0);
  const [exchangeRate, setMarketValue] = useState(0.01);
  const [resourcesObj, setResources] = useState({
    gpus: [{ name: "superVideo 90", hashrate: 1, value: 5 }],
  });

  function getRandomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  const getTotalHashrate = (arr) => {
    let count = 0;
    for (const card of arr) {
      count += card.hashrate;
    }
    return count;
  };

  return (
    <div className="App">
      <Header />
      <button
        onClick={() => {
          setMintTally(
            (currentTally) =>
              (currentTally += getTotalHashrate(resourcesObj.gpus))
          );
          setWallet(
            (currentCount) =>
              (currentCount += getTotalHashrate(resourcesObj.gpus))
          );
          setMarketValue(
            (currentMarketValue) =>
              (currentMarketValue =
                0.005 + currentMarketValue * (1 + getRandomInRange(-0.5, 0.505)))
          );
        }}
      >
        MINE COINS!
      </button>
      <div className="info-container">
        <Stats
          mintTally={mintTally}
          wallet={wallet}
          exchangeRate={exchangeRate}
        />
        <Resources
          resources={resourcesObj}
          totalHashrate={getTotalHashrate(resourcesObj.gpus)}
        />
        <Marketplace
          setResources={setResources}
          mintTally={mintTally}
          availableFunds={wallet * exchangeRate}
          setWallet={setWallet}
          exchangeRate={exchangeRate}
        />
      </div>
    </div>
  );
}

export default App;
