import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Klyshi — Dog Rescue, Prishtina",
  description:
    "Building a global pathway to bring every dog forever home. Klyshi is a dog rescue nonprofit based in Prishtina, Kosovo.",
  keywords: "dog rescue, Kosovo, Prishtina, adopt a dog, animal rescue, nonprofit",
  openGraph: {
    title: "Klyshi — Dog Rescue, Prishtina",
    description: "Building a global pathway to bring every dog forever home.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
