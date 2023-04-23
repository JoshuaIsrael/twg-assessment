import { useMemo } from "react";
import { Section } from "@/types";
import Link from "next/link";
import Image from "next/image";
import IconButton from "../IconButton";
import Arrow from "../SVGs/Arrow";
import Logo from "../Logo";
import classes from "./Footer.module.scss"

type FooterProps = {
  sections: Section[]
}

export default function Footer({ sections }: FooterProps) {
  // TODO: Fetch this from the backend
  const socials = useMemo(() => {
    return [
      { id: "facebook", icon: "/socials/Facebook.svg", url: "" },
      { id: "twitter", icon: "/socials/Twitter.svg", url: "" },
      { id: "linkedin", icon: "/socials/LinkedIn.svg", url: "" },
    ]
  }, [])

  return (
    <footer className={classes.footer}>
      <div className={classes.left}>
        <div>
          <Logo/>
        </div>
        <p>
          TAB NZ is deeply ingrained in New Zealand&#39;s culture, and, by betting with TAB NZ on racing or sport, you contribute to fueling the future of racing codes and sporting organisations across New Zealand.
        </p>
      </div>
      <div className={classes.right}>
        <div>
          {sections.map(section => (
            <Link key={section.id} href="">{section.label}</Link>
          ))}
          <span>© 2023 - TAB New Zealand</span>
        </div>
        <div>
          <Link href="">Privacy Policy</Link>
          <Link href="">Terms & Conditions</Link>
          <span>Socials</span>
          <div>
            { socials.map(social => <Image key={social.id} src={social.icon} width={20} height={20} alt={social.id}/>) }
          </div>
          <span>Created by The Web Guys</span>
        </div>
        <div>
          <IconButton><Arrow direction="up" color="light"/></IconButton>
          Back to top
        </div>
      </div>
    </footer>
  )
}

Footer.defaultProps = {
  sections: []
}