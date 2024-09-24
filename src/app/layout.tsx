import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Roamie - Your Personal Travel Guide",
  description: "Get personalized travel recommendations with Roamie",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <body className="h">
        {/* <Header /> */}
        {children}
      </body>
    </html>
  );
}
