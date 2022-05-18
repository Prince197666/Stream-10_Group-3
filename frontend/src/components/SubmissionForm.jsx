import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

function SubmissionForm() {
  const { register, handleSubmit } = useForm();
  const [result, setResult] = useState('');
  const onSubmit = (data) => setResult(JSON.stringify(data));
  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <input {...register('title')} placeholder="Title" />
      <p><input {...register('authors')} placeholder="Authors" /></p>
      <p><input {...register('journal_name')} placeholder="Journal Name" /></p>
      <p><input {...register('year_of_publication')} placeholder="Publication Year" /></p>

      <select {...register('sepractice')}>
        <option value="">Select SE practice...</option>
        <option value="TDD">TDD</option>
        <option value="Mob Programming">Mob Programming</option>
      </select>
      <br />
      <br />
      <select {...register('claimed_benefit')}>
        <option value="">Select Claimed Benefit...</option>
        <option value="Code Quality">Code Quality</option>
        <option value="Improvement">Improvement</option>
        <option value="Product Quality">Product Quality</option>
        <option value="Against">Against</option>
        <option value="Team Satisfaction">Team Satisfaction</option>
      </select>
      <br />
      <br />
      <select {...register('result_of_evidence')}>
        <option value="">Select Reseult of Evidence</option>
        <option value="Strong">Strong</option>
        <option value="Weak">Weak</option>
        <option value="Support">Support</option>
        <option value="Against">Against</option>
      </select>
      <br />
      <br />
      <select {...register('type_of_research')}>
        <option value="">Select Type of Research</option>
        <option value="Case Study">Case Study</option>
        <option value="Experiment">Experiment</option>
      </select>
      <br />
      <br />
      <select {...register('type_of_participant')}>
        <option value="">Select Type of Participant</option>
        <option value="Student">Student</option>
        <option value="Practitioner">Practitioner</option>
      </select>
      <br />
      <br />
      <p><input {...register('doi')} placeholder="DOI" /></p>

      <p><input {...register('submitter_email')} placeholder="Email" /></p>
      <p>{result}</p>
      <input type="submit" />
    </form>
  );
}

export default SubmissionForm;
