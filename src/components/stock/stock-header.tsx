"use client";

import { Button } from "@/components/ui/button";

interface StockHeaderProps {
  symbol: string;
}

export function StockHeader({ }: StockHeaderProps) {
  // Mock data - in real app, this would come from API
  const stockData = {
    name: "APPLE INC",
    symbol: "AAPL",
    exchange: "Nasdaq Stock Market",
    price: "227.16",
    change: "-0.60",
    changePercent: "(-0.26%)",
    isPositive: false,
    marketStatus: "MARKET CLOSED (AS OF 05:29 GMT+5:30)",
    earnings: "October 23",
    eps: "6.61",
    marketCap: "3.37T",
    divYield: "0.46%",
    pe: "34.62",
  };

  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <div className="flex items-center justify-between">
        {/* Left Section - Company Info */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center">
            <span className="text-2xl">🍎</span>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">{stockData.name}</h1>
            <div className="flex items-center gap-2 text-gray-400">
              <span className="font-medium">{stockData.symbol}</span>
              <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">N</span>
              </div>
              <span className="text-sm">{stockData.exchange}</span>
            </div>
          </div>
        </div>

        {/* Center Section - Price Info */}
        <div className="text-center">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-3xl font-bold text-white">
              {stockData.price}
            </span>
            <span className="text-yellow-400 text-sm">D</span>
            <span className="text-sm text-gray-400">USD</span>
          </div>
          <div
            className={`text-lg font-medium ${
              stockData.isPositive ? "text-green-400" : "text-red-400"
            }`}
          >
            {stockData.change} {stockData.changePercent}
          </div>
          <div className="text-sm text-gray-400 mt-1">
            • {stockData.marketStatus}
          </div>
        </div>

        {/* Right Section - Metrics & Actions */}
        <div className="flex items-center gap-6">
          {/* Financial Metrics */}
          <div className="grid grid-cols-2 gap-4 text-right">
            <div>
              <div className="text-white font-medium">{stockData.earnings}</div>
              <div className="text-xs text-gray-400">UPCOMING EARNINGS</div>
            </div>
            <div>
              <div className="text-white font-medium">{stockData.eps}</div>
              <div className="text-xs text-gray-400">EPS</div>
            </div>
            <div>
              <div className="text-white font-medium">
                {stockData.marketCap}
              </div>
              <div className="text-xs text-gray-400">MARKET CAP</div>
            </div>
            <div>
              <div className="text-white font-medium">{stockData.divYield}</div>
              <div className="text-xs text-gray-400">DIV YIELD</div>
            </div>
            <div>
              <div className="text-white font-medium">{stockData.pe}</div>
              <div className="text-xs text-gray-400">P/E</div>
            </div>
          </div>

          {/* Add to Watchlist Button */}
          <Button className="yellow-btn">Add to Watchlist</Button>
        </div>
      </div>
    </div>
  );
}
