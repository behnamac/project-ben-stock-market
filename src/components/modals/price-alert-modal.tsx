"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface PriceAlertModalProps {
  isOpen: boolean;
  onClose: () => void;
  stockSymbol?: string;
  stockName?: string;
}

export function PriceAlertModal({
  isOpen,
  onClose,
  stockSymbol = "AAPL",
  stockName = "Apple Inc",
}: PriceAlertModalProps) {
  const [formData, setFormData] = useState({
    alertName: "Apple at Discount",
    stockIdentifier: `${stockName} (${stockSymbol})`,
    alertType: "Price",
    condition: "Greater than (>)",
    thresholdValue: "",
    frequency: "Once per day",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Creating alert:", formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-800 rounded-lg p-6 w-full max-w-md mx-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-white">Price Alert</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Alert Name */}
          <div>
            <Label
              htmlFor="alertName"
              className="text-gray-300 text-sm font-medium"
            >
              Alert Name
            </Label>
            <Input
              id="alertName"
              type="text"
              value={formData.alertName}
              onChange={(e) => handleInputChange("alertName", e.target.value)}
              className="mt-1 bg-gray-700 border-yellow-500 text-white placeholder-gray-400 focus:border-yellow-500 focus:ring-yellow-500"
              placeholder="Enter alert name"
            />
          </div>

          {/* Stock Identifier */}
          <div>
            <Label
              htmlFor="stockIdentifier"
              className="text-gray-300 text-sm font-medium"
            >
              Stock identifier
            </Label>
            <Input
              id="stockIdentifier"
              type="text"
              value={formData.stockIdentifier}
              onChange={(e) =>
                handleInputChange("stockIdentifier", e.target.value)
              }
              className="mt-1 bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-yellow-500 focus:ring-yellow-500"
              placeholder="Stock identifier"
            />
          </div>

          {/* Alert Type */}
          <div>
            <Label
              htmlFor="alertType"
              className="text-gray-300 text-sm font-medium"
            >
              Alert type
            </Label>
            <div className="relative mt-1">
              <select
                id="alertType"
                value={formData.alertType}
                onChange={(e) => handleInputChange("alertType", e.target.value)}
                className="w-full bg-gray-700 border-gray-600 text-white rounded-md px-3 py-2 pr-8 appearance-none focus:border-yellow-500 focus:ring-yellow-500"
              >
                <option value="Price">Price</option>
                <option value="Volume">Volume</option>
                <option value="Market Cap">Market Cap</option>
                <option value="P/E Ratio">P/E Ratio</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Condition */}
          <div>
            <Label
              htmlFor="condition"
              className="text-gray-300 text-sm font-medium"
            >
              Condition
            </Label>
            <div className="relative mt-1">
              <select
                id="condition"
                value={formData.condition}
                onChange={(e) => handleInputChange("condition", e.target.value)}
                className="w-full bg-gray-700 border-gray-600 text-white rounded-md px-3 py-2 pr-8 appearance-none focus:border-yellow-500 focus:ring-yellow-500"
              >
                <option value="Greater than (>)">Greater than (&gt;)</option>
                <option value="Less than (<)">Less than (&lt;)</option>
                <option value="Equal to (=)">Equal to (=)</option>
                <option value="Greater than or equal to (>=)">
                  Greater than or equal to (&gt;=)
                </option>
                <option value="Less than or equal to (<=)">
                  Less than or equal to (&lt;=)
                </option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Threshold Value */}
          <div>
            <Label
              htmlFor="thresholdValue"
              className="text-gray-300 text-sm font-medium"
            >
              Threshold value
            </Label>
            <div className="relative mt-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-400 text-sm">$</span>
              </div>
              <Input
                id="thresholdValue"
                type="text"
                value={formData.thresholdValue}
                onChange={(e) =>
                  handleInputChange("thresholdValue", e.target.value)
                }
                className="pl-8 bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-yellow-500 focus:ring-yellow-500"
                placeholder="eg: 140"
              />
            </div>
          </div>

          {/* Frequency */}
          <div>
            <Label
              htmlFor="frequency"
              className="text-gray-300 text-sm font-medium"
            >
              Frequency
            </Label>
            <div className="relative mt-1">
              <select
                id="frequency"
                value={formData.frequency}
                onChange={(e) => handleInputChange("frequency", e.target.value)}
                className="w-full bg-gray-700 border-gray-600 text-white rounded-md px-3 py-2 pr-8 appearance-none focus:border-yellow-500 focus:ring-yellow-500"
              >
                <option value="Once per minute">Once per minute</option>
                <option value="Once per hour">Once per hour</option>
                <option value="Once per day">Once per day</option>
                <option value="Once per week">Once per week</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <Button
              type="submit"
              className="w-full yellow-btn text-black font-medium py-3"
            >
              Create Alert
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
