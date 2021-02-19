const React = require("react");
const ReactDOM = require("react-dom");

const Intro = () => {
  return React.createElement("h1", null, "Hello user");
};

ReactDOM.renderToString(Intro());
