"use client";

import { useState } from "react";

export function MarketDataTable() {
  const [activeSection, setActiveSection] = useState("INDICES");

  const sections = [
    {
      name: "INDICES",
      data: [
        {
          name: "S&P 500 Index",
          value: "6,432.5",
          change: "-11.10",
          changePercent: "-0.17%",
          open: "6,443.6",
          high: "6,448.0",
          low: "6,415.0",
          prev: "6,443.6",
          positive: false,
          icon: "500",
          iconColor: "bg-red-500",
        },
        {
          name: "US 100 Cash CFD",
          value: "23,392.2",
          change: "-42.40",
          changePercent: "-0.18%",
          open: "23,434.6",
          high: "23,454.9",
          low: "23,306.4",
          prev: "23,434.6",
          positive: false,
          icon: "100",
          iconColor: "bg-blue-500",
        },
        {
          name: "Dow Jones Industrial Average Index",
          value: "45,226.4",
          change: "-95.30",
          changePercent: "-0.21%",
          open: "45,321.7",
          high: "45,352.4",
          low: "45,130.9",
          prev: "45,321.7",
          positive: false,
          icon: "30",
          iconColor: "bg-blue-500",
        },
        {
          name: "Japan 225",
          value: "42,807.29",
          change: "174.53",
          changePercent: "0.41%",
          open: "42,977.27",
          high: "43,201.42",
          low: "42,681.37",
          prev: "42,633.29",
          positive: true,
          icon: "225",
          iconColor: "bg-blue-500",
        },
        {
          name: "DAX Index",
          value: "24,273.12",
          change: "-89.97",
          changePercent: "-0.37%",
          open: "24,232.02",
          high: "24,377.38",
          low: "24,224.15",
          prev: "24,363.09",
          positive: false,
          icon: "X",
          iconColor: "bg-blue-500",
        },
        {
          name: "FTSE 100 Index",
          value: "9,282.1",
          change: "-34.80",
          changePercent: "-0.37%",
          open: "9,316.9",
          high: "9,333.3",
          low: "9,281.8",
          prev: "9,316.9",
          positive: false,
          icon: "100",
          iconColor: "bg-red-500",
        },
      ],
    },
    {
      name: "FUTURES",
      data: [
        {
          name: "S&P 500",
          value: "6,458.25",
          change: "-25.75",
          changePercent: "-0.40%",
          open: "6,464.75",
          high: "6,484.00",
          low: "6,455.25",
          prev: "6,484.00",
          positive: false,
          icon: "500",
          iconColor: "bg-red-500",
        },
        {
          name: "Euro",
          value: "6,330.7",
          change: "-72.6",
          changePercent: "-1.13%",
          open: "6,330.7",
          high: "6,330.7",
          low: "6,330.7",
          prev: "6,403.3",
          positive: false,
          icon: "€",
          iconColor: "bg-blue-500",
        },
        {
          name: "Gold",
          value: "3,377.35",
          change: "11.63",
          changePercent: "0.35%",
          open: "3,365.86",
          high: "3,386.61",
          low: "3,351.35",
          prev: "3,365.72",
          positive: true,
          icon: "🥇",
          iconColor: "bg-yellow-500",
        },
        {
          name: "WTI Crude Oil",
          value: "65.54232",
          change: "-1.81272",
          changePercent: "-2.69%",
          open: "67.35504",
          high: "67.49504",
          low: "65.03455",
          prev: "67.35504",
          positive: false,
          icon: "🛢️",
          iconColor: "bg-black",
        },
        {
          name: "Corn",
          value: "66.11",
          change: "0.12",
          changePercent: "0.18%",
          open: "66.00",
          high: "66.20",
          low: "65.91",
          prev: "65.99",
          positive: true,
          icon: "🌽",
          iconColor: "bg-yellow-500",
        },
      ],
    },
    {
      name: "BONDS",
      data: [
        {
          name: "Euro Bund",
          value: "128.99",
          change: "-0.45",
          changePercent: "-0.35%",
          open: "129.28",
          high: "129.31",
          low: "128.84",
          prev: "129.44",
          positive: false,
          icon: "€",
          iconColor: "bg-blue-500",
        },
      ],
    },
  ];

  const currentSection = sections.find(
    (section) => section.name === activeSection
  );

  return (
    <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
      <div className="flex gap-4 mb-6">
        {sections.map((section) => (
          <button
            key={section.name}
            onClick={() => setActiveSection(section.name)}
            className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
              activeSection === section.name
                ? "bg-yellow-500 text-black"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            {section.name}
          </button>
        ))}
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="text-left p-3 text-sm font-medium text-gray-300">
                Name
              </th>
              <th className="text-left p-3 text-sm font-medium text-gray-300">
                Value
              </th>
              <th className="text-left p-3 text-sm font-medium text-gray-300">
                Change
              </th>
              <th className="text-left p-3 text-sm font-medium text-gray-300">
                Chg%
              </th>
              <th className="text-left p-3 text-sm font-medium text-gray-300">
                Open
              </th>
              <th className="text-left p-3 text-sm font-medium text-gray-300">
                High
              </th>
              <th className="text-left p-3 text-sm font-medium text-gray-300">
                Low
              </th>
              <th className="text-left p-3 text-sm font-medium text-gray-300">
                Prev
              </th>
            </tr>
          </thead>
          <tbody>
            {currentSection?.data.map((item, index) => (
              <tr
                key={index}
                className="border-b border-gray-700 hover:bg-gray-800/50"
              >
                <td className="p-3">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-6 h-6 ${item.iconColor} rounded-full flex items-center justify-center`}
                    >
                      <span className="text-white text-xs font-bold">
                        {item.icon}
                      </span>
                    </div>
                    <span className="font-medium text-white">{item.name}</span>
                  </div>
                </td>
                <td className="p-3 font-bold text-white">{item.value}</td>
                <td
                  className={`p-3 font-medium ${
                    item.positive ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {item.change}
                </td>
                <td
                  className={`p-3 font-medium ${
                    item.positive ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {item.changePercent}
                </td>
                <td className="p-3 text-gray-400">{item.open}</td>
                <td className="p-3 text-gray-400">{item.high}</td>
                <td className="p-3 text-gray-400">{item.low}</td>
                <td className="p-3 text-gray-400">{item.prev}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
