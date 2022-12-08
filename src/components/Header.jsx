import React from "react";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import { AppstoreOutlined} from "@ant-design/icons";

export default function Header() {
  const navigation = useNavigate();
  return (
    <Menu mode="horizontal" defaultSelectedKeys={["mail"]}>
      <Menu.Item
        key="mail"
        onClick={() => navigation("/")}
        icon={<AppstoreOutlined />}
      >
        Home
      </Menu.Item>

      {/* <Menu.SubMenu key="SubMenu" title="Menu" icon={<SettingOutlined />}> */}
        <Menu.Item
          key="two"
          onClick={() => navigation("/addreview")}
          icon={<AppstoreOutlined />}
        >
          Add Review
        </Menu.Item>

        <Menu.Item
          key="three"
          onClick={() => navigation("/allreviews")}
          icon={<AppstoreOutlined />}
        >
          My Reviews
        </Menu.Item>
      {/* </Menu.SubMenu> */}
    </Menu>
  );

}
