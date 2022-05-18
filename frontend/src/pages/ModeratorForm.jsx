import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { useForm } from 'react-hook-form';
import useFetchArticle from '../hooks/useFetchArticle';
import useArticleRegister from '../hooks/useArticleRegister';

function ModeratorForm() {
  const { article, getArticleById } = useFetchArticle();
  const { id } = useParams();
  const { udpateArticle } = useArticleRegister();
  const [cookie] = useCookies();
  const [isModerator, setIsModertor] = useState(false);
  const sePractices = ['Code Quality', 'Improvement', 'Product Quality', 'Against', 'Team Satisfaction'];
  const { register, handleSubmit, setValue } = useForm({ shouldUnregister: false });

  // eslint-disable-next-line no-lone-blocks
  // init process: get article id and get user role
  useEffect(() => {
    getArticleById(id);
    setIsModertor((cookie.role === 'moderators'));
  }, []);

  // when an docuemnt info was retrieved, fill the inputs in the form
  useEffect(() => {
    Object.keys(article).forEach((key) => {
      setValue(key, article[key]);
    });
  }, [article]);

  const onSubmit = (data) => {
    udpateArticle(id, data);
  };

  const handlePassSubmit = () => {
    setValue('moderator_id', cookie.user_id);
    setValue('status', 'pass');
    handleSubmit(onSubmit)();
  };

  const handleRegisterSubmit = () => {
    setValue('analyst_id', cookie.user_id);
    setValue('status', 'register');
    handleSubmit(onSubmit)();
  };

  const handleRejectSubmit = () => {
    setValue('moderator_id', cookie.user_id);
    setValue('status', 'reject');
    handleSubmit(onSubmit)();
  };

  return (
    <>
      <p>Article Info</p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group row mb-3">
          <label htmlFor="title" className="col-sm-2 col-form-label">TItile:</label>
          <div className="col-sm-10">
            <input type="text" {...register('title')} className="form-control" disabled={isModerator} />
          </div>
        </div>

        <div className="form-group row mb-3">
          <label htmlFor="author" className="col-sm-2 col-form-label">Author:</label>
          <div className="col-sm-10">
            <input type="text" {...register('author')} className="form-control" disabled={isModerator} />
          </div>
        </div>

        <div className="form-group row mb-3">
          <label htmlFor="journal_name" className="col-sm-2 col-form-label">Journal Name:</label>
          <div className="col-sm-10">
            <input type="text" {...register('journal_name')} className="form-control" disabled={isModerator} />
          </div>
        </div>

        <div className="form-group row mb-3">
          <label htmlFor="year_of_publication" className="col-sm-2 col-form-label">Year:</label>
          <div className="col-sm-10">
            <input type="text" {...register('year_of_publication')} className="form-control" disabled={isModerator} />
          </div>
        </div>

        <div className="form-group row mb-3">
          <label htmlFor="se_practice" className="col-sm-2 col-form-label">SE Practice:</label>
          <div className="col-sm-10">
            <input type="text" {...register('se_practice')} className="form-control" disabled={isModerator} />
          </div>
        </div>

        <div className="form-group row mb-3">
          <label htmlFor="claimed_benefit" className="col-sm-2 col-form-label">SE Practice:</label>
          <div className="col-sm-10">
            {sePractices?.map((benefit, index) => (
              <div key={`benefit-div${index + 1}`} className="form-check form-check-inline">
                <input
                  {...register('claimed_benefit')}
                  key={(index + 1).toString()}
                  className="form-check-input"
                  type="checkbox"
                  name="claimed_benefit"
                  checked={(article.claimed_benefit?.includes(benefit))}
                  disabled={isModerator}
                />
                <label htmlFor={`se-practice${index + 1}`} key={`benefit-name${index + 1}`}>{benefit}</label>
              </div>
            ))}
          </div>
        </div>

        <div className="form-group row mb-3">
          <label htmlFor="result_of_evidence" className="col-sm-2 col-form-label">Result of Evidence:</label>
          <div className="col-sm-10">
            <input type="text" {...register('result_of_evidence')} className="form-control" disabled={isModerator} />
          </div>
        </div>

        <div className="form-group row mb-3">
          <label htmlFor="type_of_research" className="col-sm-2 col-form-label">Type of Research:</label>
          <div className="col-sm-10">
            <input type="text" {...register('type_of_research')} className="form-control" disabled={isModerator} />
          </div>
        </div>

        <div className="form-group row mb-3">
          <label htmlFor="type_of_participant" className="col-sm-2 col-form-label">Type of Participant:</label>
          <div className="col-sm-10">
            <input type="text" {...register('type_of_participant')} className="form-control" disabled={isModerator} />
          </div>
        </div>

        <div className="form-group row mb-3">
          <label htmlFor="doi" className="col-sm-2 col-form-label">DOI:</label>
          <div className="col-sm-10">
            <input type="text" {...register('doi')} className="form-control" disabled={isModerator} />
          </div>
        </div>

        <div className="form-group row mb-3">
          <label htmlFor="submitter_email" className="col-sm-2 col-form-label">Email:</label>
          <div className="col-sm-10">
            <input type="text" {...register('submitter_email')} className="form-control" disabled={isModerator} />
          </div>
        </div>

        <input type="hidden" {...register('moderator_id')} />
        <input type="hidden" {...register('analyst_id')} />
        <input type="hidden" {...register('status')} />

        <div className="row d-flex justify-content-evenly">
          <div className="col-4">
            {isModerator
              ? <button type="button" onClick={handlePassSubmit}>Pass</button>
              : <button type="button" onClick={handleRegisterSubmit}>Register</button>}
          </div>
          <div className="col-4">
            <button type="button" onClick={handleRejectSubmit}>Reject</button>
          </div>
        </div>
      </form>
    </>
  );
}

export default ModeratorForm;
