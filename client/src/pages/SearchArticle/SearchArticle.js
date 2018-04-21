import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class SearchArticle extends Component {
  state = {
    articles: [],
    searchString: ""
  };

  componentDidMount() {
  }

  saveArticle = () => {
  };

  loadSearchResult = () => {
  };

  handleInputChange = event => {
    console.log(event.target);
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    console.log(this.state.searchString);
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log(event);
    API.searchArticle(this.state.searchString)
    .then(res => this.loadSearchResult())
    .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="ml-10">
            <Jumbotron>
              <h1>Search Ney York Times Articles</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.searchString}
                onChange={this.handleInputChange}
                name="searchString"
                placeholder=""
              />
              <Input
                name="Start Date"
                placeholder=""
              />
              <Input
                name="End Date"
                placeholder=""
              />
              <FormBtn
                // disabled={!(this.state.author && this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Search
              </FormBtn>
            </form>
          </Col>
        </Row>
        <Row>  
          {/* <Col size="ml-10">
            <Jumbotron>
              <h1>Search Result</h1>
            </Jumbotron>
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book._id}>
                    <Link to={"/books/" + book._id}>
                      <strong>
                        {book.title} by {book.author}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col> */}
        </Row>
      </Container>
    );
  }
}

export default SearchArticle;
