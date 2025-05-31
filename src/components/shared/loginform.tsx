import { Input } from "../ui/input";


export default function LoginForm() {
  return (
    <div className="flex items-center justify-center">
      <div className="bg-white p-8 w-full">
        <form>
            <h2 className="text-2xl font-bold mb-6 text-gray-700">
              Добро пожаловать в Nora
            </h2>
          <div className="mb-4">
            <Input
              type="email"
              id="email"
              placeholder="Email"
              className="mt-1 block w-full h-10 px-3 py-2 border text-gray-700 border-gray-300 rounded-xl"
              required
            />
          </div>
          <div className="mb-6">

            <Input
              type="password"
              id="password"
              placeholder="Пароль"
              className="mt-1 block w-full h-10 px-3 py-2 border text-gray-700 border-gray-300 rounded-xl"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#f35952] text-white py-2 px-4 rounded-xl hover:bg-[#f35952] transition duration-200"
          >
            Продолжить
          </button>
        </form>
      </div>
    </div>
  );
}