import React from "react"
import { Typography, makeStyles } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: "#464866",
    color: "white",
    height: "100px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    fontFamily: "Optima",
  },
}))

const Footer = () => {
  const classes = useStyles()

  return (
    <div id="footer" className={classes.footer}>
      <footer>
        <Typography className={classes.text}>
          © Erick Canals {new Date().getFullYear()}
        </Typography>
      </footer>
    </div>
  )
}

export default Footer
