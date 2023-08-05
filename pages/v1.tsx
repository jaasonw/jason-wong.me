import About from "$lib/components/v1/About";
import Contact from "$lib/components/v1/Contact";
import { Header } from "$lib/components/v1/Header";
import Projects from "$lib/components/v1/Projects";
import projects from "$lib/public/projects.json";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Head from "next/head";
import Script from "next/script";

// font awesome ssr workaround
config.autoAddCss = false;

export default function Home({ projects }: any) {
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
      </Head>
      <Header />
      <About />
      <Projects projects={projects} />
      <Contact />
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
    </>
  );
}

export async function getStaticProps({ params }) {
  const data = projects;
  return { props: { projects: data } };
}
