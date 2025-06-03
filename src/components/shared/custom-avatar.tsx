"use client"

import { ChartBarIcon, File, FireExtinguisher, FireExtinguisherIcon, LogOut, SettingsIcon } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

interface UserAvatarProps {
    username: string
    userRole: string
}

const getRandColor = (name: String) => {
    const colors = [
        "bg-gray-800"
    ];
    const hash = name.split("").reduce((acc, char) => char.charCodeAt(0) + acc, 0);
    return colors[hash % colors.length];
};

export default function CustomAvatar({ username, userRole }: UserAvatarProps) {

    const [initials, setInitials] = useState<string>("");
    const [bgColor, setBgColor] = useState<string>("");
    const [isOpened, setIsOpened] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const [isLoggingOut, setIsLoggingOut] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (username) {
            setInitials(username.charAt(0).toUpperCase());
            setBgColor(getRandColor(username));
        }
    }, [username]);

    useEffect(() => {
        const handleClick = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpened(false);
            };
        }

        document.addEventListener("mousedown", handleClick);
        return () => {
            document.removeEventListener("mousedown", handleClick);
        };
    }, []);

    // const handleLogout = async () => {
    //     setIsLoggingOut(true);
    //     setTimeout(async () => {
    //       await signOut(auth);
    //       router.push("/sign-in");
    //     }, 1000);
    //   };

    return (
        <div className="relative" ref={menuRef}>
            <button
                className={`flex items-center justify-center w-12 h-12 ${bgColor} text-white font-semibold text-xl rounded-full`}
                onClick={() => setIsOpened(!isOpened)}
            >
                {initials}
            </button>

            {isOpened && (
                <div className="absolute right-[10%] mt-2 min-w-max bg-white border border-gray-300 rounded-lg shadow-lg z-50">
                    {/* <ul className="py-2">
                        {userRole === "admin" && (
                            <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => router.push("/dashboard")}>
                                <ChartBarIcon size={20} className="mr-2" />
                                Панель управления
                            </li>
                        )}
                        <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                            <SettingsIcon size={20} className="mr-2" />
                            Настройки
                        </li>
                        <li 
                            className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-500"
                            // onClick={handleLogout}
                        >
                            <LogOut size={20} className="mr-2" />
                            Выйти
                        </li>
                    </ul> */}
                </div>
            )}
        </div>
    );
}
