"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

export function Watchlist() {
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
      name: "Apple Inc",
      symbol: "AAPL",
      price: "$233.16",
      change: "+1.4%",
      positive: true,
      logo: "🍎",
    },
    {
      name: "Microsoft Corp",
      symbol: "MSFT",
      price: "$520.42",
      change: "+1.4%",
      positive: true,
      logo: "🪟",
    },
    {
      name: "Alphabet Inc",
      symbol: "GOOGL",
      price: "$201.56",
      change: "+1.4%",
      positive: true,
      logo: "🔍",
    },
    {
      name: "Tesla Inc",
      symbol: "TSLA",
      price: "$339.62",
      change: "+1.4%",
      positive: true,
      logo: "⚡",
    },
  ];

  return (
    <div className="bg-gray-900 p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-white">Watchlist</h2>
        <button className="text-yellow-400 hover:text-yellow-300 text-sm font-medium">
          View all
        </button>
      </div>

      <div className="space-y-3">
        {watchlistStocks.map((stock, index) => (
          <Link key={index} href={`/stock/${stock.symbol}`}>
            <Card className="bg-gray-800 border-gray-700 hover:bg-gray-700 transition-colors cursor-pointer">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center">
                      <span className="text-lg">{stock.logo}</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">{stock.name}</div>
                      <div className="text-sm text-gray-400">
                        {stock.symbol}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-white">{stock.price}</div>
                    <div
                      className={`text-sm ${
                        stock.positive ? "text-green-400" : "text-red-400"
                      }`}
                    >
                      {stock.change}
                    </div>
                  </div>
                  <button
                    className="text-yellow-400 hover:text-yellow-300 ml-4"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      // Handle watchlist toggle
                    }}
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </button>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
