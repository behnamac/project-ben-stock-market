"use client";

export function StockHeatmap() {
  const sectors = [
    {
      name: "Electronic Technology",
      stocks: [
        { symbol: "NVDA", change: 1.02, positive: true, size: "large" },
        { symbol: "AAPL", change: -0.26, positive: false, size: "large" },
        { symbol: "AVGO", change: 0.08, positive: true, size: "medium" },
        { symbol: "GE", change: -0.45, positive: false, size: "small" },
        { symbol: "CSCO", change: -0.32, positive: false, size: "small" },
        { symbol: "AMD", change: -0.18, positive: false, size: "small" },
        { symbol: "INTC", change: -0.25, positive: false, size: "small" },
        { symbol: "QCOM", change: -0.15, positive: false, size: "small" },
      ],
    },
    {
      name: "Finance",
      stocks: [
        { symbol: "BRK.B", change: -0.58, positive: false, size: "large" },
        { symbol: "MA", change: -0.96, positive: false, size: "medium" },
        { symbol: "JPM", change: -0.45, positive: false, size: "medium" },
        { symbol: "BAC", change: 0.0, positive: true, size: "medium" },
        { symbol: "V", change: -0.35, positive: false, size: "medium" },
        { symbol: "MS", change: -0.28, positive: false, size: "small" },
        { symbol: "GS", change: -0.42, positive: false, size: "small" },
        { symbol: "AXP", change: -0.31, positive: false, size: "small" },
        { symbol: "C", change: -0.38, positive: false, size: "small" },
        { symbol: "PYPL", change: -0.22, positive: false, size: "small" },
        { symbol: "WFC", change: -0.19, positive: false, size: "small" },
      ],
    },
    {
      name: "Retail Trade",
      stocks: [
        { symbol: "AMZN", change: -0.39, positive: false, size: "large" },
        { symbol: "COST", change: -1.77, positive: false, size: "medium" },
        { symbol: "WMT", change: -0.78, positive: false, size: "medium" },
        { symbol: "TJX", change: -0.25, positive: false, size: "small" },
        { symbol: "TGT", change: -0.33, positive: false, size: "small" },
      ],
    },
    {
      name: "Technology Services",
      stocks: [
        { symbol: "MSFT", change: -0.59, positive: false, size: "large" },
        { symbol: "GOOGL", change: 1.16, positive: true, size: "large" },
        { symbol: "META", change: -0.2, positive: false, size: "large" },
        { symbol: "ORCL", change: -0.41, positive: false, size: "medium" },
        { symbol: "NFLX", change: 1.11, positive: true, size: "medium" },
        { symbol: "CRM", change: -0.28, positive: false, size: "small" },
        { symbol: "ADBE", change: -0.35, positive: false, size: "small" },
        { symbol: "NOW", change: -0.22, positive: false, size: "small" },
      ],
    },
    {
      name: "Health Technology",
      stocks: [
        { symbol: "LLY", change: -2.3, positive: false, size: "medium" },
        { symbol: "JNJ", change: -0.49, positive: false, size: "medium" },
        { symbol: "ABBV", change: -0.32, positive: false, size: "small" },
        { symbol: "ABT", change: -0.18, positive: false, size: "small" },
      ],
    },
    {
      name: "Producer Manufacturing",
      stocks: [
        { symbol: "CAT", change: 0.15, positive: true, size: "medium" },
        { symbol: "MMM", change: -0.25, positive: false, size: "small" },
        { symbol: "HON", change: 0.08, positive: true, size: "small" },
      ],
    },
    {
      name: "Consumer Durables",
      stocks: [
        { symbol: "TSLA", change: 1.94, positive: true, size: "large" },
        { symbol: "F", change: -0.22, positive: false, size: "small" },
        { symbol: "GM", change: 0.12, positive: true, size: "small" },
      ],
    },
    {
      name: "Energy Minerals",
      stocks: [
        { symbol: "XOM", change: 0.41, positive: true, size: "medium" },
        { symbol: "CVX", change: -0.15, positive: false, size: "small" },
      ],
    },
  ];

  const getSizeClass = (size: string) => {
    switch (size) {
      case "large":
        return "w-16 h-16";
      case "medium":
        return "w-12 h-12";
      case "small":
        return "w-8 h-8";
      default:
        return "w-8 h-8";
    }
  };

  const getColorClass = (change: number) => {
    if (change > 0) return "bg-green-500";
    if (change < 0) return "bg-red-500";
    return "bg-gray-500";
  };

  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <h2 className="text-xl font-bold text-white mb-4">Stock Heatmap</h2>

      <div className="space-y-6">
        {sectors.map((sector, sectorIndex) => (
          <div key={sectorIndex}>
            <h3 className="text-sm font-medium text-gray-400 mb-3">
              {sector.name}
            </h3>
            <div className="flex flex-wrap gap-2">
              {sector.stocks.map((stock, stockIndex) => (
                <div
                  key={stockIndex}
                  className={`${getSizeClass(stock.size)} ${getColorClass(
                    stock.change
                  )} rounded flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity`}
                  title={`${stock.symbol}: ${stock.change > 0 ? "+" : ""}${
                    stock.change
                  }%`}
                >
                  <span className="text-white text-xs font-bold">
                    {stock.symbol}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="mt-6 pt-4 border-t border-gray-700">
        <div className="flex items-center justify-between text-sm text-gray-400">
          <span>3%</span>
          <div className="flex-1 mx-4 h-2 bg-gradient-to-r from-green-500 via-gray-500 to-red-500 rounded"></div>
          <span>-3%</span>
        </div>
        <div className="text-center text-xs text-gray-500 mt-1">
          Performance Scale
        </div>
      </div>
    </div>
  );
}
