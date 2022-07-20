import { BasicUsage } from './04-basic-usage';
import { Intro } from './01-intro';
import { ProblemStatement } from './02-problem-statement';
import { Solution } from './03-solution';
import { Pagination } from './05-pagination';
import { Caching } from './06-caching';
import { OtherFeatures } from './07-other-features';

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
  {
    name: 'OtherFeatures',
    Component: OtherFeatures,
  },
];

export default Pages;
