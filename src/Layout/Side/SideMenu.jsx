import React from 'react'
import { useState } from "react";
import { FaHome, FaSearch, FaAngleDown, FaAngleUp, } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { FaFilm } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { MdAddCard } from "react-icons/md";
import { Link, useLocation } from 'react-router-dom'


const SideMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [expandedSubmenu, setExpandedSubmenu] = useState("");
    const [searchQuery, setSearchQuery] = useState("");

    const menuItems = [
        {
            title: "Home",
            icon: <FaHome />,
            id: "home",
            path: '/',
            submenu: []
        },
        {
            title: "Movies & Shows",
            icon: <FaFilm />,
            id: "Movies&Shows",
            path: '/Movies&Shows',
            submenu: []
        },
        {
            title: "Support",
            icon: <BiSupport />,
            id: "Support",
            path: '/Support',
            submenu: []
        },
        {
            title: "Subscriptions",
            icon: <MdAddCard />,
            id: "Subscriptions",
            path: '/Subscriptions',
            submenu: []
        }
    ];

    const [activeItem, setActiveItem] = useState(menuItems.id);
    const page = useLocation();
    const toggleSidebar = () => setIsOpen(!isOpen);
    const toggleSubmenu = (id) => {
        setExpandedSubmenu(expandedSubmenu === id ? "" : id);
    };

    return (
        <div className="">
            <button
                onClick={toggleSidebar}
                className="lg:hidden z-20"
                aria-label="Toggle Sidebar"
            >
                {/* <FaBars className="w-6 h-6" /> */}
                <HiOutlineMenuAlt3 className="text-white size-6" />
            </button>

            <aside
                className={`${isOpen ? "translate-x-0" : "-translate-x-full"} 
                fixed top-0 left-0 h-full bg-[#141414] shadow-lg transition-transform duration-300 ease-in-out 
                w-64 z-40 border-r border-[#4C4C4C] lg:translate-x-0`}
            >
                <div className="p-4 space-y-4">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 rounded-lg text-[#FFFFFF] border border-[#E50000] focus:outline-none focus:ring-2 focus:ring-[#E50000]"
                            aria-label="Search"
                        />
                        <FaSearch className="absolute left-3 top-3 text-[#FFFFFF]" />
                    </div>

                    <nav className="space-y-1">
                        {menuItems.map((item) => (
                            <div key={item.id} className="space-y-1">
                                <Link key={item.id} to={item.path}>
                                    <button
                                        onClick={() => {
                                            setActiveItem(item.id);
                                            if (item.submenu.length > 0) toggleSubmenu(item.id);
                                        }}
                                        className={`w-full flex items-center justify-between px-4 py-2 text-sm font-medium rounded-lg
                                        ${page.pathname == item.path ? "bg-[#E50000] text-[#FFFFFF]" : "text-[#FFFFFF] hover:bg-[#FF9999]"}
                                        focus:outline-none focus:ring-2 focus:ring-[#FF1919] transition-colors duration-200`}
                                        aria-expanded={expandedSubmenu === item.id}
                                        aria-controls={`submenu-${item.id}`}
                                    >
                                        <div className="flex items-center space-x-3">
                                            <span className="text-xl">{item.icon}</span>
                                            <span>{item.title}</span>
                                        </div>
                                        {item.submenu.length > 0 && (
                                            <span className="text-sm">
                                                {expandedSubmenu === item.id ? <FaAngleUp /> : <FaAngleDown />}
                                            </span>
                                        )}
                                    </button>
                                </Link>

                                {item.submenu.length > 0 && (
                                    <div
                                        id={`submenu-${item.id}`}
                                        className={`${expandedSubmenu === item.id ? "max-h-40" : "max-h-0"} 
                                        overflow-hidden transition-all duration-300 ease-in-out pl-8`}
                                    >
                                        {item.submenu.map((subItem) => (
                                            <button
                                                key={subItem.id}
                                                onClick={() => setActiveItem(subItem.id)}
                                                className={`w-full flex items-center space-x-3 px-4 py-2 text-sm font-medium rounded-lg
                                                    ${activeItem === subItem.id ? "bg-[#E50000] text-[#FFFFFF]" : "text-[#FFFFFF] hover:bg-[#FF9999]"}
                                                    focus:outline-none focus:ring-2 focus:ring-[#FF1919] transition-colors duration-200`}
                                            >
                                                <span className="text-lg">{subItem.icon}</span>
                                                <span>{subItem.title}</span>
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>
                </div>
            </aside>
        </div>
    );
}

export default SideMenu