const express = require('express');
const router = express.Router();

// Load User model (Nomal user, Moderator, Analyst)
const Moderator = require('../../models/Moderator');
const Analyst = require('../../models/Analyst');

// @route GET api/users/moderators/
// @description Get all moderators
// @access Public
router.get('/moderators/', (req, res) => {
  Moderator.find()
      .then(moderators => res.json(moderators))
      .catch(err => res.status(404).json({ nomoderatorsfound: 'No Moderators found' }));
});

// @route GET api/users/analysts/
// @description Get all analysts
// @access Public
router.get('/analysts/', (req, res) => {
  Analyst.find()
      .then(analysts => res.json(analysts))
      .catch(err => res.status(404).json({ noanalystsfound: 'No analysts found' }));
});

module.exports = router;