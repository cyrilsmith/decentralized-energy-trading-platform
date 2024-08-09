import React, { useState } from 'react';
import { Form, Select, Button, Card, Alert, Switch } from 'antd';

const { Option } = Select;

const Preferences: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');

  const onFinish = (values: any) => {
    setLoading(true);
    setSuccess('');

    // Simulate preferences update process
    setTimeout(() => {
      setLoading(false);
      setSuccess('Preferences updated successfully.');
    }, 1000);
  };

  return (
    <Card title="Preferences" style={styles.card}>
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
        name="preferences"
        onFinish={onFinish}
        style={styles.form}
        initialValues={{
          theme: 'light',
          language: 'en',
          notifications: true,
        }}
      >
        <Form.Item
          name="theme"
          label="Theme"
          rules={[{ required: true, message: 'Please select a theme!' }]}
        >
          <Select>
            <Option value="light">Light</Option>
            <Option value="dark">Dark</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="language"
          label="Language"
          rules={[{ required: true, message: 'Please select a language!' }]}
        >
          <Select>
            <Option value="en">English</Option>
            <Option value="es">Spanish</Option>
            <Option value="fr">French</Option>
            {/* Add more language options as needed */}
          </Select>
        </Form.Item>
        <Form.Item
          name="notifications"
          label="Enable Notifications"
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
            Update Preferences
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
  button: {
    width: '100%',
    backgroundColor: '#1890ff',
    borderColor: '#1890ff',
  },
};

export default Preferences;
