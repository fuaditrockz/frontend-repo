import type { Metadata } from "next";
import Head from "next/head";
import { Inter } from "next/font/google";
import "@fontsource/inter";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { StoreProvider } from "@/store/StoreProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <style
          dangerouslySetInnerHTML={{
            __html: `</style>
  <link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
/>`,
          }}
        ></style>
      </Head>
      <body className={inter.className}>
        <StoreProvider>
          <AppRouterCacheProvider options={{ key: "css" }}>
            {children}
          </AppRouterCacheProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
