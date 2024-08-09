import React, { useState } from 'react';
import { Form, Input, Button, Card, Alert } from 'antd';
import { UserOutlined, MailOutlined, LockOutlined } from '@ant-design/icons';

const Profile: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const onFinishProfile = (values: any) => {
    setLoading(true);
    setError('');
    setSuccess('');

    // Simulate profile update process
    setTimeout(() => {
      // Simulate successful update
      setLoading(false);
      setSuccess('Profile updated successfully.');
    }, 1000);
  };

  const onFinishPassword = (values: any) => {
    setLoading(true);
    setError('');
    setSuccess('');

    // Simulate password update process
    setTimeout(() => {
      if (values.newPassword === values.confirmPassword) {
        // Simulate successful password update
        setLoading(false);
        setSuccess('Password updated successfully.');
      } else {
        // Password update failed (password mismatch)
        setLoading(false);
        setError('The two passwords do not match.');
      }
    }, 1000);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Profile Settings</h2>
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
      <Card title="Personal Information" style={styles.card}>
        <Form
          name="profile"
          onFinish={onFinishProfile}
          style={styles.form}
          initialValues={{
            name: 'John Doe',
            email: 'johndoe@example.com',
          }}
        >
          <Form.Item
            name="name"
            rules={[{ required: true, message: 'Please input your name!' }]}
          >
            <Input
              prefix={<UserOutlined />}
              placeholder="Full Name"
              style={styles.input}
            />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input
              prefix={<MailOutlined />}
              placeholder="Email"
              type="email"
              style={styles.input}
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              style={styles.button}
              loading={loading}
              block
            >
              Update Profile
            </Button>
          </Form.Item>
        </Form>
      </Card>

      <Card title="Change Password" style={{ ...styles.card, marginTop: '24px' }}>
        <Form
          name="password"
          onFinish={onFinishPassword}
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
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              style={styles.button}
              loading={loading}
              block
            >
              Update Password
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '24px',
  },
  title: {
    marginBottom: '24px',
    color: '#171d29',
    textAlign: 'center' as const,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
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

export default Profile;
