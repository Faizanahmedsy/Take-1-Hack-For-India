import React from "react";
import { Menu } from "antd";
import {
  DashboardOutlined,
  UserOutlined,
  AppstoreAddOutlined,
} from "@ant-design/icons";

const Sidebar = () => {
  return (
    <Menu theme="dark" mode="vertical">
      <Menu.Item key="dashboard" icon={<DashboardOutlined />}>
        Dashboard
      </Menu.Item>
      <Menu.Item key="users" icon={<UserOutlined />}>
        Users
      </Menu.Item>
      <Menu.Item key="products" icon={<AppstoreAddOutlined />}>
        Products
      </Menu.Item>
    </Menu>
  );
};

export default Sidebar;
