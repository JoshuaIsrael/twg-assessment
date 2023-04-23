import { useState, useMemo, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { getAllSections, joinClasses, snakeToTitle } from '@/utils/helpers'
import { Section } from '@/types';
import { Arrow, Button, Footer, IconButton, Navbar } from '@/components';
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
      })).filter((section) => section.id !== "/"));
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
        <Footer sections={availableSections}/>
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
      <div className={classes.right}>
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
    <section className={joinClasses(classes.section, classes.socialResponsibility)} id="social-responsibility">
      <div/><div/><div/>
      <div>
        <div className={classes.left}>
          <p>TAB NZ takes our responsibility to minimise harm seriously. Whether it’s through our Safer Betting tools, our customer support, or proactive engagement, we go beyond the minimum standards to keep Kiwis safe when placing a bet.</p>
          <span>*2021/22 season</span>
        </div>
        <div className={classes.right}>
          <Button>
            Learn more
            <Arrow size={16}/>
          </Button>
        </div>
      </div>
    </section>
  ) 
}

function Careers() {
  const availableJobs = useMemo(() => {
    return [
      { title: "Customer Service Representative", location: "Auckland, New zealand", days: 4},
      { title: "Customer Service Representative", location: "Auckland, New zealand", days: 4},
      { title: "Customer Service Representative", location: "Auckland, New zealand", days: 4},
      { title: "Customer Service Representative", location: "Auckland, New zealand", days: 4},
      { title: "Customer Service Representative", location: "Auckland, New zealand", days: 4},
      { title: "Customer Service Representative", location: "Auckland, New zealand", days: 4},
      { title: "Customer Service Representative", location: "Auckland, New zealand", days: 4},
      { title: "Customer Service Representative", location: "Auckland, New zealand", days: 4},
      { title: "Customer Service Representative", location: "Auckland, New zealand", days: 4},
      { title: "Customer Service Representative", location: "Auckland, New zealand", days: 4},
    ]
  }, [])

  return (
    <section className={joinClasses(classes.section, classes.careers)} id="careers">
      <div className={classes.top}>
        <span>Join Us</span>
        <div className={classes.divider}/>
      </div>
      <div className={classes.bottom}>
        <div className={classes.left}>
          <h3>Careers</h3>
          <p>There&#39;s so much more to TAB NZ than meets the eye, so why not scratch the surface and find out more. Are you ready to join our team?</p>
          <Button>
            Learn more
            <Arrow size={16}/>
          </Button>
        </div>
        <div className={classes.right}>
          {
            // TODO: Replace index with proper key generator
            availableJobs.map((job, index) => (
              <div key={index} className={classes.card}>
                <div>
                  <div>Job Title</div>
                  <div>{job.title}</div>
                </div>
                <div>
                  <div>Location</div>
                  <div>{job.location}</div>
                </div>
                <div>
                  <div>Job posted {job.days} days ago</div>
                  <Button>
                    Learn more
                    <Arrow size={16}/>
                  </Button>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  ) 
}

function News() {
  const availableReports = useMemo(() => {
    return [
      {
        image: {
          src: "/pages/news/image1.jpg",
          alt: "",
        },
        title: "TAB NZ boosting odds of success for women's sport on International Women’s Day",
        date: "8 March 2023"
      },
      {
        image: {
          src: "/pages/news/image2.jpg",
          alt: "",
        },
        title: "TAB NZ Trading Performance Update",
        date: "3 March 2023"
      },
    ]
  }, [])

  return (
    <section className={joinClasses(classes.section, classes.news)} id="news">
      <div className={classes.top}>
        <h4>Catch up on the latest news from TAB NZ</h4>
        <Button>
          Learn more
          <Arrow size={16}/>
        </Button>
      </div>
      <div className={classes.bottom}>
        {
          // TODO: Replace index with proper key generator
          availableReports.map((report, index) => (
            <div key={index} className={classes.report}>
              <Image src={report.image.src} alt={report.image.alt} width={645} height={330}/>
              <span>{report.date}</span>
              <p>{report.title}</p>
            </div>
          ))
        }
      </div>
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
