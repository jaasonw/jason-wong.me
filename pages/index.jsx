// font awesome ssr workaround
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import Header from "../components/Header";
import Head from "next/head";
import Script from "next/script";
import React from "react";
import About from "../components/About";

import projects from "../public/projects.json";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home({ projects }) {
  // https://coolors.co/ffbe0b-fb5607-ff006e-8338ec-3a86ff
  return (
    <>
      <Head>
        <title>Welcome to Jason&apos;s Portfolio</title>
        <meta
          property="og:title"
          content="Welcome to Jason's Portfolio"
          key="title"
        />
        <meta property="og:image" content={"https://i.imgur.com/v6izSs0.png"} />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=UA-46712726-4"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-46712726-4');
        `}
        </Script>
      </Head>
      <Header />
      <About />
      <Projects projects={projects} />
      <Contact />
    </>
  );
}

export async function getStaticProps({ params }) {
  const data = projects;
  return { props: { projects: data } };
}
