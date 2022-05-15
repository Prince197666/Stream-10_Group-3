const express = require('express');
const router = express.Router();

// Load User model (Nomal user, Moderator, Analyst)
const Moderator = require('../../models/Moderator');

// @route GET api/moderators/
// @description Get all moderators
// @access Public
router.get('/moderators/', (req, res) => {
  Moderator.find()
      .then(moderators => res.json(moderators))
      .catch(err => res.status(404).json({ nomoderatorsfound: 'No Moderators found' }));
});

module.exports = router;