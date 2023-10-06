import React from "react";
import { Menu, Layout, Button, Form, Input, Row, Col } from "antd";

const { Header, Content, Footer } = Layout;

import { Link } from "react-router-dom";
import MyHeader from "../Header/MyHeader";
import About from "../About/About";

const Home = () => {
  // const form = Form.useForm();
  const [form] = Form.useForm();

  const onFinish = (payload) => {
    console.log(payload);
  };

  return (
    <div
      style={{
        margin: "100px",
      }}
    >
      <h1>Hosting College Event Made East</h1>
      <Form form={form} onFinish={onFinish} layout="vertical">
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Form.Item name={"eventName"} label={"Event Name"}>
              <Input placeholder="Enter Event Name" />
            </Form.Item>
          </Col>
          <Col span={12}></Col>
        </Row>
      </Form>

      {/* <h1>byebye world</h1> */}
      {/* <Layout className="layout"> */}
      {/* <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">Home</Menu.Item>
            <Menu.Item key="2">
              <Link to="/about">About</Link>
            </Menu.Item>
            <Menu.Item key="3">Contact</Menu.Item>
          </Menu>
        </Header> */}
      {/* <MyHeader /> */}
      {/* <About /> */}
      {/* <Content style={{ padding: "0 50px" }}>
          <div className="site-layout-content">
            <h1>Welcome to my website!</h1>
          </div>
        </Content> */}
      {/* <Footer style={{ textAlign: "center" }}>
          Ant Design ©2023 Created by Ant UED
        </Footer> */}
      {/* </Layout> */}
    </div>
  );
};

export default Home;
