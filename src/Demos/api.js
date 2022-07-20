export const fetchPokemon = ({
  pageParam = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=10',
}) => {
  return fetch(pageParam).then((req) => req.json());
};

export const fetchCatPhoto = () =>
  fetch('https://api.thecatapi.com/v1/images/search').then((res) => res.json());
