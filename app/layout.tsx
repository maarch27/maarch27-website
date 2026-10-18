import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Mariam | Luxury UGC Creator",
  description:
    "Mariam — fashion, beauty, lifestyle and travel creator. Explore selected work and inquire about brand collaborations.",
  metadataBase: new URL("https://maarch27.com"),
  openGraph: {
    title: "Mariam | Luxury UGC Creator",
    description: "Creative content for brands with a story to tell.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
