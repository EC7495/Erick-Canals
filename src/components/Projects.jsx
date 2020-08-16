import React from "react"
import { SingleProject } from "../components"

const Projects = () => (
  <div id="projects">
    <ul>
      {[1, 2, 3].map(elem => (
        <SingleProject key={elem} />
      ))}
    </ul>
  </div>
)

export default Projects
