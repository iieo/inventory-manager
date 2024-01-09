export type InventoryItem = {
  id: number;
  name: string;
  location: string | null;
  category: string | null;
  rebuy: boolean;
  price: number | null;
  created_at: string;
  updated_at: string;
};
