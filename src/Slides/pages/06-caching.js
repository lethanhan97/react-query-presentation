export const Caching = () => {
  return (
    <>
      <section>
        <h2>Caching</h2>
      </section>
      <section>
        <p>
          React-query will fetch data from its cache until the data becomes{' '}
          <span className="fragment highlight-green">stale</span>
        </p>
      </section>
      <section>
        <p>Staleness</p>
        <ul>
          <li className="fragment fade-in">
            A state to determine whether the data is outdated or not
          </li>
          <li className="fragment fade-in">
            Can be configured by <code>staleTime</code> config when setting up{' '}
            <code>react-query</code>
          </li>
          <li className="fragment fade-in">
            Data can be manually marked as stale as well (usually when making
            mutations)
          </li>
        </ul>
      </section>
    </>
  );
};
