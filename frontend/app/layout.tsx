import AuthProvider from "./components/providers/AuthProvider";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import Box from "@mui/material/Box";
import { ThemeProvider } from "@mui/material/styles";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import theme from "@utils/theme";

import Header from "@components/Header";
import ToasterProvider from "@components/Toaster";
import { MapProvider } from "@components/providers/MapProvider";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EMS",
  description: "Event Management System",
};

export default function RootLayout({
  children,
  auth,
}: Readonly<{
  children: React.ReactNode;
  auth: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ minHeight: "100vh" }}>
        <AppRouterCacheProvider options={{ key: "css", prepend: true }}>
          <ThemeProvider theme={theme}>
            <AuthProvider>
              <MapProvider>
                <Header />
                <Box
                  component="main"
                  sx={{ marginTop: "88px", padding: ".5rem 1rem" }}
                >
                  {children}
                </Box>
              </MapProvider>
              {auth}
            </AuthProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>

        <ToasterProvider />
      </body>
    </html>
  );
}
