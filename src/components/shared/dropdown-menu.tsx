'use client';

import { HelpCircle, Menu } from "lucide-react";
import { useState, useRef } from "react";
import Modal from "../ui/modal";
import Image from 'next/image';
import logo from '../../components/images/nav-menu.png';
import roomate from '../../components/images/nav-roomate.png';
import LoginForm from "./loginform";



export default function DropdownMenu() {

    const [isOpened, setIsOpened] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);


    return (
        <>
            <div className="relative" ref={menuRef}>
                <div className="hidden sm:flex sm:items-center sm:ml-6 rounded-full bg-gray-200 hover:bg-gray-300 p-2">
                    <Menu
                        className="h-6 w-6 text-gray-500 hover:text-gray-700 cursor-pointer"
                        width={16}
                        height={16}
                        onClick={() => setIsOpened(!isOpened)}
                    />
                </div>

                {isOpened && (
                    <div className="absolute right-[10%] mt-2 min-w-max bg-white border border-gray-300 rounded-2xl shadow-lg z-50">
                        <ul className="py-2">
                            <li className="flex items-center px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 cursor-pointer" >
                                <HelpCircle className="mr-2 h-5 w-5 text-gray-700" />
                                Центр помощи
                            </li>
                            <div className="border-t border-gray-200" />
                            <li className="flex items-center justify-between px-4 py-2 text-sm text-gray-800 gap-4 hover:bg-gray-100 cursor-pointer">
                                Найти жилье
                                <Image src={logo} alt="Жилье" width={36} height={36} />
                            </li>
                            <li className="flex items-center justify-between px-4 py-2 text-sm text-gray-800 gap-4 hover:bg-gray-100 cursor-pointer">
                                Найти соседа
                                <Image src={roomate} alt="Сосед" width={36} height={36} />
                            </li>
                            <div className="border-t border-gray-200" />
                            <li
                                className="flex items-center px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 cursor-pointer"
                                onClick={() => setIsModalOpen(true)}
                            >
                                Войдите или зарегистрируйтесь
                            </li>
                        </ul>
                    </div>
                )}
            </div>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <h2 className="text-md font-semibold text-gray-700 mb-4">Войдите или зарегистрируйтесь</h2>
                <div className="border-t-2 border-gray-200" />
                <LoginForm onClose={() => setIsModalOpen(false)} />
                <div className="grid space-x-2">
                    <span className="text-xs text-gray-500 mt-2">
                        Нажимая "Продолжить", вы соглашаетесь с нашими <a href="#" className="text-blue-500 hover:underline">Условиями использования</a> и <a href="#" className="text-blue-500 hover:underline">Политикой конфиденциальности</a>.
                    </span>

                    <span className="text-xs text-gray-500 mt-2">ИЛИ</span>
                </div>
                {/* <LoginForm onClose={() => setIsModalOpen(false)} /> */}
            </Modal>
        </>

    );
}
