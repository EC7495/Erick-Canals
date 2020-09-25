import React from "react"
import { Link } from "gatsby"
import { Typography, Button, Fade, makeStyles } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  text: {
    fontSize: "150%",
    fontFamily: "Optima",
    color: "white",
  },

  buttonText: {
    fontFamily: "Optima",
    color: "#2E9CCA",
  },

  button: {
    transition: "all .3s ease-in-out",
    backgroundColor: "#25274D",
    "&:hover": {
      backgroundColor: "#464866",
      transform: "scale(1.03)",
      boxShadow:
        "0px 3px 5px -1px rgba(0,0,0,0.2), 0px 5px 8px 0px rgba(0,0,0,0.14), 0px 1px 14px 0px rgba(0,0,0,0.12)",
    },
    margin: "1%",
  },

  landing: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#25274D",
  },

  link: {
    textDecoration: "none",
    color: "white",
    textDecoration: "none",
  },
}))

const Landing = () => {
  const currentTime = new Date().getHours()
  const classes = useStyles()
  const timeOfDay =
    currentTime >= 5 && currentTime <= 11
      ? "morning"
      : currentTime >= 12 && currentTime <= 16
      ? "afternoon"
      : "evening"

  return (
    <div id="landing" className={classes.landing}>
      <Fade in timeout={{ appear: 2000, enter: 1500, exit: 500 }}>
        <Typography
          align="center"
          variant="h1"
          className={classes.text}
          gutterBottom
        >
          Good {timeOfDay}! Welcome to my portfolio
        </Typography>
      </Fade>
      <Fade in timeout={{ appear: 500, enter: 3000, exit: 500 }}>
        <Button variant="outlined" className={classes.button}>
          <Link to="/projects" className={classes.link}>
            <Typography variant="button" className={classes.buttonText}>
              See my projects
            </Typography>
          </Link>
        </Button>
      </Fade>
    </div>
  )
}

export default Landing
