// font awesome ssr workaround
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import Header from "../components/Header";
import Head from "next/head";
import React from "react";
import About from "../components/About";

import projects from "../public/projects.json";
import skills from "../public/skills.json";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

export default function Home(props) {
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
      <Projects projects={props.projects} />
      <Skills skills={props.skills} />
      <Contact />
    </>
  );
}

export async function getStaticProps({ params }) {
  const _projects = projects;
  const _skills = skills;
  return { props: { projects: _projects, skills: _skills } };
}
