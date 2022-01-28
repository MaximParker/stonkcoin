export const Stats = ({ mintTally, wallet, exchangeRate }) => {
  return (
    <div id="stats-block">
      <h2>Stats</h2>
      <p>Total coins mined: {mintTally}</p>
      <p>In wallet: {wallet} coins</p>
      <p>Exchange rate: £{exchangeRate.toFixed(2)}/coin</p>
      <p>Wallet value: £{(wallet * exchangeRate).toFixed(2)}</p>
    </div>
  );
};
