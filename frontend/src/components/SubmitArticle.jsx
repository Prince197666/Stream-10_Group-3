/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import axios from 'axios';
// import { FileUploader } from 'react-drag-drop-files';

class SubmitArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      author: '',
      journal_name: '',
      year_of_publication: '',
      se_practice: '',
      claimed_benefit: '',
      result_of_evidence: '',
      type_of_research: '',
      type_of_participant: '',
      doi: '',
      submitter_email: '',
    };
    this.sePractice = ['TDD', 'Mob Programming'];
    this.claimedBenefit = ['Code Quality Improvement', 'Product Quality Improvement', 'Team Satisfaction'];
    this.resultOfEvidence = ['Strong Support', 'Strong Support', ' WeakSupport', 'Weak Against'];
    this.typeOfResearch = ['Case Study', 'Experiment'];
    this.typeOfParticipant = ['Student', 'Practitioner'];
    // eslint-disable-next-line react/prop-types
    this.navigate = this.props.navigate;
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const data = {
      title: this.state.title,
      author: this.state.author,
      journal_name: this.state.journal_name,
      year_of_publication: this.state.year_of_publication,
      se_practice: this.state.se_practice,
      claimed_benefit: this.state.claimed_benefit,
      result_of_evidence: this.state.result_of_evidence,
      type_of_research: this.state.type_of_research,
      type_of_participant: this.state.type_of_participant,
      doi: this.state.doi,
      submitter_email: this.state.submitter_email,
      status: 'submit',
    };

    console.log(data);

    axios
      .post('http://localhost:8082/api/articles', data)
      // eslint-disable-next-line no-unused-vars
      .then((res) => {
        this.setState({
          title: '',
          author: '',
          journal_name: '',
          year_of_publication: '',
          se_practice: '',
          claimed_benefit: '',
          result_of_evidence: '',
          type_of_research: '',
          type_of_participant: '',
          doi: '',
          submitter_email: '',
        });
        this.navigate('/');
      })
      .catch((err) => {
        console.log(err);
        console.log('Error in SubmitArticle!');
      });
  };

  render() {
    return (
      <div>
        <h1>Submit Article</h1>

        <form noValidate onSubmit={this.onSubmit}>
          <div className="form-group row mb-3">
            <label htmlFor="title" className="col-sm-2 col-form-label">Titile:</label>
            <div className="col-sm-10">
              <input
                type="text"
                placeholder="Title"
                name="title"
                value={this.state.title}
                onChange={this.onChange}
                className="form-control"
              />
            </div>
          </div>

          <div className="form-group row mb-3">
            <label htmlFor="author" className="col-sm-2 col-form-label">Author:</label>
            <div className="col-sm-10">
              <input
                type="text"
                placeholder="Author"
                name="author"
                value={this.state.author}
                onChange={this.onChange}
                className="form-control"
              />
            </div>
          </div>

          <div className="form-group row mb-3">
            <label htmlFor="journal_name" className="col-sm-2 col-form-label">Journal Name:</label>
            <div className="col-sm-10">
              <input
                type="text"
                placeholder="Journal Name"
                name="journal_name"
                value={this.state.journal_name}
                onChange={this.onChange}
                className="form-control"
              />
            </div>
          </div>

          <br />
          <div className="form-group row mb-3">
            <label htmlFor="year_of_publication" className="col-sm-2 col-form-label">Year Of Publication:</label>
            <div className="col-sm-5">
              <input
                type="text"
                placeholder="Year Of Publication"
                name="year_of_publication"
                id="datepicker"
                value={this.state.year_of_publication}
                onChange={this.onChange}
                className="form-control"
              />
            </div>
          </div>

          <div className="form-group row mb-3">
            <label htmlFor="se-practice" className="col-sm-2 col-form-label">SE Practice:</label>
            <div className="col-sm-10">
              {this.sePractice.map((practice, index) => (
                <div key={`se-pratice-div${index + 1}`} className="form-check form-check-inline">
                  <input
                    key={(index + 1).toString()}
                    className="form-check-input"
                    type="radio"
                    name="se_practice"
                    value={practice}
                    onChange={this.onChange}
                  />
                  <label htmlFor={`SEPractice${index + 1}`} key={`se_practice${index + 1}`}>{practice}</label>
                </div>
              ))}
            </div>
          </div>

          <div className="form-group row mb-3">
            <label htmlFor="claimed_benefit" className="col-sm-2 col-form-label">Claimed Benefit:</label>
            <div className="col-sm-10">
              {this.claimedBenefit?.map((benefit, index) => (
                <div key={`benefit-div${index + 1}`} className="form-check form-check-inline">
                  <input
                    key={(index + 1).toString()}
                    className="form-check-input"
                    type="radio"
                    name="claimed_benefit"
                    value={benefit}
                    onChange={this.onChange}
                  />
                  <label htmlFor={`claimedBenefit${index + 1}`} key={`benefit-name${index + 1}`}>{benefit}</label>
                </div>
              ))}
            </div>
          </div>

          <div className="form-group row mb-3">
            <label htmlFor="result_of_evidence" className="col-sm-2 col-form-label">Result of Evidence:</label>
            <div className="col-sm-10">
              {this.resultOfEvidence?.map((evidence, index) => (
                <div key={`evidence-div${index + 1}`} className="form-check form-check-inline">
                  <input
                    key={(index + 1).toString()}
                    className="form-check-input"
                    type="radio"
                    name="result_of_evidence"
                    value={evidence}
                    onChange={this.onChange}
                  />
                  <label htmlFor={`resultOfEvidence${index + 1}`} key={`evidence-name${index + 1}`}>{evidence}</label>
                </div>
              ))}
            </div>
          </div>

          <div className="form-group row mb-3">
            <label htmlFor="type_of_research" className="col-sm-2 col-form-label">Type of Research:</label>
            <div className="col-sm-10">
              {this.typeOfResearch?.map((research, index) => (
                <div key={`research-div${index + 1}`} className="form-check form-check-inline">
                  <input
                    key={(index + 1).toString()}
                    className="form-check-input"
                    type="radio"
                    name="type_of_research"
                    value={research}
                    onChange={this.onChange}
                  />
                  <label htmlFor={`typeOfResearch${index + 1}`} key={`research-name${index + 1}`}>{research}</label>
                </div>
              ))}
            </div>
          </div>

          <div className="form-group row mb-3">
            <label htmlFor="type_of_participant" className="col-sm-2 col-form-label">Type of Participant:</label>
            <div className="col-sm-10">
              {this.typeOfParticipant?.map((participant, index) => (
                <div key={`participant-div${index + 1}`} className="form-check form-check-inline">
                  <input
                    key={(index + 1).toString()}
                    className="form-check-input"
                    type="radio"
                    name="type_of_participant"
                    value={participant}
                    onChange={this.onChange}
                  />
                  <label htmlFor={`typeOfParticipant${index + 1}`} key={`participant-name${index + 1}`}>{participant}</label>
                </div>
              ))}
            </div>
          </div>

          <div className="form-group row mb-3">
            <label htmlFor="doi" className="col-sm-2 col-form-label">DOI:</label>
            <div className="col-sm-10">
              <input
                type="text"
                placeholder="DOI"
                name="doi"
                value={this.state.doi}
                onChange={this.onChange}
                className="form-control"
              />
            </div>
          </div>

          <div className="form-group row mb-3">
            <label htmlFor="email" className="col-sm-2 col-form-label">Email:</label>
            <div className="col-sm-10">
              <input
                type="text"
                placeholder="Email"
                name="submitter_email"
                value={this.state.submitter_email}
                onChange={this.onChange}
                className="form-control"
              />
            </div>
          </div>

          <input
            type="submit"
          />
        </form>
      </div>
    );
  }
}
export default SubmitArticle;
