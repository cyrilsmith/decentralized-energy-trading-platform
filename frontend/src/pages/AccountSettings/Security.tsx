import React, { useState } from 'react';
import { Form, Input, Button, Card, Alert, Switch } from 'antd';
import { LockOutlined } from '@ant-design/icons';

const Security: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const onFinish = (values: any) => {
    setLoading(true);
    setError('');
    setSuccess('');

    // Simulate password update process
    setTimeout(() => {
      if (values.newPassword === values.confirmPassword) {
        setLoading(false);
        setSuccess('Password updated successfully.');
      } else {
        setLoading(false);
        setError('The two passwords do not match.');
      }
    }, 1000);
  };

  return (
    <Card title="Security Settings" style={styles.card}>
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
      <Form
        name="security-settings"
        onFinish={onFinish}
        style={styles.form}
      >
        <Form.Item
          name="currentPassword"
          rules={[{ required: true, message: 'Please input your current password!' }]}
        >
          <Input.Password
            prefix={<LockOutlined />}
            placeholder="Current Password"
            style={styles.input}
          />
        </Form.Item>
        <Form.Item
          name="newPassword"
          rules={[{ required: true, message: 'Please input your new password!' }]}
        >
          <Input.Password
            prefix={<LockOutlined />}
            placeholder="New Password"
            style={styles.input}
          />
        </Form.Item>
        <Form.Item
          name="confirmPassword"
          rules={[
            { required: true, message: 'Please confirm your new password!' },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('newPassword') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('The two passwords do not match!'));
              },
            }),
          ]}
        >
          <Input.Password
            prefix={<LockOutlined />}
            placeholder="Confirm New Password"
            style={styles.input}
          />
        </Form.Item>
        <Form.Item
          name="twoFactorAuth"
          label="Enable Two-Factor Authentication"
          valuePropName="checked"
        >
          <Switch />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            style={styles.button}
            loading={loading}
            block
          >
            Update Security Settings
          </Button>
        </Form.Item>
      </Form>
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
  form: {
    maxWidth: '100%',
  },
  input: {
    padding: '10px',
  },
  button: {
    width: '100%',
    backgroundColor: '#1890ff',
    borderColor: '#1890ff',
  },
};

export default Security;
