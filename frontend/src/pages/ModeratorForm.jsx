import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import useFetchArticle from '../hooks/useFetchArticle';
import useFileRegister from '../hooks/useFileRegister';

function ModeratorForm() {
  const { article, getArticleById } = useFetchArticle();
  const { id } = useParams();
  const { udpateStatus } = useFileRegister();
  const [cookie] = useCookies();

  // eslint-disable-next-line no-lone-blocks
  { /* init process */ }
  useEffect(() => {
    getArticleById(id);
  }, []);

  const passArticle = () => udpateStatus(id, 'pass', cookie.user_id);
  const rejectArticle = () => udpateStatus(id, 'reject', cookie.user_id);

  return (
    <>
      <p>Article Info</p>
      <form>
        <label htmlFor="title">
          Title:
          <input type="text" disabled={(cookie.role === 'moderator')} value={article.title} />
        </label>
        <label htmlFor="Author">
          Author:
          <input type="text" disabled={(cookie.role === 'moderator')} value={article.author} />
        </label>
        <label htmlFor="Journal-Name">
          Journal Name:
          <input type="text" disabled={(cookie.role === 'moderator')} value={article.journal_name} />
        </label>
        <label htmlFor="Year">
          Year:
          <input type="text" disabled={(cookie.role === 'moderator')} value={article.year_of_publication} />
        </label>
        <label htmlFor="SE-Practice">
          SE-Practice:
          <input type="text" disabled={(cookie.role === 'moderator')} value={article.se_practice} />
        </label>
        <label htmlFor="Claimed-Benefit">
          Claimed Benefit:
          {article.claimed_benefit?.map((benefit, index) => (
            <label htmlFor="benefit">
              <input
                type="checkbox"
                name="se-practice"
                value={benefit}
                disabled={(cookie.role === 'moderator')}
                key={(index + 1).toString()}
                label={benefit}
                checked
              />
              {benefit}
            </label>
          ))}
        </label>
        <label htmlFor="Result-of-Evidence">
          Result of Evidence:
          <input type="text" disabled={(cookie.role === 'moderator')} value={article.result_of_evidence} />
        </label>
        <label htmlFor="Type-of-Research">
          Type of Research:
          <input type="text" disabled={(cookie.role === 'moderator')} value={article.type_of_research} />
        </label>
        <label htmlFor="Type-of-Participant">
          Type of Participant:
          <input type="text" disabled={(cookie.role === 'moderator')} value={article.type_of_participant} />
        </label>
        <label htmlFor="DOI">
          DOI:
          <input type="text" disabled={(cookie.role === 'moderator')} value={article.doi} />
        </label>
        <label htmlFor="Email">
          Email:
          <input type="text" disabled={(cookie.role === 'moderator')} value={article.submitter_email} />
        </label>
        <button type="button" onClick={passArticle}>Pass</button>
        <button type="button" onClick={rejectArticle}>Reject</button>
      </form>
    </>
  );
}

export default ModeratorForm;
