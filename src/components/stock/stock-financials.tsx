"use client";

interface StockFinancialsProps {
  symbol: string;
}

export function StockFinancials({ symbol }: StockFinancialsProps) {
  // Mock financial data
  const financialData = {
    fiscalYearEnd: "2024-09-30",
    lastFiscalPeriod: "2025-Q3",
    lastFiscalPeriodEnd: "2025-06-30",

    // Valuation
    marketCap: "3.37 T",
    enterpriseValue: "3.42 T",
    enterpriseValueEBITDA: "24.12",
    peRatio: "34.62",
    psRatio: "8.33",
    pbRatio: "51.40",
    pcfRatio: "31.36",
    pfcfRatio: "35.40",

    // Cash Flow
    operatingCashFlow: "108.56 B",
    investingCashFlow: "19.23 B",
    financingCashFlow: "-118.16 B",
    freeCashFlow: "96.18 B",
    capex: "-12.38 B",

    // Profitability
    grossMargin: "46.68%",
    operatingMargin: "31.87%",
    pretaxMargin: "31.70%",
    netMargin: "24.30%",

    // Efficiency
    returnOnAssets: "29.94%",
    returnOnEquity: "149.81%",

    // Income Statement
    totalRevenue: "408.63 B",
  };

  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-white">
          <span className="text-blue-400">{symbol}</span> Financials
        </h2>
        <div className="w-6 h-6 bg-gray-600 rounded flex items-center justify-center">
          <span className="text-white text-xs font-bold">T7</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Fiscal Dates */}
          <div>
            <h3 className="text-sm font-medium text-gray-400 mb-3">
              Fiscal Dates
            </h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-300 text-sm">Fiscal year end</span>
                <span className="text-white text-sm">
                  {financialData.fiscalYearEnd}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300 text-sm">
                  Last fiscal period
                </span>
                <span className="text-white text-sm">
                  {financialData.lastFiscalPeriod}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300 text-sm">
                  Last fiscal period end
                </span>
                <span className="text-white text-sm">
                  {financialData.lastFiscalPeriodEnd}
                </span>
              </div>
            </div>
          </div>

          {/* Valuation */}
          <div>
            <h3 className="text-sm font-medium text-gray-400 mb-3">
              Valuation
            </h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-300 text-sm">
                  Market capitalization
                </span>
                <span className="text-white text-sm">
                  {financialData.marketCap}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300 text-sm">Enterprise value</span>
                <span className="text-white text-sm">
                  {financialData.enterpriseValue}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300 text-sm">
                  Enterprise value/EBITDA
                </span>
                <span className="text-white text-sm">
                  {financialData.enterpriseValueEBITDA}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300 text-sm">P/E ratio</span>
                <span className="text-white text-sm">
                  {financialData.peRatio}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300 text-sm">P/S ratio</span>
                <span className="text-white text-sm">
                  {financialData.psRatio}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300 text-sm">P/B ratio</span>
                <span className="text-white text-sm">
                  {financialData.pbRatio}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300 text-sm">P/CF ratio</span>
                <span className="text-white text-sm">
                  {financialData.pcfRatio}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300 text-sm">P/FCF ratio</span>
                <span className="text-white text-sm">
                  {financialData.pfcfRatio}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Cash Flow */}
          <div>
            <h3 className="text-sm font-medium text-gray-400 mb-3">
              Cash Flow
            </h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-300 text-sm">
                  Operating cash flow
                </span>
                <span className="text-white text-sm">
                  {financialData.operatingCashFlow}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300 text-sm">
                  Investing cash flow
                </span>
                <span className="text-white text-sm">
                  {financialData.investingCashFlow}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300 text-sm">
                  Financing cash flow
                </span>
                <span className="text-white text-sm">
                  {financialData.financingCashFlow}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300 text-sm">
                  Free cash flow (TTM)
                </span>
                <span className="text-white text-sm">
                  {financialData.freeCashFlow}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300 text-sm">CapEx (TTM)</span>
                <span className="text-white text-sm">
                  {financialData.capex}
                </span>
              </div>
            </div>
          </div>

          {/* Profitability */}
          <div>
            <h3 className="text-sm font-medium text-gray-400 mb-3">
              Profitability
            </h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-300 text-sm">
                  Gross margin (TTM)
                </span>
                <span className="text-white text-sm">
                  {financialData.grossMargin}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300 text-sm">
                  Operating margin (TTM)
                </span>
                <span className="text-white text-sm">
                  {financialData.operatingMargin}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300 text-sm">
                  Pretax margin (TTM)
                </span>
                <span className="text-white text-sm">
                  {financialData.pretaxMargin}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300 text-sm">Net margin (TTM)</span>
                <span className="text-white text-sm">
                  {financialData.netMargin}
                </span>
              </div>
            </div>
          </div>

          {/* Efficiency */}
          <div>
            <h3 className="text-sm font-medium text-gray-400 mb-3">
              Efficiency
            </h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-300 text-sm">
                  Return on assets (TTM)
                </span>
                <span className="text-white text-sm">
                  {financialData.returnOnAssets}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300 text-sm">
                  Return on equity (TTM)
                </span>
                <span className="text-white text-sm">
                  {financialData.returnOnEquity}
                </span>
              </div>
            </div>
          </div>

          {/* Income Statement */}
          <div>
            <h3 className="text-sm font-medium text-gray-400 mb-3">
              Income Statement
            </h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-300 text-sm">
                  Total revenue (TTM)
                </span>
                <span className="text-white text-sm">
                  {financialData.totalRevenue}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
