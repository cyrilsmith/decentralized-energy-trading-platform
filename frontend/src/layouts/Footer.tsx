import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import React from 'react';

const Footer: React.FC<{ style?: React.CSSProperties }> = ({ style }) => {
  return (
    <DefaultFooter
      style={{
        background: '#171d29',
        color: '#fff',
        textAlign: 'center',
        padding: '16px 0',
        ...style, // Merge additional styles passed as a prop
      }}
      links={[
        {
          key: 'EnerTrade',
          title: 'EnerTrade',
          href: 'https://yourcompanywebsite.com', // Replace with your website
          blankTarget: true,
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/your-repo/enertrade', // Replace with your GitHub repo
          blankTarget: true,
        },
        {
          key: 'Privacy Policy',
          title: 'Privacy Policy',
          href: 'https://yourcompanywebsite.com/privacy-policy', // Replace with your privacy policy link
          blankTarget: true,
        },
      ]}
    />
  );
};

export default Footer;
