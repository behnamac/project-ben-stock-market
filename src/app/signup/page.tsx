"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    fullName: "Adrian Hajdin",
    email: "",
    country: "Australia",
    password: "",
    investmentGoals: "Growth",
    riskTolerance: "",
    preferredIndustry: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate with auth system
    console.log("Form submitted:", formData);
    // For now, redirect to dashboard
    window.location.href = "/dashboard";
  };

  const countries = [
    { name: "Australia", flag: "🇦🇺" },
    { name: "United States", flag: "🇺🇸" },
    { name: "United Kingdom", flag: "🇬🇧" },
    { name: "Canada", flag: "🇨🇦" },
    { name: "Germany", flag: "🇩🇪" },
    { name: "France", flag: "🇫🇷" },
    { name: "Japan", flag: "🇯🇵" },
    { name: "Singapore", flag: "🇸🇬" },
  ];

  const investmentGoals = ["Growth", "Income", "Balanced", "Conservative"];
  const riskTolerance = ["Low", "Medium", "High", "Very High"];
  const industries = [
    "Technology",
    "Healthcare",
    "Finance",
    "Energy",
    "Consumer",
    "Industrial",
  ];

  return (
    <div className="auth-layout">
      {/* Left Section - Sign Up Form */}
      <div className="auth-left-section">
        <div className="auth-logo">
          <div className="flex items-center gap-3 mb-8">
            <Image
              src="/assets/images/logo.png"
              alt="Signalist"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <span className="text-2xl font-bold text-white">Signalist</span>
          </div>
          <h1 className="form-title">Sign Up & Personalize</h1>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Full Name */}
          <div className="space-y-2">
            <Label htmlFor="fullName" className="form-label">
              Full Name
            </Label>
            <Input
              id="fullName"
              type="text"
              value={formData.fullName}
              onChange={(e) => handleInputChange("fullName", e.target.value)}
              className="form-input"
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email" className="form-label">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className="form-input"
            />
          </div>

          {/* Country */}
          <div className="space-y-2">
            <Label htmlFor="country" className="form-label">
              Country
            </Label>
            <div className="relative">
              <select
                id="country"
                value={formData.country}
                onChange={(e) => handleInputChange("country", e.target.value)}
                className="country-select-trigger"
              >
                {countries.map((country) => (
                  <option key={country.name} value={country.name}>
                    {country.flag} {country.name}
                  </option>
                ))}
              </select>
            </div>
            <p className="text-sm text-gray-500">
              Helps us show market data and news relevant to you.
            </p>
          </div>

          {/* Password */}
          <div className="space-y-2">
            <Label htmlFor="password" className="form-label">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter a strong password"
              value={formData.password}
              onChange={(e) => handleInputChange("password", e.target.value)}
              className="form-input"
            />
          </div>

          {/* Investment Goals */}
          <div className="space-y-2">
            <Label htmlFor="investmentGoals" className="form-label">
              Investment Goals
            </Label>
            <select
              id="investmentGoals"
              value={formData.investmentGoals}
              onChange={(e) =>
                handleInputChange("investmentGoals", e.target.value)
              }
              className="select-trigger"
            >
              {investmentGoals.map((goal) => (
                <option key={goal} value={goal}>
                  {goal}
                </option>
              ))}
            </select>
          </div>

          {/* Risk Tolerance */}
          <div className="space-y-2">
            <Label htmlFor="riskTolerance" className="form-label">
              Risk Tolerance
            </Label>
            <select
              id="riskTolerance"
              value={formData.riskTolerance}
              onChange={(e) =>
                handleInputChange("riskTolerance", e.target.value)
              }
              className="select-trigger"
            >
              <option value="">Select your risk level</option>
              {riskTolerance.map((risk) => (
                <option key={risk} value={risk}>
                  {risk}
                </option>
              ))}
            </select>
          </div>

          {/* Preferred Industry */}
          <div className="space-y-2">
            <Label htmlFor="preferredIndustry" className="form-label">
              Preferred Industry
            </Label>
            <select
              id="preferredIndustry"
              value={formData.preferredIndustry}
              onChange={(e) =>
                handleInputChange("preferredIndustry", e.target.value)
              }
              className="select-trigger"
            >
              <option value="">Select your preferred industry</option>
              {industries.map((industry) => (
                <option key={industry} value={industry}>
                  {industry}
                </option>
              ))}
            </select>
          </div>

          {/* Submit Button */}
          <Button type="submit" className="yellow-btn w-full">
            Start Your Investing Journey
          </Button>

          {/* Login Link */}
          <div className="text-center">
            <span className="text-gray-400">Already have an account? </span>
            <Link href="/login" className="footer-link">
              Log In
            </Link>
          </div>
        </form>
      </div>

      {/* Right Section - Testimonial and Dashboard Preview */}
      <div className="auth-right-section">
        {/* Testimonial */}
        <div className="mb-8">
          <blockquote className="auth-blockquote">
            "Signalist turned my watchlist into a winning list. The alerts are
            spot-on, and I feel more confident making moves in the market."
          </blockquote>
          <div className="flex items-center justify-between">
            <div>
              <p className="auth-testimonial-author">— Ethan R.</p>
              <p className="text-sm text-gray-500">Retail Investor</p>
            </div>
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="relative">
          <Image
            src="/assets/images/dashboard.png"
            alt="Dashboard Preview"
            width={1024}
            height={768}
            className="auth-dashboard-preview"
          />
        </div>
      </div>
    </div>
  );
}
