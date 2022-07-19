export const ProblemStatement = () => {
  return (
    <>
      <section>
        <h1>Problem Statement</h1>
      </section>
      <section>
        <p>We often have to</p>
        <ul>
          <li className="fragment fade-in">
            Implement caching and refetching logic
          </li>
          <li className="fragment fade-in">
            Manage loading/error states across the application (check out Sam's
            blogpost on the loading flag with redux on SA Medium)
          </li>
          <li className="fragment fade-in">
            Store and manage server states on the client, leading to{' '}
            <span className="fragment highlight-green">bloated</span> redux
            states
          </li>
        </ul>
      </section>
    </>
  );
};
