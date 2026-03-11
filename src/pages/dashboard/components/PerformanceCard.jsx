import React from 'react';
import ethLogo from '../../../assets/dashboarIcons/ethereum-eth-logo.svg';
import btcLogo from '../../../assets/dashboarIcons/bitcoin-btc-logo 1.svg';
import arrowUp from '../../../assets/dashboarIcons/arrowUp.svg';
import downArrow from '../../../assets/dashboarIcons/downArrow.svg';

const AssetPerformanceItem = ({ symbol, value, percentage, isPositive, type }) => (
    <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
            <img
                src={symbol === 'ETH' ? ethLogo : btcLogo}
                alt={symbol}
                className="w-[30px] h-[30px]"
            />
            <div>
                <div className="text-[12px] font-normal leading-[110%] align-middle text-[#475569]">{type}</div>
                <div className="text-[14px] font-semibold leading-[110%] align-middle text-[#0F172A]">{symbol}</div>
            </div>
        </div>
        <div className="flex items-center gap-2">
            <span className={`text-[14px] font-semibold leading-[110%] align-middle ${isPositive ? 'text-[#10B981]' : 'text-[#EF4444]'}`}>
                {value}
            </span>
            <div className={`flex items-center gap-1 text-[12px] px-2 py-0.5 rounded-[4px] font-medium leading-[110%] align-middle ${isPositive ? 'bg-[#F0FCF0] text-[#039855]' : 'bg-[#FFF3F2] text-[#F04438]'}`}>
                <img
                    src={isPositive ? arrowUp : downArrow}
                    alt={isPositive ? 'Up Arrow' : 'Down Arrow'}
                    className="w-[10px] h-[10px]"
                />
                {percentage}
            </div>
        </div>
    </div>
);

const PerformanceCard = ({ data }) => {
    return (
        <div className="bg-white p-6 rounded-[4px] border border-[#CBD5E1] shadow-sm flex flex-col gap-6 font-inter">
            <div className="flex flex-col gap-1">
                <h3 className="font-bold text-[16px] md:text-[18px] text-[#1E293B]">Performance</h3>
                <p className="text-[12px] font-normal leading-[110%] align-middle text-[#475569]">Based on weekly performance of assets.</p>
            </div>

            <div className="space-y-6">
                <AssetPerformanceItem
                    type="Top Gainer"
                    symbol={data.topGainer.symbol}
                    value={data.topGainer.value}
                    percentage={data.topGainer.percentage}
                    isPositive={data.topGainer.isPositive}
                />
                <AssetPerformanceItem
                    type="Top Loser"
                    symbol={data.topLoser.symbol}
                    value={data.topLoser.value}
                    percentage={data.topLoser.percentage}
                    isPositive={data.topLoser.isPositive}
                />
            </div>
        </div>
    );
};

export default PerformanceCard;
