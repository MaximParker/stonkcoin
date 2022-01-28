export const Stats = ({ mintTally, wallet, marketValueMultiplier }) => {
  return (
    <div id="stats-block">
      <h2>Stats</h2>
      <p>Coins mined: {mintTally}</p>
      <p>Wallet: {wallet} coins</p>
      <p>Exchange rate: £{marketValueMultiplier.toFixed(2)}/coin</p>
      <p>Wallet value: £{(wallet * marketValueMultiplier).toFixed(2)}</p>
    </div>
  );
};
