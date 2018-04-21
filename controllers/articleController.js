const db = require("../models");
const axios = require("axios");

// Defining methods for the articleController
module.exports = {
  getAll: function(req, res) {
    db.Article
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Article
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Article
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  search: function(req, res) {
    var authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey + "&q=" + req.params.searchString;
    axios
    .get(queryURL)
    .then(({ data: { results } }) => res.json(results))
    .catch(err => res.status(422).json(err));
  }  
};
