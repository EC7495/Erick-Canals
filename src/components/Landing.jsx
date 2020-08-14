import React from "react"

const Landing = () => {
  const timeOfDay = new Date().getHours() < 12 ? "morning" : "afternoon"

  return (
    <div id="landing">
      <h1>Good {timeOfDay}! Welcome to my portfolio</h1>
      <h2>My name is Erick Canals</h2>
    </div>
  )
}

export default Landing
