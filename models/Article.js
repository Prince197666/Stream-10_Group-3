const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  author: {
    type: String,
  },
  journal_name: {
    type: String,
  },
  year_of_publication: {
    type: String,
  },
  se_practice: {
    type: String,
  },
  claimed_benefit: {
    type: String,
  },
  result_of_evidence: {
    type: String,
  },
  type_of_research: {
    type: String,
  },
  type_of_participant: {
    type: String,
  },
  doi: {
    type: String,
  },
  submitter_email: {
    type: String,
  },
  user_id: {
    type: String,
  },
  moderator_id: {
    type: String,
  },
  analyst_id: {
    type: String,
  },
  status: {
    type: String,
  }
});
  
//mongoose.model('document name', model object variable);
module.exports = Article = mongoose.model('articles', ArticleSchema);