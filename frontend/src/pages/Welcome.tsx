import { PageContainer } from '@ant-design/pro-components';
import { Card, theme } from 'antd';
import React from 'react';

const Welcome: React.FC = () => {
  const { token } = theme.useToken();

  // Assuming the initial state contains settings like navTheme
  const initialState = {
    settings: {
      navTheme: 'light', // You can adjust this value or fetch it from somewhere else
    },
  };

  return (
    <PageContainer>
      <Card
        style={{
          borderRadius: 8,
        }}
        bodyStyle={{
          backgroundImage:
            initialState?.settings?.navTheme === 'realDark'
              ? 'background-image: linear-gradient(75deg, #1A1B1F 0%, #191C1F 100%)'
              : 'background-image: linear-gradient(75deg, #FBFDFF 0%, #F5F7FF 100%)',
        }}
      >
        <div
          style={{
            backgroundPosition: '100% -30%',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '274px auto',
            backgroundImage:
              "url('https://yourcompanywebsite.com/path-to-enertrade-background-image')",
          }}
        >
          <div
            style={{
              fontSize: '20px',
              color: token.colorTextHeading,
            }}
          >
            Welcome to EnerTrade
          </div>
          <p
            style={{
              fontSize: '14px',
              color: token.colorTextSecondary,
              lineHeight: '22px',
              marginTop: 16,
              marginBottom: 32,
              width: '65%',
            }}
          >
            EnerTrade is your one-stop solution for decentralized energy trading. Empower yourself
            by managing energy resources effectively and securely on the blockchain.
            Explore our platform to discover tools, resources, and integrations that will help you
            optimize your energy transactions.
          </p>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 16,
            }}
          >
            <InfoCard
              index={1}
              href="https://yourcompanywebsite.com/learn-enertrade"
              title="Learn EnerTrade"
              desc="Discover how EnerTrade can revolutionize the way you manage and trade energy resources on a decentralized platform."
            />
            <InfoCard
              index={2}
              title="Explore Features"
              href="https://yourcompanywebsite.com/features"
              desc="Dive into the powerful features EnerTrade offers to streamline your energy trading processes and enhance your efficiency."
            />
            <InfoCard
              index={3}
              title="Get Started with EnerTrade"
              href="https://yourcompanywebsite.com/get-started"
              desc="Ready to take control of your energy resources? Get started with EnerTrade and begin trading today."
            />
          </div>
        </div>
      </Card>
    </PageContainer>
  );
};

const InfoCard: React.FC<{
  title: string;
  index: number;
  desc: string;
  href: string;
}> = ({ title, href, index, desc }) => {
  const { useToken } = theme;
  const { token } = useToken();

  return (
    <div
      style={{
        backgroundColor: token.colorBgContainer,
        boxShadow: token.boxShadow,
        borderRadius: '8px',
        fontSize: '14px',
        color: token.colorTextSecondary,
        lineHeight: '22px',
        padding: '16px 19px',
        minWidth: '220px',
        flex: 1,
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: '4px',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            width: 48,
            height: 48,
            lineHeight: '22px',
            backgroundSize: '100%',
            textAlign: 'center',
            padding: '8px 16px 16px 12px',
            color: '#FFF',
            fontWeight: 'bold',
            backgroundImage:
              "url('https://gw.alipayobjects.com/zos/bmw-prod/daaf8d50-8e6d-4251-905d-676a24ddfa12.svg')",
          }}
        >
          {index}
        </div>
        <div
          style={{
            fontSize: '16px',
            color: token.colorText,
            paddingBottom: 8,
          }}
        >
          {title}
        </div>
      </div>
      <div
        style={{
          fontSize: '14px',
          color: token.colorTextSecondary,
          textAlign: 'justify',
          lineHeight: '22px',
          marginBottom: 8,
        }}
      >
        {desc}
      </div>
      <a href={href} target="_blank" rel="noreferrer">
        Learn more {'>'}
      </a>
    </div>
  );
};

export default Welcome;
