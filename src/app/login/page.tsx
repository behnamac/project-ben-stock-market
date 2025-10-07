"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate with auth system
    console.log("Login submitted:", formData);
    // For now, redirect to dashboard
    window.location.href = "/dashboard";
  };

  return (
    <div className="auth-layout">
      {/* Left Section - Login Form */}
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
          <h1 className="form-title">Welcome Back</h1>
          <p className="text-gray-400 text-lg">
            Sign in to your account to continue
          </p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
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

          {/* Password */}
          <div className="space-y-2">
            <Label htmlFor="password" className="form-label">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={(e) => handleInputChange("password", e.target.value)}
              className="form-input"
            />
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={formData.rememberMe}
                onChange={(e) =>
                  handleInputChange("rememberMe", e.target.checked)
                }
                className="rounded border-gray-600 bg-gray-800 text-yellow-500 focus:ring-yellow-500"
              />
              <span className="text-sm text-gray-400">Remember me</span>
            </label>
            <Link
              href="/forgot-password"
              className="text-sm text-yellow-400 hover:text-yellow-300"
            >
              Forgot password?
            </Link>
          </div>

          {/* Submit Button */}
          <Button type="submit" className="yellow-btn w-full">
            Sign In
          </Button>

          {/* Sign Up Link */}
          <div className="text-center">
            <span className="text-gray-400">Don't have an account? </span>
            <Link href="/signup" className="footer-link">
              Sign Up
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
