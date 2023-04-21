import { useMemo } from "react";
import { AppBar, Link, Toolbar } from "@mui/material";
import { Section } from "@/types";
import ExternalLink from "../SVGs/ExternalLink";
import Logo from "../Logo";
import classes from "./NavBar.module.scss"

type NavBarProps = {
  sections: Section[]
}

export default function Navbar({ sections }: NavBarProps ) {
  const externalLink = useMemo(() => ({ label: 'tab.co.nz', link: 'tab.co.nz'}), [])

  return (
    <AppBar className={classes.navbar} position="static">
      <Toolbar>
        <div className={classes.logo}>
          <Logo/>
        </div>
        <div className={classes.navlinks}>
          {
            sections.filter((section) => section.id !== "/").map((section) => (
              <Link key={section.id}>
                {section.label}
              </Link>
            ))
          }
        </div>
        <Link>
          {externalLink.label}
          <ExternalLink/>
        </Link>
      </Toolbar>
    </AppBar>
  )
}