/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Moderate from '../pages/Moderate';

test('Moderator (Not Login status) page component has the proper elements', () => {
  render(
    <Router>
      <Moderate />
    </Router>,
  );
  // Login page should be displayed
  // two textboxes for name and password
  const textBoxElement = screen.getAllByRole('textbox');
  expect(textBoxElement).toHaveLength(2);

  // two buttons for login and sign in
  const buttonElement = screen.getAllByRole('button');
  expect(buttonElement).toHaveLength(2);
});

test('Moderator (Login status) page component has the proper elements', () => {
  // mock cookie
  document.cookie = 'role=moderators';

  render(
    <Router>
      <Moderate />
    </Router>,
  );

  // heading contains "Article List"
  const textBoxElement = screen.queryByText(/Article List/);
  expect(textBoxElement).toBeInTheDocument();

  // list tag
  const buttonElement = screen.getByRole('list');
  expect(buttonElement).toBeInTheDocument();
});
