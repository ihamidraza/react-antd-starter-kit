import React, { useState } from 'react';
import { Outlet, useNavigate } from "react-router-dom";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  HomeOutlined
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Menu } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Home', '', <HomeOutlined />)
];

interface Props {
  onLogout: Function
}

export const Navigation = ({ onLogout }: Props) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const onClick = (e: any) => {

    console.log(e)

  }

  return (
    <div>
    <div style={{ width: 256, marginTop: '30vh' }}>
      <Menu
        defaultSelectedKeys={['']}
        // defaultOpenKeys={['sub1']}
        mode="inline"
        // theme="dark"
        inlineCollapsed={collapsed}
        items={items}
        onClick={onClick}
      />
      <Button onClick={toggleCollapsed} style={{ border: 2, width: collapsed ? 80 : 260 }}>
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
    </div>
<Outlet />
    </div>
  );
};