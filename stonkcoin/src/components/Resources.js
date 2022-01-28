export const Resources = ({ resources, totalHashrate }) => {
  return (
    <div id="resources-block">
      <h2>Resources ({resources.gpus.length})</h2>
      <ul>
        {resources.gpus.map((card) => {
          return (
            <li key={card.name}>
              <p>
                GPU: <strong>{card.name}</strong> ({card.hashrate}/click)
              </p>
            </li>
          );
        })}
      </ul>
      Hashrate: <strong>{totalHashrate}</strong> coin/click
    </div>
  );
};
