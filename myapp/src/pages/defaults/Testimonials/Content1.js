import React from "react";
// import ReactDOM from "react-dom";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import RBCarousel from "react-bootstrap-carousel";
import { Container, Row, Col } from "react-bootstrap";

// const styles = { width: "100%" };

class Content1 extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      autoplay: true
    };
  }
  onSelect = (active, direction) => {
    console.log(`active=${active} && direction=${direction}`);
  };
  visiableOnSelect = active => {
    console.log(`visiable onSelect active=${active}`);
  };
  slideNext = () => {
    this.slider.slideNext();
  };
  slidePrev = () => {
    this.slider.slidePrev();
  };
  goToSlide = () => {
    this.slider.goToSlide(4);
  };
  autoplay = () => {
    this.setState({ autoplay: !this.state.autoplay });
  };
  _changeIcon = () => {
    let { leftIcon, rightIcon } = this.state;
    leftIcon = leftIcon ? undefined : <span className="dripicons-arrow-left" />;
    rightIcon = rightIcon ? undefined : <span className="dripicons-arrow-right" />;
    this.setState({ leftIcon, rightIcon });
  };
  render() {
    let { leftIcon, rightIcon } = this.state;
    return (
      <Container>
        <Row className="margin-top-secondary">
          <Col>
            <RBCarousel
              animation={true}
              autoplay={this.state.autoplay}
              slideshowSpeed={2000}
              leftIcon={leftIcon}
              rightIcon={rightIcon}
              onSelect={this.onSelect}
              ref={r => (this.slider = r)}
              version={4}
            >
              <div style={{}}>
                <img
                  style={{ height: "200px" }}
                  src="./images/testimonials/avatar (1).png"
                  alt="First slide"
                />
                <Col md={{ span: 10, offset: 1 }} sm={{ span: 10, offset: 1 }} xs={{ span: 10, offset: 1 }}>
                <p class="h2-masthed montserrat-medium color-dark-75"  style={{ paddingTop: "1.25rem"}}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                  sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>{" "}
                <p class="montserrat-semibold color-dark-blue">
                  Mạnh Trường & Nhã Vy
                </p>
                </Col>
              </div>
              <div style={{}}>
                <img
                  style={{ height: "200px" }}
                  src="./images/testimonials/avatar (1).png"
                  alt="First slide"
                />
                <Col md={{ span: 10, offset: 1 }} sm={{ span: 10, offset: 1 }} xs={{ span: 10, offset: 1 }}>
                <p class="h2-masthed montserrat-medium color-dark-75"  style={{ paddingTop: "1.25rem"}}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                  sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>{" "}
                <p class="montserrat-semibold color-dark-blue">
                  Mạnh Trường & Nhã Vy
                </p>
                </Col>
              </div>
              <div style={{}}>
                <img
                  style={{ height: "200px" }}
                  src="./images/testimonials/avatar (1).png"
                  alt="First slide"
                />
                <Col md={{ span: 10, offset: 1 }} sm={{ span: 10, offset: 1 }} xs={{ span: 10, offset: 1 }}>
                <p class="h2-masthed montserrat-medium color-dark-75"  style={{ paddingTop: "1.25rem"}}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                  sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>{" "}
                <p class="montserrat-semibold color-dark-blue">
                  Mạnh Trường & Nhã Vy
                </p>
                </Col>
              </div>

              {/* <div>
                <div className="carousel-caption">Text</div>
              </div>
              <div>
                <span>text</span>
                <div className="carousel-caption">Text</div>
              </div> */}
            </RBCarousel>
          </Col>
        </Row>
      </Container>
    );
  }
}

/**
 *  Boostrap Component
 */
// const Row = props => <div className="row">{props.children}</div>;
// const Col = props => (
//   <div className={`col-${props.span}`} style={props.style}>
//     {props.children}
//   </div>
// );
// const Button = props => {
//   const { style, bsStyle, onClick } = props;
//   const className = bsStyle ? `btn btn-${bsStyle}` : "btn";
//   return (
//     <button style={style} className={className} onClick={onClick}>
//       {props.children}
//     </button>
//   );
// };

export default Content1;
