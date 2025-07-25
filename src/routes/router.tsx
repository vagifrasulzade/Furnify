import PATH from './constant';
import Home from '../pages/home/Home';
import MainLayout from "@/layout/Main-layout";

import AllProducts from '@/pages/AllProduct';
import ProductDetail from '@/pages/ProductDetail';
import Bedroom  from '@/pages/furniture/Bedroom';
import LivingRoom from '@/pages/furniture/Livingroom';  
import DiningRoom from '@/pages/furniture/Diningroom';
import Office from '@/pages/furniture/Office';
import Kitchen from '@/pages/furniture/Kitchen';
import Sofa from '@/pages/furniture/Sofa';
import Search from '@/pages/Search';
import Favorites from '@/pages/Favorites';
import CartPage from '@/pages/CartPage';
import CheckoutPage from '@/pages/CheckoutPage';
import PaymentPage from '@/pages/PaymentPage';
import Profile from '@/pages/Profile';
import Support from '@/pages/info/Support';
import Help from '@/pages/info/Help';
import Return from '@/pages/info/Return';
import Terms_Service from '@/pages/info/Terms Service';
import Shipping from '@/pages/info/Shipping';
import Warranty from '@/pages/info/Warranty';
import Privacy from '@/pages/info/Privacy';
import CookiesPolicy from '@/pages/info/Cookie';
import Trems from '@/pages/info/Terms';
import Login from '@/components/auth/Login';
import Register from '@/components/auth/Register';


import Layout from "@/layout/AdminLayout";
import Dashboard from "@/pages/dashboard/Dashboard";
import Products from "@/pages/dashboard/Products";
import Users from "@/pages/dashboard/Profile";
import Settings from "@/pages/dashboard/Settings";
import Analytics from '@/pages/dashboard/Analytics';
import Orders from '@/pages/dashboard/Orders';
import SearchPage from '@/pages/dashboard/Search';


export const Routes  = [
  {
    path: PATH.main,
    element: (
      <MainLayout />  
    ),
    children: [
      {
        path: 'search',
        element: <Search />
      },
      {
        path: 'favorites',
        element: <Favorites />
      },
      {
        path: 'cart',
        element: <CartPage />
      },
      {
        path: 'checkout',
        element: <CheckoutPage />
      },
      {
        path: 'payment',
        element: <PaymentPage />
      },
      {
        path: 'profile',
        element: <Profile />
      },
      {
        index: true,
        element: <Home />
      },
      {
        path: 'products/all',
        element: <AllProducts />
      },
      {
        path: 'product/:id',
        element: <ProductDetail />
      },
      {
        path: 'products/bedroom',
        element: <Bedroom />
      },
      {
        path: 'products/living-room',
        element: <LivingRoom />
      },
      {
        path: 'products/dining-room',
        element: <DiningRoom />
      },
      {
        path: 'products/office',
        element: <Office />
      },
      {
        path: 'products/kitchen',
        element: <Kitchen />
      },
      {
        path: 'products/sofa',
        element: <Sofa />
      },
      {
        path: 'help',
        element: <Help />
      },
      {
        path: 'support',
        element: <Support />
      },
      {
        path: 'returns',
        element: <Return />
      },
      {
        path: 'terms-service',
        element: <Terms_Service />
      },
      {
        path: 'shipping',
        element: <Shipping />
      },
      {
        path: 'warranty',
        element: <Warranty />
      },
      {
        path: 'privacy',
        element: <Privacy />
      },
      {
        path: 'cookies',
        element: <CookiesPolicy />
      },
      {
        path: 'terms',
        element: <Trems />
      },
      {
        path: 'auth/login',
        element: <Login />
      },
      {
        path: 'auth/register',
        element: <Register />
      }
    ]
  },
  // Admin Routes
  {
    path: '/admin',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Dashboard />
      },
      {
        path: 'dashboard',
        element: <Dashboard />
      },
      {
        path: 'products',
        element: <Products />
      },
      {
        path: 'users',
        element: <Users />
      },
      {
        path: 'settings',
        element: <Settings />
      },
      {
        path: 'analytics',
        element: <Analytics />
      },
      {
        path: 'orders',
        element: <Orders />
      },
      {
        path: 'search',
        element: <SearchPage />
      }
      
    ]
  }
]
