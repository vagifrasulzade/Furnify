
import { useNavigate } from 'react-router-dom';
import { Search, Bell, Menu } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
interface HeaderProps {
  onMenuToggle: () => void;
}

export default function Header({ onMenuToggle }: HeaderProps) {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  return (
    <header className="bg-white border-b border-orange-100 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button 
            onClick={onMenuToggle}
            className="lg:hidden p-2 rounded-md hover:bg-orange-50 transition-colors"
          >
            <Menu className="w-5 h-5 text-orange-600" />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              Welcome, <span className="text-orange-600">{currentUser?.name || 'Admin'}</span>
            </h1>
            <p className="text-gray-600">Here's what's happening today</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
        <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
                type="text"
                placeholder="Search ..."
                onFocus={() => navigate('/admin/search')}
                className="pl-10 pr-4 py-2 border border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
        </div>
          <button className="p-2 rounded-lg hover:bg-orange-50 transition-colors relative">
            <Bell className="w-5 h-5 text-gray-600" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-orange-500 rounded-full"></span>
          </button>
          <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-semibold">
              {currentUser?.name?.charAt(0) || 'A'}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

