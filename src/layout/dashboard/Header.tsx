
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
    <header className="bg-white border-b border-orange-100 px-4 sm:px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2 sm:space-x-4 flex-1 min-w-0">
          <button 
            onClick={onMenuToggle}
            className="lg:hidden p-2 rounded-md hover:bg-orange-50 transition-colors flex-shrink-0"
          >
            <Menu className="w-5 h-5 text-orange-600" />
          </button>
          <div className="min-w-0 flex-1">
            <h1 className="text-lg sm:text-2xl font-bold text-gray-800 truncate">
              Welcome, <span className="text-orange-600">{currentUser?.name || 'Admin'}</span>
            </h1>
            <p className="text-gray-600 text-sm hidden sm:block">Here's what's happening today</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-2 sm:space-x-4 flex-shrink-0">
          {/* Search - Hidden on mobile, visible on tablet+ */}
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
                type="text"
                placeholder="Search ..."
                onFocus={() => navigate('/admin/search')}
                className="pl-10 pr-4 py-2 border border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent w-48 lg:w-64"
            />
          </div>
          
          {/* Mobile Search Button */}
          <button 
            onClick={() => navigate('/admin/search')}
            className="md:hidden p-2 rounded-lg hover:bg-orange-50 transition-colors"
          >
            <Search className="w-5 h-5 text-gray-600" />
          </button>
          
          <button className="p-2 rounded-lg hover:bg-orange-50 transition-colors relative">
            <Bell className="w-5 h-5 text-gray-600" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-orange-500 rounded-full"></span>
          </button>
          <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-white text-sm font-semibold">
              {currentUser?.name?.charAt(0) || 'A'}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

