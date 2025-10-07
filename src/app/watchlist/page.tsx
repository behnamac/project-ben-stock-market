import { DashboardHeader } from "@/components/layout/dashboard-header";
import { WatchlistTable } from "@/components/watchlist/watchlist-table";
import { AlertsSection } from "@/components/watchlist/alerts-section";
import { NewsSection } from "@/components/watchlist/news-section";

export const metadata = {
  title: "Watchlist - Signalist",
  description: "Track your favorite stocks and set up alerts",
};

export default function WatchlistPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <DashboardHeader />

      <div className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Watchlist Section */}
          <div>
            <WatchlistTable />
          </div>

          {/* Alerts Section */}
          <div>
            <AlertsSection />
          </div>
        </div>

        {/* News Section */}
        <div>
          <NewsSection />
        </div>
      </div>
    </div>
  );
}
