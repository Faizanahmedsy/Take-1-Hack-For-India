// import React from "react";
import { Layout } from "antd";
import MyHeader from "./components/Header/MyHeader";

const { Content } = Layout;

const AppLayout = ({ children }) => {
  return (
    <Layout className="layout">
      <MyHeader />
      <Content>{children}</Content>
    </Layout>
  );
};

export default AppLayout;
