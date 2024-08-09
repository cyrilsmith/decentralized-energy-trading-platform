import React from 'react';
import { Layout, Breadcrumb, Card, Col, Row, Statistic, Table, Progress } from 'antd';
import { LineChartOutlined, DollarOutlined, ThunderboltOutlined, SwapOutlined } from '@ant-design/icons';

const { Content } = Layout;

const Dashboard: React.FC = () => {
  // Sample data for recent transactions
  const transactionData = [
    {
      key: '1',
      transactionId: 'TXN12345',
      amount: '50.00 kWh',
      price: '$75.00',
      status: 'Completed',
    },
    {
      key: '2',
      transactionId: 'TXN67890',
      amount: '100.00 kWh',
      price: '$150.00',
      status: 'Pending',
    },
  ];

  const transactionColumns = [
    {
      title: 'Transaction ID',
      dataIndex: 'transactionId',
      key: 'transactionId',
    },
    {
      title: 'Amount (kWh)',
      dataIndex: 'amount',
      key: 'amount',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
  ];

  return (
    <Layout style={{ padding: '0 24px 24px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
      </Breadcrumb>
      <Content
        style={{
          padding: 24,
          margin: 0,
          background: '#fff',
          borderRadius: '8px',
        }}
      >
        <Row gutter={16}>
          <Col span={8}>
            <Card>
              <Statistic
                title="Energy Traded"
                value={5000}
                suffix="kWh"
                prefix={<ThunderboltOutlined />}
                valueStyle={{ color: '#52c41a' }}
              />
            </Card>
          </Col>
          <Col span={8}>
            <Card>
              <Statistic
                title="Revenue Generated"
                value={75000}
                precision={2}
                prefix={<DollarOutlined />}
                valueStyle={{ color: '#cf1322' }}
              />
            </Card>
          </Col>
          <Col span={8}>
            <Card>
              <Statistic
                title="Ongoing Trades"
                value={15}
                prefix={<SwapOutlined />}
                valueStyle={{ color: '#1890ff' }}
              />
            </Card>
          </Col>
        </Row>

        <Row gutter={16} style={{ marginTop: '24px' }}>
          <Col span={16}>
            <Card title="Recent Transactions">
              <Table dataSource={transactionData} columns={transactionColumns} pagination={false} />
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Trading Efficiency">
              <Progress
                type="dashboard"
                percent={75}
                format={(percent) => `${percent}% Efficiency`}
                strokeColor={{
                  '0%': '#108ee9',
                  '100%': '#87d068',
                }}
              />
            </Card>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default Dashboard;
