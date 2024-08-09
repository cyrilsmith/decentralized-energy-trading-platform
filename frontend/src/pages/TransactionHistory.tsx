import React from 'react';
import { Table, Tag, Card } from 'antd';

const TransactionHistory: React.FC = () => {
  // Sample data for the transaction history table
  const dataSource = [
    {
      key: '1',
      transactionId: 'TXN12345',
      date: '2024-08-01',
      energyTraded: '50.00 kWh',
      price: '$75.00',
      status: 'Completed',
    },
    {
      key: '2',
      transactionId: 'TXN67890',
      date: '2024-08-02',
      energyTraded: '100.00 kWh',
      price: '$150.00',
      status: 'Pending',
    },
    {
      key: '3',
      transactionId: 'TXN24680',
      date: '2024-08-03',
      energyTraded: '75.00 kWh',
      price: '$112.50',
      status: 'Failed',
    },
    // Add more sample data as needed
  ];

  const columns = [
    {
      title: 'Transaction ID',
      dataIndex: 'transactionId',
      key: 'transactionId',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Energy Traded (kWh)',
      dataIndex: 'energyTraded',
      key: 'energyTraded',
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
      render: (status: string) => {
        let color = 'green';
        if (status === 'Pending') {
          color = 'geekblue';
        } else if (status === 'Failed') {
          color = 'volcano';
        }
        return <Tag color={color}>{status.toUpperCase()}</Tag>;
      },
    },
  ];

  return (
    <div style={styles.container}>
      <Card title="Transaction History" style={styles.card}>
        <Table
          dataSource={dataSource}
          columns={columns}
          pagination={{ pageSize: 5 }}
          style={styles.table}
        />
      </Card>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '24px',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  },
  table: {
    marginTop: '24px',
  },
};

export default TransactionHistory;
