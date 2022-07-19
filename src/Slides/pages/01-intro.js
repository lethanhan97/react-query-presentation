export const Intro = () => {
  return (
    <>
      <section>
        <h2>React-Query Presentation</h2>
        <p>By An</p>
      </section>
      <section>
        <h2>What is React-Query?</h2>
        <p className="fragment fade-in">
          A library that simplifies the way we{' '}
          <span className="fragment highlight-green">fetch</span>,{' '}
          <span className="fragment highlight-green">cache</span>,{' '}
          <span className="fragment highlight-green">
            sync data from a server
          </span>{' '}
          and{' '}
          <span className="fragment highlight-green">
            updating server states
          </span>
        </p>
      </section>
    </>
  );
};
