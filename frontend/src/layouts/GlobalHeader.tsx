import React from 'react';
import { Layout, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import { UserOutlined, LogoutOutlined } from '@ant-design/icons';
import AvatarDropdown from '../components/AvatarDropdown';

const { Header } = Layout;

const GlobalHeader: React.FC = () => {
  const navigate = useNavigate();

  const menuItems = [
    {
      key: 'home',
      label: 'Home',
      onClick: () => navigate('/'),
    },
    {
      key: 'dashboard',
      label: 'Dashboard',
      onClick: () => navigate('/dashboard'),
    },
    {
      key: 'profile',
      label: 'Profile',
      icon: <UserOutlined />,
      onClick: () => navigate('/profile'),
    },
    {
      key: 'logout',
      label: 'Logout',
      icon: <LogoutOutlined />,
      onClick: () => {
        // Clear user session and navigate to login
        localStorage.removeItem('user');
        navigate('/login');
      },
    },
  ];

  return (
    <Header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#171d29', // EnerTrade dark background
        padding: '0 24px',
        color: '#fff', // White text color
      }}
    >
      {/* Logo */}
      <div className="logo" style={{ display: 'flex', alignItems: 'center' }}>
        <img
          src="/assets/images/logo.png"
          alt="EnerTrade Logo"
          style={{ height: '40px', marginRight: '16px' }}
        />
        <h1 style={{ color: '#fff', margin: 0 }}>EnerTrade</h1>
      </div>

      {/* Navigation Menu */}
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['home']}
        items={menuItems}
        style={{ backgroundColor: 'transparent', borderBottom: 'none' }}
      />

      {/* Avatar Dropdown */}
      <AvatarDropdown />
    </Header>
  );
};

export default GlobalHeader;
