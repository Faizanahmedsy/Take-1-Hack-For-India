// import { Card, Layout } from "antd";
import React from "react";
import { Menu, Layout } from "antd";

const { Header, Content, Footer } = Layout;

const Home = () => {
  return (
    <>
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">Home</Menu.Item>
            <Menu.Item key="2">About</Menu.Item>
            <Menu.Item key="3">Contact</Menu.Item>
          </Menu>
        </Header>
        {/* <Content style={{ padding: "0 50px" }}>
          <div className="site-layout-content">
            <h1>Welcome to my website!</h1>
          </div>
        </Content> */}
        {/* <Footer style={{ textAlign: "center" }}>
          Ant Design ©2023 Created by Ant UED
        </Footer> */}
      </Layout>
    </>
  );
};

export default Home;
