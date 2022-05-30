import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { useForm, Controller } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import useFetchArticle from '../hooks/useFetchArticle';
import useArticleRegister from '../hooks/useArticleRegister';

function ModeratorForm() {
  const { article, getArticleById } = useFetchArticle();
  const { id } = useParams();
  const { udpateArticle } = useArticleRegister();
  const [cookie] = useCookies();
  const [isModerator, setIsModertor] = useState(false);
  const sePractice = ['TDD', 'Mob Programming'];
  const claimedBenefit = ['Code Quality Improvement', 'Product Quality Improvement', 'Team Satisfaction'];
  const resultOfEvidence = ['Strong Support', 'Strong Support', ' WeakSupport', 'Weak Against'];
  const typeOfResearch = ['Case Study', 'Experiment'];
  const typeOfParticipant = ['Student', 'Practitioner'];
  const {
    register, handleSubmit, setValue, control,
  } = useForm({ shouldUnregister: false });

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
    udpateArticle(id, data, cookie.role);
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
          <label htmlFor="title" className="col-sm-2 col-form-label">Titile:</label>
          <div className="col-sm-10">
            <input type="text" {...register('title')} className="form-control" />
          </div>
        </div>

        <div className="form-group row mb-3">
          <label htmlFor="author" className="col-sm-2 col-form-label">Author:</label>
          <div className="col-sm-10">
            <input type="text" {...register('author')} className="form-control" />
          </div>
        </div>

        <div className="form-group row mb-3">
          <label htmlFor="journal_name" className="col-sm-2 col-form-label">Journal Name:</label>
          <div className="col-sm-10">
            <input type="text" {...register('journal_name')} className="form-control" />
          </div>
        </div>

        <div className="form-group row mb-3">
          <label htmlFor="year_of_publication" className="col-sm-2 col-form-label">Year:</label>
          <div className="col-sm-10">
            <Controller
              control={control}
              name="year_of_publication"
              render={({ field: { onChange, value } }) => (
                <DatePicker
                  dateFormat="yyyy"
                  onChange={(date) => { onChange(date ? `${date.getFullYear()}` : null); }}
                  showYearPicker
                  // eslint-disable-next-line no-constant-condition
                  selected={{ ...register('year_of_publication') } ? new Date(`${value}/1/1`) : null}
                />
              )}
            />
          </div>
        </div>

        <div className="form-group row mb-3">
          <label htmlFor="se_practice" className="col-sm-2 col-form-label">SE Practice:</label>
          <div className="col-sm-10">
            {sePractice.map((practice, index) => (
              <div key={`practice-div${index + 1}`} className="form-check form-check-inline">
                <input
                  {...register('se_practice')}
                  key={(index + 1).toString()}
                  className="form-check-input"
                  type="radio"
                  name="se_practice"
                  value={practice}
                />
                <label htmlFor={`se_practice${index + 1}`} key={`practice-name${index + 1}`}>{practice}</label>
              </div>
            ))}
          </div>
        </div>

        <div className="form-group row mb-3">
          <label htmlFor="claimed_benefit" className="col-sm-2 col-form-label">Claimed Benefit:</label>
          <div className="col-sm-10">
            {claimedBenefit?.map((benefit, index) => (
              <div key={`benefit-div${index + 1}`} className="form-check form-check-inline">
                <input
                  {...register('claimed_benefit')}
                  key={(index + 1).toString()}
                  className="form-check-input"
                  type="radio"
                  name="claimed_benefit"
                  value={benefit}
                />
                <label htmlFor={`claimed_benefit${index + 1}`} key={`benefit-name${index + 1}`}>{benefit}</label>
              </div>
            ))}
          </div>
        </div>

        <div className="form-group row mb-3">
          <label htmlFor="result_of_evidence" className="col-sm-2 col-form-label">Result of Evidence:</label>
          <div className="col-sm-10">
            {resultOfEvidence?.map((evidence, index) => (
              <div key={`evidence-div${index + 1}`} className="form-check form-check-inline">
                <input
                  {...register('result_of_evidence')}
                  key={(index + 1).toString()}
                  className="form-check-input"
                  type="radio"
                  name="result_of_evidence"
                  value={evidence}
                />
                <label htmlFor={`result_of_evidence${index + 1}`} key={`evidence-name${index + 1}`}>{evidence}</label>
              </div>
            ))}
          </div>
        </div>

        <div className="form-group row mb-3">
          <label htmlFor="type_of_research" className="col-sm-2 col-form-label">Type of Research:</label>
          <div className="col-sm-10">
            {typeOfResearch?.map((research, index) => (
              <div key={`research-div${index + 1}`} className="form-check form-check-inline">
                <input
                  {...register('type_of_research')}
                  key={(index + 1).toString()}
                  className="form-check-input"
                  type="radio"
                  name="type_of_research"
                  value={research}
                />
                <label htmlFor={`type_of_research${index + 1}`} key={`research-name${index + 1}`}>{research}</label>
              </div>
            ))}
          </div>
        </div>

        <div className="form-group row mb-3">
          <label htmlFor="type_of_participant" className="col-sm-2 col-form-label">Type of Participant:</label>
          <div className="col-sm-10">
            {typeOfParticipant?.map((participant, index) => (
              <div key={`participant-div${index + 1}`} className="form-check form-check-inline">
                <input
                  {...register('type_of_participant')}
                  key={(index + 1).toString()}
                  className="form-check-input"
                  type="radio"
                  name="type_of_participant"
                  value={participant}
                />
                <label htmlFor={`type_of_participant${index + 1}`} key={`participant-name${index + 1}`}>{participant}</label>
              </div>
            ))}
          </div>
        </div>

        <div className="form-group row mb-3">
          <label htmlFor="doi" className="col-sm-2 col-form-label">DOI:</label>
          <div className="col-sm-10">
            <input type="text" {...register('doi')} className="form-control" />
          </div>
        </div>

        <div className="form-group row mb-3">
          <label htmlFor="submitter_email" className="col-sm-2 col-form-label">Email:</label>
          <div className="col-sm-10">
            <input type="text" {...register('submitter_email')} className="form-control" />
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
