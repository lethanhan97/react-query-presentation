import Basic from './Basic';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import Pagination from './Pagination';
import Caching from './Caching';

const DemoPages = [
  {
    route: '/',
    navDisplay: 'Home',
    Component: Home,
  },
  {
    route: '/basic',
    navDisplay: 'Basic',
    Component: Basic,
  },
  {
    route: '/pagination',
    navDisplay: 'Pagination',
    Component: Pagination,
  },
  {
    route: '/caching',
    navDisplay: 'Caching',
    Component: Caching,
  },
];

const Demos = () => {
  return (
    <>
      <nav>
        {DemoPages.map(({ route, navDisplay }) => (
          <Link key={route} to={route} style={{ marginRight: '1rem' }}>
            {navDisplay}
          </Link>
        ))}
      </nav>
      <Routes>
        {DemoPages.map(({ route, Component }) => (
          <Route key={route} path={route} element={<Component />} />
        ))}
      </Routes>
    </>
  );
};

export default Demos;
