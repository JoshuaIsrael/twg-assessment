import { useState, useMemo, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { getAllSectionIds, joinClasses, snakeToTitle } from '@/utils/helpers'
import { Section } from '@/types';
import { Arrow, Button, IconButton, Navbar } from '@/components';
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
  // TODO: Replace with fetching image from the backend
  const images = useMemo(() => {
    return {
      background: "/pages/hero/image.jpg",
      filler: "/pages/hero/image.jpg",
    }
  }, [])

  return (
    <section className={joinClasses([classes.section, classes.hero])} id="/">
      <div className={classes.background}>
        <Image src={images.background} fill alt="A man dunking a ball in the ring"/>
        <div className={classes.overlay}/>
      </div>
      <h2 className={classes.message}>
        Fueling the future of<br/>
        <span className={classes.highlight}>
          <Image src={images.background} width={512} height={512} alt="A man dunking a ball in the ring"/>
          sport
        </span>
        ,&nbsp;<span className={classes.item}>racing</span> and <span className={classes.item}>communities</span><br/>
        in New Zealand
      </h2>
      <div className={classes.actions}>
        <IconButton><Arrow size={24} direction="down"/></IconButton>
        <Button>
          Learn more
          <Arrow size={16}/>
        </Button>
      </div>
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