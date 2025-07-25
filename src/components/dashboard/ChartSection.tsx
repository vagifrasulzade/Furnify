import React from 'react';
import { TrendingUp, BarChart3 } from 'lucide-react';

const ChartSection: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Chart Placeholder */}
      <div className="bg-white rounded-xl border border-orange-100 p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Revenue Chart</h3>
            <p className="text-sm text-gray-600">Monthly revenue overview</p>
          </div>
          <div className="p-2 bg-orange-100 rounded-lg">
            <TrendingUp className="w-5 h-5 text-orange-600" />
          </div>
        </div>
        <div className="h-48 bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <BarChart3 className="w-12 h-12 text-orange-400 mx-auto mb-2" />
            <p className="text-orange-600 font-medium">Chart visualization would go here</p>
          </div>
        </div>
      </div>

      {/* Activity List */}
      <div className="bg-white rounded-xl border border-orange-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Recent Activity</h3>
        <div className="space-y-4">
          {[
            { action: 'Braya Storage Bed ordered', time: '2 minutes ago', type: 'order' },
            { action: 'Modern Sectional Sofa updated', time: '15 minutes ago', type: 'product' },
            { action: 'New customer registered', time: '1 hour ago', type: 'user' },
            { action: 'Dining table payment processed', time: '2 hours ago', type: 'payment' },
            { action: 'Office chair inventory updated', time: '3 hours ago', type: 'inventory' },
            { action: 'Kitchen cabinet order shipped', time: '4 hours ago', type: 'order' }
          ].map((activity, index) => (
            <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-orange-50 transition-colors">
              <div className={`w-2 h-2 rounded-full ${
                activity.type === 'order' ? 'bg-green-500' :
                activity.type === 'product' ? 'bg-blue-500' :
                activity.type === 'user' ? 'bg-purple-500' :
                activity.type === 'payment' ? 'bg-orange-500' : 'bg-gray-500'
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

export default ChartSection;