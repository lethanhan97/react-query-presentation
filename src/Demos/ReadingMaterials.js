const readingMaterials = [
  {
    display:
      'React Query as a State Manager (should read every blog in that series actually)',
    url: 'https://tkdodo.eu/blog/react-query-as-a-state-manager',
  },
  {
    display:
      'What I learned from React-Query, and why I will not use it in my next project (potentiall issues with optimistic update)',
    url: 'https://medium.com/duda/what-i-learned-from-react-query-and-why-i-will-not-use-it-in-my-next-project-a459f3e91887',
  },
];

const ReadingMaterials = () => (
  <ul>
    {readingMaterials.map(({ display, url }) => (
      <li key={url}>
        <a href={url} target="_blank" rel="noreferrer">
          {display}
        </a>
      </li>
    ))}
  </ul>
);

export default ReadingMaterials;
