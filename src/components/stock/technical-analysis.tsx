"use client";

import { useState } from "react";

interface TechnicalAnalysisProps {
  symbol: string;
}

export function TechnicalAnalysis({ symbol }: TechnicalAnalysisProps) {
  const [activeTimeframe, setActiveTimeframe] = useState("1 minute");

  const timeframes = ["1 minute", "5 minutes", "15 minutes", "More"];

  // Mock technical analysis data
  const analysisData = {
    sentiment: "Strong sell",
    sellCount: 16,
    neutralCount: 9,
    buyCount: 1,
    sellPercentage: 61.5,
    neutralPercentage: 34.6,
    buyPercentage: 3.8,
  };

  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-white">
          Technical Analysis for <span className="text-blue-400">{symbol}</span>
        </h2>
        <button className="yellow-btn text-sm">Add to Watchlist</button>
      </div>

      {/* Timeframe Selector */}
      <div className="flex gap-2 mb-6">
        {timeframes.map((timeframe) => (
          <button
            key={timeframe}
            onClick={() => setActiveTimeframe(timeframe)}
            className={`px-3 py-2 rounded text-sm font-medium transition-colors ${
              activeTimeframe === timeframe
                ? "bg-gray-700 text-white"
                : "bg-gray-600 text-gray-300 hover:bg-gray-500"
            }`}
          >
            {timeframe}
            {timeframe === "More" && <span className="ml-1">⌄</span>}
          </button>
        ))}
      </div>

      {/* Sentiment Gauge */}
      <div className="text-center mb-6">
        <div className="relative w-48 h-24 mx-auto mb-4">
          {/* Semi-circular gauge background */}
          <div className="w-full h-full relative">
            <svg className="w-full h-full" viewBox="0 0 200 100">
              {/* Background arc */}
              <path
                d="M 20 80 A 80 80 0 0 1 180 80"
                stroke="#374151"
                strokeWidth="8"
                fill="none"
              />
              {/* Sell arc (red) */}
              <path
                d="M 20 80 A 80 80 0 0 1 100 20"
                stroke="#ef4444"
                strokeWidth="8"
                fill="none"
              />
              {/* Neutral arc (gray) */}
              <path
                d="M 100 20 A 80 80 0 0 1 180 80"
                stroke="#6b7280"
                strokeWidth="8"
                fill="none"
              />
              {/* Needle */}
              <line
                x1="100"
                y1="80"
                x2="30"
                y2="30"
                stroke="#ffffff"
                strokeWidth="3"
                strokeLinecap="round"
              />
              {/* Needle point */}
              <circle cx="30" cy="30" r="4" fill="#ffffff" />
            </svg>
          </div>

          {/* Labels */}
          <div className="absolute bottom-0 left-0 text-red-400 text-sm font-medium">
            Sell
          </div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-gray-400 text-sm font-medium">
            Neutral
          </div>
          <div className="absolute bottom-0 right-0 text-gray-400 text-sm font-medium">
            Buy
          </div>
        </div>

        {/* Sentiment Labels */}
        <div className="flex justify-between text-sm mb-2">
          <span className="text-red-400 font-medium">Strong sell</span>
          <span className="text-gray-400">Strong buy</span>
        </div>

        {/* Current Sentiment */}
        <div className="text-red-400 text-lg font-bold mb-4">
          {analysisData.sentiment}
        </div>
      </div>

      {/* Numerical Breakdown */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-red-400 font-medium">Sell</span>
          <span className="text-red-400 font-bold">
            {analysisData.sellCount}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-400 font-medium">Neutral</span>
          <span className="text-gray-400 font-bold">
            {analysisData.neutralCount}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-blue-400 font-medium">Buy</span>
          <span className="text-blue-400 font-bold">
            {analysisData.buyCount}
          </span>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-6 pt-4 border-t border-gray-700 flex justify-end">
        <div className="w-6 h-6 bg-gray-600 rounded flex items-center justify-center">
          <span className="text-white text-xs font-bold">T7</span>
        </div>
      </div>
    </div>
  );
}
