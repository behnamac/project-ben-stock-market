"use client";

interface StockProfileProps {
  symbol: string;
}

export function StockProfile({ symbol }: StockProfileProps) {
  // Mock company data
  const companyData = {
    sector: "Electronic Technology",
    industry: "Telecommunications Equipment",
    employees: "164K",
    description: `Apple Inc. designs, manufactures, and markets smartphones, personal computers, tablets, wearables and accessories, and a variety of related services. The Company's products include iPhone, Mac, iPad, AirPods, Apple TV, Apple Watch, Beats products, Apple Care, iCloud, digital content stores, streaming, and licensing services. The Company's geographic segments include the Americas, Europe, Greater China, Japan, and Rest of Asia Pacific. The Americas segment includes North and South America. The Europe segment consists of European countries, as well as India, the Middle East, and Africa. The Greater China segment comprises of China, Hong Kong, and Taiwan. The Rest of Asia Pacific segment includes Australia and Asian countries. The company was founded by Steven Paul Jobs, Ronald Gerald Wayne, and Stephen G. Wozniak in 1976 and is headquartered in Cupertino, CA.`,
  };

  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-white">
          <span className="text-blue-400">{symbol}</span> Profile
        </h2>
        <div className="w-6 h-6 bg-gray-600 rounded flex items-center justify-center">
          <span className="text-white text-xs font-bold">T7</span>
        </div>
      </div>

      {/* Company Overview */}
      <div className="space-y-3 mb-6">
        <div>
          <span className="text-gray-400 font-medium">Sector: </span>
          <span className="text-white">{companyData.sector}</span>
        </div>
        <div>
          <span className="text-gray-400 font-medium">Industry: </span>
          <span className="text-white">{companyData.industry}</span>
        </div>
        <div>
          <span className="text-gray-400 font-medium">Employees (FY): </span>
          <span className="text-white">{companyData.employees}</span>
        </div>
      </div>

      {/* Company Description */}
      <div>
        <h3 className="text-lg font-semibold text-white mb-3">
          Company Description
        </h3>
        <p className="text-gray-300 leading-relaxed text-sm">
          {companyData.description}
        </p>
      </div>
    </div>
  );
}
