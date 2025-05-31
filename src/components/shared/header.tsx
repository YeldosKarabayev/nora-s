import Image from 'next/image';
import logo from '../../components/images/nora-logo2.png';
import { Menu } from 'lucide-react';
import MainNav from './main-nav';
import DropdownMenu from './dropdown-menu';


export default function Header() {
  return (
    <header className="p-2 bg-white fixed top-0 left-0 w-full z-30">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 justify-between items-center">
        <div className="flex justify-between">
          <div className="flex justify-between items-center">
            <div className="flex">
              <Image
                src={logo}
                alt="Logo"
                width={80}
                height={80}
                className='cursor-pointer'
              />
            </div>
          </div>
          <MainNav />
          
          <div className="flex items-center">
            <DropdownMenu />
          </div>
        </div>
      </div>
    </header>
  );
}