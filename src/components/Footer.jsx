import React from "react"
import { Typography, makeStyles } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: "black",
    color: "white",
    height: "15%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}))

const Footer = () => {
  const classes = useStyles()

  return (
    <div id="footer" className={classes.footer}>
      <footer>
        <Typography>Erick Canals © {new Date().getFullYear()}</Typography>
      </footer>
    </div>
  )
}

export default Footer
