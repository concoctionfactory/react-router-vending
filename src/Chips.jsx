import React from "react";
import { Link } from "react-router-dom";

function Chips() {
  return (
    <div>
      <p>Chips</p>
      <Link exact to="/">
        go back
      </Link>
    </div>
  );
}

export default Chips;
