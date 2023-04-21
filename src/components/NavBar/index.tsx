import { useMemo } from "react";
import { AppBar, CssBaseline, Link, Toolbar, Typography } from "@mui/material";
import { Section } from "@/types";
import classes from "./NavBar.module.scss"

type NavBarProps = {
  sections: Section[]
}

export default function Navbar({ sections }: NavBarProps ) {
  const externalLink = useMemo(() => ({ label: 'tab.co.nz', link: 'tab.co.nz'}), [])

  return (
    <AppBar className={classes.navbar} position="static">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
          Tab
        </Typography>
        <div className={classes.navlinks}>
          {
            sections.filter((section) => section.id !== "/").map((section) => (
              <Link key={section.id} className={classes.link}>
                {section.label}
              </Link>
            ))
          }
        </div>
        <Link className={classes.link}>
          {externalLink.label}
        </Link>
      </Toolbar>
    </AppBar>
  )
}