import { BasicUsage } from './04-basic-usage';
import { Intro } from './01-intro';
import { ProblemStatement } from './02-problem-statement';
import { Solution } from './03-solution';

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
];

export default Pages;
