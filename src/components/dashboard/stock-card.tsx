"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface StockCardProps {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
}

export function StockCard({
  symbol,
  name,
  price,
  change,
  changePercent,
}: StockCardProps) {
  const isPositive = change >= 0;

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{symbol}</CardTitle>
        <Badge variant={isPositive ? "default" : "destructive"}>
          {isPositive ? "+" : ""}
          {changePercent.toFixed(2)}%
        </Badge>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">${price.toFixed(2)}</div>
        <p className="text-xs text-muted-foreground">{name}</p>
        <div
          className={`text-sm ${
            isPositive ? "text-green-600" : "text-red-600"
          }`}
        >
          {isPositive ? "+" : ""}${change.toFixed(2)}
        </div>
      </CardContent>
    </Card>
  );
}
