import { TrendingUp, TrendingDown, Users, DollarSign, Eye } from 'lucide-react';

export default function Analytics() {
  const metrics = [
    { title: 'Page Views', value: '89,456', change: '+18.2%', trend: 'up', icon: Eye },
    { title: 'Unique Visitors', value: '32,189', change: '+12.4%', trend: 'up', icon: Users },
    { title: 'Conversion Rate', value: '4.18%', change: '+0.8%', trend: 'up', icon: TrendingUp },
    { title: 'Average Order', value: '$625.50', change: '+22.1%', trend: 'up', icon: DollarSign },
  ];

  const topProducts = [
    { name: 'Braya Hydraulic Lift Up Storage Platform Bed', sales: 45, revenue: '$54,000' },
    { name: 'Modern L-Shaped Sectional Sofa', sales: 38, revenue: '$34,162' },
    { name: 'Candler Velvet Upholstered Platform Bed', sales: 32, revenue: '$22,400' },
    { name: 'Round Dining Table with 4 Chairs', sales: 28, revenue: '$22,372' },
    { name: 'Executive Ergonomic Office Chair', sales: 24, revenue: '$7,176' },
  ];

  const recentActivity = [
    { action: 'New user registration', time: '2 minutes ago', type: 'user' },
    { action: 'Order #ORD-045 completed', time: '15 minutes ago', type: 'order' },
    { action: 'Product "Storage Platform Bed" updated', time: '1 hour ago', type: 'product' },
    { action: 'Payment of $1,200.00 received', time: '2 hours ago', type: 'payment' },
    { action: 'Inventory alert: Low stock on Office Chairs', time: '3 hours ago', type: 'alert' },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Analytics</h1>
        <p className="text-gray-600">Track your furniture business performance and insights</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <div key={index} className="bg-white rounded-xl border border-orange-100 p-6 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-gradient-to-r from-orange-400 to-orange-600 rounded-lg">
                <metric.icon className="w-6 h-6 text-white" />
              </div>
              <div className={`flex items-center space-x-1 text-sm font-semibold ${
                metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
              }`}>
                {metric.trend === 'up' ? (
                  <TrendingUp className="w-4 h-4" />
                ) : (
                  <TrendingDown className="w-4 h-4" />
                )}
                <span>{metric.change}</span>
              </div>
            </div>
            <h3 className="text-gray-600 text-sm font-medium mb-1">{metric.title}</h3>
            <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Chart */}
        <div className="bg-white rounded-xl border border-orange-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Revenue Trend</h3>
          <div className="h-64 bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <TrendingUp className="w-12 h-12 text-orange-400 mx-auto mb-2" />
              <p className="text-orange-600 font-medium">Interactive chart would go here</p>
              <p className="text-sm text-gray-500 mt-1">Revenue: $140,110 (+28.5%)</p>
            </div>
          </div>
        </div>

        {/* Top Products */}
        <div className="bg-white rounded-xl border border-orange-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Top Selling Furniture</h3>
          <div className="space-y-4">
            {topProducts.map((product, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-orange-50 transition-colors">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-orange-600 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xs font-bold">{index + 1}</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">{product.name}</p>
                    <p className="text-xs text-gray-500">{product.sales} sales</p>
                  </div>
                </div>
                <span className="font-semibold text-gray-900">{product.revenue}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl border border-orange-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Recent Activity</h3>
        <div className="space-y-4">
          {recentActivity.map((activity, index) => (
            <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-orange-50 transition-colors">
              <div className={`w-2 h-2 rounded-full ${
                activity.type === 'user' ? 'bg-purple-500' :
                activity.type === 'order' ? 'bg-green-500' :
                activity.type === 'product' ? 'bg-blue-500' :
                activity.type === 'payment' ? 'bg-orange-500' : 'bg-red-500'
              }`}></div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                <p className="text-xs text-gray-500">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};