import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchPokemon } from './api';

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
    staleTime: 1000 * 50,
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
