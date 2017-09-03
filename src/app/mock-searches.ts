import { Search } from './search';

export const SEARCHES: Search[] = [
  new Search(31, ['keyword1','keyword2'], 'location1', new Date(2007,7,7), ['topic1','topic2']),
  new Search(32, ['keyword3','keyword4'], 'location1', new Date(2012,5,22), ['topic3','topic4']),
  new Search(33, ['keyword1','keyword4'], 'location1', new Date(2017,9,4), ['topic2','topic3'])
];