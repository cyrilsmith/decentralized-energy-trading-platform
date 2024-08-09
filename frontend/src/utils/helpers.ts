/**
 * Formats a number as currency
 * @param {number} value - The number to format
 * @param {string} currency - The currency code (e.g., 'USD', 'EUR')
 * @returns {string} - The formatted currency string
 */
export function formatCurrency(value: number, currency: string = 'USD'): string {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency,
    }).format(value);
  }
  
  /**
   * Formats a date as a readable string
   * @param {Date} date - The date to format
   * @param {string} locale - The locale code (e.g., 'en-US')
   * @returns {string} - The formatted date string
   */
  export function formatDate(date: Date, locale: string = 'en-US'): string {
    return new Intl.DateTimeFormat(locale, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(date);
  }
  
  /**
   * Calculates the percentage difference between two numbers
   * @param {number} oldValue - The old value
   * @param {number} newValue - The new value
   * @returns {string} - The percentage difference
   */
  export function calculatePercentageDifference(oldValue: number, newValue: number): string {
    const difference = ((newValue - oldValue) / oldValue) * 100;
    return `${difference.toFixed(2)}%`;
  }
  
  /**
   * Capitalizes the first letter of a string
   * @param {string} text - The string to capitalize
   * @returns {string} - The capitalized string
   */
  export function capitalizeFirstLetter(text: string): string {
    if (!text) return '';
    return text.charAt(0).toUpperCase() + text.slice(1);
  }
  
  /**
   * Converts energy units (e.g., kWh to MWh)
   * @param {number} value - The value in kWh
   * @returns {number} - The value in MWh
   */
  export function convertKWhToMWh(value: number): number {
    return value / 1000;
  }
  
  /**
   * Example: Parses a JSON string safely
   * @param {string} jsonString - The JSON string to parse
   * @returns {any} - The parsed object or null if parsing failed
   */
  export function safeJsonParse(jsonString: string): any {
    try {
      return JSON.parse(jsonString);
    } catch (error) {
      console.error('Failed to parse JSON string:', error);
      return null;
    }
  }
  