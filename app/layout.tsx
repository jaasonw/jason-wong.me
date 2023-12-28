import Script from "next/script";

import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script
        async
        src="https://analytics.physicsbirds.dev/script.js"
        data-website-id="ee179b4d-2e7a-45e9-88d3-b94d9b8175ae"
      ></Script>
      {children}
    </>
  );
}
