import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import SearchBar from "./containers/SearchBar";
import ViewSearchResults from "./containers/ViewSearchResults";
import ViewArtistDetails from "./containers/ViewArtistDetails";
import ViewNotFound from "./components/ViewNotFound";

const Root = () => (
  <Router>
    <main className="app">
      <section className="app__section">
        <SearchBar />
      </section>
      <Switch>
        <Route exact path="/" />
        <Route path="/search">
          <section className="app__section wrapper">
            <ViewSearchResults />
          </section>
        </Route>
        <Route path="/artist/:id">
          <ViewArtistDetails />
        </Route>
      </Switch>
    </main>
  </Router>
);

export default Root;
