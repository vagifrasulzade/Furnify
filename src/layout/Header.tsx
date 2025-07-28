import { useState, type FormEvent } from 'react';
import Logo from '../assets/logo.png';
import {Link,useNavigate} from 'react-router-dom';
import{ useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';
import { useFavorites } from '@/context/FavoritesContext';
import { User, Menu, X, Search } from 'lucide-react';

function Header () {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const { getTotalItems } = useCart();
    const { currentUser, logout } = useAuth();
    const { favorites } = useFavorites();
    const navigate = useNavigate();

    const handleSearch = (e:FormEvent) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
            setSearchQuery('');
            setIsSearchOpen(false);
            setIsMobileMenuOpen(false);
        }
    };

    const handleLogout = () => {
        logout();
        navigate('/auth/login');
        setIsMobileMenuOpen(false);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
                <Link to="/" className='flex-shrink-0'>
                <img src={Logo} alt="Furnity Logo" className='h-16 mb-4'/>
                </Link>
            </div>

            <nav className='hidden lg:flex space-x-8'>
              <Link  to="/products/bedroom" className="nav-link">Bedroom</Link>
              <Link  to="/products/living-room" className="nav-link">Living Room</Link>
              <Link  to="/products/dining-room" className="nav-link">Dining Room</Link>
              <Link  to="/products/office" className="nav-link">Office</Link>
              <Link  to="/products/kitchen" className="nav-link">Kitchen</Link>
              <Link  to="/products/sofa" className="nav-link">Sofa</Link>
            </nav>

          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              {isSearchOpen && (
                <form onSubmit={handleSearch} className="absolute right-0 top-1/2 transform -translate-y-1/2">
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-64 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    autoFocus
                    onBlur={() => {
                      setTimeout(() => setIsSearchOpen(false), 200)
                    }}
                  />
                </form>
              )}
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 text-gray-600 hover:text-orange-500 transition-colors"
                title="Search"
              >
                <Search className="w-5 h-5" />
              </button>
            </div>

            <Link to="/favorites" className="relative p-2 text-gray-600 hover:text-orange-500 transition-colors" title="Favorites">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                {favorites.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {favorites.length}
                  </span>
                )}
            </Link>

            <Link to="/cart" className="relative p-2 text-gray-600 hover:text-orange-500 transition-colors" title="Cart">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l-2.5 5m0 0L9 21h6m-6-8h6" />
              </svg>
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </Link>

            {currentUser ? (
              <div className="relative group">
                <button className="flex items-center space-x-2 text-gray-600 hover:text-orange-500 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span className="hidden lg:block">{currentUser.name}</span>
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="py-1">
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Profile
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <Link to="/auth/login" className='flex items-center space-x-2 text-gray-600 hover:text-orange-500 transition-colors'>
                  <User className="w-5 h-5" />
                  <span className="hidden lg:block">Login</span>
              </Link>
            )}
          </div>

          {/* Mobile Actions */}
          <div className="md:hidden flex items-center space-x-2">
            
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-gray-600 hover:text-orange-500 transition-colors"
              title="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            <Link to="/cart" className="relative p-2 text-gray-600 hover:text-orange-500 transition-colors" title="Cart">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l-2.5 5m0 0L9 21h6m-6-8h6" />
              </svg>
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </Link>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-600 hover:text-orange-500 transition-colors"
              title="Menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {isSearchOpen && (
          <div className="md:hidden pb-4">
            <form onSubmit={handleSearch} className="w-full">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                autoFocus
              />
            </form>
          </div>
        )}
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-6 space-y-4">
            <nav className="space-y-4">
              <Link 
                to="/products/bedroom" 
                className="block text-gray-700 hover:text-orange-500 transition-colors"
                onClick={closeMobileMenu}
              >
                Bedroom
              </Link>
              <Link 
                to="/products/living-room" 
                className="block text-gray-700 hover:text-orange-500 transition-colors"
                onClick={closeMobileMenu}
              >
                Living Room
              </Link>
              <Link 
                to="/products/dining-room" 
                className="block text-gray-700 hover:text-orange-500 transition-colors"
                onClick={closeMobileMenu}
              >
                Dining Room
              </Link>
              <Link 
                to="/products/office" 
                className="block text-gray-700 hover:text-orange-500 transition-colors"
                onClick={closeMobileMenu}
              >
                Office
              </Link>
              <Link 
                to="/products/kitchen" 
                className="block text-gray-700 hover:text-orange-500 transition-colors"
                onClick={closeMobileMenu}
              >
                Kitchen
              </Link>
              <Link 
                to="/products/sofa" 
                className="block text-gray-700 hover:text-orange-500 transition-colors"
                onClick={closeMobileMenu}
              >
                Sofa
              </Link>
            </nav>

            <div className="pt-4 border-t border-gray-200 space-y-4">
              <Link 
                to="/favorites" 
                className="flex items-center space-x-3 text-gray-700 hover:text-orange-500 transition-colors"
                onClick={closeMobileMenu}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <span>Favorites</span>
                {favorites.length > 0 && (
                  <span className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {favorites.length}
                  </span>
                )}
              </Link>

              {currentUser ? (
                <div className="space-y-4">
                  <Link 
                    to="/profile" 
                    className="flex items-center space-x-3 text-gray-700 hover:text-orange-500 transition-colors"
                    onClick={closeMobileMenu}
                  >
                    <User className="w-5 h-5" />
                    <span>Profile</span>
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="flex items-center space-x-3 text-gray-700 hover:text-orange-500 transition-colors w-full text-left"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                    <span>Logout</span>
                  </button>
                </div>
              ) : (
                <Link 
                  to="/auth/login" 
                  className="flex items-center space-x-3 text-gray-700 hover:text-orange-500 transition-colors"
                  onClick={closeMobileMenu}
                >
                  <User className="w-5 h-5" />
                  <span>Login</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;