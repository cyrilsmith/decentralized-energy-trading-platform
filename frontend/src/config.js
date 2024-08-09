const config = {
    // API endpoints
    apiBaseUrl: process.env.REACT_APP_API_BASE_URL || 'https://api.enertrade.com',
  
    // Theme settings
    theme: {
      primaryColor: '#760ca4', // Main theme color for EnerTrade
      secondaryColor: '#ffffff', // Secondary color
      backgroundColor: '#f0f2f5', // Background color
      textColor: '#333333', // Default text color
    },
  
    // Other global settings
    appName: 'EnerTrade',
    appVersion: '1.0.0',
    supportEmail: 'support@enertrade.com',
  };
  
  export default config;
  