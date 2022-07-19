import { useInfiniteQuery } from '@tanstack/react-query';

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
    <div>
      {isLoading ? (
        <p>loading...</p>
      ) : (
        <>
          <ul>
            {data.pages.map((group, i) =>
              group.results.map((pokemon) => (
                <li key={pokemon.name}>{pokemon.name}</li>
              ))
            )}
          </ul>
          <button
            onClick={() => fetchNextPage()}
            disabled={!hasNextPage || isFetchingNextPage}
          >
            {isFetchingNextPage
              ? 'Loading more...'
              : hasNextPage
              ? 'Load More'
              : 'Nothing more to load'}
          </button>
        </>
      )}
    </div>
  );
};

export default Pagination;
