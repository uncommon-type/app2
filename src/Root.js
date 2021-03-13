import React from "react";

import SearchBar from "./containers/SearchBar";
import ViewSearchResults from "./containers/ViewSearchResults";

const Root = () => {
  return (
    <main className="app">
      <section className="app__section">
        <SearchBar />
      </section>
      <section className="app__section wrapper">
        <ViewSearchResults />
      </section>
    </main>
  );
};

export default Root;
