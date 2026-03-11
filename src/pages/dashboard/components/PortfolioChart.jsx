import React from 'react';
import {
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Area,
    AreaChart
} from 'recharts';



const PortfolioChart = ({ data, portfolioValue, investedValue }) => {
    return (
        <div className="bg-white p-6 rounded-[4px] border border-[#CBD5E1] shadow-sm flex flex-col h-full min-h-[350px] md:min-h-[400px]">
            <div className="flex items-center justify-between mb-[24px]">
                <h3 className="text-[18px] font-semibold leading-[110%] align-middle text-[#0F172A]">Portfolio Chart</h3>
                <div className="flex w-[141px] h-[40px] bg-[#F1F5F9] p-[6px] rounded-[4px]">
                    <button className="flex-1 text-[14px] font-semibold leading-[144%] bg-white text-[#405AE8] rounded-[4px] shadow-[0px_1px_2px_rgba(16,24,40,0.1)]">24h</button>
                    <button className="flex-1 text-[14px] font-medium leading-[144%] bg-[#F1F5F9] text-[#334155] rounded-[4px]">All Time</button>
                </div>
            </div>

            <div className="mb-5 md:mb-6">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <span className="text-[14px] font-normal leading-[110%] align-middle text-[#475569]">Portfolio Value</span>
                        <div className="w-[48px] h-[3px] rounded-full bg-[#405AE8]"></div>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1.5">
                            <div className="w-2 h-0.5 bg-[#00C7BE] rounded-full"></div>
                            <div className="w-2 h-0.5 bg-[#00C7BE] rounded-full"></div>
                            <div className="w-2 h-0.5 bg-[#00C7BE] rounded-full"></div>
                        </div>
                        <span className="text-[14px] font-normal leading-[110%] align-middle text-[#475569]">Invested</span>
                    </div>
                </div>
                <div className="mt-2 md:mt-3 flex items-center justify-between">
                    <span className="text-[24px] font-semibold leading-[110%] align-middle text-[#0F172A]">{portfolioValue}</span>
                    <span className="text-[24px] font-semibold leading-[110%] align-middle text-[#0F172A]">{investedValue}</span>
                </div>
            </div>

            <div className="flex-1 w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data} margin={{ top: 12, right: 0, left: 0, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#405AE8" stopOpacity={0.14} />
                                <stop offset="100%" stopColor="#405AE8" stopOpacity={0.02} />
                            </linearGradient>
                            <linearGradient id="colorInvested" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#00C7BE" stopOpacity={0.1} />
                                <stop offset="100%" stopColor="#00C7BE" stopOpacity={0.03} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="8 8" horizontal={true} vertical={false} stroke="#CBD5E1" />
                        <XAxis
                            dataKey="time"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fontFamily: 'Inter', fontSize: 12, fill: '#CBD5E1', fontWeight: 500, lineHeight: '100%', letterSpacing: '0.05em' }}
                            dy={12}
                            ticks={['18:00', '00:00', '06:00', '12:00']}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fontFamily: 'Inter', fontSize: 12, fill: '#CBD5E1', fontWeight: 500, lineHeight: '100%', letterSpacing: '0.05em' }}
                            width={44}
                            domain={[900, 1600]}
                            ticks={[900, 1000, 1100, 1200, 1300, 1400, 1500, 1600]}
                            tickFormatter={(value) => value >= 1000 ? `${(value / 1000).toFixed(1)}K` : value}
                        />
                        <Tooltip
                            contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                        />
                        <Area
                            type="linear"
                            dataKey="value"
                            stroke="#405AE8"
                            strokeWidth={2}
                            fillOpacity={1}
                            fill="url(#colorValue)"
                            isAnimationActive={false}
                        />
                        <Area
                            type="linear"
                            dataKey="invested_raw"
                            stroke="#00C7BE"
                            strokeWidth={2}
                            strokeDasharray="6 6"
                            fillOpacity={1}
                            fill="url(#colorInvested)"
                            isAnimationActive={false}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default PortfolioChart;
