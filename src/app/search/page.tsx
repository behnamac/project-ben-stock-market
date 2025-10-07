import { DashboardHeader } from "@/components/layout/dashboard-header";
import { SearchBar } from "@/components/search/search-bar";
import { SearchResults } from "@/components/search/search-results";

export const metadata = {
  title: "Search - Signalist",
  description: "Search for stocks, companies, and financial instruments",
};

export default function SearchPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <DashboardHeader />

      <div className="p-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-4">
              Search Stocks
            </h1>
            <p className="text-gray-400">
              Find stocks, companies, and financial instruments
            </p>
          </div>

          <SearchBar />
          <SearchResults />
        </div>
      </div>
    </div>
  );
}
