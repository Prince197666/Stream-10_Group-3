const mongoose = require('mongoose');

const AnalystSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  }
});
  
//mongoose.model('document name', model object variable);
module.exports = Analyst = mongoose.model('analysts', AnalystSchema);