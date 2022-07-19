export const Pagination = () => {
  return (
    <>
      <section>
        <h2>Pagination Support</h2>
      </section>
      <section data-auto-animate>
        <p>
          <code>react-query</code> supports pagination out of the box with{' '}
          <code>useInfiniteQuery</code>
        </p>
        <pre data-id="code-animation">
          <code className="hljs" data-trim data-line-numbers="|12-14|16|2">
            <script type="text/template">{`
const fetchPokemon = ({
  pageParam = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=10',
}) => {
  return fetch(pageParam).then((req) => req.json());
};

const Pagination = () => {
  const {
    isLoading,
    error,
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery(['pokemon'], fetchPokemon, {
    getNextPageParam: (lastPageResponse) => lastPageResponse.next,
  });

  if (error) return <div>Error: {error.message}</div>;

  return (
   // Display logic 
  );
};
            `}</script>
          </code>
        </pre>
      </section>
    </>
  );
};
