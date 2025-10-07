"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PriceAlertModal } from "@/components/modals/price-alert-modal";

export function WatchlistTable() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStock, setSelectedStock] = useState<{
    symbol: string;
    name: string;
  } | null>(null);

  const [watchlistStocks, setWatchlistStocks] = useState([
    {
      symbol: "AAPL",
      name: "Apple Inc.",
      price: "$233.16",
      change: "+1.54%",
      isPositive: true,
      marketCap: "$3.56T",
      peRatio: "35.5",
      isFavorited: true,
    },
    {
      symbol: "MSFT",
      name: "Microsoft Corp",
      price: "$520.42",
      change: "-0.24%",
      isPositive: false,
      marketCap: "$265.1B",
      peRatio: "28.2",
      isFavorited: true,
    },
    {
      symbol: "GOOGL",
      name: "Alphabet Inc",
      price: "$201.56",
      change: "+2.15%",
      isPositive: true,
      marketCap: "$1.89T",
      peRatio: "24.8",
      isFavorited: true,
    },
    {
      symbol: "AMZN",
      name: "Amazon.com Inc",
      price: "$185.23",
      change: "+0.87%",
      isPositive: true,
      marketCap: "$1.92T",
      peRatio: "45.2",
      isFavorited: true,
    },
    {
      symbol: "TSLA",
      name: "Tesla Inc",
      price: "$339.62",
      change: "-1.23%",
      isPositive: false,
      marketCap: "$1.08T",
      peRatio: "52.1",
      isFavorited: true,
    },
    {
      symbol: "META",
      name: "Meta Platforms Inc",
      price: "$762.96",
      change: "+3.45%",
      isPositive: true,
      marketCap: "$1.95T",
      peRatio: "18.7",
      isFavorited: true,
    },
    {
      symbol: "NVDA",
      name: "NVIDIA Corp",
      price: "$1,245.80",
      change: "+5.67%",
      isPositive: true,
      marketCap: "$3.12T",
      peRatio: "68.4",
      isFavorited: true,
    },
    {
      symbol: "NFLX",
      name: "Netflix Inc",
      price: "$678.90",
      change: "-0.45%",
      isPositive: false,
      marketCap: "$298.5B",
      peRatio: "42.3",
      isFavorited: true,
    },
    {
      symbol: "ORCL",
      name: "Oracle Corp",
      price: "$145.67",
      change: "+1.23%",
      isPositive: true,
      marketCap: "$398.2B",
      peRatio: "31.8",
      isFavorited: true,
    },
    {
      symbol: "CRM",
      name: "Salesforce Inc",
      price: "$298.45",
      change: "+2.34%",
      isPositive: true,
      marketCap: "$289.1B",
      peRatio: "38.9",
      isFavorited: true,
    },
    {
      symbol: "INTC",
      name: "Intel Corporation",
      price: "$45.23",
      change: "-0.67%",
      isPositive: false,
      marketCap: "$189.3B",
      peRatio: "15.2",
      isFavorited: true,
    },
    {
      symbol: "JNJ",
      name: "Johnson & Johnson",
      price: "$156.78",
      change: "+0.34%",
      isPositive: true,
      marketCap: "$412.8B",
      peRatio: "22.1",
      isFavorited: true,
    },
    {
      symbol: "RDDT",
      name: "Reddit",
      price: "$78.45",
      change: "+4.56%",
      isPositive: true,
      marketCap: "$12.3B",
      peRatio: "N/A",
      isFavorited: true,
    },
    {
      symbol: "UBER",
      name: "Uber Technologies",
      price: "$89.12",
      change: "+1.89%",
      isPositive: true,
      marketCap: "$185.6B",
      peRatio: "N/A",
      isFavorited: true,
    },
    {
      symbol: "ADBE",
      name: "Adobe Inc",
      price: "$567.89",
      change: "-0.23%",
      isPositive: false,
      marketCap: "$258.4B",
      peRatio: "41.7",
      isFavorited: true,
    },
  ]);

  const toggleFavorite = (symbol: string) => {
    setWatchlistStocks((prev) =>
      prev.map((stock) =>
        stock.symbol === symbol
          ? { ...stock, isFavorited: !stock.isFavorited }
          : stock
      )
    );
  };

  const handleAddAlert = (symbol: string, name: string) => {
    setSelectedStock({ symbol, name });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedStock(null);
  };

  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white">Watchlist</h2>
        <Button className="yellow-btn">Add Stock</Button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="text-left py-3 px-4 text-gray-400 font-medium">
                Company
              </th>
              <th className="text-left py-3 px-4 text-gray-400 font-medium">
                Symbol
              </th>
              <th className="text-left py-3 px-4 text-gray-400 font-medium">
                Price
              </th>
              <th className="text-left py-3 px-4 text-gray-400 font-medium">
                Change
              </th>
              <th className="text-left py-3 px-4 text-gray-400 font-medium">
                Market Cap
              </th>
              <th className="text-left py-3 px-4 text-gray-400 font-medium">
                P/E Ratio
              </th>
              <th className="text-left py-3 px-4 text-gray-400 font-medium">
                Alert
              </th>
            </tr>
          </thead>
          <tbody>
            {watchlistStocks.map((stock, index) => (
              <tr
                key={index}
                className="border-b border-gray-700 hover:bg-gray-700 transition-colors"
              >
                <td className="py-4 px-4">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => toggleFavorite(stock.symbol)}
                      className="text-yellow-400 hover:text-yellow-300 transition-colors"
                    >
                      <svg
                        className={`w-5 h-5 ${
                          stock.isFavorited ? "fill-current" : "stroke-current"
                        }`}
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </button>
                    <Link
                      href={`/stock/${stock.symbol}`}
                      className="text-white hover:text-yellow-400 transition-colors"
                    >
                      {stock.name}
                    </Link>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <Link
                    href={`/stock/${stock.symbol}`}
                    className="text-gray-300 hover:text-yellow-400 transition-colors"
                  >
                    {stock.symbol}
                  </Link>
                </td>
                <td className="py-4 px-4 text-white font-medium">
                  {stock.price}
                </td>
                <td
                  className={`py-4 px-4 font-medium ${
                    stock.isPositive ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {stock.change}
                </td>
                <td className="py-4 px-4 text-gray-300">{stock.marketCap}</td>
                <td className="py-4 px-4 text-gray-300">{stock.peRatio}</td>
                <td className="py-4 px-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-gray-600 text-gray-300 hover:bg-gray-700"
                    onClick={() => handleAddAlert(stock.symbol, stock.name)}
                  >
                    Add Alert
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Price Alert Modal */}
      <PriceAlertModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        stockSymbol={selectedStock?.symbol}
        stockName={selectedStock?.name}
      />
    </div>
  );
}
