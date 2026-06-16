import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Qabnix",
    template: "%s | Qabnix",
  },
  description: "Professional web development agency — responsive design, e-commerce, WordPress, and fast secure hosting.",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  verification: {
    google: "VXz5Kx6yYjQNzcyTJfdjosx30jtu3dx43MwPUnxcSls",
  },
};

export const viewport = {
  themeColor: "#050a1e",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}