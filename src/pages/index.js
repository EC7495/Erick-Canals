import React from "react"
import { makeStyles } from "@material-ui/core"
import { Landing, Header, Footer } from "../components"

const useStyles = makeStyles(theme => ({
  index: {
    height: "100%",
  },

  image: {
    borderRadius: "50%",
    height: "25%",
    display: "block",
  },
}))

const IndexPage = () => {
  const classes = useStyles()

  return (
    <div id="index-page" className={classes.index}>
      <Header />
      {/* <img src="/ec.jpg" className={classes.image} /> */}
      <Landing />
      <Footer />
    </div>
  )
}

export default IndexPage
