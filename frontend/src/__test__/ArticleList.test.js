/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import ArticleList from '../components/ArticleList';

test('ArticleList (for moderators) page', () => {
  // mock cookie
  document.cookie = 'role=moderators';
  render(
    <Router>
      <ArticleList />
    </Router>,
  );

  // heading contains "Article List"
  const textBoxElement = screen.queryByText(/Article List/);
  expect(textBoxElement).toBeInTheDocument();

  // list tag
  const buttonElement = screen.getByRole('list');
  expect(buttonElement).toBeInTheDocument();
});

test('ArticleList (for analyst) page', () => {
  // mock cookie
  document.cookie = 'role=analysts';
  render(
    <Router>
      <ArticleList />
    </Router>,
  );

  // heading contains "Article List"
  const textBoxElement = screen.queryByText(/Article List/);
  expect(textBoxElement).toBeInTheDocument();
  // list tag
  const buttonElement = screen.getByRole('list');
  expect(buttonElement).toBeInTheDocument();
});
