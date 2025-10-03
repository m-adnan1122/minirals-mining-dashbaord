"use client";

import "./globals.css";
import MainHeader from "@/components/MainHeader";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Outfit } from "next/font/google";

// 1️⃣ Import font with next/font
const outfit = Outfit({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

// 2️⃣ Create theme using the font
const theme = createTheme({
  typography: {
    fontFamily: outfit.style.fontFamily,
  },
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={outfit.className}>
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <MainHeader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
