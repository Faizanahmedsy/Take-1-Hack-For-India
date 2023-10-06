import React from "react";
import { Menu, Layout, Button } from "antd";
import { Link } from "react-router-dom";
const { Header, Content, Footer } = Layout;

const MyHeader = () => {
  return (
    <>
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">
            <Link to="/">Form</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/about">About</Link>
          </Menu.Item>
          <Menu.Item key="3">Contact</Menu.Item>
        </Menu>
      </Header>
    </>
  );
};

export default MyHeader;
