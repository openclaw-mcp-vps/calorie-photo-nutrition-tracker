import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SnapCalorie – Snap Photos of Meals for Instant Calorie Tracking",
  description: "AI-powered food recognition that instantly logs calories, macros, and nutritional info from a simple photo. Start tracking smarter today."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="41f0ba06-ab70-4d42-a1b3-a81dd0b0dcd0"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
