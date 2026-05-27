import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ModGuard AI – AI Moderator for Discord Communities",
  description: "Automatically moderate your Discord server with AI. Detect spam, toxicity, and off-topic messages with custom rules."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="1df2d207-1739-4b99-b4ee-d169a5428309"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
