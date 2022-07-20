export const ClosingRemarks = () => {
  return (
    <>
      <section>
        <p>
          All in all, I think <code>react-query</code> provides us with a{' '}
          <span className="fragment highlight-green">
            {' '}
            different mental model
          </span>{' '}
          when dealing with asynchronous states
        </p>
      </section>
      <section>
        <p>
          Prior to <code>react-query</code> we often only refetch data on either
          <ul>
            <li className="fragment fade-in">
              fetch once, distribute globally (store on a redux state or sth),
              rarely update:{' '}
              <span className="fragment highlight-red">Too little</span>
            </li>
            <li className="fragment fade-in">
              fetch every mount, keep it local to the component{' '}
              <span className="fragment highlight-red">Too much fetching</span>
            </li>
            <li className="fragment fade-in">
              We need to make a trade off between{' '}
              <span className="fragment highlight-green">
                How accurate our cache is
              </span>{' '}
              and{' '}
              <span className="fragment highlight-green">
                How often do we update our cache
              </span>
            </li>
          </ul>
        </p>
      </section>
      <section>
        <p>
          <code>react-query</code> gives us an easy way to manage that trade
          off, as well as having a good overview of our changing asynchronous
          state over time
        </p>
      </section>
      <section>
        <p>
          ...and we don't have to fill our global state with server states
          anymore
        </p>
      </section>
    </>
  );
};
