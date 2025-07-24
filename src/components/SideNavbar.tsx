import { Link } from "react-router-dom";
import {
  Home,
  PlusCircle,
  BarChart2,
  Settings,
  LogOut,
  Menu,
  X,
} from "lucide-react";

type SideNavbarProps = {
  title: string;
  option1: string;
  isOpen: boolean;
  onToggle: () => void;
};

export default function SideNavbar({
  title,
  option1,
  isOpen,
  onToggle,
}: SideNavbarProps) {
  return (
    <>
      <div className="md:hidden p-4 flex justify-between items-center bg-white dark:bg-gray-800 shadow">
        <h2 className="text-xl font-bold text-gray-800 dark:text-white">
          {title}
        </h2>
        <button onClick={onToggle}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-800 shadow-lg p-6 z-50 transform transition-transform duration-300 ease-in-out
        ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:static md:block`}
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
          {title}
        </h2>
        <nav className="space-y-4">
          <Link
            to="/"
            className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 transition"
          >
            <Home size={20} />
            {option1}
          </Link>
          <Link
            to="/startup"
            className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 transition"
          >
            <PlusCircle size={20} />
            Add Startup
          </Link>
          <Link
            to="/dashboard"
            className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 transition"
          >
            <BarChart2 size={20} />
            Dashboard
          </Link>
          <Link
            to="/settings"
            className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 transition"
          >
            <Settings size={20} />
            Settings
          </Link>
          <button className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-red-500 transition">
            <LogOut size={20} />
            Logout
          </button>
          <button className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-red-500 transition">
            <LogOut size={20} />
            Logout
          </button>
          <button className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-red-500 transition">
            <LogOut size={20} />
            Logout
          </button>
          <button className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-red-500 transition">
            <LogOut size={20} />
            Logout
          </button>
          <button className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-red-500 transition">
            <LogOut size={20} />
            Logout
          </button>
          <button className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-red-500 transition">
            <LogOut size={20} />
            Logout
          </button>
          <button className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-red-500 transition">
            <LogOut size={20} />
            Logout
          </button>
        </nav>
      </aside>
    </>
  );
}
