import React from "react"
import { makeStyles } from "@material-ui/core"
import { Landing, Header, Footer } from "../components"

const useStyles = makeStyles(theme => ({
  index: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
  },
}))

const IndexPage = () => {
  const classes = useStyles()

  return (
    <div id="index-page" className={classes.index}>
      <Header />
      <Landing />
      <Footer />
    </div>
  )
}

export default IndexPage
