import { useEffect, useMemo, useState } from "react";
import { AppBar, Link, Toolbar } from "@mui/material";
import { Section } from "@/types";
import ExternalLink from "../SVGs/ExternalLink";
import Logo from "../Logo";
import classes from "./NavBar.module.scss"
import { joinClasses } from "@/utils/helpers";

type NavBarProps = {
  sections: Section[]
}

// TODO: Make this come from the sections
const lightSections: number[] = [
  2, 3, 4, 6, 7
]

export default function Navbar({ sections }: NavBarProps ) {
  const [activeSection, setActiveSection] = useState(1);

  const externalLink = useMemo(() => ({ label: 'tab.co.nz', link: 'tab.co.nz'}), [])

  useEffect(() => {
    // TODO: Add throttling
    const handleScroll = () => {
      console.log('TEST')
      const activeIndex = sections.findIndex((section) => {
        const rect = section.element.getBoundingClientRect();
        return rect.top < window.innerHeight * 0.95 && rect.bottom > window.innerHeight * 0.05;
      });
      setActiveSection(activeIndex + 1);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  return (
    <AppBar className={classes.navbar} position="static">
      <Toolbar>
        <div className={classes.logo}>
          <Logo/>
        </div>
        <div className={joinClasses(classes.navlinks, lightSections.includes(activeSection) ? classes.alt : '')}>
          {
            sections.map((section) => (
              <Link key={section.id} className="">
                {section.label}
              </Link>
            ))
          }
        </div>
        <Link className={lightSections.includes(activeSection) ? classes.alt : ''}>
          {externalLink.label}
          <ExternalLink color={lightSections.includes(activeSection) ? "dark" : "light"}/>
        </Link>
      </Toolbar>
    </AppBar>
  )
}