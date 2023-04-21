import { useState, useMemo, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { getAllSections, joinClasses, snakeToTitle } from '@/utils/helpers'
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
      setAvailableSection(getAllSections().map((foundSection) => ({
        id: foundSection.id,
        label: snakeToTitle(foundSection.id),
        element: foundSection.element,
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
      background: {
        src: "/pages/hero/image.jpg",
        alt: "A man dunking a ball in the ring"
      },
      filler: {
        src: "/pages/hero/image.jpg",
        alt: "A man dunking a ball in the ring"
      },
    }
  }, [])

  return (
    <section className={joinClasses(classes.section, classes.hero)} id="/">
      <div className={classes.background}>
        <Image src={images.background.src} fill alt={images.background.alt}/>
        <div className={classes.overlay}/>
      </div>
      <h2 className={classes.message}>
        Fueling the future of<br/>
        <span className={classes.highlight}>
          <Image src={images.filler.src} width={512} height={512} alt={images.filler.alt}/>
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
  // TODO: Replace with fetching image from the backend
  const image = useMemo(() => {
    return {
      src: "/pages/aboutUs/image.jpg",
      alt: "A man dunking a ball in the ring"
    }
  }, [])

  return (
    <section className={joinClasses(classes.section, classes.aboutUs)} id="about-us">
      <div className={classes.left}>
        <div/>
        <Image src={image.src} width={512} height={512} alt={image.alt}/>
        <Image src={image.src} width={512} height={512} alt={image.alt}/>
      </div>
      <div  className={classes.right}>
        <h3>About Us</h3>
        <p>TAB NZ is deeply ingrained in New Zealand&#39;s culture. As New Zealand&#39;s sole betting agency, every dollar bet with TAB NZ contributes to fuelling the future of racing and sporting organisations across New Zealand.</p>
        <Button>
          Learn more
          <Arrow size={16}/>
        </Button>
      </div>
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