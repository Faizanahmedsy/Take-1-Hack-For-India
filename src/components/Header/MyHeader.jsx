import React from "react";
import { Menu, Layout, Button } from "antd";
import { Link } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
const { Header, Content, Footer } = Layout;
import "./MyHeader.css";

const MyHeader = () => {
  return (
    <>
      {/* <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">
            <Link to="/form">Raise a complain</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/list">Complains List</Link>
          </Menu.Item>
          <Menu.Item key="3">About</Menu.Item>
        </Menu>
      </Header> */}
      {/* <Header className="header">
        <div className="logo">
          <Link to="/">
            <img src="/path/to/your-logo.png" alt="Logo" />
          </Link>
        </div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">
            <Link to="/form">Raise a Complaint</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/list">Complaints List</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/about">About</Link>
          </Menu.Item>
        </Menu>
        <Button className="login-button" icon={<UserOutlined />}>
          Login
        </Button>
      </Header> */}
      <Header className="header">
        <div className="logo">
          <Link to="/">
            <img src="/path/to/your-logo.png" alt="Logo" />
          </Link>
          <span className="site-title">India Care</span>
        </div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">
            <Link to="/form">Raise a Complaint</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/list">Complaints List</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/about">About</Link>
          </Menu.Item>
        </Menu>
        <Button className="login-button" icon={<UserOutlined />}>
          Login
        </Button>
      </Header>
    </>
  );
};

export default MyHeader;
