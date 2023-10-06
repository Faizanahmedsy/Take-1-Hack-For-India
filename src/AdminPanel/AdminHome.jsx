import { Layout } from "antd";
import Sider from "antd/es/layout/Sider";
import React from "react";
import Sidebar from "./AdminSideBar";
// import { Content, Footer, Header } from "antd/es/layout/layout";
import AdminHeader from "./AdminHeader";
// import Footer from "./AdminFooter";
// import SideBar from "./AdminSideBar";
import AdminContent from "./AdminContent";
import AdminFooter from "./AdminFooter";

const AdminHome = () => {
  return (
    <div>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider width={80} theme="dark" collapsible collapsed={false}>
          <Sidebar />
        </Sider>
        <Layout className="site-layout">
          <AdminHeader />
          <AdminContent />
          <AdminFooter />
        </Layout>
      </Layout>
    </div>
  );
};

export default AdminHome;
