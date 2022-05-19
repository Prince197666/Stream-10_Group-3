/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import { render, screen } from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';
import Login from '../components/Login';

test('login component has the proper elements', () => {
  render(
    <Router>
      <Login />
    </Router>,
  );
  // two textboxes for name and password
  const textBoxElement = screen.getAllByRole('textbox');
  expect(textBoxElement).toHaveLength(2);

  // two buttons for login and sign in
  const buttonElement = screen.getAllByRole('button');
  expect(buttonElement).toHaveLength(2);
});
