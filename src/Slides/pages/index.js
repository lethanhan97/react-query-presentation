import { BasicUsage } from './04-basic-usage';
import { Intro } from './01-intro';
import { ProblemStatement } from './02-problem-statement';
import { Solution } from './03-solution';
import { Pagination } from './05-pagination';
import { Caching } from './06-caching';

const Pages = [
  {
    name: 'Intro',
    Component: Intro,
  },
  {
    name: 'ProblemStatement',
    Component: ProblemStatement,
  },
  {
    name: 'Solution',
    Component: Solution,
  },
  {
    name: 'BasicUsage',
    Component: BasicUsage,
  },
  {
    name: 'Pagination',
    Component: Pagination,
  },
  {
    name: 'Caching',
    Component: Caching,
  },
];

export default Pages;
