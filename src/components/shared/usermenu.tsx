'use client'

import { LogOut } from 'lucide-react';
import { useAuth } from '../../app/contexts/authcontext';
import { useRouter } from 'next/navigation';
import ProfilePage from 'app/pages/profile/page';
import { Button } from '../ui/button';
import CustomAvatar from './custom-avatar';

export default function UserMenu() {
  const { logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();                     // Обновит isAuthenticated в контексте
    router.push('/main');             // Перенаправит на главную
  };

  return (
    <div className="flex items-center gap-2">
      <Button onClick={() => router.push('/pages/profile')} className="text-sm text-gray-700 hover:underline flex items-center gap-1">
       <CustomAvatar username="User" userRole="admin" />
      </Button>
      <Button
        onClick={handleLogout}
        className="text-sm text-red-600 hover:underline flex items-center gap-1"
      >
        <LogOut size={16} />
        Выйти
      </Button>
    </div>
  );
}
