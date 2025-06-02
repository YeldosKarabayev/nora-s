'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import logo from '../../components/images/nora-logo2.png';
import { Menu } from 'lucide-react';
import MainNav from './main-nav';
import DropdownMenu from './dropdown-menu';
import UserMenu from "./usermenu"; 
import { useAuth } from '../../app/contexts/authcontext';




export default function Header() {

  const { isAuthenticated } = useAuth();


  console.log("isAuthenticated", isAuthenticated);

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
            {isAuthenticated  ? <UserMenu /> : <DropdownMenu />}
          </div>
        </div>
      </div>
    </header>
  );
}