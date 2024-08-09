import React from 'react';
import { Menu } from 'antd';
import {
  DashboardOutlined,
  UserOutlined,
  SettingOutlined,
  PoweroffOutlined,
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { SubMenu } = Menu;

const AppMenu: React.FC = () => {
  const navigate = useNavigate();

  const handleMenuClick = (key: string) => {
    if (key === 'logout') {
      // Clear user session and navigate to login
      localStorage.removeItem('user');
      navigate('/login');
    } else {
      navigate(`/${key}`);
    }
  };

  return (
    <Menu
      theme="dark"
      mode="inline"
      defaultSelectedKeys={['dashboard']}
      style={{ height: '100%', borderRight: 0 }}
      onClick={(e) => handleMenuClick(e.key)}
    >
      <Menu.Item key="dashboard" icon={<DashboardOutlined />}>
        Dashboard
      </Menu.Item>

      <Menu.Item key="profile" icon={<UserOutlined />}>
        Profile
      </Menu.Item>

      <SubMenu key="settings" icon={<SettingOutlined />} title="Settings">
        <Menu.Item key="account">Account Settings</Menu.Item>
        <Menu.Item key="preferences">Preferences</Menu.Item>
      </SubMenu>

      <Menu.Item key="logout" icon={<PoweroffOutlined />}>
        Logout
      </Menu.Item>
    </Menu>
  );
};

export default AppMenu;
