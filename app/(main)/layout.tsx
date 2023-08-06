import Blob from "$lib/v2/components/Blob";
import Footer from "$lib/v2/components/Footer";
import NavBar from "$lib/v2/components/NavBar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Inter, Lato } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

config.autoAddCss = false;

export const metadata = {
  title: "Jason's Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const width = "max-w-5xl";
  return (
    <html lang="en" className={`dark ${inter.variable}`}>
      <body className="flex flex-col items-center gap-10 min-h-screen mx-10 bg-slate-100 dark:bg-slate-900 dark:text-slate-300">
        <Blob />
        <NavBar className={width} />
        <div className={`flex flex-col justify-center h-full w-full ${width}`}>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
