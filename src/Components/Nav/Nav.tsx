import React, { useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import { Drawer } from "@material-ui/core";
import {useHistory,useLocation} from 'react-router-dom';
import routes from 'routes'
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    groupButton: {
      marginLeft:'15%',
      "& > button": {
        marginRight: 6,
        padding:10
      },
      [theme.breakpoints.down("sm")]: {
        display: "none",
        margin:0
      },
    },
    Drawer: {
      display: "none",
      overflow: "hidden",
      [theme.breakpoints.down("sm")]: {
        display: "block",
      },
    },
    sideBar: {
      display: "flex",
      flexDirection: "column",
      padding: '4rem 4vw',
      
      "& > button": {
        height: 70,
        marginBottom: 10,
      },
    },
    Toggle: {
      display: "none",
      [theme.breakpoints.down("sm")]: {
        display: "block",
      },
    },
  })
);

export default function Nav() {
  const classes = useStyles();
  const [side, setSide] = useState(false);
  const link=routes.link

  return (
    <div className={classes.root}>
      <AppBar color="transparent" position="static">
        <Toolbar>
          <div className={classes.Toggle}>
            <IconButton
              onClick={() => {
                setSide(true);
              }}
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
          </div>
          <Typography>Nhom 8 OOP-Quản lý cửa hàng thời trang</Typography>
          <div className={classes.groupButton}>
            <FullNav key={"nav-bar-button"} list={link} />
          </div>
          <div className={classes.Drawer}>
            <Drawer
              anchor="top"
              open={side}
              onClick={() => {
                setSide(false);
              }}
            >
              <div className={classes.sideBar}>
                <FullNav key={"nav-bar-button"} list={link} />
              </div>
            </Drawer>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
interface props {
  list: Array<Object>;
}

const FullNav = ({ list }: props) => {
  const history=useHistory()
  const location=useLocation()
 
  return (
    <React.Fragment>
      {list.map((e: any, i: number) => (
        <Button
        className="appear-animated"
     
          onClick={(ev) => {
            history.push(e.path || '/404')
            
            
          }}
          color={location.pathname===e.path?'secondary':'primary'}
          variant="contained"
          key={"button-link" + i}
        >
          {e?.name}
        </Button>
      ))}
    </React.Fragment>
  );
};
