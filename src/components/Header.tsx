// icons
import { BsJournalCode } from "react-icons/bs";

// components
import Login from "./Login";

export default function Header() {
    return (
        <nav className="flex justify-between items-center py-8 px-16">
            <BsJournalCode size={45} className="text-slate-800 hover:translate-x-1 duration-300" />
            <div className="duration-300 flex flex-col justify-center items-center hover:translate-y-5 select-none">
                <h1 className="text-7xl">WorkSpace</h1>
                <h2 className="text-xl">This is a website that helps you get your work done faster.</h2>
            </div>
            <Login />
        </nav>
    );
}
