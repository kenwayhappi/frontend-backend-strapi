import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "wscDigital | Solutions Digitales Innovantes",
  description: "Accompagnement dans votre transformation digitale et recrutement de talents.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <Navbar />
        <main style={{ minHeight: '100vh', paddingTop: 'var(--navbar-height)' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
