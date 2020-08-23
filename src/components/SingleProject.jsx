import React from "react"

const SingleProject = ({ project }) => {
  const { name, link } = { ...project }
  return (
    <div id="single-project">
      <a href={link} target="blank" className="projects">
        <li>{name}</li>
      </a>
    </div>
  )
}

export default SingleProject
