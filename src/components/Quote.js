import React from "react";

export const Quote = ({quote}) => {


  return (
    <p>
      {quote.text} <br />
      <span> - {quote.author}</span>
    </p>
  );
};
