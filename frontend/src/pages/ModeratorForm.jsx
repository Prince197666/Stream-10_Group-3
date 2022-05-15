import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useFetchArticle from '../hooks/useFetchArticle';

function ModeratorForm() {
  const { article, getArticleById } = useFetchArticle();
  const { id } = useParams();

  // eslint-disable-next-line no-lone-blocks
  { /* init process */ }
  useEffect(() => {
    getArticleById(id);
  }, []);

  return (
    <>
      <p>Article info</p>
      <p>{`Title: ${article.title}`}</p>
      <p>{`Author: ${article.author}`}</p>
      <p>{`Journal Name : ${article.journal_name}`}</p>
      <p>{`Year: ${article.year_of_publication}`}</p>
      <p>{`SE Practice: ${article.se_practice}`}</p>
      {article.claimed_benefit?.map((benefit) => (
        <p>{`Claimed Benefit: ${benefit}`}</p>
      ))}
      <p>{`Result of Evidence: ${article.result_of_evidence}`}</p>
      <p>{`Type of Research: ${article.type_of_research}`}</p>
      <p>{`Type of Participant: ${article.type_of_participant}`}</p>
      <p>{`DOI: ${article.doi}`}</p>
      <p>{`Email: ${article.submitter_email}`}</p>
    </>
  );
}

export default ModeratorForm;
