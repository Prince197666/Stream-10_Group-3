/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Search from '../pages/Search';

test('Search form has a proper element', () => {
  render(
    <Router>
      <Search />
    </Router>,
  );
  // there should be a table for result
  const tableElement = screen.getByRole('table');
  expect(tableElement).toBeInTheDocument();

  // there should be 10 headers
  // title, author, journal_name, pub_year, se_practice, claimed_benefit,
  // and result_of_evidence, type_of_research, Type of Participant, doi
  const headersElements = screen.getAllByRole('columnheader');
  expect(headersElements).toHaveLength(10);

  // 4 pagenation buttons <<, <. >>, and >
  const buttonElements = screen.getAllByRole('button');
  expect(buttonElements).toHaveLength(4);

  // 1 select box for how many items to show at a time.
  const comboboxElement = screen.getByRole('combobox');
  expect(comboboxElement).toBeInTheDocument(1);
});
