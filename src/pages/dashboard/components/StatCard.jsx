import React from 'react';
import arrowUp from '../../../assets/dashboarIcons/arrowUp.svg';

const StatCard = ({
    title,
    value,
    change1D,
    changeTotal,
    investedAmount,
    percentage,
    showDetails = false
}) => {
    return (
        <div className="bg-white p-6 rounded-[4px] border border-[#CBD5E1] shadow-sm flex flex-col font-inter">
            <div className="flex flex-col gap-1.5 mb-2">
                <span className="text-[#475569] text-[14px] font-normal leading-[110%] align-middle">
                    {title}
                </span>
                <span className="text-[24px] font-semibold text-[#0F172A] leading-[110%] align-middle mt-1">
                    {value}
                </span>
            </div>

            {showDetails && (
                <div className="mt-4 pt-4 border-t border-[#CBD5E1] space-y-4">
                    {/* 1D Returns */}
                    <div className="flex justify-between items-center h-[28px]">
                        <span className="text-[#475569] text-[14px] font-normal leading-[110%] align-middle">1D Returns</span>
                        <div className="flex items-center gap-3">
                            <span className="text-[#039855] text-[14px] font-semibold leading-[110%] align-middle">
                                {change1D}
                            </span>
                            <div className="flex items-center gap-1 text-[12px] px-2 py-1 rounded-[4px] font-medium bg-[#F0FCF0] text-[#039855] leading-[110%] align-middle">
                                <img src={arrowUp} alt="Arrow Up" className="w-[10px] h-[10px]" />
                                <span>{percentage}</span>
                            </div>
                        </div>
                    </div>

                    {/* Total Returns */}
                    <div className="flex justify-between items-center h-[28px]">
                        <span className="text-[#475569] text-[14px] font-normal leading-[110%] align-middle">Total Returns</span>
                        <div className="flex items-center gap-3">
                            <span className="text-[#039855] text-[14px] font-semibold leading-[110%] align-middle">
                                {changeTotal}
                            </span>
                            <div className="flex items-center gap-1 text-[12px] px-2 py-1 rounded-[4px] font-medium bg-[#F0FCF0] text-[#039855] leading-[110%] align-middle">
                                <img src={arrowUp} alt="Arrow Up" className="w-[10px] h-[10px]" />
                                <span>{percentage}</span>
                            </div>
                        </div>
                    </div>

                    <div className="pt-4 border-t border-[#CBD5E1]">
                        <div className="flex justify-between items-center h-[28px]">
                            <span className="text-[#475569] text-[14px] font-normal leading-[110%] align-middle">Invested Amount</span>
                            <span className="text-[14px] font-semibold text-[#0F172A] leading-[110%] align-middle">{investedAmount}</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default StatCard;
