import { Header } from "@/components/layout/header";
import { DashboardPreview } from "@/components/dashboard/dashboard-preview";

export const metadata = {
  title: "Dashboard - Signalist",
  description: "Your personalized stock market dashboard",
};

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">
            Welcome to Signalist
          </h1>
          <p className="text-gray-400">
            Your personalized stock market dashboard with real-time data and
            insights
          </p>
        </div>
        <DashboardPreview />
      </main>
    </div>
  );
}
