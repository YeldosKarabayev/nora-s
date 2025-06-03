'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import logo from '../../components/images/logo-not.png';
import { Menu } from 'lucide-react';
import MainNav from './main-nav';
import DropdownMenu from './dropdown-menu';
import UserMenu from "./usermenu"; 
import { useAuth } from '../../app/contexts/authcontext';
import Link from 'next/link';




export default function Header() {

  const { isAuthenticated } = useAuth();


  console.log("isAuthenticated", isAuthenticated);

  return (
    <header className="p-2 bg-white fixed top-0 left-0 w-full z-40">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 justify-between items-center">
        <div className="flex justify-between">
          <div className="flex justify-between items-center">
            <div className="flex">
            <Link href="/main">
              <Image
                src={logo}
                alt="Logo"
                width={80}
                height={80}
                className='cursor-pointer'
              />
            </Link>
            </div>
          </div>
          <div className="flex items-center">
            <UserMenu /> 
          </div>
        </div>
      </div>
    </header>
  );
}