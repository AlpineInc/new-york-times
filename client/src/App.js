import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchArticle from "./pages/SearchArticle";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={SearchArticle} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
