import StatCard from '@/components/dashboard/StatCard';
import ChartSection from '@/components/dashboard/ChartSection';
import ProductsTable from '@/components/dashboard/ProductsTable';
import { products } from '@/data/products';
import { 
  DollarSign, 
  ShoppingCart, 
  Users, 
  TrendingUp 
} from 'lucide-react';

export default function Dashboard() {
  const totalInventoryValue = products.reduce((sum, product) => sum + (product.price * (product.stock || 0)), 0);
  const averagePrice = products.reduce((sum, product) => sum + product.price, 0) / products.length;
  const totalStock = products.reduce((sum, product) => sum + (product.stock || 0), 0);
  
  const monthlyOrders = Math.floor(totalStock * 0.15); // Assuming 15% of stock sold monthly
  const monthlyRevenue = monthlyOrders * averagePrice;
  const activeCustomers = Math.floor(monthlyOrders * 0.8); // Assuming 80% repeat customers

  const stats = [
    {
      title: 'Monthly Revenue',
      value: `$${Math.floor(monthlyRevenue).toLocaleString()}`,
      change: '+18.2%',
      changeType: 'positive' as const,
      icon: DollarSign
    },
    {
      title: 'Total Orders',
      value: monthlyOrders.toString(),
      change: '+12.8%',
      changeType: 'positive' as const,
      icon: ShoppingCart
    },
    {
      title: 'Active Customers',
      value: activeCustomers.toString(),
      change: '+15.4%',
      changeType: 'positive' as const,
      icon: Users
    },
    {
      title: 'Inventory Value',
      value: `$${Math.floor(totalInventoryValue).toLocaleString()}`,
      change: '+8.7%',
      changeType: 'positive' as const,
      icon: TrendingUp
    }
  ];

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {stats.map((stat, index) => (
          <StatCard
            key={index}
            title={stat.title}
            value={stat.value}
            change={stat.change}
            changeType={stat.changeType}
            icon={stat.icon}
          />
        ))}
      </div>

      {/* Chart Section */}
      <ChartSection />

      {/* Products Table */}
      <ProductsTable />
    </div>
  );
};

