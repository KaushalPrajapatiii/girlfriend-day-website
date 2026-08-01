import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Happy Girlfriend Day ❤️ | A Love Story Made Only For You",
  description: "An interactive, emotionally stunning love story website created exclusively for Happy Girlfriend Day.",
  keywords: ["Happy Girlfriend Day", "Love Story", "Interactive Website", "Romantic Memories"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body className="min-h-full bg-[#FFF8FC] text-[#222222] overflow-x-hidden font-sans-outfit">
        {children}
      </body>
    </html>
  );
}
