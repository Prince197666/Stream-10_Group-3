/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import { render, screen } from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';
import SignIn from '../components/SignIn';

test('Sign in component has the proper elements', () => {
  render(
    <Router>
      <SignIn />
    </Router>,
  );

  // three textboxes for name and password and email
  const textBoxElement = screen.getAllByRole('textbox');
  expect(textBoxElement).toHaveLength(3);

  // two buttons for create and reset
  const buttonElement = screen.getAllByRole('button');
  expect(buttonElement).toHaveLength(2);
});
