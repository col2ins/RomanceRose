import React from "react";
import { Container, Row, Col } from "react-bootstrap";

class Content extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col lg={8}>
            <Row>
              <Col md={6}>
                <h5 className="h5-masthead montserrat-semibold color-dark-blue">
                  Địa chỉ văn phòng
                </h5>
                <Row className="margin-top-4th">
                  <Col sm={2} xs={2}>
                    <div
                      className="bg-very-soft-orange"
                      style={{
                        display: "table",
                        width: "2.5rem",
                        height: "2.5rem",
                        borderRadius: "1.25rem"
                      }}
                    >
                      <span
                        className="dripicons-location color-light"
                        style={{
                          display: "table-cell",
                          fontSize: "1.5rem",
                          textAlign: "center",
                          verticalAlign: "bottom"
                        }}
                      />
                    </div>
                  </Col>
                  <Col sm={8} xs={8}>
                    <p class="h2-masthead montserrat-medium color-dark-75">
                      5/12 đường A, khu dân cư An Lộc, Bình An, Q.2, TPHCM.
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col md={6} className="items-margin-top-20-contact-social-media">
                <h5 className="h5-masthead montserrat-semibold color-dark-blue">
                  Theo dõi
                </h5>
                <Row className="margin-top-4th">
                  <div className="col-2">
                    <i
                      className="fab fa-facebook-f color-very-soft-orange"
                      style={{ fontSize: "1.875rem" }}
                    />
                  </div>
                  <div className="col-3">
                    <i
                      className="fab fa-youtube color-very-soft-orange"
                      style={{ fontSize: "1.875rem" }}
                    />
                  </div>
                  <div className="col-3">
                    <i
                      className="fab fa-instagram color-very-soft-orange"
                      style={{ fontSize: "1.875rem" }}
                    />
                  </div>
                </Row>
              </Col>
            </Row>
            <Row className="margin-top-tertiary">
              <Col md={6} className="items-margin-top-20-contact">
                <h5 className="h5-masthead montserrat-semibold color-dark-blue">
                  Liên hệ
                </h5>
                <Row className="margin-top-4th">
                  <Col sm={2} xs={2}>
                    <div
                      className="bg-very-soft-orange"
                      style={{
                        display: "table",
                        width: "2.5rem",
                        height: "2.5rem",
                        borderRadius: "1.25rem"
                      }}
                    >
                      <span
                        className="dripicons-phone color-light"
                        style={{
                          display: "table-cell",
                          fontSize: "1.5rem",
                          textAlign: "center",
                          verticalAlign: "bottom"
                        }}
                      />
                    </div>
                  </Col>
                  <Col sm={10} xs={10}>
                    <p className="montserrat-medium color-dark-75 margin-0">
                      Hotline đặt lịch hẹn:
                    </p>
                    <h4 className="montserrat-semibold color-dark margin-0">
                      1800-6868
                    </h4>
                    <p className="montserrat-medium color-dark-75 margin-0">
                      (Miễn phí, 8-21h kể cả T7, CN)
                    </p>
                  </Col>
                </Row>
                <Row className="margin-top-4th">
                  <Col sm={2} xs={2}>
                    <div
                      className="bg-very-soft-orange"
                      style={{
                        display: "table",
                        width: "2.5rem",
                        height: "2.5rem",
                        borderRadius: "1.25rem"
                      }}
                    >
                      <span
                        className="dripicons-phone color-light"
                        style={{
                          display: "table-cell",
                          fontSize: "1.5rem",
                          textAlign: "center",
                          verticalAlign: "bottom"
                        }}
                      />
                    </div>
                  </Col>
                  <Col sm={10} xs={10}>
                    <p className="montserrat-medium color-dark-75 margin-0">
                      Hotline mua hàng:
                    </p>
                    <h4 className="montserrat-semibold color-dark margin-0">
                      1800-8686
                    </h4>
                    <p className="montserrat-medium color-dark-75 margin-0">
                      (Miễn phí, 8-21h kể cả T7, CN)
                    </p>
                  </Col>
                </Row>
                <Row className="margin-top-4th">
                  <Col sm={2} xs={2}>
                    <div
                      className="bg-very-soft-orange"
                      style={{
                        display: "table",
                        width: "2.5rem",
                        height: "2.5rem",
                        borderRadius: "1.25rem"
                      }}
                    >
                      <span
                        className="dripicons-mail color-light"
                        style={{
                          display: "table-cell",
                          fontSize: "1.5rem",
                          textAlign: "center",
                          verticalAlign: "bottom"
                        }}
                      />
                    </div>
                  </Col>
                  <Col sm={10} xs={10}>
                    <p
                      className="montserrat-medium color-dark-75 margin-0"
                      style={{ lineHeight: "2.5" }}
                    >
                      Support@romancerose.vn
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col md={6} className="items-margin-top-20-contact">
                <h5 className="h5-masthead montserrat-semibold color-dark-blue">
                  Hỗ trợ khách hàng
                </h5>
                <div className="margin-top-4th">
                  <p className="h2-masthead montserrat-medium color-dark-75">
                    Các câu hỏi thường gặp
                  </p>
                  <p className="h2-masthead montserrat-medium color-dark-75">
                    Gửi yêu cầu hỗ trợ
                  </p>
                  <p className="h2-masthead montserrat-medium color-dark-75">
                    Hướng dẫn đặt hàng
                  </p>
                  <p className="h2-masthead montserrat-medium color-dark-75">
                    Phương thức vận chuyển
                  </p>
                  <p className="h2-masthead montserrat-medium color-dark-75">
                    Chính sách đổi trả
                  </p>
                  <p className="h2-masthead montserrat-medium color-dark-75">
                    Dự toán chi phí lễ cưới hỏi
                  </p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Content;
