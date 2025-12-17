import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";
import { BackgroundWaves } from "@/components/BackgroundWavees";

export const metadata: Metadata = {
  title: "Portfolio: Aidrin Peraira",
  description: "This is outlook on Aidrin Peraira's profile.",
};

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-work-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <BackgroundWaves>
            <div
              className={cn(
                "min-h-screen font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6"
              )}
            >
              {children}
              <div className="">
                <Navbar />
              </div>
            </div>
          </BackgroundWaves>
        </ThemeProvider>
      </body>
    </html>
  );
}
