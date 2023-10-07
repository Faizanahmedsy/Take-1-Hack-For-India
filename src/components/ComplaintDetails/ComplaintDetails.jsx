import { Card, Col, Row, Steps, Tag } from "antd";
import React from "react";

import "./ComplaintDetails.css";
import AppLayout from "../../AppLayout";

const ComplaintDetails = () => {
  return (
    <>
      <AppLayout>
        <div
          style={{
            margin: "0px 100px",
          }}
        >
          <p>ComplaintDetails </p>
          <Card>
            <Steps
              current={2}
              // progressDot={customDot}
              size="small"
              items={[
                {
                  title: "Received",
                  description: "Applied: 8 days ago",
                },
                {
                  title: "Reviewed",
                  description: "4 Days Ago",
                },
                {
                  title: "Assignment",
                  description: "Estimated: 24th feb",
                },
                {
                  title: "In a progress",
                  // description: "Pending",
                },
                {
                  title: "Issue Resolved",
                  // description: "Pending",
                },
              ]}
            />
          </Card>

          <Row id="header-row" gutter={12} style={{ marginBottom: 12 }}>
            <Col span={12}>
              <Card>
                <Row
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  <Col
                    span={6}
                    // style={{
                    //   textAlign: "center",
                    // }}
                  >
                    Raised By
                  </Col>
                  <Col span={6}>Existent in</Col>
                  <Col span={6}>Completed</Col>
                  <Col span={6}>Cancelled</Col>
                </Row>
                <Row>
                  <Col span={6}>
                    <Tag color="green" className="fab-custom-tags">
                      10000 Citizens
                    </Tag>
                  </Col>
                  <Col span={6}>
                    <Tag
                      color="cyan"
                      style={{
                        padding: "10px",
                        marginTop: "10px",
                        fontSize: "15px",
                        borderRadius: "15px",
                      }}
                    >
                      {" "}
                      277 Areas
                    </Tag>
                  </Col>
                  <Col span={6}>
                    <Tag
                      color="geekblue"
                      style={{
                        padding: "10px",
                        marginTop: "10px",
                        fontSize: "15px",
                        borderRadius: "15px",
                      }}
                    >
                      {" "}
                      201{" "}
                    </Tag>
                  </Col>
                  <Col span={6}>
                    <Tag
                      color="red"
                      style={{
                        padding: "10px",
                        marginTop: "10px",
                        fontSize: "15px",
                        borderRadius: "15px",
                      }}
                    >
                      {" "}
                      76{" "}
                    </Tag>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col span={12}>
              <Card>
                <Row
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  <Col span={6}>Active Time</Col>
                  <Col span={6}>Account Status</Col>
                  <Col span={6}>Default Payment</Col>
                  <Col span={6}>Invoices</Col>
                </Row>
                <Row>
                  <Col span={6}>
                    <Tag
                      color="magenta"
                      style={{
                        padding: "10px",
                        marginTop: "10px",
                        fontSize: "15px",
                      }}
                    >
                      {" "}
                      13Hr/Week{" "}
                    </Tag>
                  </Col>
                  <Col span={6}>
                    <Tag
                      color="blue"
                      style={{
                        padding: "10px",
                        marginTop: "10px",
                        fontSize: "15px",
                      }}
                    >
                      {" "}
                      Logged In{" "}
                    </Tag>{" "}
                  </Col>
                  <Col span={6}>
                    <Tag
                      color="cyan"
                      style={{
                        padding: "10px",
                        marginTop: "10px",
                        fontSize: "15px",
                      }}
                    >
                      {" "}
                      Credit Card{" "}
                    </Tag>
                  </Col>
                  <Col span={6}>
                    <Tag
                      color="purple"
                      style={{
                        padding: "10px",
                        marginTop: "10px",
                        fontSize: "15px",
                      }}
                    >
                      {" "}
                      77{" "}
                    </Tag>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </div>
      </AppLayout>
    </>
  );
};

export default ComplaintDetails;
