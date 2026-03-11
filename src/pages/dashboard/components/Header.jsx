import React from 'react';
import { Menu } from 'lucide-react';
import notificationIcon from '../../../assets/dashboarIcons/Notification.svg';
import chevronIcon from '../../../assets/dashboarIcons/chevron.svg';

const Header = ({ onMenuClick }) => {
    const tabs = ['All', 'Binance', 'ByBit'];
    const [activeTab, setActiveTab] = React.useState('Binance');

    return (
        <header className="bg-white border-b border-gray-100 flex flex-col w-full max-w-[1220px] z-10 shrink-0">
            {/* Top Section */}
            <div className="pt-2 md:pt-3 px-4 md:px-[30px] pb-4 flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                    <button
                        className="lg:hidden p-2 text-gray-500 hover:bg-gray-100 rounded-lg transition-colors"
                        onClick={onMenuClick}
                    >
                        <Menu size={24} />
                    </button>
                    <h1 className="mt-1 text-xl md:text-[28px] font-semibold text-gray-900 leading-[144%] font-inter truncate">
                        Dashboard
                    </h1>
                </div>

                <div className="flex items-center gap-2 md:gap-4">
                    <button className="bg-[#405AE8] text-white min-w-[max-content] md:min-w-[144px] h-[40px] rounded-[4px] px-3 md:px-4 font-semibold flex items-center justify-center gap-2 transition-colors text-[14px] leading-[110%] font-inter">
                        <span>Connect Portfolio</span>
                        <img src={chevronIcon} alt="Chevron" className="w-[9px] h-[9px]" />
                    </button>

                    <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors flex items-center justify-center">
                        <img src={notificationIcon} alt="Notification" className="w-[14px] h-[14px]" />
                    </button>
                </div>
            </div>

            {/* Tabs Section */}
            <div className="px-4 md:px-[20px] flex items-center gap-[30px] border-b border-[#CBD5E1] h-[43px] overflow-x-auto scrollbar-hide">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`h-full transition-all font-inter flex items-center px-1 whitespace-nowrap border-b-2 align-middle ${activeTab === tab
                            ? 'border-[#405AE8] text-[#405AE8] text-[16px] font-semibold leading-[110%]'
                            : 'border-transparent text-[#CBD5E1] hover:text-gray-600 text-[16px] font-normal leading-[144%]'
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>
        </header>
    );
};

export default Header;
