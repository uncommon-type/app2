import React from "react";

import SearchBar from "./containers/SearchBar";
import ViewSearchResults from "./containers/ViewSearchResults";
import ViewArtistDetails from "./containers/ViewArtistDetails";

const Root = () => {
  return (
    <main className="app">
      <section className="app__section">
        <SearchBar />
      </section>
      <section className="app__section wrapper">
        <ViewSearchResults />
        <ViewArtistDetails />
      </section>
    </main>
  );
};

export default Root;
