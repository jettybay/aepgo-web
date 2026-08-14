import type { Transaction, InventoryItem, Hub, BuyOrder, SellListing } from "@/types";

export const traders = [
  "Ade Ogunleye — Kano Market",
  "Emi Agunwamba — Kaduna Depot",
  "Toyin Adekunle — Lagos Hub",
  "Hassan Usman — Katsina Farm",
  "Zainab Ali — Kano Wholesale",
];

export const commodities = ["Tomatoes", "Onions", "Peppers"];

// Commodity image URLs for marketplace
const UNSPLASH_PARAMS = "auto=format&fit=crop&w=200&q=70";
export const commodityImages: Record<string, string> = {
  Tomatoes: `https://images.unsplash.com/photo-1582284540020-8acbe03f4924?${UNSPLASH_PARAMS}`,
  Onions: `https://images.unsplash.com/photo-1683355739329-cea18ba93f02?${UNSPLASH_PARAMS}`,
  Peppers: `https://images.unsplash.com/photo-1601648764658-cf37e8c89b70?${UNSPLASH_PARAMS}`,
 
};

export const hubNames = ["Kano Hub", "Kaduna Hub", "Lagos Hub", "Ibadan Hub"];

export const hubs: Hub[] = [
  {
    name: "Kano Hub",
    location: "Kano Market, Kano State",
    status: "Operational",
    temp: 24,
    humidity: 65,
    solar: 78,
    capacity: 500,
    used: 340,
  },
  {
    name: "Kaduna Hub",
    location: "Kaduna Central, Kaduna State",
    status: "Operational",
    temp: 22,
    humidity: 72,
    solar: 62,
    capacity: 450,
    used: 295,
  },
  {
    name: "Lagos Hub",
    location: "Ikorodu, Lagos State",
    status: "Operational",
    temp: 28,
    humidity: 80,
    solar: 45,
    capacity: 600,
    used: 420,
  },
  {
    name: "Ibadan Hub",
    location: "Bodija Market, Oyo State",
    status: "Operational",
    temp: 26,
    humidity: 75,
    solar: 71,
    capacity: 400,
    used: 280,
  },
];

export const initialTransactions: Transaction[] = [
  {
    id: 1001,
    time: "14:32",
    trader: "Ade Ogunleye — Kano Market",
    commodity: "Tomatoes",
    qty: 50,
    price: 12500,
    grade: "A",
    hub: "Kano Hub",
    status: "Confirmed",
  },
  {
    id: 1002,
    time: "13:45",
    trader: "Emi Agunwamba — Kaduna Depot",
    commodity: "Onions",
    qty: 30,
    price: 8000,
    grade: "B",
    hub: "Kaduna Hub",
    status: "Confirmed",
  },
  {
    id: 1003,
    time: "13:10",
    trader: "Toyin Adekunle — Lagos Hub",
    commodity: "Peppers",
    qty: 25,
    price: 15000,
    grade: "A",
    hub: "Lagos Hub",
    status: "Confirmed",
  },
  {
    id: 1004,
    time: "12:55",
    trader: "Hassan Usman — Katsina Farm",
    commodity: "Tomatoes",
    qty: 40,
    price: 11500,
    grade: "B",
    hub: "Kano Hub",
    status: "Confirmed",
  },
 
];

export const initialInventory: InventoryItem[] = [
  {
    hub: "Kano Hub",
    commodity: "Tomatoes",
    qty: 120,
    grade: "A",
    days: 3,
    condition: "Fresh",
  },
  {
    hub: "Kano Hub",
    commodity: "Onions",
    qty: 85,
    grade: "B",
    days: 8,
    condition: "Good",
  },
  {
    hub: "Kano Hub",
    commodity: "Peppers",
    qty: 45,
    grade: "A",
    days: 2,
    condition: "Fresh",
  },
  {
    hub: "Kaduna Hub",
    commodity: "Tomatoes",
    qty: 95,
    grade: "B",
    days: 5,
    condition: "Good",
  },
  {
    hub: "Lagos Hub",
    commodity: "Tomatoes",
    qty: 150,
    grade: "A",
    days: 1,
    condition: "Fresh",
  },
  {
    hub: "Lagos Hub",
    commodity: "Peppers",
    qty: 110,
    grade: "C",
    days: 14,
    condition: "Fair",
  },
  {
    hub: "Ibadan Hub",
    commodity: "Onions",
    qty: 105,
    grade: "A",
    days: 7,
    condition: "Good",
  },
];

export const buyOrders: BuyOrder[] = [
  {
    id: "BO001",
    commodity: "Tomatoes",
    grade: "A",
    buyer: "Nigerians United Logistics",
    location: "Lagos",
    qty: 200,
    price: 13200,
    posted: "2 hours ago",
  },
  {
    id: "BO002",
    commodity: "Peppers",
    grade: "A",
    buyer: "Fresh Express Foods",
    location: "Abuja",
    qty: 100,
    price: 16500,
    posted: "4 hours ago",
  },
  {
    id: "BO003",
    commodity: "Onions",
    grade: "B",
    buyer: "Bulk Market Traders",
    location: "Kano",
    qty: 300,
    price: 7800,
    posted: "1 day ago",
  },
];

export const sellListings: SellListing[] = [
  {
    id: "SL001",
    commodity: "Tomatoes",
    grade: "A",
    seller: "Ade Ogunleye",
    hub: "Kano Hub",
    qty: 120,
    price: 12500,
    posted: "1 hour ago",
  },
  {
    id: "SL003",
    commodity: "Peppers",
    grade: "A",
    seller: "Toyin Adekunle",
    hub: "Lagos Hub",
    qty: 50,
    price: 15200,
    posted: "5 hours ago",
  },
];
