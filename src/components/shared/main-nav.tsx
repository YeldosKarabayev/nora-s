'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import logo from '../../components/images/nav-menu.png';
import roomate from '../../components/images/nav-roomate.png';

export default function MainNav() {
    const pathname = usePathname();

    const isActive = (path: string) => pathname === path;

    return (
        <nav className="flex items-center justify-between gap-4 p-4 text-gray-500">
            <div className="flex items-center space-x-12">

                <Link href="/pages/main" className="flex items-center space-x-2 group relative">
                    <Image src={logo} alt="Жилье" width={50} height={50} />
                    <span className="relative text-lg pb-1 text-gray-700">
                        Жилье
                        <span
                            className={`absolute bottom-0 left-0 h-[2px] w-full bg-gray-700 transform transition-transform duration-300 ${
                                isActive('/pages/main') ? 'scale-x-100' : 'scale-x-0'
                            } origin-left`}
                        />
                    </span>
                </Link>

                <Link href="/pages/roommates" className="flex items-center space-x-2 group relative">
                    <Image src={roomate} alt="Соседи" width={50} height={50} />
                    <span className="relative text-lg pb-1 text-gray-700">
                        Соседи
                        <span
                            className={`absolute bottom-0 left-0 h-[2px] w-full bg-gray-700 transform transition-transform duration-300 ${
                                isActive('/pages/roommates') ? 'scale-x-100' : 'scale-x-0'
                            } origin-left`}
                        />
                    </span>
                </Link>

            </div>
        </nav>
    );
}
