import React from "react"
import { Card, Typography, Button, makeStyles } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  project: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1%",
    margin: "1%",
  },

  image: {
    height: "50px",
    // width: "50px",
  },
}))

const SingleProject = ({ project }) => {
  const classes = useStyles()
  const { name, link } = project
  return (
    <Card elevation={5} className={classes.project}>
      <Typography gutterBottom variant="h5" component="h2">
        {name}
      </Typography>
      <img src="/ec.jpg" className={classes.image}></img>
      <Typography
        align="center"
        variant="body2"
        color="textSecondary"
        component="p"
      >
        Project description will go here. I think that two or three sentences
        should suffice. What do you think?
      </Typography>
      <div>
        <Button size="small" color="primary">
          GitHub
        </Button>
        <Button href={link} size="small" color="primary">
          Deployed
        </Button>
      </div>
    </Card>
  )
}

export default SingleProject
