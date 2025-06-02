'use client'

import { LogOut } from 'lucide-react';

export default function UserMenu() {
  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/"; 
  };

  return (
    <div className="flex items-center gap-2">
      <span className="text-gray-700">Вы вошли</span>
      <button
        onClick={handleLogout}
        className="text-sm text-red-600 hover:underline flex items-center gap-1"
      >
        <LogOut size={16} />
        Выйти
      </button>
    </div>
  );
}
