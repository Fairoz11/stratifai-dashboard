import React from 'react';
import { X } from 'lucide-react';
import logo from '../assets/slidmenu icons/Logo.svg';
import dashboardIcon from '../assets/slidmenu icons/Dashboard.svg';
import strategyIcon from '../assets/slidmenu icons/Strategy.svg';
import marketIcon from '../assets/slidmenu icons/Market Summary.svg';
import aiIcon from '../assets/slidmenu icons/AI.svg';
import placeholderIcon from '../assets/slidmenu icons/Placeholder.svg';
import SettingIcon from '../assets/slidmenu icons/Grey.svg'

const SidebarItem = ({ icon, label, isActive = false, isLast = false }) => (
    <div className={`relative flex items-center gap-3 mx-3 px-3 py-3 rounded-sm cursor-pointer transition-all ${isActive
        ? 'bg-[#F0F2FD] text-[#405AE8]'
        : 'text-[#475569] hover:bg-gray-50 hover:text-gray-900'
        }`}>
        {isActive && (
            <span className="absolute left-0 top-1 bottom-1 w-[4px] bg-[#405AE8] rounded-r-xl " />
        )}
        <img
            src={icon}
            alt={label}
            className={`w-[18px] h-[18px] ml-2 ${isActive ? 'opacity-100' : 'opacity-60'}`}
        />
        <span className={`text-xs leading-[144%] ${isLast ? 'font-medium' : 'font-semibold'}`}>
            {label}
        </span>
    </div>
);

const Sidebar = ({ isOpen, onClose }) => {
    const menuItems = [
        { icon: dashboardIcon, label: 'Dashboard', isActive: true },
        { icon: strategyIcon, label: 'Strategy' },
        { icon: marketIcon, label: 'Market Summary' },
        { icon: aiIcon, label: 'AI' },
        { icon: placeholderIcon, label: 'Lorem Ipsum' },
    ];

    return (
        <>
            <div
                className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 lg:hidden ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}
                onClick={onClose}
            />

            <aside className={`w-[220px] h-screen bg-white border-r border-gray-100 flex flex-col fixed left-0 top-0 z-50 transition-transform duration-300 lg:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'
                }`}>
                <div className="pt-6 px-8 pb-8 flex items-center justify-between">
                    <img src={logo} alt="StratiFai Logo" className="h-10 w-auto" />
                    <button className="lg:hidden p-2 text-gray-400 hover:text-gray-600" onClick={onClose}>
                        <X size={20} />
                    </button>
                </div>

                <nav className="flex-1 mt-10">
                    {menuItems.map((item, index) => (
                        <SidebarItem key={index} {...item} />
                    ))}
                </nav>

                <div className="pb-8 border-t border-gray-50 mt-auto">
                    <SidebarItem icon={SettingIcon} label="Account Settings" isLast={true} />
                </div>
            </aside>
        </>
    );
};

export default Sidebar;
