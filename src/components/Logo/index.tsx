import Image from 'next/image'
import classes from "./Logo.module.scss"

type LogoProps = {
  
}

export default function Logo({  }: LogoProps) {
  return (
    <div className={classes.logo}>
      <Image src="/Logo.png" width={278} height={131} alt="Logo"/>
    </div>
  )
}

Logo.defaultProps = {
  
}