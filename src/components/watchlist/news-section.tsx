"use client";

import { Card, CardContent } from "@/components/ui/card";

export function NewsSection() {
  const newsArticles = [
    {
      id: 1,
      company: "GOOGL",
      companyName: "Alphabet",
      headline: "Alphabet's AI Performance Surpasses Expectations in Q3",
      source: "The Wall Street Journal",
      timeAgo: "12 minutes ago",
      description:
        "Alphabet Inc. reported stronger-than-expected AI revenue growth, driven by increased adoption of its cloud services and AI tools across enterprise clients.",
      badgeColor: "bg-blue-500",
    },
    {
      id: 2,
      company: "AAPL",
      companyName: "Apple",
      headline: "Apple Announces Major iPhone Redesign for 2025",
      source: "Bloomberg",
      timeAgo: "24 minutes ago",
      description:
        "Apple Inc. revealed plans for a complete iPhone redesign featuring advanced AI capabilities and enhanced camera systems for the 2025 lineup.",
      badgeColor: "bg-gray-500",
    },
    {
      id: 3,
      company: "TSLA",
      companyName: "Tesla",
      headline: "Tesla Unveils Affordable EV Model Starting at $25,000",
      source: "CNBC",
      timeAgo: "1 hour ago",
      description:
        "Tesla Inc. announced a new affordable electric vehicle model that will start at $25,000, targeting mass market adoption and competing with traditional automakers.",
      badgeColor: "bg-red-500",
    },
    {
      id: 4,
      company: "NVDA",
      companyName: "NVIDIA",
      headline: "NVIDIA Faces New Competition in AI Chip Market",
      source: "Reuters",
      timeAgo: "1 hour ago",
      description:
        "NVIDIA Corporation faces increasing competition from new entrants in the AI chip market, with several companies launching competitive alternatives to its flagship products.",
      badgeColor: "bg-green-500",
    },
    {
      id: 5,
      company: "MSFT",
      companyName: "Microsoft",
      headline: "Microsoft Integrates AI into Office 365 Suite",
      source: "The Verge",
      timeAgo: "2 hours ago",
      description:
        "Microsoft Corporation announced new AI-powered features for its Office 365 suite, including advanced writing assistance and automated data analysis tools.",
      badgeColor: "bg-blue-600",
    },
    {
      id: 6,
      company: "META",
      companyName: "Meta",
      headline: "Meta's VR Headset Sales Exceed 2 Million Units",
      source: "New York Times",
      timeAgo: "2 hours ago",
      description:
        "Meta Platforms Inc. reported strong sales of its latest VR headset, with over 2 million units sold in the first quarter, signaling growing consumer interest in virtual reality.",
      badgeColor: "bg-purple-500",
    },
    {
      id: 7,
      company: "AMZN",
      companyName: "Amazon",
      headline: "Amazon Expands Drone Delivery to 10 New Cities",
      source: "TechCrunch",
      timeAgo: "3 hours ago",
      description:
        "Amazon.com Inc. announced the expansion of its drone delivery service to 10 additional cities, bringing same-day delivery capabilities to millions more customers.",
      badgeColor: "bg-orange-500",
    },
    {
      id: 8,
      company: "TSLA",
      companyName: "Tesla",
      headline: "Tesla's Affordable EV Model Starting at $25,000",
      source: "CNBC",
      timeAgo: "3 hours ago",
      description:
        "Tesla Inc. announced a new affordable electric vehicle model that will start at $25,000, targeting mass market adoption and competing with traditional automakers in the affordable segment.",
      badgeColor: "bg-red-500",
    },
  ];

  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white">News</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {newsArticles.map((article) => (
          <Card
            key={article.id}
            className="bg-gray-700 border-gray-600 hover:bg-gray-600 transition-colors cursor-pointer"
          >
            <CardContent className="p-4">
              <div className="space-y-3">
                {/* Company Badge */}
                <div className="flex items-center gap-2">
                  <div
                    className={`w-8 h-6 ${article.badgeColor} rounded text-xs flex items-center justify-center text-white font-bold`}
                  >
                    {article.company}
                  </div>
                </div>

                {/* Headline */}
                <h3 className="font-bold text-white text-sm leading-tight">
                  {article.headline}
                </h3>

                {/* Source and Time */}
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span>{article.source}</span>
                  <span>{article.timeAgo}</span>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-xs leading-relaxed">
                  {article.description}
                </p>

                {/* Read More Link */}
                <div className="flex justify-end">
                  <span className="text-yellow-400 text-xs font-medium hover:text-yellow-300 transition-colors">
                    Read More →
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
