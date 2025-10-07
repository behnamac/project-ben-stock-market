"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function AlertsSection() {
  const [alerts, setAlerts] = useState([
    {
      id: 1,
      symbol: "AAPL",
      name: "Apple Inc.",
      logo: "🍎",
      price: "$233.16",
      change: "+1.54%",
      isPositive: true,
      condition: "Price > $240.60",
      frequency: "Once per day",
    },
    {
      id: 2,
      symbol: "TSLA",
      name: "Tesla, Inc.",
      logo: "⚡",
      price: "$339.62",
      change: "-1.23%",
      isPositive: false,
      condition: "Price = $300.80",
      frequency: "Once per minute",
    },
    {
      id: 3,
      symbol: "TSLA",
      name: "Tesla, Inc.",
      logo: "⚡",
      price: "$339.62",
      change: "-1.23%",
      isPositive: false,
      condition: "Price < $700.40",
      frequency: "Once per hour",
    },
    {
      id: 4,
      symbol: "META",
      name: "Meta Platforms Inc.",
      logo: "📘",
      price: "$762.96",
      change: "+3.45%",
      isPositive: true,
      condition: "Price > $540.13",
      frequency: "Once per day",
    },
    {
      id: 5,
      symbol: "MSFT",
      name: "Microsoft Corporation",
      logo: "🪟",
      price: "$520.42",
      change: "-0.24%",
      isPositive: false,
      condition: "Price > $600.00",
      frequency: "Once per day",
    },
  ]);

  const deleteAlert = (id: number) => {
    setAlerts((prev) => prev.filter((alert) => alert.id !== id));
  };

  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white">Alerts</h2>
        <Button className="yellow-btn">Create Alert</Button>
      </div>

      <div className="space-y-4">
        {alerts.map((alert) => (
          <Card key={alert.id} className="bg-gray-700 border-gray-600">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {/* Company Logo */}
                  <div className="w-12 h-12 bg-gray-600 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">{alert.logo}</span>
                  </div>

                  {/* Company Info */}
                  <div>
                    <div className="font-medium text-white">{alert.name}</div>
                    <div className="text-sm text-gray-400">{alert.symbol}</div>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-white font-medium">
                        {alert.price}
                      </span>
                      <span
                        className={`text-sm ${
                          alert.isPositive ? "text-green-400" : "text-red-400"
                        }`}
                      >
                        {alert.change}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Alert Details */}
                <div className="text-right">
                  <div className="text-sm text-gray-300 mb-1">
                    {alert.condition}
                  </div>
                  <div className="text-xs text-gray-400">{alert.frequency}</div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-2">
                  <button className="text-gray-400 hover:text-yellow-400 transition-colors">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={() => deleteAlert(alert.id)}
                    className="text-gray-400 hover:text-red-400 transition-colors"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
