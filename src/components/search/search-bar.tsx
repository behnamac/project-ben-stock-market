"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

export function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // Mock popular stocks data
  const popularStocks = [
    {
      symbol: "AAPL",
      name: "Apple Inc",
      exchange: "NASDAQ NMS",
      industry: "Consumer Electronics",
      isFavorited: true,
      trend: "up",
    },
    {
      symbol: "MSFT",
      name: "Microsoft Corp",
      exchange: "NASDAQ NMS",
      industry: "Software",
      isFavorited: false,
      trend: "up",
    },
    {
      symbol: "GOOGL",
      name: "Alphabet Inc",
      exchange: "NASDAQ NMS",
      industry: "Internet Content & Information",
      isFavorited: true,
      trend: "up",
    },
    {
      symbol: "TSLA",
      name: "Tesla Inc",
      exchange: "NASDAQ NMS",
      industry: "Auto Manufacturers",
      isFavorited: false,
      trend: "up",
    },
    {
      symbol: "META",
      name: "Meta Platforms Inc",
      exchange: "NASDAQ NMS",
      industry: "Internet Content & Information",
      isFavorited: false,
      trend: "up",
    },
  ];

  // Filter stocks based on search query
  const filteredStocks = popularStocks.filter(
    (stock) =>
      stock.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      stock.symbol.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
        setIsFocused(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setIsDropdownOpen(true);
  };

  const handleInputFocus = () => {
    setIsFocused(true);
    setIsDropdownOpen(true);
  };

  const handleClearSearch = () => {
    setSearchQuery("");
    setIsDropdownOpen(false);
  };

  const handleStockClick = (symbol: string) => {
    setSearchQuery("");
    setIsDropdownOpen(false);
    setIsFocused(false);
  };

  const toggleFavorite = (symbol: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    // Handle favorite toggle logic here
    console.log(`Toggle favorite for ${symbol}`);
  };

  return (
    <div className="relative" ref={searchRef}>
      {/* Search Input */}
      <div className="relative">
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
          <svg
            className="w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        <input
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          placeholder="Search by symbol or company name"
          className={`w-full h-14 pl-12 pr-12 bg-gray-800 border-2 rounded-lg text-white placeholder-gray-400 focus:outline-none transition-colors ${
            isFocused ? "border-yellow-500" : "border-gray-700"
          }`}
        />

        {searchQuery && (
          <button
            onClick={handleClearSearch}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
      </div>

      {/* Dropdown Results */}
      {isDropdownOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-gray-800 border border-gray-700 rounded-lg shadow-lg z-50">
          <div className="p-4">
            <div className="text-sm font-medium text-gray-400 mb-3">
              Popular Stocks ({filteredStocks.length})
            </div>

            <div className="space-y-2">
              {filteredStocks.map((stock, index) => (
                <Link
                  key={index}
                  href={`/stock/${stock.symbol}`}
                  onClick={() => handleStockClick(stock.symbol)}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer"
                >
                  {/* Trend Icon */}
                  <div className="w-6 h-6 flex items-center justify-center">
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
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      />
                    </svg>
                  </div>

                  {/* Stock Info */}
                  <div className="flex-1">
                    <div className="font-medium text-white">{stock.name}</div>
                    <div className="text-sm text-gray-400">
                      {stock.symbol} • {stock.exchange} • {stock.industry}
                    </div>
                  </div>

                  {/* Star Icon */}
                  <button
                    onClick={(e) => toggleFavorite(stock.symbol, e)}
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
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
