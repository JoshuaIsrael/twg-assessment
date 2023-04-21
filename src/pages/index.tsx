import { useState, useMemo, useEffect } from 'react'
import Head from 'next/head'
import { getAllSectionIds, snakeToTitle } from '@/utils/helpers'
import { Section } from '@/types';
import Navbar from '@/components/NavBar';
import classes from '@/styles/Home.module.scss'

export default function Home() {
  const [availableSections, setAvailableSection] = useState<Section[]>([]);

  const sections: JSX.Element[] = useMemo(() => {
    // TODO: Add fetching of sections from the backend
    return [
      <Hero key="hero"/>,
      <AboutUs key="about-us"/>,
      <SocialResponsibility key="social-responsibility"/>,
      <Careers key="careers"/>,
      <News key="news"/>,
      <Grants key="grants"/>,
      <Reports key="reports"/>,
    ]
  }, [])

  // Converts the sections in the DOM into data for the navbar
  const registerSections = () => {
    if(availableSections.length <= 0){
      setAvailableSection(getAllSectionIds().map((foundSection) => ({
        id: foundSection,
        label: snakeToTitle(foundSection)
      })));
    }
  }

  useEffect(() => {
    registerSections();
  }, [])

  return (
    <>
      <Head>
        <title>Tab</title>
        <meta name="description" content="Fueling the future of sport, racing, and communities in New Zealand" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={classes.home}>
        <Navbar sections={availableSections}/>
        <main className={classes.main}>
          {sections}
        </main>
      </div>
    </>
  )
}

function Hero() {
  return (
    <section className={classes.section} id="/">
      Hero
    </section>
  ) 
}

function AboutUs() {
  return (
    <section className={classes.section} id="about-us">
      About Us
    </section>
  ) 
}

function SocialResponsibility() {
  return (
    <section className={classes.section} id="social-responsibility">
      Social Responsibility
    </section>
  ) 
}

function Careers() {
  return (
    <section className={classes.section} id="careers">
      Careers
    </section>
  ) 
}

function News() {
  return (
    <section className={classes.section} id="news">
      News
    </section>
  ) 
}

function Grants() {
  return (
    <section className={classes.section} id="grants">
      Grants
    </section>
  ) 
}

function Reports() {
  return (
    <section className={classes.section} id="reports">
      Reports
    </section>
  ) 
}