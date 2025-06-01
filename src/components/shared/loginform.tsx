'use client';


import { useRouter } from "next/navigation";
import { Input } from "../ui/input";
import { useState } from "react";


export default function LoginForm({ onClose }: { onClose: () => void }) {

    const router = useRouter();
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setError(null);
        setLoading(true);


        const fornData = new FormData(event.currentTarget);
        const email = fornData.get("email") as string;
        const password = fornData.get("password") as string;

        setTimeout(async () => {

            try {
                const res = await fetch("/api/auth/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ email, password }),
                });

                const data = await res.json();

                if (res.ok) {
                    onClose();
                    router.push("/pages/roommates");
                    localStorage.setItem("token", data.token);
                } else {
                    setError(data.error || "Ошибка входа. Пожалуйста, проверьте свои учетные данные.");
                }


            } catch (error) {
                if (error instanceof Error) {
                    setError(error.message);
                } else {
                    setError("Произошла неизвестная ошибка.");
                }
            } finally {
                setLoading(false);
            }
        }, 1000);


    }

    return (
        <div className="flex items-center justify-center">
            <div className="bg-white p-8 w-full">
                <form onSubmit={handleSubmit}>
                    <h2 className="text-2xl font-bold mb-6 text-gray-700">
                        Добро пожаловать в Nora
                    </h2>
                    {error && (
                        <div className="text-red-500 text-sm mb-4">{error}</div>
                    )}
                    <div className="mb-4">
                        <Input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                            className="mt-1 block w-full h-10 px-3 py-2 border text-gray-700 border-gray-300 rounded-xl"
                            required
                        />
                    </div>
                    <div className="mb-6">

                        <Input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Пароль"
                            className="mt-1 block w-full h-10 px-3 py-2 border text-gray-700 border-gray-300 rounded-xl"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-[#f35952] text-white py-2 px-4 rounded-xl hover:bg-[#f35952] transition duration-200"
                    >
                        {loading ? 'Вход...' : 'Продолжить'}
                    </button>
                </form>
            </div>
        </div>
    );
}