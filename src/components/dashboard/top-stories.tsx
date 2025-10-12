"use client";

import { Card, CardContent } from "@/components/ui/card";

export function TopStories() {
  const stories = [
    {
      title:
        "EUR/USD: Euro Rally Cools Off After Powell's Speech Knocked the Dollar — Rate Cuts Coming?",
      time: "yesterday",
      icon: "🇪🇺🇺🇸",
    },
    {
      title:
        "ETH/USD: Ether Hits Record Near $5,000 but Traders Chicken Out — Wild 7% Drop Appears",
      time: "yesterday",
      icon: "₿",
    },
    {
      title:
        "SPX: S&P 500 Futures Dip After Powell's Speech Pumped Stocks Friday. Next Up — Nvidia Earnings",
      time: "yesterday",
      icon: "500",
    },
    {
      title:
        "GBP/USD: Sterling Drops 1.5% After Hitting Resistance at Double Top. What's Next?",
      time: "3 days ago",
      icon: "🇬🇧🇺🇸",
    },
    {
      title:
        "LCID: Lucid Stock Too Cheap? It's Getting Ten Times More Expensive — Here's Why",
      time: "3 days ago",
      icon: "L",
    },
    {
      title: "GOOGL: Alphabet Stock Ticks Up as Google Strikes $10",
      time: "3 days ago",
      icon: "G",
    },
  ];

  return (
    <div className="bg-gray-900 p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-white">Top Stories</h2>
        <button className="text-gray-400 hover:text-yellow-400 transition-colors">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
            <path
              fillRule="evenodd"
              d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      <div className="space-y-4 max-h-96 overflow-y-auto scrollbar-hide">
        {stories.map((story, index) => (
          <Card
            key={index}
            className="bg-gray-800 border-gray-700 hover:bg-gray-700 transition-colors cursor-pointer"
          >
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-bold">{story.icon}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm text-gray-400 mb-1">{story.time}</div>
                  <h3 className="text-sm text-white leading-relaxed line-clamp-2">
                    {story.title}
                  </h3>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
