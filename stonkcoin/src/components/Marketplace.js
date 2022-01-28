export const Marketplace = ({ resources, mintTally }) => {
  let milestone = 10;

  let catalogue = [
    { name: "FastVideo 4K", hashrate: 1, value: 100 },
    { name: "MegaFast XS", hashrate: 2, value: 300 },
    { name: "UltraSoft Star II", hashrate: 3, value: 800 },
    { name: "MegaFast Supreme", hashrate: 4, value: 1200 },
    { name: "Juggernaut V60 TSi", hashrate: 15, value: 1500 },
    { name: "Project 201", hashrate: 20, value: 2000 },
    { name: "VFX Inferno", hashrate: 50, value: 3500 },
  ];

  let listings = [];

  let listingsMultiplier = 1;

  if (mintTally >= milestone) {
    listings.push(catalogue.shift());
    milestone += milestone * 4;
  }

  console.log("[in Marketplace] mintTally:", mintTally, "milestone needed:", milestone, "listings:", listings);

  return (
    <div id="marketplace-block">
      <h2>Marketplace</h2>
      {listings.length === 0 ? (
        <p>No GPUs in stock</p>
      ) : (
        <ul>
          {listings.map((listing) => (
            <li key={listing.name}>
              <strong>{listing.name}</strong> ({listing.hashrate}/click): £
              {listing.value * listingsMultiplier}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
