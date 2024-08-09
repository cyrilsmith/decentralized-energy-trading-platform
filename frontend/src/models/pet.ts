export interface Asset {
    id: string; // Unique identifier for the asset
    name: string; // Name of the asset
    type: string; // Type of asset (e.g., 'solar panel', 'wind turbine')
    owner: string; // Owner of the asset (could reference a User ID)
    value: number; // Value of the asset in currency
    createdAt: Date; // Date when the asset was created
    updatedAt: Date; // Date when the asset was last updated
    status: 'active' | 'inactive'; // Current status of the asset
  }
  
  export interface AssetHistory {
    assetId: string; // ID of the asset
    event: string; // Event description (e.g., 'traded', 'maintenance')
    date: Date; // Date of the event
    details?: string; // Additional details about the event
  }
  