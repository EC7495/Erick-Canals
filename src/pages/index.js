import React from "react"
import { makeStyles } from "@material-ui/core"
import { Landing, Footer } from "../components"

const useStyles = makeStyles(theme => ({
  index: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
  },
}))

const IndexPage = () => {
  const classes = useStyles()

  return (
    <div id="index-page" className={classes.index}>
      <Landing />
      <Footer />
    </div>
  )
}

export default IndexPage
