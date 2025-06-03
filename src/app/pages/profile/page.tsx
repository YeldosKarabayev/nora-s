import Image from 'next/image';

import CustomAvatar from "@/components/shared/custom-avatar";
import caseicon from "../../../components/images/case-icon.png";
import contacts from "../../../components/images/contacts-icon.png";
import Link from 'next/link';

export default function ProfilePage() {
  return (
    <div className="flex flex-col items-center md:flex-row justify-start min-h-screen bg-gray-100">
      <nav className="text-gray-800 p-[10%] w-[35%] h-screen bg-white shadow-md">
        <h1 className="text-4xl font-bold mb-8">Профиль</h1>
        <div className="mt-4 text-xl font-semibold space-y-4">
          <div className="flex items-center gap-5">
            <CustomAvatar username="User" userRole="admin" />
            <Link href="/pages/profile" className="hover:underline">Обо мне</Link>
          </div>
          <div className="flex items-center gap-5">
            <Image src={caseicon} alt="Case Icon" width={36} height={36} />
            <Link href="/pages/profile" className="hover:underline">Прошлые поездки</Link>
          </div>
          <div className="flex items-center gap-5">
            <Image src={contacts} alt="Contacts Icon" width={36} height={36} />
            <Link href="/pages/profile" className="hover:underline">Контакты</Link>
          </div>
        </div>
      </nav>
    </div>
  );
}