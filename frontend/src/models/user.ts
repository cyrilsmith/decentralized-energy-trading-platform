export interface User {
    id: string; // Unique identifier for the user
    name: string; // User's full name
    email: string; // User's email address
    passwordHash: string; // Hashed password for security
    createdAt: Date; // Date when the account was created
    updatedAt: Date; // Date when the account was last updated
    linkedAccounts?: LinkedAccount[]; // Array of linked accounts (e.g., GitHub, Google)
    preferences?: UserPreferences; // User's preferences (e.g., language, theme)
    tradeHistory?: Trade[]; // Array of trades the user has participated in
  }
  
  export interface LinkedAccount {
    provider: string; // e.g., 'GitHub', 'Google'
    accountId: string; // Unique identifier for the linked account
    linkedAt: Date; // Date when the account was linked
  }
  
  export interface UserPreferences {
    theme: 'light' | 'dark'; // Preferred theme
    language: string; // Preferred language (e.g., 'en', 'es')
    notificationsEnabled: boolean; // Whether the user has enabled notifications
  }
  
  export interface Trade {
    tradeId: string; // Unique identifier for the trade
    energyType: string; // Type of energy traded (e.g., 'solar', 'wind')
    amount: number; // Amount of energy traded (in kWh)
    price: number; // Price at which the energy was traded
    tradeDate: Date; // Date of the trade
  }
  