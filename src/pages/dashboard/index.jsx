import React from 'react';
import Sidebar from '../../components/Sidebar';
import Header from './components/Header';
import StatCard from './components/StatCard';
import PerformanceCard from './components/PerformanceCard';
import PortfolioChart from './components/PortfolioChart';
import AssetAllocation from './components/AssetAllocation';
import reloadIcon from '../../assets/dashboarIcons/Grey.svg';
import { mockData } from '../../data/mockData';

const DashboardPage = () => {
    const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    return (
        <div className="flex min-h-screen bg-[#f8f9fb] font-inter">
            <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

            <main className={`flex-1 flex flex-col h-screen overflow-hidden transition-all duration-300 lg:ml-[220px]`}>
                <Header onMenuClick={toggleSidebar} />

                <div className="flex-1 overflow-y-auto p-4 md:p-8 space-y-[20px] max-w-[1220px] mx-auto w-full">
                    {/* Sub-header */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-[30px]">
                        <div className="flex w-full sm:w-auto overflow-x-auto">
                            <button className="px-6 py-2 text-[14px] font-semibold bg-[#F0F2FD] text-[#405AE8] border border-[#405AE8] rounded-[4px] whitespace-nowrap z-10 leading-[144%] align-middle">
                                Overview
                            </button>
                            <button className="px-6 py-2 text-[14px] font-normal text-[#64748B] hover:text-gray-900 bg-white border border-[#CBD5E1] rounded-r-[4px] whitespace-nowrap -ml-[1px] leading-[144%] align-middle">
                                Asset Holdings
                            </button>
                        </div>
                        <button className="p-2.5 bg-white border border-[#CBD5E1] rounded-[6px] text-[#64748B] hover:text-gray-900 hover:bg-gray-50 transition-colors self-end sm:self-auto shadow-sm flex items-center justify-center">
                            <img src={reloadIcon} alt="Reload" className="w-[16px] h-[16px]" />
                        </button>
                    </div>

                    {/* Top Row: Stats, Performance, and Chart */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-[20px]">
                        <div className="lg:col-span-4 space-y-[20px]">
                            <StatCard
                                title="Total Asset Value"
                                value={mockData.totalAssetValue}
                                change1D={mockData.returns1D}
                                changeTotal={mockData.returnsTotal}
                                isPositive={true}
                                investedAmount={mockData.investedAmount}
                                percentage={mockData.percentageChange}
                                showDetails={true}
                            />
                            <PerformanceCard data={mockData.performance} />
                        </div>

                        <div className="lg:col-span-8">
                            <PortfolioChart
                                data={mockData.chart.data}
                                portfolioValue={mockData.chart.portfolioValue}
                                investedValue={mockData.chart.investedValue}
                            />
                        </div>
                    </div>

                    {/* Bottom Row: Asset Allocation */}
                    <div className="w-full">
                        <AssetAllocation data={mockData.allocation} />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default DashboardPage;
