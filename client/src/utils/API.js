import axios from "axios";

export default {
  // Gets all articles
  searchArticle: function(searchString) {
    return axios.get("/api/article/search?searchString="+searchString);
  },
  // Gets the article with the given id
  getAllArticle: function(i) {
    return axios.get("/api/article");
  },
  // Deletes the article with the given id
  deleteArticle: function(id) {
    return axios.delete("/api/article" + id);
  },
  // Saves a article to the database
  saveArticle: function(articleData) {
    return axios.post("/api/article", articleData);
  }
};
