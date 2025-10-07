import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In - Signalist",
  description: "Sign in to your Signalist account",
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
