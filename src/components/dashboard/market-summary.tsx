"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";

export function MarketSummary() {
  const [activeTab, setActiveTab] = useState("Indices");
  const [activeTimeframe, setActiveTimeframe] = useState("1Y");

  const tabs = ["Indices", "Stocks", "Crypto", "Forex", "Bonds", "ETFs"];
  const timeframes = ["1D", "1M", "3M", "1Y", "5Y", "All"];

  const marketData = [
    {
      name: "SPXUSD",
      fullName: "S&P 500 Index",
      value: "6,432.0",
      change: "-11.60",
      changePercent: "-0.18%",
      positive: false,
      badge: "500",
      badgeColor: "bg-red-500",
    },
    {
      name: "NSXUSD",
      fullName: "US 100 Cash CFD",
      value: "23,390.4",
      change: "-44.20",
      changePercent: "-0.19%",
      positive: false,
      badge: "100",
      badgeColor: "bg-blue-500",
    },
    {
      name: "DJI",
      fullName: "Dow Jones Industrial Average Index",
      value: "45,222.4",
      change: "-99.30",
      changePercent: "-0.21%",
      positive: false,
      badge: "30",
      badgeColor: "bg-blue-500",
    },
  ];

  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <h2 className="text-xl font-bold text-white mb-4">Market Summary</h2>

      {/* Tabs */}
      <div className="flex gap-2 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-3 py-2 rounded text-sm font-medium transition-colors ${
              activeTab === tab
                ? "bg-yellow-500 text-black"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Chart Area */}
      <div className="bg-gray-900 rounded-lg p-4 mb-6">
        <div className="h-48 bg-gray-800 rounded-lg flex items-center justify-center mb-4">
          <div className="text-center">
            <div className="text-4xl mb-2">📈</div>
            <div className="text-gray-400">Market Chart</div>
            <div className="text-sm text-gray-500 mt-1">
              Y-axis: 5,400 - 5,600
            </div>
          </div>
        </div>

        {/* Timeframe Selector */}
        <div className="flex gap-2 text-xs">
          {timeframes.map((timeframe) => (
            <button
              key={timeframe}
              onClick={() => setActiveTimeframe(timeframe)}
              className={`px-3 py-1 rounded transition-colors ${
                activeTimeframe === timeframe
                  ? "bg-yellow-500 text-black"
                  : "bg-gray-600 text-gray-300 hover:bg-gray-500"
              }`}
            >
              {timeframe}
            </button>
          ))}
        </div>
      </div>

      {/* Index Cards */}
      <div className="space-y-4">
        {marketData.map((item, index) => (
          <Card key={index} className="bg-gray-700 border-gray-600">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-8 h-8 ${item.badgeColor} rounded-full flex items-center justify-center`}
                  >
                    <span className="text-white text-xs font-bold">
                      {item.badge}
                    </span>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">{item.name}</div>
                    <div className="text-xs text-gray-500">{item.fullName}</div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-lg font-bold text-white">{item.value}</div>
                <div className="text-right">
                  <div
                    className={`text-sm ${
                      item.positive ? "text-green-400" : "text-red-400"
                    }`}
                  >
                    {item.change}
                  </div>
                  <div
                    className={`text-xs ${
                      item.positive ? "text-green-400" : "text-red-400"
                    }`}
                  >
                    {item.changePercent}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
