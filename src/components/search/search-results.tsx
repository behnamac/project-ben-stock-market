"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

export function SearchResults() {
  const [activeTab, setActiveTab] = useState("all");

  const tabs = [
    { id: "all", label: "All Results", count: 156 },
    { id: "stocks", label: "Stocks", count: 89 },
    { id: "etfs", label: "ETFs", count: 34 },
    { id: "crypto", label: "Crypto", count: 23 },
    { id: "forex", label: "Forex", count: 10 },
  ];

  // Mock search results
  const searchResults = [
    {
      symbol: "AAPL",
      name: "Apple Inc",
      exchange: "NASDAQ",
      industry: "Consumer Electronics",
      price: "$227.16",
      change: "-0.60",
      changePercent: "-0.26%",
      isPositive: false,
      isFavorited: true,
      type: "stock",
    },
    {
      symbol: "MSFT",
      name: "Microsoft Corporation",
      exchange: "NASDAQ",
      industry: "Software",
      price: "$520.42",
      change: "+2.15",
      changePercent: "+0.41%",
      isPositive: true,
      isFavorited: false,
      type: "stock",
    },
    {
      symbol: "GOOGL",
      name: "Alphabet Inc Class A",
      exchange: "NASDAQ",
      industry: "Internet Content & Information",
      price: "$201.56",
      change: "+1.23",
      changePercent: "+0.61%",
      isPositive: true,
      isFavorited: true,
      type: "stock",
    },
    {
      symbol: "TSLA",
      name: "Tesla Inc",
      exchange: "NASDAQ",
      industry: "Auto Manufacturers",
      price: "$339.62",
      change: "-2.15",
      changePercent: "-0.63%",
      isPositive: false,
      isFavorited: false,
      type: "stock",
    },
    {
      symbol: "META",
      name: "Meta Platforms Inc",
      exchange: "NASDAQ",
      industry: "Internet Content & Information",
      price: "$762.96",
      change: "+4.25",
      changePercent: "+0.56%",
      isPositive: true,
      isFavorited: false,
      type: "stock",
    },
  ];

  const toggleFavorite = (symbol: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    // Handle favorite toggle logic here
    console.log(`Toggle favorite for ${symbol}`);
  };

  return (
    <div className="mt-8">
      {/* Tabs */}
      <div className="flex gap-4 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === tab.id
                ? "bg-yellow-500 text-black"
                : "bg-gray-800 text-gray-400 hover:bg-gray-700"
            }`}
          >
            {tab.label} ({tab.count})
          </button>
        ))}
      </div>

      {/* Results */}
      <div className="space-y-4">
        {searchResults.map((result, index) => (
          <Link key={index} href={`/stock/${result.symbol}`}>
            <Card className="bg-gray-800 border-gray-700 hover:bg-gray-700 transition-colors cursor-pointer">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    {/* Company Logo/Icon */}
                    <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center">
                      <span className="text-lg">
                        {result.symbol === "AAPL"
                          ? "🍎"
                          : result.symbol === "MSFT"
                          ? "🪟"
                          : result.symbol === "GOOGL"
                          ? "🔍"
                          : result.symbol === "TSLA"
                          ? "⚡"
                          : result.symbol === "META"
                          ? "📘"
                          : "📈"}
                      </span>
                    </div>

                    {/* Company Info */}
                    <div>
                      <div className="font-medium text-white text-lg">
                        {result.name}
                      </div>
                      <div className="text-sm text-gray-400">
                        {result.symbol} • {result.exchange} • {result.industry}
                      </div>
                    </div>
                  </div>

                  {/* Price Info */}
                  <div className="text-right">
                    <div className="font-bold text-white text-lg">
                      {result.price}
                    </div>
                    <div
                      className={`text-sm ${
                        result.isPositive ? "text-green-400" : "text-red-400"
                      }`}
                    >
                      {result.change} ({result.changePercent})
                    </div>
                  </div>

                  {/* Star Icon */}
                  <button
                    onClick={(e) => toggleFavorite(result.symbol, e)}
                    className="text-yellow-400 hover:text-yellow-300 transition-colors ml-4"
                  >
                    <svg
                      className={`w-5 h-5 ${
                        result.isFavorited ? "fill-current" : "stroke-current"
                      }`}
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </button>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* Load More Button */}
      <div className="text-center mt-8">
        <button className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors">
          Load More Results
        </button>
      </div>
    </div>
  );
}
