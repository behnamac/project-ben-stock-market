import { DashboardHeader } from "@/components/layout/dashboard-header";
import { MarketSummary } from "@/components/dashboard/market-summary";
import { StockHeatmap } from "@/components/dashboard/stock-heatmap";
import { Watchlist } from "@/components/dashboard/watchlist";
import { TopStories } from "@/components/dashboard/top-stories";
import { MarketDataTable } from "@/components/dashboard/market-data-table";

export const metadata = {
  title: "Dashboard - Signalist",
  description:
    "Your personalized stock market dashboard with real-time data and insights",
};

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <DashboardHeader />

      <div className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Market Summary */}
          <div className="lg:col-span-1">
            <MarketSummary />
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
