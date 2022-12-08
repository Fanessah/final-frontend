import React from 'react';
import { Menu } from 'antd';
import {useNavigate} from 'react-router-dom'
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';


export default function Header() {
  const navigation = useNavigate()
    return(
      <Menu mode="horizontal" defaultSelectedKeys={['mail']}>
      <Menu.Item
       key="mail"
       onClick={() => navigation('/')}
       icon={<AppstoreOutlined/>}>
        Home
      </Menu.Item>
      <Menu.SubMenu key="SubMenu" title="Menu" icon={<SettingOutlined />}>
        <Menu.Item key="two" 
        onClick={() => navigation('/addreview')}
        icon={<AppstoreOutlined />}>
          Add Review
        </Menu.Item>
        <Menu.Item key="three" icon={<AppstoreOutlined />}>
          Navigation Three
        </Menu.Item>
        <Menu.ItemGroup title="Item Group">
          <Menu.Item key="four" icon={<AppstoreOutlined />}>
            Navigation Four
          </Menu.Item>
          <Menu.Item key="five" icon={<AppstoreOutlined />}>
            Navigation Five
          </Menu.Item>
        </Menu.ItemGroup>
      </Menu.SubMenu>
    </Menu>
  );









    //     <header className= 'App-header'>

    //     <li><a href="/">Home</a></li>
    //     <li><a href="/allreviews">My Reviews </a></li>
    //     <li><a href="/addreview">Add a Review </a></li>
    //     </header>
       
    // )
}