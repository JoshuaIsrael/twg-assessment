import { ReactNode } from 'react';
import { Button as MaterialButton } from '@mui/material';
import classes from "./Button.module.scss"

type ButtonProps = {
  children: ReactNode
  width: number,
}

export default function Button({ children, width }: ButtonProps) {
  return (
    <MaterialButton className={classes.button} style={{ width }} variant="contained">
      {children}
    </MaterialButton>
  )
}

Button.defaultProps = {
  width: 221
}