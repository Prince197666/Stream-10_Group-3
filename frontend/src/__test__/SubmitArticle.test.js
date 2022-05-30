/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import SubmitArticle from '../components/SubmitArticle';

test('Submit component has the proper elements', () => {
  render(
    <Router>
      <SubmitArticle />
    </Router>,
  );

  // 6 textboxes for Article title, author, journal, year, doi and email
  const textBoxElements = screen.getAllByRole('textbox');
  expect(textBoxElements).toHaveLength(6);

  // 13 radiobuttons for
  // 2 forSE Practice
  // 3 for Claimed Benefit
  // 4 for Result of Evidence
  // 2 for Type of Research
  // 2 for Type of Participant
  const radioButtonElements = screen.getAllByRole('radio');
  expect(radioButtonElements).toHaveLength(13);

  // heading contains "Submit Article"
  const heading = screen.queryByText(/Submit Article/);
  expect(heading).toBeInTheDocument();

  // label for title input is "Titile:"
  const titleLabel = screen.queryByText(/Titile:/);
  expect(titleLabel).toBeInTheDocument();

  // label for author input is "Author:"
  const authorLabel = screen.queryByText(/Author:/);
  expect(authorLabel).toBeInTheDocument();

  // label for journal input is "Journal Name:"
  const journalLabel = screen.queryByText(/Journal Name:/);
  expect(journalLabel).toBeInTheDocument();

  // label for pub_year input is "Year Of Publication:"
  const pubYearLabel = screen.queryByText(/Year Of Publication:/);
  expect(pubYearLabel).toBeInTheDocument();

  // label for SE Practice input is "SE Practice:"
  const sePractLabel = screen.queryByText(/SE Practice:/);
  expect(sePractLabel).toBeInTheDocument();

  // label for Claimed Benefit input is "Claimed Benefit:"
  const benefitLabel = screen.queryByText(/Claimed Benefit:/);
  expect(benefitLabel).toBeInTheDocument();

  // label for Result of Evidence input is "Result of Evidence:"
  const evidenceLabel = screen.queryByText(/Result of Evidence:/);
  expect(evidenceLabel).toBeInTheDocument();

  // label for Type of Research input is "Type of Research:"
  const researchLabel = screen.queryByText(/Type of Research:/);
  expect(researchLabel).toBeInTheDocument();

  // label for Type of Participant input is "Type of Participant:"
  const participantLabel = screen.queryByText(/Type of Participant:/);
  expect(participantLabel).toBeInTheDocument();

  // label for DOI input is "DOI:"
  const doiLabel = screen.queryByText(/DOI:/);
  expect(doiLabel).toBeInTheDocument();

  // label for Email input is "Email:"
  const emailLabel = screen.queryByText(/Email:/);
  expect(emailLabel).toBeInTheDocument();
});
