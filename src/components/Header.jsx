import React, { useState } from "react"
import {
  Typography,
  Drawer,
  List,
  ListItem,
  makeStyles,
} from "@material-ui/core"
import { Link } from "gatsby"

const useStyles = makeStyles(theme => ({
  header: {
    backgroundColor: "#464866",
    color: "white",
    height: "100px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  list: {
    width: "250px",
  },

  text: {
    fontFamily: "Optima",
    "&:hover": {
      cursor: "pointer",
    },
  },

  link: {
    textDecoration: "none",
    color: "white",
    textDecoration: "none",
  },

  linkText: {
    fontFamily: "Optima",
    color: "#2E9CCA",
  },
}))

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const classes = useStyles()
  const closeDrawer = event => {
    if (!event || event.target.tagName === "DIV") setDrawerOpen(false)
  }

  return (
    <div id="header" className={classes.header}>
      <header>
        <Typography
          variant="button"
          className={classes.text}
          onClick={() => setDrawerOpen(true)}
        >
          Menu
        </Typography>
      </header>
      <Drawer anchor="left" open={drawerOpen} onClick={closeDrawer}>
        <div className={classes.list}>
          <List>
            {["home", "projects", "photography", "resume"].map((link, idx) => (
              <ListItem key={idx}>
                <Link
                  to={`/${link === "home" ? "" : link}`}
                  className={classes.link}
                >
                  <Typography variant="button" className={classes.linkText}>
                    {link}
                  </Typography>
                </Link>
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </div>
  )
}

export default Header
