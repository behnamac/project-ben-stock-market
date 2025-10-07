"use client";

import { useState } from "react";

interface StockChartProps {
  symbol: string;
}

export function StockChart({ symbol }: StockChartProps) {
  const [activeTimeframe, setActiveTimeframe] = useState("D");
  const [chartType, setChartType] = useState("candlestick");

  const timeframes = ["1m", "30m", "1h", "D"];
  const chartTypes = ["line", "candlestick", "bar"];

  // Mock chart data
  const chartData = {
    open: "226.48",
    high: "229.30",
    low: "226.23",
    close: "227.16",
    change: "-0.60",
    changePercent: "(-0.26%)",
    volume: "30.98 M",
    avgVolume: "56.27 M",
    marketCap: "3.37 T",
    nextEarnings: "In 58 days",
    dayRange: { low: "226.23", high: "229.30" },
    yearRange: { low: "169.00", high: "260.00" },
  };

  return (
    <div className="bg-gray-800 rounded-lg p-6">
      {/* Chart Controls */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
          {/* Timeframe Selector */}
          <div className="flex gap-2">
            {timeframes.map((timeframe) => (
              <button
                key={timeframe}
                onClick={() => setActiveTimeframe(timeframe)}
                className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                  activeTimeframe === timeframe
                    ? "bg-yellow-500 text-black"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
              >
                {timeframe}
              </button>
            ))}
          </div>

          {/* Chart Type Selector */}
          <div className="flex gap-2">
            {chartTypes.map((type) => (
              <button
                key={type}
                onClick={() => setChartType(type)}
                className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                  chartType === type
                    ? "bg-yellow-500 text-black"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button className="px-3 py-1 bg-gray-700 text-gray-300 rounded text-sm hover:bg-gray-600">
            Indicators
          </button>
          <button className="px-3 py-1 bg-gray-700 text-gray-300 rounded text-sm hover:bg-gray-600">
            +
          </button>
        </div>
      </div>

      {/* Stock Info */}
      <div className="mb-4">
        <div className="text-lg font-medium text-white">
          {symbol} · {activeTimeframe} · Cboe One
        </div>
        <div className="text-sm text-gray-400">
          O {chartData.open} H {chartData.high} L {chartData.low} C{" "}
          {chartData.close} {chartData.change} {chartData.changePercent}
        </div>
      </div>

      {/* Chart Area */}
      <div className="bg-gray-900 rounded-lg p-4 mb-4">
        <div className="h-80 bg-gray-800 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <div className="text-4xl mb-2">📈</div>
            <div className="text-gray-400">Interactive Chart</div>
            <div className="text-sm text-gray-500 mt-1">
              Y-axis: 170.00 - 270.00
            </div>
            <div className="text-sm text-gray-500">
              Current: {chartData.close}
            </div>
          </div>
        </div>
      </div>

      {/* Stock Details Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column - Stock Info */}
        <div className="space-y-4">
          <div>
            <div className="text-lg font-medium text-white">{symbol}</div>
            <div className="text-sm text-gray-400">Apple Inc.</div>
            <div className="text-sm text-gray-400">NASDAQ</div>
            <div className="text-sm text-gray-400">Electronic Technology</div>
            <div className="text-sm text-gray-400">
              Telecommunications Equipment
            </div>
          </div>

          <div>
            <div className="text-2xl font-bold text-white">
              {chartData.close} USD
            </div>
            <div className="text-red-400">
              {chartData.change} {chartData.changePercent}
            </div>
            <div className="text-sm text-gray-400">• Market closed</div>
            <div className="text-sm text-gray-400">
              Last update at 05:29 GMT+5:30
            </div>
          </div>
        </div>

        {/* Right Column - Key Stats */}
        <div className="space-y-4">
          <div>
            <div className="text-sm text-gray-400 mb-2">Day's Range</div>
            <div className="flex items-center gap-2">
              <span className="text-white">{chartData.dayRange.low}</span>
              <div className="flex-1 bg-gray-700 rounded-full h-2 relative">
                <div className="absolute left-0 top-0 w-full h-2 bg-gray-600 rounded-full"></div>
                <div className="absolute left-1/2 top-0 w-1 h-2 bg-yellow-400 rounded-full"></div>
              </div>
              <span className="text-white">{chartData.dayRange.high}</span>
            </div>
          </div>

          <div>
            <div className="text-sm text-gray-400 mb-2">52WK Range</div>
            <div className="flex items-center gap-2">
              <span className="text-white">{chartData.yearRange.low}</span>
              <div className="flex-1 bg-gray-700 rounded-full h-2 relative">
                <div className="absolute left-0 top-0 w-3/4 h-2 bg-gray-600 rounded-full"></div>
                <div className="absolute left-1/2 top-0 w-1 h-2 bg-yellow-400 rounded-full"></div>
              </div>
              <span className="text-white">{chartData.yearRange.high}</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <div className="text-gray-400">Next earnings report</div>
              <div className="text-white">{chartData.nextEarnings}</div>
            </div>
            <div>
              <div className="text-gray-400">Volume</div>
              <div className="text-white">{chartData.volume}</div>
            </div>
            <div>
              <div className="text-gray-400">Average Volume (30D)</div>
              <div className="text-white">{chartData.avgVolume}</div>
            </div>
            <div>
              <div className="text-gray-400">Market capitalization</div>
              <div className="text-white">{chartData.marketCap}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
