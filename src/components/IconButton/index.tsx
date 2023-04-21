import { ReactNode } from 'react';
import { IconButton as MaterialIconButton } from '@mui/material';
import classes from "./IconButton.module.scss"

const colors = {
  light: "#1A2A57",
  dark: "#F5F5F5"
}

type ButtonProps = {
  children: ReactNode
  color: "light" | "dark",
  width: number,
}

export default function IconButton({ children, color, width }: ButtonProps) {
  return (
    <MaterialIconButton className={classes.iconButton} style={{ width, borderColor: color === "light" ? colors["dark"] : colors["light"] }}>
      {children}
    </MaterialIconButton>
  )
}

IconButton.defaultProps = {
  color: "light",
  width: "fit-content"
}