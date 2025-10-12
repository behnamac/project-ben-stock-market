import { DashboardHeader } from "@/components/layout/dashboard-header";
import { StockHeader } from "@/components/stock/stock-header";
import TradingViewWidget from "@/components/tradingview/tradingview-widget";
import { TechnicalAnalysis } from "@/components/stock/technical-analysis";
import { StockProfile } from "@/components/stock/stock-profile";
import { StockFinancials } from "@/components/stock/stock-financials";

interface StockPageProps {
  params: {
    symbol: string;
  };
}

export default function StockPage({ params }: StockPageProps) {
  const { symbol } = params;

  return (
    <div className="min-h-screen bg-gray-900">
      <DashboardHeader />

      <div className="p-6">
        {/* Stock Header */}
        <StockHeader symbol={symbol} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          {/* Left Column - TradingView Chart */}
          <div className="lg:col-span-2">
            <div className="bg-gray-800 rounded-lg p-6 h-96">
              <TradingViewWidget
                symbol={`NASDAQ:${symbol}`}
                height="100%"
                width="100%"
              />
            </div>
          </div>

          {/* Right Column - Analysis & Info */}
          <div className="lg:col-span-1 space-y-6">
            <TechnicalAnalysis symbol={symbol} />
            <StockProfile symbol={symbol} />
            <StockFinancials symbol={symbol} />
          </div>
        </div>
      </div>
    </div>
  );
}
