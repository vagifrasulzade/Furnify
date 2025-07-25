export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: string;
}

export interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  stock: number;
  status: 'Active' | 'Inactive';
  image?: string;
}

export interface Order {
  id: string;
  customer: string;
  product: string;
  amount: string;
  status: 'Pending' | 'Processing' | 'Shipped' | 'Delivered' | 'Cancelled';
  date: string;
}

export interface AnalyticsData {
  revenue: number;
  orders: number;
  customers: number;
  growth: number;
}