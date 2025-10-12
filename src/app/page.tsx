import { DashboardHeader } from "@/components/layout/dashboard-header";
import TradingViewWidget from "@/components/tradingview/tradingview-widget";
import { StockHeatmap } from "@/components/dashboard/stock-heatmap";
import { Watchlist } from "@/components/dashboard/watchlist";
import { TopStories } from "@/components/dashboard/top-stories";
import { MarketDataTable } from "@/components/dashboard/market-data-table";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      <DashboardHeader />

      <div className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - TradingView Chart */}
          <div className="lg:col-span-1">
            <div className="bg-gray-800 rounded-lg p-6 h-96">
              <TradingViewWidget
                symbol="NASDAQ:AAPL"
                height="100%"
                width="100%"
              />
            </div>
          </div>

          {/* Center Column - Stock Heatmap */}
          <div className="lg:col-span-1">
            <StockHeatmap />
          </div>

          {/* Right Column - Watchlist & Top Stories */}
          <div className="lg:col-span-1 space-y-6">
            <Watchlist />
            <TopStories />
          </div>
        </div>

        {/* Bottom Section - Market Data Table */}
        <div className="mt-6">
          <MarketDataTable />
        </div>
      </div>
    </div>
  );
}
