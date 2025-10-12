import { DashboardHeader } from "@/components/layout/dashboard-header";
import TradingViewWidget from "@/components/tradingview/tradingview-widget";
import TradingViewHeatmap from "@/components/tradingview/tradingview-heatmap";
import { Watchlist } from "@/components/dashboard/watchlist";
import { TopStories } from "@/components/dashboard/top-stories";
import { MarketDataTable } from "@/components/dashboard/market-data-table";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <DashboardHeader />

      <div className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - TradingView Chart */}
          <div className="lg:col-span-1">
            <div className="bg-gray-900 rounded-lg overflow-hidden h-96 border border-gray-800">
              <TradingViewWidget symbol="SPXUSD" height="100%" width="100%" />
            </div>
          </div>

          {/* Center Column - TradingView Heatmap */}
          <div className="lg:col-span-1">
            <div className="bg-gray-900 rounded-lg overflow-hidden h-96 border border-gray-800">
              <TradingViewHeatmap height="100%" width="100%" />
            </div>
          </div>

          {/* Right Column - Watchlist & Top Stories */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800">
              <Watchlist />
            </div>
            <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800">
              <TopStories />
            </div>
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
