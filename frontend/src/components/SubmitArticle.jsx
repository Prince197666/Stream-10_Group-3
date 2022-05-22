/* eslint-disable react/destructuring-assignment */
import React, { useState, Component } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import axios from 'axios';

class SubmitArticle extends Component {
  constructor() {
    super();
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
      // claimed_benefit: this.state.claimed_benefit,
      claimed_benefit: [],
      result_of_evidence: this.state.result_of_evidence,
      type_of_research: this.state.type_of_research,
      type_of_participant: this.state.type_of_participant,
      doi: this.state.doi,
      submitter_email: this.state.submitter_email,
      status: 'submit'
    };
    console.log(data);

    axios
      .post('http://localhost:8082/api/articles', data)
      .then((res) => {
        this.setState({
          title: '',
          author: '',
          journal_name: '',
          year_of_publication: '',
          se_practice: '',
          // claimed_benefit: '',
          result_of_evidence: '',
          type_of_research: '',
          type_of_participant: '',
          doi: '',
          submitter_email: '',
        });
        // this.props.history.push('/');
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
            <input
              type="text"
              placeholder="Year Of Publication"
              name="year_of_publication"
              value={this.state.year_of_publication}
              onChange={this.onChange}
            />
          </div>
          <br />
          <div>
            <input
              type="text"
              placeholder="SE Practice"
              name="se_practice"
              value={this.state.se_practice}
              onChange={this.onChange}
            />
          </div>
          <br />
          
          <div>
            <input
              type="text"
              placeholder="Claimed Benefit"
              name="claimed_benefit"
              value={this.state.claimed_benefit}
              onChange={this.onChange}
            />
          </div>
          <br />
          <div>
            <input
              type="text"
              placeholder="Result of Evidence"
              name="result_of_evidence"
              value={this.state.result_of_evidence}
              onChange={this.onChange}
            />
          </div>
          <br />
          <div>
            <input
              type="text"
              placeholder="Type of Research"
              name="type_of_research"
              value={this.state.type_of_research}
              onChange={this.onChange}
            />
          </div>
          <br />
          <div>
            <input
              type="text"
              placeholder="Type of Participant"
              name="type_of_participant"
              value={this.state.type_of_participant}
              onChange={this.onChange}
            />
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
