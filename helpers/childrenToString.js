import React from "react";

// Convert an array of React children into a text string. All components are
// stripped, except for the text nodes.
// Adapted from: https://github.com/facebook/react/issues/9255#issuecomment-452368065
const childrenToString = (children) => {
  let text = "";

  React.Children.map(children, (child) => {
    if (typeof child === "string") {
      text += child;
    }
  });

  return text;
};

export default childrenToString;
