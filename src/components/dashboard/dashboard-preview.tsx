"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function DashboardPreview() {
  const marketData = [
    {
      name: "S&P 500",
      price: "$5,603.24",
      change: "+1.4%",
      positive: true,
      badge: "500",
    },
    {
      name: "Nasdaq 100",
      price: "$23,453.86",
      change: "+1.5%",
      positive: true,
      badge: "100",
    },
    {
      name: "Dow 30",
      price: "$44,425.52",
      change: "+1.4%",
      positive: true,
      badge: "30",
    },
  ];

  const watchlistStocks = [
    {
      name: "Amazon.com",
      symbol: "AMZN",
      price: "$224.42",
      change: "+1.4%",
      positive: true,
      logo: "🛒",
    },
    {
      name: "Netflix, Inc",
      symbol: "NFLX",
      price: "$1,220.48",
      change: "+1.4%",
      positive: true,
      logo: "📺",
    },
    {
      name: "Applovin Corporation",
      symbol: "APP",
      price: "$450.04",
      change: "-16.12%",
      positive: false,
      logo: "A",
    },
  ];

  const topStocks = [
    {
      company: "Apple Inc",
      symbol: "AAPL",
      price: "$233.16",
      change: "+1.54%",
      positive: true,
      marketCap: "$3.56T",
      pe: "35.5",
    },
    {
      company: "Microsoft Corp",
      symbol: "MSFT",
      price: "$520.42",
      change: "-0.24%",
      positive: false,
      marketCap: "$3.75T",
      pe: "32.6",
    },
    {
      company: "Alphabet Inc",
      symbol: "GOOGL",
      price: "$201.56",
      change: "+2.65%",
      positive: true,
      marketCap: "$2.52T",
      pe: "21.5",
    },
    {
      company: "Amazon.com Inc",
      symbol: "AMZN",
      price: "$244.16",
      change: "-1.53%",
      positive: false,
      marketCap: "$1.45T",
      pe: "33.5",
    },
    {
      company: "Tesla Inc",
      symbol: "TSLA",
      price: "$339.62",
      change: "+1.72%",
      positive: true,
      marketCap: "$1.56T",
      pe: "161.2",
    },
    {
      company: "Meta Platforms Inc",
      symbol: "META",
      price: "$762.96",
      change: "-2.54%",
      positive: false,
      marketCap: "$2.63T",
      pe: "45.6",
    },
    {
      company: "NVIDIA Corp",
      symbol: "NVDA",
      price: "$181.46",
      change: "+2.21%",
      positive: true,
      marketCap: "$1.36T",
      pe: "16.8",
    },
    {
      company: "Netflix Inc",
      symbol: "NFLX",
      price: "$1214.45",
      change: "-2.62%",
      positive: false,
      marketCap: "$4.74T",
      pe: "45.9",
    },
    {
      company: "Oracle Corp",
      symbol: "ORCL",
      price: "$244.63",
      change: "+1.78%",
      positive: true,
      marketCap: "$511.2B",
      pe: "58.9",
    },
    {
      company: "Salesforce Inc",
      symbol: "CRM",
      price: "$254.45",
      change: "-3.62%",
      positive: false,
      marketCap: "$265.1B",
      pe: "37.2",
    },
  ];

  const newsItems = [
    {
      title:
        "Exclusive | Walmart's New Employee Perk Takes a Bite Out of Workers' Grocery Bills",
      source: "The Wall Street Journal",
      time: "37 minutes ago",
      stockChange: "WMT ↓ 1.74%",
      positive: false,
      thumbnail: "🛒",
    },
    {
      title:
        "Stock market today: Dow pops, S&P 500 and Nasdaq waver as Fed rate cut bets surge",
      source: "Yahoo Finance",
      time: "34 minutes ago",
      stockChange: "NDAQ ↓ 0.93%",
      positive: false,
      thumbnail: "🏢",
    },
    {
      title:
        "Ex-Kroger CEO must reveal 'embarrassing' details about his abrupt exit thanks to lawsuit involving Jewel",
      source: "New York Post",
      time: "2 hours ago",
      stockChange: "GE ↓ 5.14%",
      positive: false,
      thumbnail: "👥",
    },
    {
      title: "Breaking: Federal Reserve announces new interest rate policy",
      source: "CNN",
      time: "1 hour ago",
      stockChange: "",
      positive: true,
      thumbnail: "📺",
    },
  ];

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      {/* Header */}
      <div className="bg-gray-800 border-b border-gray-700 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-yellow-400 rounded flex items-center justify-center">
              <span className="text-black font-bold text-sm">S</span>
            </div>
            <span className="text-xl font-bold">Signalist</span>
          </div>

          <nav className="flex gap-8 text-sm">
            <a href="#" className="text-yellow-400 font-medium">
              Dashboard
            </a>
            <a href="#" className="text-gray-400 hover:text-yellow-400">
              Search
            </a>
            <a href="#" className="text-gray-400 hover:text-yellow-400">
              Watchlist
            </a>
            <a href="#" className="text-gray-400 hover:text-yellow-400">
              News
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
              <span className="text-xs">JS</span>
            </div>
            <span className="text-sm">Jane Smith</span>
            <svg
              className="w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Market Summary */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Market Summary</h2>
              <div className="flex gap-2 mb-6">
                <button className="px-4 py-2 bg-yellow-500 text-black rounded-lg text-sm font-medium">
                  Indices
                </button>
                <button className="px-4 py-2 bg-gray-700 text-gray-300 rounded-lg text-sm">
                  Stocks
                </button>
                <button className="px-4 py-2 bg-gray-700 text-gray-300 rounded-lg text-sm">
                  Crypto
                </button>
                <button className="px-4 py-2 bg-gray-700 text-gray-300 rounded-lg text-sm">
                  Forex
                </button>
                <button className="px-4 py-2 bg-gray-700 text-gray-300 rounded-lg text-sm">
                  Bonds
                </button>
                <button className="px-4 py-2 bg-gray-700 text-gray-300 rounded-lg text-sm">
                  ETFs
                </button>
              </div>

              {/* Chart Area */}
              <div className="bg-gray-800 rounded-lg p-6 mb-6">
                <div className="h-48 bg-gray-700 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center">
                    <div className="text-4xl mb-2">📈</div>
                    <div className="text-gray-400">Market Chart</div>
                    <div className="text-sm text-gray-500 mt-1">
                      Y-axis: 5,400 - 5,600
                    </div>
                  </div>
                </div>

                {/* Time intervals */}
                <div className="flex gap-2 text-xs">
                  {[
                    "1m",
                    "5m",
                    "15m",
                    "30m",
                    "1h",
                    "2h",
                    "4h",
                    "D",
                    "W",
                    "M",
                  ].map((interval) => (
                    <button
                      key={interval}
                      className="px-3 py-1 bg-gray-600 text-gray-300 rounded hover:bg-gray-500"
                    >
                      {interval}
                    </button>
                  ))}
                </div>
              </div>

              {/* Market Index Cards */}
              <div className="grid grid-cols-3 gap-4">
                {marketData.map((item, index) => (
                  <Card key={index} className="bg-gray-800 border-gray-700">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-sm text-gray-400">{item.name}</div>
                        <Badge
                          variant="secondary"
                          className="bg-gray-700 text-gray-300 text-xs"
                        >
                          {item.badge}
                        </Badge>
                      </div>
                      <div className="text-lg font-bold mb-1">{item.price}</div>
                      <div
                        className={`text-sm ${
                          item.positive ? "text-green-400" : "text-red-400"
                        }`}
                      >
                        {item.change}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Today's Top Stocks */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold">Today's Top Stocks</h2>
                <button className="text-yellow-400 hover:text-yellow-300 text-sm font-medium">
                  View all
                </button>
              </div>

              <div className="bg-gray-800 rounded-lg overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-700">
                    <tr>
                      <th className="text-left p-4 text-sm font-medium text-gray-300">
                        Company
                      </th>
                      <th className="text-left p-4 text-sm font-medium text-gray-300">
                        Symbol
                      </th>
                      <th className="text-left p-4 text-sm font-medium text-gray-300">
                        Price
                      </th>
                      <th className="text-left p-4 text-sm font-medium text-gray-300">
                        Change
                      </th>
                      <th className="text-left p-4 text-sm font-medium text-gray-300">
                        Market Cap
                      </th>
                      <th className="text-left p-4 text-sm font-medium text-gray-300">
                        P/E
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {topStocks.map((stock, index) => (
                      <tr
                        key={index}
                        className="border-b border-gray-700 hover:bg-gray-700/50"
                      >
                        <td className="p-4 font-medium">{stock.company}</td>
                        <td className="p-4 text-gray-400">{stock.symbol}</td>
                        <td className="p-4 font-bold">{stock.price}</td>
                        <td
                          className={`p-4 ${
                            stock.positive ? "text-green-400" : "text-red-400"
                          }`}
                        >
                          {stock.change}
                        </td>
                        <td className="p-4 text-gray-400">{stock.marketCap}</td>
                        <td className="p-4 text-gray-400">{stock.pe}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Your Watchlist */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold">Your Watchlist</h2>
                <button className="text-yellow-400 hover:text-yellow-300 text-sm font-medium">
                  View all
                </button>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {watchlistStocks.map((stock, index) => (
                  <Card key={index} className="bg-gray-800 border-gray-700">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center">
                            <span className="text-xl">{stock.logo}</span>
                          </div>
                          <div>
                            <div className="font-medium text-lg">
                              {stock.name}
                            </div>
                            <div className="text-sm text-gray-400">
                              {stock.symbol}
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-lg">{stock.price}</div>
                          <div
                            className={`text-sm ${
                              stock.positive ? "text-green-400" : "text-red-400"
                            }`}
                          >
                            {stock.change}
                          </div>
                        </div>
                        <button className="text-yellow-400 hover:text-yellow-300 ml-4">
                          <svg
                            className="w-6 h-6 fill-current"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Today's Financial News */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold">Today's Financial News</h2>
                <button className="text-yellow-400 hover:text-yellow-300 text-sm font-medium">
                  View all
                </button>
              </div>

              <div className="flex gap-2 mb-4">
                <button className="px-4 py-2 bg-yellow-500 text-black rounded-lg text-sm font-medium">
                  Top stories
                </button>
                <button className="px-4 py-2 bg-gray-700 text-gray-300 rounded-lg text-sm">
                  Local market
                </button>
                <button className="px-4 py-2 bg-gray-700 text-gray-300 rounded-lg text-sm">
                  World markets
                </button>
              </div>

              <div className="space-y-4">
                {newsItems.map((news, index) => (
                  <Card key={index} className="bg-gray-800 border-gray-700">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-4">
                        <div className="w-16 h-16 bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-2xl">{news.thumbnail}</span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                            <span>{news.source}</span>
                            <span>•</span>
                            <span>{news.time}</span>
                            {news.stockChange && (
                              <>
                                <span>•</span>
                                <span
                                  className={
                                    news.positive
                                      ? "text-green-400"
                                      : "text-red-400"
                                  }
                                >
                                  {news.stockChange}
                                </span>
                              </>
                            )}
                          </div>
                          <h3 className="font-medium text-gray-100 mb-2 line-clamp-2">
                            {news.title}
                          </h3>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
