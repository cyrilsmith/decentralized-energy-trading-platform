export interface User {
    id: string;
    name: string;
    email: string;
    role: 'admin' | 'trader' | 'viewer'; // Define roles specific to EnerTrade
    permissions: string[]; // Array of permissions granted to the user
  }
  
  /**
   * Checks if the user has the required role
   * @param {User} user - The user object
   * @param {string} role - The required role
   * @returns {boolean} - True if the user has the required role
   */
  export function hasRole(user: User, role: 'admin' | 'trader' | 'viewer'): boolean {
    return user.role === role;
  }
  
  /**
   * Checks if the user has the required permission
   * @param {User} user - The user object
   * @param {string} permission - The required permission
   * @returns {boolean} - True if the user has the required permission
   */
  export function hasPermission(user: User, permission: string): boolean {
    return user.permissions.includes(permission);
  }
  
  /**
   * Example: Checks if the user is an admin
   * @param {User} user - The user object
   * @returns {boolean} - True if the user is an admin
   */
  export function isAdmin(user: User): boolean {
    return hasRole(user, 'admin');
  }
  
  /**
   * Example: Checks if the user can trade
   * @param {User} user - The user object
   * @returns {boolean} - True if the user has trading permissions
   */
  export function canTrade(user: User): boolean {
    return hasPermission(user, 'TRADE_ENERGY');
  }
  
  /**
   * Example: Checks if the user can view dashboards
   * @param {User} user - The user object
   * @returns {boolean} - True if the user can view dashboards
   */
  export function canViewDashboard(user: User): boolean {
    return hasPermission(user, 'VIEW_DASHBOARD');
  }
  