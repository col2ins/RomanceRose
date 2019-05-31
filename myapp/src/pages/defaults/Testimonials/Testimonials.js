import React from "react";

import Title from "./Title";
// import Content from "./Content";
import Content1 from "./Content1";

class Testimonials extends React.Component {
  render() {
    return (
      <div className="jumbotron-masthead jumbotron-fluid img-bg-testimonials">
          <Title />
          <Content1 />
      </div>
    );
  }
}

export default Testimonials;
