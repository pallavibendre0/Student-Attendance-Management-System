import React from "react";

function Header({ product, description }) {
  return (
    <>
      <h1>{product}</h1>
      <p>{description}</p>
    </>
  );
}

export default Header;
