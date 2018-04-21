const router = require("express").Router();
const articleController = require("../../controllers/articleController");

// Matches with "/api/article/search"
router.route("/article/search")
  .get(articleController.search);

// Matches with "/api/article"
router.route("/article")
  .get(articleController.getAll)
  .post(articleController.create)
  .delete(articleController.remove);
 
  
module.exports = router;
