import React, { useState } from 'react';
import { Form, Input, Button, Checkbox, Alert } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const onFinish = (values: any) => {
    setLoading(true);
    setError('');

    // Simulate login process
    setTimeout(() => {
      if (values.email === 'user@example.com' && values.password === 'password123') {
        // Successful login
        localStorage.setItem('user', 'loggedIn');
        navigate('/dashboard');
      } else {
        // Login failed
        setLoading(false);
        setError('Invalid email or password.');
      }
    }, 1000);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Login to EnerTrade</h2>
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
        name="login"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        style={styles.form}
      >
        <Form.Item
          name="email"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input
            prefix={<UserOutlined />}
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
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox style={styles.checkbox}>Remember me</Checkbox>
          </Form.Item>
          <a style={styles.forgot} href="">
            Forgot password
          </a>
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            style={styles.button}
            loading={loading}
            block
          >
            Log in
          </Button>
        </Form.Item>
        <Form.Item>
          <span style={styles.registerText}>Don't have an account? </span>
          <a style={styles.registerLink} href="/user/register">
            Register now!
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
  checkbox: {
    float: 'left' as const,
  },
  forgot: {
    float: 'right' as const,
  },
  button: {
    width: '100%',
    backgroundColor: '#1890ff',
    borderColor: '#1890ff',
  },
  registerText: {
    marginRight: '8px',
  },
  registerLink: {
    color: '#1890ff',
  },
};

export default Login;
