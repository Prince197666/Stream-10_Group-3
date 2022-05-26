/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import axios from 'axios';
// import { FileUploader } from 'react-drag-drop-files';

class SubmitArticle extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      author: '',
      journal_name: '',
      year_of_publication: '',
      se_practice: '',
      claimed_benefit: [],
      result_of_evidence: [],
      type_of_research: [],
      type_of_participant: [],
      doi: '',
      submitter_email: '',
    };
    this.claimedBenefit = ['Code Quality', 'Improvement', 'Product Quality', 'Against', 'Team Satisfaction'];
    this.resultOfEvidence = ['Strong', 'Weak', 'Support', 'Against'];
    this.typeOfResearch = ['Case Study', 'Experiment'];
    this.typeOfParticipant = ['Student', 'Practitioner'];
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onChangeArray = (e) => {
    const arrayData = this.state[e.target.name].slice();
    arrayData.push(e.target.value);
    this.setState({ [e.target.name]: arrayData });
  };

  onValueChange = (e) => {
    this.setState({
      se_practice: e.target.value,
    });
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
          claimed_benefit: [],
          result_of_evidence: [],
          type_of_research: [],
          type_of_participant: [],
          doi: '',
          submitter_email: '',
        });
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
          <div>
            <input
              type="text"
              placeholder="Title"
              name="title"
              value={this.state.title}
              onChange={this.onChange}
            />
          </div>
          <br />
          <div>
            <input
              type="text"
              placeholder="Author"
              name="author"
              value={this.state.author}
              onChange={this.onChange}
            />
          </div>
          <br />
          <div>
            <input
              type="text"
              placeholder="Journal Name"
              name="journal_name"
              value={this.state.journal_name}
              onChange={this.onChange}
            />
          </div>
          <br />
          <div>
            <label htmlFor="year_of_publication" className="col-sm-2 col-form-label">Date:</label>
            <input
              type="date"
              placeholder="Year Of Publication"
              name="year_of_publication"
              value={this.state.year_of_publication}
              onChange={this.onChange}
            />
          </div>
          <br />
          <div>
            <p>SE Practice:</p>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="TDD"
                checked={this.state.se_practice === 'TDD'}
                onChange={this.onValueChange}
              />
              TDD
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="Mob Programming"
                checked={this.state.se_practice === 'Mob Programming'}
                onChange={this.onValueChange}
              />
              Mob Programming
            </label>
          </div>
          <br />

          <div className="form-group row mb-3">
            <label htmlFor="claimed_benefit" className="col-sm-2 col-form-label">Claimed Benefit:</label>
            <div className="col-sm-10">
              {this.claimedBenefit?.map((benefit, index) => (
                <div key={`benefit-div${index + 1}`} className="form-check form-check-inline">
                  <input
                    key={(index + 1).toString()}
                    className="form-check-input"
                    type="checkbox"
                    name="claimed_benefit"
                    value={benefit}
                    onChange={this.onChangeArray}
                  />
                  <label htmlFor={`this.claimedBenefit${index + 1}`} key={`benefit-name${index + 1}`}>{benefit}</label>
                </div>
              ))}
            </div>
          </div>
          <br />

          <div className="form-group row mb-3">
            <label htmlFor="result_of_evidence" className="col-sm-2 col-form-label">Result of Evidence:</label>
            <div className="col-sm-10">
              {this.resultOfEvidence?.map((evidence, index) => (
                <div key={`evidence-div${index + 1}`} className="form-check form-check-inline">
                  <input
                    key={(index + 1).toString()}
                    className="form-check-input"
                    type="checkbox"
                    name="result_of_evidence"
                    // value={this.state.result_of_evidence}
                    value={evidence}
                    onChange={this.onChangeArray}
                  />
                  <label htmlFor={`this.resultOfEvidence${index + 1}`} key={`evidence-name${index + 1}`}>{evidence}</label>
                </div>
              ))}
            </div>
          </div>

          <br />

          <div className="form-group row mb-3">
            <label htmlFor="type_of_research" className="col-sm-2 col-form-label">Type of Research</label>
            <div className="col-sm-10">
              {this.typeOfResearch?.map((research, index) => (
                <div key={`research-div${index + 1}`} className="form-check form-check-inline">
                  <input
                    key={(index + 1).toString()}
                    className="form-check-input"
                    type="checkbox"
                    name="type_of_research"
                    value={research}
                    onChange={this.onChangeArray}
                  />
                  <label htmlFor={`this.typeOfResearch${index + 1}`} key={`research-name${index + 1}`}>{research}</label>
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
                    type="checkbox"
                    name="type_of_participant"
                    value={participant}
                    onChange={this.onChangeArray}
                  />
                  <label htmlFor={`this.typeOfParticipant${index + 1}`} key={`participant-name${index + 1}`}>{participant}</label>
                </div>
              ))}
            </div>
          </div>
          <br />
          <div>
            <input
              type="text"
              placeholder="DOI"
              name="doi"
              value={this.state.doi}
              onChange={this.onChange}
            />
          </div>
          <br />
          <div>
            <input
              type="text"
              placeholder="Email"
              name="submitter_email"
              value={this.state.submitter_email}
              onChange={this.onChange}
            />
          </div>
          <br />
          <input
            type="submit"
          />
        </form>
      </div>
    );
  }
}
export default SubmitArticle;
