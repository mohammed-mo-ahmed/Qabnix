import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}

export const metadata = {
  title: "Qabnix",
  icons: {
    icon: "/logo.png",
  },
  
  // هذه الطريقة تجعل Next.js يضع الكود في الـ <head> تلقائياً وبشكل صحيح
  verification: {
    google: "VXz5Kx6yYjQNzcyTJfdjosx30jtu3dx43MwPUnxcSls",
  },

};