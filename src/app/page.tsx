import { Header } from "@/components/layout/header";
import { StockCard } from "@/components/dashboard/stock-card";
import { LoginForm } from "@/components/auth/login-form";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  // Sample stock data
  const stocks = [
    {
      symbol: "AAPL",
      name: "Apple Inc.",
      price: 175.43,
      change: 2.15,
      changePercent: 1.24,
    },
    {
      symbol: "GOOGL",
      name: "Alphabet Inc.",
      price: 142.56,
      change: -1.23,
      changePercent: -0.86,
    },
    {
      symbol: "MSFT",
      name: "Microsoft Corporation",
      price: 378.85,
      change: 5.67,
      changePercent: 1.52,
    },
    {
      symbol: "TSLA",
      name: "Tesla, Inc.",
      price: 248.42,
      change: -3.21,
      changePercent: -1.27,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Stock Market Dashboard */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">
                Stock Market Dashboard
              </h1>
              <p className="text-muted-foreground">
                Track your favorite stocks and manage your portfolio
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {stocks.map((stock) => (
                <StockCard
                  key={stock.symbol}
                  symbol={stock.symbol}
                  name={stock.name}
                  price={stock.price}
                  change={stock.change}
                  changePercent={stock.changePercent}
                />
              ))}
            </div>
          </div>

          {/* Authentication Section */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Welcome to Stock Market App</CardTitle>
                <CardDescription>
                  Built with modern technologies for the best user experience
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Next.js 14</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                    <span>Tailwind CSS</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>MongoDB</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span>BetterAuth</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span>Inngest</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>TypeScript</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4">
              <LoginForm />
              <div className="text-center">
                <span className="text-gray-400">Don't have an account? </span>
                <Link
                  href="/signup"
                  className="text-yellow-400 hover:text-yellow-300 font-medium hover:underline transition-colors"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
