import React from "react";

import Title from "./Title";
import Content from "./Content";

class Products extends React.Component {
  render() {
    return (
      <div className="jumbotron-masthead jumbotron-fluid">
          <Title />
          <Content />
      </div>
    );
  }
}

export default Products;
