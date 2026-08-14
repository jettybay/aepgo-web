import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";
import { MobileNav } from "@/components/layout/MobileNav";

export const metadata: Metadata = {
  title: "AEPGo — Agro-Energy Pay-as-you-Go",
  description: "Climate-smart agro-commodity platform on the LAKAJI corridor",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 font-sans text-gray-900 antialiased">
        <Sidebar />
        <Header />
        <main className="lg:ml-72 pb-20 lg:pb-6">
          <div className="mx-auto max-w-full px-4 sm:px-8 py-6">{children}</div>
        </main>
        <MobileNav />
      </body>
    </html>
  );
}
