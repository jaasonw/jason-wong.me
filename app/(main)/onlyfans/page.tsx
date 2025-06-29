"use client";

import Head from "next/head";
import { useEffect } from "react";

export default function OnlyFans() {
  useEffect(() => {
    window.location.href = "https://gethelp.com/about/";
  }, []);
  return (
    <>
      <Head>
        <meta name="robots" content="noai, noimageai" />
        <meta name="twitter:card" content="none" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content=" " />
        <meta property="og:description" content=" " />
      </Head>
      <div>Redirecting...</div>
    </>
  );
}
