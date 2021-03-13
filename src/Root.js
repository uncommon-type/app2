import React from "react";

import SearchBar from "./containers/SearchBar";

const Root = () => {
  return (
    <main className="app">
      <section className="app__section">
        <SearchBar />
      </section>
    </main>
  );
};

export default Root;
