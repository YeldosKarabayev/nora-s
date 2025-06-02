'use client'

import { LogOut } from 'lucide-react';
import { useAuth } from '../../app/contexts/authcontext';
import { useRouter } from 'next/navigation';

export default function UserMenu() {
  const { logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();                     // Обновит isAuthenticated в контексте
    router.push('/');             // Перенаправит на главную
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
