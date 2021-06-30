// font awesome ssr workaround
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import Header from "../components/Header";
import Head from "next/head";
import React from "react";
import About from "../components/About";

import projects from "../public/projects.json";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home({ projects: any }) {
  // https://coolors.co/3d5a80-98c1d9-e0fbfc-ee6c4d-293241
  return (
    <>
      <Head>
        <title>Welcome to Jason's Portfolio</title>
        <meta name="description" content="Jason's Portfolio" />
      </Head>
      <Header/>
      <About/>
      <Projects projects = {projects}/>
      <Contact></Contact>
    </>
  );
}

export async function getStaticProps({ params:any }) {
  const data = projects;
  return { props: { projects: data } };
}
