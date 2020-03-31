import React from "react";
// Exporting the Container, Row, and Col components from this file
// This Container component allows us to use a bootstrap container without worrying about class names
function Container({ fluid, children }) {
  return <div className={`mt-5 mb-5 mx-auto px-auto container${fluid ? "-fluid" : ""}`}>{children}</div>;
}
export default Container;