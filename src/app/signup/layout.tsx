import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up - Signalist",
  description: "Create your Signalist account and start your investing journey",
};

export default function SignUpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
