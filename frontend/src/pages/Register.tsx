import React, { useState } from 'react';
import { Form, Input, Button, Alert } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const Register: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const onFinish = (values: any) => {
    setLoading(true);
    setError('');

    // Simulate registration process
    setTimeout(() => {
      if (values.password === values.confirmPassword) {
        // Simulate successful registration
        localStorage.setItem('user', 'registered');
        navigate('/user/login');
      } else {
        // Registration failed (password mismatch)
        setLoading(false);
        setError('Passwords do not match.');
      }
    }, 1000);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Register for EnerTrade</h2>
      {error && (
        <Alert
          message="Error"
          description={error}
          type="error"
          showIcon
          style={{ marginBottom: 24 }}
        />
      )}
      <Form
        name="register"
        onFinish={onFinish}
        style={styles.form}
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
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password
            prefix={<LockOutlined />}
            placeholder="Password"
            style={styles.input}
          />
        </Form.Item>
        <Form.Item
          name="confirmPassword"
          rules={[
            { required: true, message: 'Please confirm your password!' },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('The two passwords do not match!'));
              },
            }),
          ]}
        >
          <Input.Password
            prefix={<LockOutlined />}
            placeholder="Confirm Password"
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
            Register
          </Button>
        </Form.Item>
        <Form.Item>
          <span style={styles.loginText}>Already have an account? </span>
          <a style={styles.loginLink} href="/user/login">
            Login now!
          </a>
        </Form.Item>
      </Form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '24px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center' as const,
  },
  title: {
    marginBottom: '24px',
    color: '#171d29',
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
  loginText: {
    marginRight: '8px',
  },
  loginLink: {
    color: '#1890ff',
  },
};

export default Register;
