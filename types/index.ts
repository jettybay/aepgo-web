export type Grade = "A" | "B" | "C";
export type Status = "Confirmed" | "Pending" | "Cancelled" | "Failed";
export type Condition = "Fresh" | "Good" | "Fair" | "Poor";
export type HubStatus = "Operational" | "Maintenance" | "Offline";

export interface Transaction {
  id: number;
  time: string;
  trader: string;
  commodity: string;
  qty: number;
  price: number;
  grade: Grade;
  hub: string;
  status: Status;
}

export interface InventoryItem {
  hub: string;
  commodity: string;
  qty: number;
  grade: Grade;
  days: number;
  condition: Condition;
}

export interface Hub {
  name: string;
  location: string;
  status: HubStatus;
  temp: number;
  humidity: number;
  solar: number;
  capacity: number;
  used: number;
}

export interface SensorReading {
  hub: string;
  sensor: string;
  reading: string;
  status: "Normal" | "Warning" | "Alert" | "Low";
  time: string;
}

export interface BuyOrder {
  id: string;
  commodity: string;
  grade: Grade;
  buyer: string;
  location: string;
  qty: number;
  price: number;
  posted: string;
}

export interface SellListing {
  id: string;
  commodity: string;
  grade: Grade;
  seller: string;
  hub: string;
  qty: number;
  price: number;
  posted: string;
}
