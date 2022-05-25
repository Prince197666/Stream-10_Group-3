const mongoose = require('mongoose');

const ModeratorSchema = new mongoose.Schema({
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
module.exports = Moderator = mongoose.model('moderator', ModeratorSchema);