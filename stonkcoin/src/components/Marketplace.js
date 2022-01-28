import { useState, useEffect } from "react";

export const Marketplace = ({
  setResources,
  mintTally,
  availableFunds,
  setWallet,
  exchangeRate,
}) => {
  const [mileStone, setMilestone] = useState(10);
  const [listings, setListings] = useState([]);
  const [mileStoneIndex, setMileStoneIndex] = useState(0);

  let catalogue = [
    { name: "VidEon Saturn V", hashrate: 1, value: 100 },
    { name: "FastVideo 4K", hashrate: 1, value: 140 },
    { name: "MegaFast XS", hashrate: 2, value: 300 },
    { name: "UltraSoft Star II", hashrate: 3, value: 800 },
    { name: "MegaFast Supreme", hashrate: 4, value: 1200 },
    { name: "Juggernaut V60 TSi", hashrate: 15, value: 1500 },
    { name: "Project 201", hashrate: 20, value: 2000 },
    { name: "VFX Inferno", hashrate: 50, value: 3500 },
  ];

  let listingsMultiplier = 1;

  console.log("Total minted:", mintTally);
  useEffect(() => {
    if (mintTally >= mileStone) {
      const listingsCopy = [...listings];
      if (listingsCopy.length < 3) {
        listingsCopy.push(catalogue[mileStoneIndex]);
      }
      setMileStoneIndex((currMileStoneIndex) => currMileStoneIndex + 1);
      setListings(listingsCopy);
      setMilestone((currMileStone) => currMileStone * 2);
      console.log("MILESTONE REACHED!", mileStone, "coins.");
      console.log("MILESTONE INDEX:", mileStoneIndex);
    }
  }, [mintTally]);

  const buyGPU = (item) => {
    if (availableFunds >= item.value) {
      setResources((currentResources) => {
        let updatedResources = { gpus: [...currentResources.gpus] };
        updatedResources.gpus.push(item);
        console.log("UPDATED RESOURCES:", updatedResources);
        return updatedResources;
      });
    } else {
      window.alert("You cannot afford to pay for this item!")
    }
    
  };

  return (
    <div id="marketplace-block">
      <h2>Marketplace</h2>
      {listings.length === 0 ? (
        <p className="faded">No GPUs in stock</p>
      ) : (
        <ul>
          {listings.map((listing) => {
            return (
              <li key={listing.name}>
                <strong>{listing.name}</strong> ({listing.hashrate}/click):
                {availableFunds >= listing.value ? (
                  <button
                    className="button-small"
                    onClick={() => {
                      buyGPU(listing);
                    }}
                  >
                    £{listing.value * listingsMultiplier}
                  </button>
                ) : (
                  <button className="button-small">
                    £{listing.value * listingsMultiplier}
                  </button>
                )}
              </li>
            );
          })}
        </ul>
      )}
      Balance: £{availableFunds.toFixed(2)}
    </div>
  );
};
