import { TiBell } from "react-icons/ti"
 
export const Navbar = ({ children }: any) => {
    return (
        <nav className="flex flex-row w-full bg-white-600 shadow h-12 justify-end pr-8 py-2.5">
            <div className="notification">
                <a href="" className="text-gray-900"><TiBell size={24}/></a>
                <span className="absolute top-1 right-7 text-xs bg-red-500 text-white w-4 text-center rounded-full">2</span>
            </div>
        </nav>
    );
}