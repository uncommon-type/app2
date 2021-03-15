import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import SearchBar from "./containers/SearchBar";
import ViewSearchResults from "./containers/ViewSearchResults";
import ViewArtistDetails from "./containers/ViewArtistDetails";

const Root = () => {
  return (
    <Router>
      <main className="app">
        <section className="app__section">
          <SearchBar />
        </section>
        <Switch>
          <section className="app__section wrapper">
            <ViewSearchResults />
            {/* <ViewArtistDetails /> */}
          </section>
        </Switch>
      </main>
    </Router>
  );
};

export default Root;
