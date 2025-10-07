import { Inngest } from "inngest";

// Create a client to send and receive events
export const inngest = new Inngest({
  id: "stock-market-app",
  name: "Stock Market App",
  eventKey: process.env.INNGEST_EVENT_KEY,
});

// Define events that can be sent
export const events = {
  "user/registered": {
    name: "User Registered",
    data: {
      userId: "string",
      email: "string",
      firstName: "string",
      lastName: "string",
    },
  },
  "stock/price-updated": {
    name: "Stock Price Updated",
    data: {
      symbol: "string",
      price: "number",
      change: "number",
      changePercent: "number",
    },
  },
  "portfolio/analyzed": {
    name: "Portfolio Analyzed",
    data: {
      userId: "string",
      portfolioId: "string",
      analysis: "object",
    },
  },
} as const;
