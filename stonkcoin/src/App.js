import { useState } from "react";
import "./App.css";
import { Stats } from "./components/Stats";
import { Resources } from "./components/Resources";
import { Marketplace } from "./components/Marketplace";
import { Header } from "./components/Header"

function App() {
  let [mintTally, setMintTally] = useState(0);
  let [wallet, mintCoin] = useState(0);
  let [marketValueMultiplier, setMarketValue] = useState(0.01);
  let [resourcesObj, setResources] = useState({
    gpus: [{ name: "superVideo 90", hashrate: 1, value: 5 }, { name: "VidEon Saturn V", hashrate: 1, value: 5 }],
  });

  function getRandomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  function getTotalHashrate(arr) {
    let count = 0;
    for (const card of arr) {
      count += card.hashrate;
    }
    return count;
  }

  return (
    <div className="App">
      < Header slogan={"The coiniest coin ever minted"} />
      <button
        onClick={() => {
          setMintTally(
            (currentTally) =>
              (currentTally += getTotalHashrate(resourcesObj.gpus))
          );
          mintCoin(
            (currentCount) =>
              (currentCount += getTotalHashrate(resourcesObj.gpus))
          );
          setMarketValue(
            (currentMarketValue) =>
              (currentMarketValue =
                currentMarketValue * (1 + getRandomInRange(-0.2, 0.3)))
          );
        }}
      >
        MINE COINS!
      </button>
      <div className="info-container">
        <Stats
          mintTally={mintTally}
          wallet={wallet}
          marketValueMultiplier={marketValueMultiplier}
        />
        <Resources resources={resourcesObj} />
        <Marketplace resources={resourcesObj} mintTally={mintTally} />
      </div>
    </div>
  );
}

export default App;
