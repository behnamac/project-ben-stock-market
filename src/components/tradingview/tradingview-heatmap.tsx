"use client";

import React, { useEffect, useRef, memo } from "react";

interface TradingViewHeatmapProps {
  height?: string;
  width?: string;
  market?: string;
}

function TradingViewHeatmap({
  height = "100%",
  width = "100%",
  market = "US",
}: TradingViewHeatmapProps) {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!container.current) return;

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-stock-heatmap.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
      {
        "exchanges": [],
        "dataSource": "SPX500",
        "grouping": "sector",
        "blockSize": "market_cap_calc",
        "blockColor": "change",
        "locale": "en",
        "symbolUrl": "",
        "colorTheme": "dark",
        "hasTopBar": true,
        "isDataSetEnabled": true,
        "isZoomEnabled": true,
        "hasSymbolTooltip": true,
        "width": "100%",
        "height": "100%"
      }`;

    container.current.appendChild(script);

    // Cleanup function to remove script when component unmounts
    return () => {
      if (container.current && container.current.contains(script)) {
        container.current.removeChild(script);
      }
    };
  }, [market]);

  return (
    <div
      className="tradingview-heatmap-container"
      ref={container}
      style={{ height, width }}
    >
      <div
        className="tradingview-heatmap-container__widget"
        style={{ height: "calc(100% - 32px)", width: "100%" }}
      />
      <div className="tradingview-widget-copyright">
        <a
          href="https://www.tradingview.com/markets/stocks-usa/heatmap/"
          rel="noopener nofollow"
          target="_blank"
        >
          <span className="blue-text">Stock Heatmap</span>
        </a>
        <span className="trademark"> by TradingView</span>
      </div>
    </div>
  );
}

export default memo(TradingViewHeatmap);
