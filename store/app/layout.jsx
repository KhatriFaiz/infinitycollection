import { Inter } from "next/font/google";
import AuthProvider from "@/components/AuthProvider";
import "./styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Infinity Collection - Ecommerce website",
  description: "A place to find every fashion product you need.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
