export const Resources = ({ resources }) => {
  return (
    <div id="resources-block">
      <h2>Resources</h2>
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
    </div>
  );
};
