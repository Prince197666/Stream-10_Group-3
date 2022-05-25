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

// @route GET api/users/moderators/
// @description add/save moderator
// @access Public
router.post("/moderators/", (req, res) => {
  Moderator.create(req.body)
    .then((moderator) => res.json({ msg: "Moderator added successfully" }))
    .catch((err) => res.status(400).json({ error: "Unable to add this moderator" }));
});

// @route GET api/users/analysts/
// @description add/save analyst
// @access Public
router.post("/analysts/", (req, res) => {
  Analyst.create(req.body)
    .then((analyst) => res.json({ msg: "Analyst added successfully" }))
    .catch((err) => res.status(400).json({ error: "Unable to add this analyst" }));
});

module.exports = router;