import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const allocationColors = ['#7789EC', '#F58D5C', '#91D4F6', '#F9D44C'];

const AssetAllocation = ({ data }) => {
    return (
        <div className="w-full max-w-[1160px] mx-auto bg-white border border-[#CBD5E1] rounded-[4px] shadow-sm p-4 gap-4 flex flex-col overflow-hidden md:pt-[30px] md:pr-[20px] md:pb-[30px] md:pl-[20px] md:gap-[24px] lg:h-[304px]">
            <h3 className="font-bold text-base md:text-lg text-gray-900">Asset Allocation</h3>

            <div className="flex-1 min-h-0 w-full flex flex-col items-center justify-center gap-8 lg:flex-row lg:justify-center lg:items-center lg:gap-[80px]">
                <div className="w-auto flex items-center justify-center -mt-2 md:-mt-3">
                    <div className="relative w-[200px] h-[200px] md:w-[220px] md:h-[220px] lg:w-[232px] lg:h-[232px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={data}
                                cx="50%"
                                cy="50%"
                                innerRadius={window.innerWidth < 1024 ? 56 : 72}
                                outerRadius={window.innerWidth < 1024 ? 84 : 108}
                                paddingAngle={1}
                                dataKey="value"
                                stroke="#FFFFFF"
                                strokeWidth={2}
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={allocationColors[index % allocationColors.length]} />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                </div>
                </div>

                <div className="w-auto flex justify-center">
                    <div className="grid grid-cols-1 gap-3 md:gap-4 w-auto max-w-[440px]">
                    {data.map((item, index) => (
                        <div key={index} className="flex items-center gap-3 min-w-0">
                            <div className="w-8 md:w-[70px] h-3 rounded-full shrink-0" style={{ backgroundColor: allocationColors[index % allocationColors.length] }}></div>
                            <span className="text-[14px] font-normal leading-[110%] align-middle text-[#475569] break-words">
                                {item.name} - {item.amount} ({item.value}%)
                            </span>
                        </div>
                    ))}
                </div>
                </div>
            </div>
        </div>
    );
};

export default AssetAllocation;
