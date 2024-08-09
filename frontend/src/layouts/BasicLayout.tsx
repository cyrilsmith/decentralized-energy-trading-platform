import React from 'react';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import GlobalHeader from './GlobalHeader';
import SidebarMenu from './Menu'; 
import Footer from './Footer';

const { Header, Sider, Content } = Layout;

const BasicLayout: React.FC = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        width={250}
        style={{
          background: '#171d29', 
        }}
      >
        <div style={{ padding: '16px', textAlign: 'center' }}>
          <img
            src="/assets/images/logo.png"
            alt="EnerTrade Logo"
            style={{ maxWidth: '180px', margin: '0 auto', display: 'block' }}
          />
        </div>
        <SidebarMenu /> 
      </Sider>
      <Layout>
        <Header
          style={{
            background: '#171d29', 
            padding: '0 24px',
            color: '#fff',
          }}
        >
          <GlobalHeader /> 
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: '24px',
            background: '#fff',
            borderRadius: '8px',
          }}
        >
          <Outlet /> 
        </Content>
        <Footer
          style={{
            textAlign: 'center',
            background: '#171d29',
            color: '#fff',
            padding: '16px 0',
          }}
        />
      </Layout>
    </Layout>
  );
};

export default BasicLayout;

