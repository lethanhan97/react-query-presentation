import { useInfiniteQuery } from '@tanstack/react-query';

const fetchPokemon = ({
  pageParam = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=10',
}) => {
  return fetch(pageParam).then((req) => req.json());
};

const Caching = () => {
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

  return <div>TODO: Caching</div>;
};

export default Caching;
