import React from "react"
import { SingleProject } from "../components"
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  projects: {
    backgroundColor: "#25274D",
    height: "100vh",
    display: "grid",
    gridTemplateColumns: "auto auto auto",
    gridTemplateRows: "auto",
    justifyContent: "space-evenly",
    gap: "2% 2%",
  },
}))

const projects = [
  {
    name: "Terra-2042",
    link: "https://terra-2042.herokuapp.com/",
    id: 1,
  },
  {
    name: "Jarvis",
    link: "https://github.com/ec7495/jarvis",
    id: 2,
  },
  {
    name: "Treat Shopper",
    link: "https://treat-shopper.herokuapp.com/",
    id: 3,
  },
]

const Projects = () => {
  const classes = useStyles()
  return (
    <div id="projects" className={classes.projects}>
      {projects.map(project => (
        <SingleProject key={project.id} project={project} />
      ))}
    </div>
  )
}

export default Projects
