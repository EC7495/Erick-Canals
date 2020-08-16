import React from "react"
import { Link } from "gatsby"
import { Typography, Button, makeStyles } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  text: {
    fontSize: "100%",
  },

  button: {
    color: "white",
    backgroundColor: "blue",
    "&:hover": {
      color: "black",
      backgroundColor: "red",
    },

    margin: "1%",
  },

  landing: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  link: {
    textDecoration: "none",
    color: "inherit",
  },
}))

const Landing = () => {
  const currentTime = new Date().getHours()
  const classes = useStyles()
  let timeOfDay

  if (currentTime >= 5 && currentTime <= 11) timeOfDay = "morning"
  else if (currentTime >= 12 && currentTime <= 16) timeOfDay = "afternoon"
  else timeOfDay = "evening"

  return (
    <div id="landing" className={classes.landing}>
      <Typography
        align="center"
        variant="h1"
        className={classes.text}
        gutterBottom
      >
        Good {timeOfDay}! Welcome to my portfolio
      </Typography>
      <Typography
        align="center"
        variant="h2"
        className={classes.text}
        gutterBottom
      >
        My name is Erick Canals
      </Typography>
      <Button variant="outlined" className={classes.button}>
        <Link to="/projects" className={classes.link}>
          <Typography variant="button">See my projects</Typography>
        </Link>
      </Button>
    </div>
  )
}

export default Landing
