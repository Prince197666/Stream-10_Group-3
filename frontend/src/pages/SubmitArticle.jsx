import React from 'react';

// eslint-disable-next-line import/extensions
import SubmissionForm from '../components/SubmissionForm.jsx';

function SubmitArticle() {
  return (
    <div>
      <h2>Submit Article</h2>
      <p>
        This will be a form to allow submitters to submit an article for possible
        inclusion in our SPEED repo.
      </p>
      <SubmissionForm />
    </div>
  );
}

export default SubmitArticle;
