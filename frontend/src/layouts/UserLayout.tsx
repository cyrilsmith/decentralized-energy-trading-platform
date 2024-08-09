import React from 'react';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import Footer from './Footer'; // Reuse the Footer component

const { Header, Content } = Layout;

const UserLayout: React.FC = () => {
  return (
    <Layout style={{ minHeight: '100vh', backgroundColor: '#f0f2f5' }}>
      <Header
        style={{
          textAlign: 'center',
          backgroundColor: '#171d29',
          padding: '16px 0',
        }}
      >
        <div>
          <img
            src="/assets/images/logo.png"
            alt="EnerTrade Logo"
            style={{ height: '40px', marginBottom: '16px' }}
          />
        </div>
      </Header>
      <Content
        style={{
          maxWidth: '400px',
          margin: '24px auto',
          padding: '24px',
          backgroundColor: '#fff',
          borderRadius: '8px',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Outlet /> {/* This will render the specific user form (login, register, etc.) */}
      </Content>
      <Footer
        style={{
          textAlign: 'center',
          backgroundColor: 'transparent', // Transparent footer to blend with background
          color: '#171d29', // Dark text color to match branding
        }}
      />
    </Layout>
  );
};

export default UserLayout;
