import Blob from "$lib/v2/components/Blob";
import Footer from "$lib/v2/components/Footer";
import NavBar from "$lib/v2/components/NavBar";
import { ThemeProvider } from "$lib/v2/shadcn/ui/theme-provider";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
// import { Inter, Lato } from "next/font/google";
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

config.autoAddCss = false;

export const metadata = {
  title: "Jason's Portfolio",
};

export default function RootLayout({ children }: {
  children: React.ReactNode;
}) {
  const width = "max-w-5xl";
  return (
      <>
        <html lang="en" className={`${inter.variable} font-sans`} suppressHydrationWarning>
          <head />
          <body className="flex flex-col items-center">
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <NavBar className={width} />
              <div className={`flex flex-col justify-center px-3 h-full w-full ${width}`}>{children}</div>
            </ThemeProvider>
          </body>
        </html>
      </>
    )
  }