import classes from "./ExternalLink.module.scss"

const colors = {
  light: "#F5F5F5",
  dark: "#1A2A57"
}

type ExternalProps = {
  size: number,
  color: "light" | "dark"
}

export default function ExternalLink({ size, color }: ExternalProps) {
  return (
    <div className={classes.External}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.00022 1H3C1.89543 1 1 1.89543 1 3V10.0006C1 11.1052 1.89543 12.0006 3 12.0006H10.0006C11.1052 12.0006 12.0006 11.1052 12.0006 10.0006V8.33374" stroke={colors[color]} strokeWidth="1.5"/>
        <path d="M5.00244 8.00039L12.0028 1M12.0028 1V5.33357M12.0028 1H7.3359" stroke={colors[color]} strokeWidth="1.5"/>
      </svg>
    </div>
  )
}

ExternalLink.defaultProps = {
  size: 16,
  color: "light",
}