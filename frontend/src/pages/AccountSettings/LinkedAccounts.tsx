import React, { useState } from 'react';
import { Button, Card, Alert, List, Switch } from 'antd';
import { GithubOutlined, GoogleOutlined } from '@ant-design/icons';

const LinkedAccounts: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleLinkAccount = (account: string) => {
    setLoading(true);
    setError('');
    setSuccess('');

    // Simulate linking account process
    setTimeout(() => {
      setLoading(false);
      setSuccess(`${account} account linked successfully.`);
    }, 1000);
  };

  const handleUnlinkAccount = (account: string) => {
    setLoading(true);
    setError('');
    setSuccess('');

    // Simulate unlinking account process
    setTimeout(() => {
      setLoading(false);
      setSuccess(`${account} account unlinked successfully.`);
    }, 1000);
  };

  const accounts = [
    {
      title: 'GitHub',
      description: 'Connect your GitHub account',
      icon: <GithubOutlined />,
      linked: false,
    },
    {
      title: 'Google',
      description: 'Connect your Google account',
      icon: <GoogleOutlined />,
      linked: true,
    },
    // Add more accounts as needed
  ];

  return (
    <Card title="Linked Accounts" style={styles.card}>
      {error && (
        <Alert
          message="Error"
          description={error}
          type="error"
          showIcon
          style={{ marginBottom: 24 }}
        />
      )}
      {success && (
        <Alert
          message="Success"
          description={success}
          type="success"
          showIcon
          style={{ marginBottom: 24 }}
        />
      )}
      <List
        itemLayout="horizontal"
        dataSource={accounts}
        renderItem={item => (
          <List.Item
            actions={[
              item.linked ? (
                <Button
                  danger
                  onClick={() => handleUnlinkAccount(item.title)}
                  loading={loading}
                >
                  Unlink
                </Button>
              ) : (
                <Button
                  type="primary"
                  onClick={() => handleLinkAccount(item.title)}
                  loading={loading}
                >
                  Link
                </Button>
              ),
            ]}
          >
            <List.Item.Meta
              avatar={item.icon}
              title={item.title}
              description={item.description}
            />
          </List.Item>
        )}
      />
    </Card>
  );
};

const styles = {
  card: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    padding: '24px',
    maxWidth: '600px',
    margin: '0 auto',
  },
};

export default LinkedAccounts;
