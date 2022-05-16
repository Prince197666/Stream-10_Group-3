const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  journal_name: {
    type: String,
  },
  year_of_publication: {
    type: String,
    required: true
  },
  se_practice: {
    type: String,
    required: true
  },
  claimed_benefit: {
    type: Array,
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
    required: true
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
  },
  moderator_id: {
    type: mongoose.Schema.Types.ObjectId,
  },
  analyst_id: {
    type: mongoose.Schema.Types.ObjectId,
  },
  status: {
    type: String,
  }
});
  
//mongoose.model('document name', model object variable);
module.exports = Article = mongoose.model('articles', ArticleSchema);