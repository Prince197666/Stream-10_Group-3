// eslint-disable-next-line import/no-import-module-exports
import { SelectSePracticeFilter, YearRangeFilter } from './Filter';

const TablColumns = [
  {
    Header: 'Title',
    accessor: 'title',
    disableFilters: true,
  }, {
    Header: 'Authors',
    accessor: 'author',
    disableFilters: true,
  }, {
    Header: 'Journal Name',
    accessor: 'journal_name',
    disableFilters: true,
  }, {
    Header: 'Pub. Year',
    accessor: 'year_of_publication',
    Filter: YearRangeFilter,
    filter: 'between',
  }, {
    Header: 'SE Practice',
    accessor: 'se_practice',
    Filter: SelectSePracticeFilter,
    filter: 'includes',
  }, {
    Header: 'Claimed Benefit',
    accessor: 'claimed_benefit',
    disableFilters: true,
  }, {
    Header: 'Result of Evidence',
    accessor: 'result_of_evidence',
    disableFilters: true,
  }, {
    Header: 'Type of Research',
    accessor: 'type_of_research',
    disableFilters: true,
  }, {
    Header: 'Type of Participant',
    accessor: 'type_of_participant',
    disableFilters: true,
  }, {
    Header: 'DOI',
    accessor: 'doi',
    disableFilters: true,
  },
];

export default TablColumns;
