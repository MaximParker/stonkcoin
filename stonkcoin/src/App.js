import { useState } from "react";
import "./App.css";
import { Stats } from "./components/Stats";
import { Resources } from "./components/Resources";
import { Marketplace } from "./components/Marketplace";

function App() {
  let [mintTally, setMintTally] = useState(0);
  let [wallet, mintCoin] = useState(0);
  let [marketValueMultiplier, setMarketValue] = useState(0.01);
  let [resourcesObj, setResources] = useState({
    gpus: [{ name: "superVideo 90", hashrate: 1, value: 5 }],
  });
  let [marketListings, setMarketListings] = useState(mintTally);

  let catalogue = [
    { name: "superVideo 1000", hashrate: 1, value: 100 },
    { name: "MegaFast X", hashrate: 2, value: 300 },
    { name: "MegaFast X II", hashrate: 3, value: 800 },
    { name: "MegaFast Supreme", hashrate: 4, value: 1200 },
    { name: "Juggernaut V60 TSi", hashrate: 15, value: 1500 },
    { name: "Project 201", hashrate: 20, value: 2000 },
    { name: "VFX Inferno", hashrate: 50, value: 3500 },
  ];

  function getRandomArbitrary(min, max) {
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
      <header className="App-header">
        <h1>StonkCoin</h1>
      </header>

      <Stats
        mintTally={mintTally}
        wallet={wallet}
        marketValueMultiplier={marketValueMultiplier}
      />

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
                currentMarketValue * (1 + getRandomArbitrary(-0.2, 0.3)))
          );
          setMarketListings((currentListings) => {
            // Fix this
          })
        }}
      >
        MINE COINS!
      </button>

      <Resources resources={resourcesObj} />
      <Marketplace resources={resourcesObj} marketListings={marketListings} />
    </div>
  );
}

export default App;
