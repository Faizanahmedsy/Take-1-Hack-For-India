import React from "react";
import { Menu, Layout, Button, Row, Col, Tag } from "antd";
import { Link } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
const { Header, Content, Footer } = Layout;
import "./MyHeader.css";
import logo from "../../assets/logo2.png";

const MyHeader = () => {
  return (
    <>
      <div
        style={{
          padding: "30px",
          backgroundColor: "#9EDDFF",
        }}
      >
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
        {/* <Header className="header"> */}
        {/* <div className="logo">
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
        </Button> */}
        <Row gutter={16}>
          {/* <Col span={18}>
            <Link to={"/form"}>
              <span
                style={{
                  marginLeft: "52px",
                  fontSize: "30px",
                  fontWeight: "bold",
                  color: "#000000",
                }}
              >
                India Cares
              </span>
            </Link>
          </Col> */}
          <Col span={18}>
            <Link to={"/form"}>
              <span
                style={{
                  display: "flex",
                  alignItems: "center", // Center text and icon vertically
                  marginLeft: "52px",
                  fontSize: "30px",
                  fontWeight: "bold",
                  color: "#000000",
                }}
              >
                {/* SVG Icon */}
                <img
                  src={logo} // Replace with the correct path to your SVG file
                  alt="My Logo"
                  width="44"
                  height="44"
                  style={{ marginRight: "10px" }} // Add spacing between icon and text
                />
                {/* Text */}
                India Cares
              </span>
            </Link>
          </Col>
          <Col span={2}>
            <Link to={"/form"}>
              <Tag
                color="orange"
                // bordered={false}
                style={{
                  borderRadius: "10px",
                  padding: "10px",
                  fontWeight: "bold",
                }}
                // style={{
                //   color: "#000000",
                // }}
              >
                Raise a Complain
              </Tag>
            </Link>
            {/* <Link>HEllo</Link>
          <Link>HEllo</Link> */}
          </Col>
          <Col span={2}>
            <Link to={"/list"}>
              <Tag
                color="purple"
                // bordered={false}
                style={{
                  borderRadius: "10px",
                  padding: "10px",
                  fontWeight: "bold",
                }}
                // style={{
                //   color: "#000000",
                // }}
              >
                Public Complains
              </Tag>
            </Link>
          </Col>
          <Col span={2}>
            <Link to={"/map"}>
              {" "}
              <Tag
                color="blue"
                // bordered={false}
                style={{
                  borderRadius: "10px",
                  padding: "10px",
                }}
                // style={{
                //   color: "#000000",
                // }}
              >
                Map
              </Tag>
            </Link>
          </Col>
        </Row>
      </div>
      {/* </Header> */}
    </>
  );
};

export default MyHeader;
