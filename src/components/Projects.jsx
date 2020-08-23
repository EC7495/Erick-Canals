import React from "react"
import { SingleProject } from "../components"

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

const Projects = () => (
  <div id="projects">
    <ul>
      {projects.map(project => (
        <SingleProject key={project.id} project={project} />
      ))}
    </ul>
  </div>
)

export default Projects
