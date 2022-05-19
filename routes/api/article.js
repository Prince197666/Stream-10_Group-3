const express = require('express');
const router = express.Router();

// Load Article model
const Article = require('../../models/Article');

// @route GET api/articles/status/:status
// @description Get articles by status
// @access Public
router.get("/status/:status", (req, res) => {
  Article.find({ status: req.params.status })
    .then((articles) => {
      res.json(articles);
    })
    .catch((err) => {
      res.status(404).json({ noarticlesfound: "No Articles found" });
    });
});

// @route GET api/articles/id/:status
// @description Get articles by status
// @access Public
router.get("/id/:id", (req, res) => {
  Article.findById(req.params.id)
    .then((articles) => {
      res.json(articles);
    })
    .catch((err) => {
      res.status(404).json({ noarticlesfound: "No Articles found" });
    });
});
// @route GET api/articles
// @description add/save articles
// @access Public
router.post('/', (req, res) => {
  Article.create(req.body)
    .then(articles => res.json({ msg: 'Article added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this Article' }));


});

// @route GET api/articles/:id
// @description Update book
// @access Public
router.put("/id/:id", (req, res) => {
  Article.findByIdAndUpdate(req.params.id, req.body)
    .then((article) => res.json({ msg: "Updated successfully" }))
    .catch((err) =>
      res.status(400).json({ error: "Unable to update the Database" })
  );


module.exports = router;