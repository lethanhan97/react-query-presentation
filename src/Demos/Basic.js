import { useQuery } from '@tanstack/react-query';

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

export default Basic;
