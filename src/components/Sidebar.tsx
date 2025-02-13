import { Home, ShoppingCart, LogOut } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Sidebar() {
  const location = useLocation();
  
  const menuItems = [
    { icon: Home, label: 'Home', path: '/dashboard' },
    { label: "Men's Collection", path: '/dashboard/products?category=men' },
    { label: "Women's Collection", path: '/dashboard/products?category=women' },
    { label: "Kids' Collection", path: '/dashboard/products?category=kids' },
    { icon: ShoppingCart, label: 'Cart', path: '/dashboard/cart' },
  ];

  return (
    <div className="h-full w-64 bg-gray-900 text-gray-100 flex flex-col">
      <div className="p-4">
        <h2 className="text-2xl font-bold text-red-500">ShopStyle</h2>
      </div>
      <nav className="flex-1">
        <ul className="space-y-2 px-4">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path || 
              (item.path.includes('category') && location.pathname.includes(item.path.split('?')[0]));
            
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800 ${
                    isActive ? 'bg-gray-800' : ''
                  }`}
                >
                  {Icon && <Icon className="w-5 h-5" />}
                  <span>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="p-4">
        <button 
          onClick={() => {
            // Handle logout
            window.location.href = '/login';
          }}
          className="flex items-center space-x-3 p-3 w-full rounded-lg hover:bg-gray-800 text-left"
        >
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
}