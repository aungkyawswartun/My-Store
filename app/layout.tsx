import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Store",
  description: "Learing from Teacher Wayne",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
          <head>
              <script
                  type="module"
                  src="https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.esm.js"
              ></script>
              <script
                  noModule
                  src="https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.js"
              ></script>
              <link
                  rel="stylesheet"
                  href="https://cdn.jsdelivr.net/npm/@ionic/core/css/ionic.bundle.css"
              />
          </head>
          <body className={inter.className}>{children}</body>
      </html>
  );
}
