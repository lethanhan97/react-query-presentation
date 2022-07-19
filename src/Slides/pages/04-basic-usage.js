export const BasicUsage = () => {
  return (
    <>
      <section>
        <h2>Basic Usage API</h2>
      </section>
      <section data-auto-animate>
        <p>Simple API fetching</p>
        <pre data-id="code-animation">
          <code className="hljs" data-trim data-line-numbers="|5|1-2">
            <script type="text/template">
              {`
const fetchCatPhoto = () =>
  fetch('https://api.thecatapi.com/v1/images/search').then((res) => res.json());

const Basic = () => {
  const { isLoading, error, data } = useQuery(['cat-photo'], fetchCatPhoto);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <p>Cat photo</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <img
        src={data[0].url}
        width={data[0].width}
        height={data[0].height}
        alt="cat"
      />
    </div>
  );
};
              `}
            </script>
          </code>
        </pre>

        <p className="fragment fade-in">
          We get useful information about the call out of the box
        </p>
        <p className="fragment fade-in">
          We get to determine how we want to call APIs (e.g using{' '}
          <code>axios</code>). <code>react-query</code> doesn't care
        </p>
      </section>
    </>
  );
};
