import type { LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  changeType: 'positive' | 'negative';
  icon: LucideIcon;
}

export default function StatCard({ title, value, change, changeType, icon: Icon }: StatCardProps) {
  return (
    <div className="bg-white rounded-xl border border-orange-100 p-6 hover:shadow-lg transition-all duration-300 hover:border-orange-200">
      <div className="flex items-center justify-between mb-4">
        <div className="p-3 bg-gradient-to-r from-orange-400 to-orange-600 rounded-lg">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <span className={`text-sm font-semibold px-2 py-1 rounded-full ${
          changeType === 'positive' 
            ? 'text-green-600 bg-green-100' 
            : 'text-red-600 bg-red-100'
        }`}>
          {change}
        </span>
      </div>
      <h3 className="text-gray-600 text-sm font-medium mb-1">{title}</h3>
      <p className="text-2xl font-bold text-gray-900">{value}</p>
    </div>
  );
};

