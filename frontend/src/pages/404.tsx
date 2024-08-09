import { useNavigate } from 'react-router-dom'; // Replace history with useNavigate
import { Button, Result } from 'antd';
import React from 'react';
import { useIntl } from 'react-intl'; // Import useIntl from react-intl

const NoFoundPage: React.FC = () => {
  const navigate = useNavigate(); // Use useNavigate hook for navigation
  const intl = useIntl(); // Use the useIntl hook from react-intl

  return (
    <Result
      status="404"
      title="404"
      subTitle={intl.formatMessage({ id: 'pages.404.subTitle', defaultMessage: 'Sorry, the page you visited does not exist.' })}
      extra={
        <Button type="primary" onClick={() => navigate('/')}>
          {intl.formatMessage({ id: 'pages.404.buttonText', defaultMessage: 'Back Home' })}
        </Button>
      }
    />
  );
};

export default NoFoundPage;
