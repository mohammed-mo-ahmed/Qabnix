import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}

export const metadata = {
  title: "Qabnix",
  icons: {
    icon: "/logo.png",
  },
};