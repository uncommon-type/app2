import React from "react";

import { Link } from "react-router-dom";

const NotFoundView = () => {
  return (
    <div className="not-found-view">
      <div>
        Sorry... nothing here.
        <Link to="/">
          Go <strong>Home</strong>
        </Link>
      </div>
    </div>
  );
};
export default NotFoundView;
