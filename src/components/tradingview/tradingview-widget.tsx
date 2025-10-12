"use client";

import React, { useEffect, useRef, memo } from "react";

interface TradingViewWidgetProps {
  symbol?: string;
  height?: string;
  width?: string;
}

function TradingViewWidget({
  symbol = "SPXUSD",
  height = "100%",
  width = "100%",
}: TradingViewWidgetProps) {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!container.current) return;

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
      {
        "autosize": true,
        "symbol": "${symbol}",
        "interval": "D",
        "timezone": "Etc/UTC",
        "theme": "dark",
        "style": "1",
        "locale": "en",
        "toolbar_bg": "#1e1e1e",
        "enable_publishing": false,
        "hide_top_toolbar": false,
        "hide_legend": false,
        "save_image": false,
        "container_id": "tradingview_widget",
        "hide_side_toolbar": true,
        "studies": [],
        "show_popup_button": true,
        "popup_width": "1000",
        "popup_height": "650",
        "allow_symbol_change": true,
        "details": true,
        "hotlist": true,
        "calendar": true,
        "hide_volume": false,
        "withdateranges": true,
        "range": "1Y",
        "watchlist": [
          "SPXUSD",
          "NSXUSD", 
          "DJI"
        ],
        "compareSymbols": [],
        "backgroundColor": "#0F0F0F",
        "gridColor": "rgba(242, 242, 242, 0.06)",
        "scalePosition": "right",
        "scaleMode": "Normal",
        "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
        "fontSize": "10",
        "noTimeScale": false,
        "valuescale": {
          "width": 50,
          "scaleMargins": {
            "top": 0.1,
            "bottom": 0.2
          }
        }
      }`;

    container.current.appendChild(script);

    // Cleanup function to remove script when component unmounts
    return () => {
      if (container.current && container.current.contains(script)) {
        container.current.removeChild(script);
      }
    };
  }, [symbol]);

  return (
    <div
      className="tradingview-widget-container"
      ref={container}
      style={{ height, width }}
    >
      <div
        className="tradingview-widget-container__widget"
        style={{ height: "calc(100% - 32px)", width: "100%" }}
      />
      <div className="tradingview-widget-copyright">
        <a
          href={`https://www.tradingview.com/symbols/${symbol.replace(
            ":",
            "-"
          )}/`}
          rel="noopener nofollow"
          target="_blank"
        >
          <span className="blue-text">{symbol} chart</span>
        </a>
        <span className="trademark"> by TradingView</span>
      </div>
    </div>
  );
}

export default memo(TradingViewWidget);
