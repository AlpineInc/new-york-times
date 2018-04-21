import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";

class Saved extends Component {
  state = {
    savedArticle: []
  };
  
  componentDidMount() {

  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="ml-10">
            <Jumbotron>
              <h1>My Saved Ney York Times Articles</h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="ml-10">
            <article>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="ml-10">
            <Link to="/">← Back to Search</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Saved;
