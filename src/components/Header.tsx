import { Bell, User } from 'lucide-react';

export default function Header() {
  return (
    <header className="h-16 bg-gray-900 text-gray-100 flex items-center justify-between px-6 border-b border-gray-800">
      <div className="flex items-center space-x-4">
        <h1 className="text-xl font-semibold">Dashboard</h1>
      </div>
      <div className="flex items-center space-x-4">
        <button className="p-2 hover:bg-gray-800 rounded-full">
          <Bell className="w-5 h-5" />
        </button>
        <button className="p-2 hover:bg-gray-800 rounded-full">
          <User className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
}