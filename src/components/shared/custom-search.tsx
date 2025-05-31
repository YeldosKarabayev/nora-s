import { Search } from "lucide-react";
import { Input } from "../ui/input";

export default function CustomSearch() {

    return (
        <div className="flex h-16 items-center justify-center max-w-4xl mx-auto mt-8 border-1 shadow-lg rounded-4xl">
            <div className="w-[30%] relative rounded-l-4xl hover:rounded-4xl hover:bg-gray-200 border-gray-300 h-full">
                <Input placeholder="Что?" className="h-full rounded-4xl text-gray-700 border-0 focus:ring-0" />
            </div>
            <div className="h-[70%] border-[2px] bg-gray-900" />
            <div className="w-[20%] relative hover:rounded-4xl hover:bg-gray-200 border-gray-300 h-full">
                <Input placeholder="Где?" className="h-full rounded-4xl text-gray-700 border-0 focus:ring-0" />
            </div>
            <div className="h-[70%] border-[2px] bg-gray-900" />
            <div className="w-[20%] relative hover:rounded-4xl hover:bg-gray-200 hover:border-gray-300 h-full">
                <Input placeholder="Когда?" className="h-full rounded-4xl text-gray-700 border-0 focus:ring-0" />
            </div>
            <div className="h-[70%] border-[2px] bg-gray-900" />
            <div className="w-[30%] relative hover:rounded-r-4xl hover:rounded-4xl hover:bg-gray-200 border-gray-300 h-full">
                <Input placeholder="Сколько?" className="h-full rounded-4xl text-gray-700 border-0 focus:ring-0" />
                <div className="absolute w-[22%] h-[90%] top-1/15 right-1 rounded-4xl bg-[#f35952]">
                    <Search className="absolute top-4 right-4 text-white" />
                </div>
            </div>
        </div>
    );
}
